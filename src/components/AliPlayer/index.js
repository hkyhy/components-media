import style from './style.module.scss';
import { getOrLoadRemote } from '@kne/remote-loader';
import { createWithFetch } from '@kne/react-fetch';
import { useId, useEffect, useRef } from 'react';
import classnames from 'classnames';
import useRefCallback from '@kne/use-ref-callback';
import once from 'lodash/once';

const AliPlayer = createWithFetch({
  loading: null,
  loader: async () => {
    await Promise.all([
      new Promise((resolve, reject) => {
        if (!document.head.querySelector(`link[href*="aliplayer-min.css"]`)) {
          const dom = document.createElement('link');
          dom.setAttribute('href', 'https://g.alicdn.com/de/prismplayer/2.15.2/skins/default/aliplayer-min.css');
          dom.setAttribute('rel', 'stylesheet');
          document.head.append(dom);
          dom.addEventListener('load', () => {
            resolve();
          });
          dom.addEventListener('error', reject);
        } else {
          resolve();
        }
      }),
      getOrLoadRemote('Aliplayer', '', 'https://g.alicdn.com/apsara-media-box/imp-web-player/2.16.3/aliplayer-min.js')
    ]);
    return { Aliplayer: window.Aliplayer };
  }
})(({ className, data, getApi, playerOptions: options }) => {
  const containerId = useId().replace(/:/g, '_');
  const Aliplayer = useRef(data.Aliplayer);
  const playerOptions = useRef(options);
  const aliplayerRef = useRef();
  const { source } = options;
  playerOptions.current = options;
  const apiCallback = useRefCallback(getApi);
  useEffect(() => {
    aliplayerRef.current = new Aliplayer.current(
      Object.assign(
        {
          autoplay: false
        },
        playerOptions.current,
        { id: containerId, source }
      ),
      function (player) {
        apiCallback(player);
        if (playerOptions.current?.seekTime) {
          const handler = once(() => {
            player.seek(playerOptions.current.seekTime);
            setTimeout(() => {
              if (player.getCurrentTime() > 0) {
                document.documentElement.removeEventListener('mousemove', handler, true);
              } else {
                document.documentElement.addEventListener('mousemove', handler, true);
              }
            }, 1000);
          });
          document.documentElement.addEventListener('mousemove', handler, true);
        }
      }
    );

    return () => {
      aliplayerRef.current && aliplayerRef.current.tag && aliplayerRef.current.dispose();
    };
  }, [containerId, source, apiCallback]);
  return (
    <div className={classnames(className, style['ali-player'])}>
      <div id={containerId} />
    </div>
  );
});

export default AliPlayer;
