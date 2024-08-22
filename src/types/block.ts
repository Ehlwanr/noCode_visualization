export type BasicBlockType = 'heroTitle' | 'view' | 'chart' | 'quote' | 'image'
export type ExternalBlockType = 'button' | 'form' | 'notes'

export type BlockType = BasicBlockType | ExternalBlockType

export interface BaseBlockInfo {
  id: string
  label: string
}

// basic

export interface HeroTitleBlockInfo extends BaseBlockInfo {
  type: 'heroTitle'
  props: {
    content: string
  }
}

export interface ViewBlockInfo extends BaseBlockInfo {
  type: 'view',
  props: {
    content: string
  }
}

export type QuoteBlockStatus = 'success' | 'warning' | 'error'

export interface QuoteBlockInfo extends BaseBlockInfo {
  type: 'quote',
  props: {
    content: string
    status: QuoteBlockStatus
  }
}

export interface ImageBlockInfo extends BaseBlockInfo {
  type: 'image',
  props: {
    url: string
  }
}

// external
export type flexJustifyType = 'center' | 'flex-start' | 'flex-end'
export interface ButtonBlockInfo extends BaseBlockInfo {
  type: 'button',
  props: {
    content: string,
    flexJC: flexJustifyType,
  }
}

export interface FormBlockInfo extends BaseBlockInfo {
  type: 'form',
  props: {
    fields: {
      type: string
      label: string
      placeholder?: string
      required?: boolean
    }[]
  }
}

export interface NotesBlockInfo extends BaseBlockInfo {
  type: 'notes',
  props: {
    content: string
  }
}


export type ChartType = 'echarts' | 'zrender' | 'svg'
export type themeType = 'light' | 'dark'

export interface ChartBlockInfo extends BaseBlockInfo {
  type: 'chart',
  props: {
    chartType: ChartType
    theme: themeType
  }
}

export type BlockInfo =
  // basic
  | HeroTitleBlockInfo
  | ViewBlockInfo
  | QuoteBlockInfo
  | ImageBlockInfo
  | ChartBlockInfo
  // external
  | ButtonBlockInfo
  | FormBlockInfo
  | NotesBlockInfo
