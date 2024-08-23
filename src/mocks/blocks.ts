import type { BlockInfo } from '@/types/block'

export const blocks: BlockInfo[] = [
  {
    id: '1',
    type: 'heroTitle',
    label: '标题',
    props: {
      content: 'Beautiful Scenery'
    }
  },
  {
    id: '2',
    type: 'quote',
    label: '引述',
    props: {
      content: '山头云似雪,陌上树如人。',
      status: 'success'
    }
  },
  {
    id: '3',
    type: 'image',
    label: '图片',
    props: {
      url: 'https://Ehlwanr.github.io/picx-images-hosting/noCode_visualization_images/paperwall_1.6t71pu6ywt.webp'
    }
  },
  {
    id: '4',
    type: 'heroTitle',
    label: '标题',
    props: {
      content: 'Material'
    }
  },
  {
    id: '5',
    type: 'quote',
    label: '引述',
    props: {
      content: '这是真的，我的话已经说完，去年说的，今年还适用，恐怕明年也还适用。但我诚恳地希望他不至于适用到十年二十年之后。',
      status: 'error'
    }
  },
  {
    id: '6',
    type: 'chart',
    label: '图表',
    props: {
      chartType: 'echarts',
      theme: 'light',
    }
  },
  {
    id: '7',
    type: 'notes',
    label: '笔记',
    props: {
      content: `
          <p><strong>鲁迅</strong> : 所以我时常害怕，原中国青年都摆脱冷气，只是向上走，不必听自暴自弃者流的话。能做事的做事，能发声的发声。有一分热，发一分光，就令萤火一般，也可以在黑暗里发一点光，不必等候炬火。<em><strong>此后如竟没有炬火：我便是唯一的光。</strong></em>倘若有了炬火，出了太阳，我们自然心悦诚服的消失，不但毫无不平，而且还要随喜赞美这炬火或太阳；因为他照了人类，连我都在内。我又愿中国青年都只是向上走，不必理会这冷笑和暗箭。</p>
          <p> ColorHighlighter_plugin: #FFF, #0D0D0D, #616161, #A975FF, #FB5151, #FD9170, #FFCB6B, #68CEF8, #80cbc4, #9DEF8F </p>
        `
    }
  },
  {
    id: '8',
    type: 'form',
    label: '表单',
    props: {
      fields: []
    }
  },
  {
    id: '9',
    type: 'button',
    label: '按钮',
    props: {
      content: '尝试一下~',
      flexJC: 'center',
    }
  },
]
