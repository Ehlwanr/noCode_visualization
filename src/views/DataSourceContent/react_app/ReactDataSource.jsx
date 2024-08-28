import '@glideapps/glide-data-grid/dist/index.css'

import { DataEditor, GridCellKind, GridColumnIcon } from '@glideapps/glide-data-grid'
import { useEffect, useRef, useState } from 'react'

const tempDataList = new Array(100_0000).fill(0)

const tempDataPool = [
  {
    id: '001',
    name: '小葱',
    age: '22',
    isOpen: true,
    hobby: ['Basketball🏀', 'Swimming🏊'],
    avatar: ['https://Ehlwanr.github.io/picx-images-hosting/noCode_visualization_images/icon-avatar-1.wihspceu6.webp'],
    notes: 'This is very cool 😀'
  },
  {
    id: '002',
    name: '大蒜',
    age: '18',
    isOpen: true,
    hobby: ['Food🍜', 'Swimming🏊'],
    avatar: ['https://Ehlwanr.github.io/picx-images-hosting/noCode_visualization_images/icon-avatar-2.8vmunrriu5.webp'],
    notes: '我是笔记我是笔记我是笔记我是笔记我是笔记我是笔记我是笔记我是笔记'
  },
  {
    id: '003',
    name: '香菜',
    age: '16',
    isOpen: false,
    hobby: ['Vegetable🥬'],
    avatar: ['https://Ehlwanr.github.io/picx-images-hosting/noCode_visualization_images/icon-avatar-3.1aoxjkkpp8.webp'],
    notes: '心有猛虎，细嗅蔷薇'
  },
  {
    id: '004',
    name: '小七',
    age: '22',
    isOpen: true,
    hobby: ['Badminton🏸'],
    avatar: ['https://Ehlwanr.github.io/picx-images-hosting/noCode_visualization_images/icon-avatar-4.6m3u4a6sd8.webp'],
    notes: ' True '
  }
]

const data = tempDataList.map((item, index) => {
  const randomIndex = Math.floor(Math.random() * 4)
  const randomItem = tempDataPool[randomIndex]
  return {
    ...randomItem,
    id: `00${index}`,
    avatar: randomItem.avatar
  }
})

const columns = [
  { title: 'ID', width: 100, icon: GridColumnIcon.HeaderString },
  { title: '姓名', width: 100, icon: GridColumnIcon.Text },
  { title: '年龄', width: 100 },
  { title: '状态', width: 50 },
  { title: '爱好', width: 250 },
  { title: '头像', width: 50 },
  { title: '笔记', width: 500 },
]

function getData([col, row]) {
  const person = data[row]

  switch (col) {
    case 0: {
      return {
        kind: GridCellKind.RowID,
        data: person.id,
        allowOverlay: false,
        displayData: person.id
      }
    }

    case 1: {
      return {
        kind: GridCellKind.Text,
        data: person.name,
        allowOverlay: true,
        displayData: person.name,
      }
    }

    case 2: {
      return {
        kind: GridCellKind.Number,
        data: person.age,
        allowOverlay: true,
        displayData: person.age
      }
    }

    case 3: {
      return {
        kind: GridCellKind.Boolean,
        data: person.isOpen,
        allowOverlay: true,
        displayData: person.isOpen
      }
    }

    case 4: {
      return {
        kind: GridCellKind.Bubble,
        data: person.hobby,
        allowOverlay: true,
        displayData: person.hobby
      }
    }

    case 5: {
      return {
        kind: GridCellKind.Image,
        data: person.avatar,
        allowOverlay: true,
        displayData: person.avatar
      }
    }

    case 6: {
      return {
        kind: GridCellKind.Text,
        data: person.notes,
        allowOverlay: true,
        displayData: person.notes
      }
    }
    default: {
      return {}
    }
  }
}

export default function ReactDataSource() {
  const ref = useRef(null)
  const [editorRect, setEditorRect] = useState({ width: 400, height: 300 })
  const { width, height } = editorRect

  useEffect(() => {
    const calcRect = () => {
      const outerContainerDom = ref.current.parentElement.parentElement
      if (outerContainerDom) {
        const { width, height } = outerContainerDom.getBoundingClientRect()
        setEditorRect({ width: width - 12, height: height - 12 })
      }
    }

    calcRect()

    window.addEventListener('resize', calcRect, false)

    return () => {
      window.removeEventListener('resize', calcRect, false)
    }
  }, [])
  const onCellEdited = ((cell, newValue) => {
    if (newValue.kind !== GridCellKind.Text && newValue.kind !== GridCellKind.Boolean) {
      return;
    }

    const indexes = ["id", "name", "age", "isOpen", "hobby", "avatar", "notes"];
    const [col, row] = cell;
    const key = indexes[col];
    data[row][key] = newValue.data;
  });

  return (
    <div ref={ref}>
      <DataEditor
        width={width}
        height={height}
        columns={columns}
        getCellContent={getData}
        rows={data.length}
        onCellEdited={onCellEdited}
        rowMarkers={'both'}
      />
      <div id="portal" style={{ position: 'fixed', left: 0, top: 0, zIndex: 9999 }} />
    </div>
  )
}
