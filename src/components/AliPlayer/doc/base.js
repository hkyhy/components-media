const { default: AliPlayer } = _AliPlayer;
const { useRef } = React;
const { Button, Space } = antd;
const { exSrtSrc, exVideoSrc } = _config;

const BaseExample = () => {
  const ref = useRef();
  return (
    <Space direction="vertical" size={32}>
      <Button
        onClick={() => {
          console.log(ref.current);
        }}
      >
        获取api
      </Button>

      <AliPlayer
        ref={ref}
        playerOptions={{
          height: '600px',
          width: '1000px',
          source: exVideoSrc,
          textTracks: [
            {
              kind: 'subtitles',
              label: 'English',
              src: exSrtSrc,
              srclang: 'en'
            }
          ]
        }}
      />
    </Space>
  );
};

render(<BaseExample />);
