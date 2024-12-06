
# AliPlayer


### 概述

阿里云视频点播SDK


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _AliPlayer(@components/AliPlayer),antd(antd),_config(@components/AliPlayer/mock)

```jsx
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

```


### API

| 属性名                  | 说明      | 类型     | 默认值 |
|----------------------|---------|--------|-----|
| playerOptions        | 播放器详细参数 | object |     |
| playerOptions.source | 播放地址    | string |     |

其他参数请参考 [阿里云web播放器文档](https://help.aliyun.com/zh/vod/support/faq-about-apsaravideo-player-for-web-2?spm=a2c4g.11186623.0.0.40827c32IM33AJ)

