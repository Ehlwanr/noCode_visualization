import {
  ChartLine,
  SwitchButton,
  ImageFiles,
  Notes,
  Quote,
  Table,
  TitleLevel,
  ListView
} from '@icon-park/vue-next'
import type { Icon } from '@icon-park/vue-next/lib/runtime'
import { nanoid } from 'nanoid'

import type { BlockInfo, BlockType } from '@/types/block'

export const blocksBaseMetaList: { type: BlockType; label: string; icon: Icon }[] = [
  {
    type: 'quote',
    label: '引述',
    icon: Quote
  },
  {
    type: 'notes',
    label: '笔记',
    icon: Notes
  },
  {
    type: 'heroTitle',
    label: '超级标题',
    icon: TitleLevel
  },
  { type: 'image',
    label: '图片',
    icon: ImageFiles
  },
  {
    type: 'view',
    label: '视图',
    icon: ListView
  },
  {
    type: 'chart',
    label: '图表',
    icon: ChartLine
  },
  {
    type: 'button',
    label: '按钮',
    icon: SwitchButton
  },
  {
    type: 'form',
    label: '表单',
    icon: Table
  }
]

export const blocksBaseMeta = Object.fromEntries(
  blocksBaseMetaList.map((item) => [item.type, item])
)

export const getBlocksDefaultData = (type: BlockType): BlockInfo => {
  const id = nanoid()
  switch (type) {
    case 'quote':
      return {
        id,
        type: 'quote',
        label: '引述',
        props: {
          content: '引述文本 - 例子🌰 QUOTE',
          status: 'success'
        }
      }
    case 'notes':
      return {
        id,
        type: 'notes',
        label: '笔记',
        props: {
          content: `
          <p><em>笔记默认</em>  <s>🎉</s></p>
          <p><strong>鲁迅</strong> 大约人们一遇到不大看惯的东西，总不免以为他古怪。我还记得初看见西洋人的时候，就觉得他脸太白，头发太黄，眼珠太淡，鼻梁太高。虽然不能明明白白地说出理由来，但总而言之：相貌不应该如此。至于对于中国人的脸，是毫无异议；即使有好丑之别，然而都不错的。我们的古人，倒似乎并不放松自己中国人的相貌。</p>
        `
        }
      }
    case 'heroTitle':
      return {
        id,
        type: 'heroTitle',
        label: '标题',
        props: {
          content: '大标题 - Super Title'
        }
      }
    case 'image':
      return {
        id,
        type: 'image',
        label: '图片',
        props: {
          url: 'https://Ehlwanr.github.io/picx-images-hosting/noCode_visualization_images/paperwall_9.1e8j7ertin.webp'
        }
      }
    case 'view':
      return {
        id,
        type: 'view',
        label: '视图',
        props: {
            content: ''
        },
      }
    case 'chart':
      return {
        id,
        type: 'chart',
        label: '图表',
        props: {
          chartType: 'echarts',
          theme: 'dark',
        }
      }
    case 'button':
      return {
        id,
        type: 'button',
        label: '按钮',
        props: {
          content: '按钮文案',
          flexJC: 'flex-start',
        }
      }
    case 'form':
      return {
        id,
        type: 'form',
        label: '表单',
        props: {
          fields: []
        }
      }
  }
}
