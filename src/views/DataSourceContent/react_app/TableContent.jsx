import '@glideapps/glide-data-grid/dist/index.css'

import { DataEditor, GridCellKind, GridColumnIcon } from '@glideapps/glide-data-grid'
import { useEffect, useRef, useState } from 'react'

const tempDataList = new Array(100).fill(0)

let tempDataPool = [
  {
    id: '1',
    event: 'click',
    name: 'index_1',
    title: 'title_car',
    module: 'module_car_item',
    key1: 'key1',
  }
]
let data = tempDataList.map((item, index) => {
  const randomItem = tempDataPool[0]
  return {
    ...randomItem,
    id: `00${index+ 1}`,
  }
})

const columns = [
  { title: '埋点ID', width: 100, icon: GridColumnIcon.HeaderNumber },
  { title: 'event_name', width: 200, icon: GridColumnIcon.HeaderString },
  { title: 'page_name', width: 200 },
  { title: 'page_title', width: 200 },
  { title: 'module_name', width: 200 },
  { title: 'key1', width: 200 },

]

// If fetching data is slow you can use the DataEditor ref to send updates for cells
// once data is loaded.
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
        data: person.event,
        allowOverlay: true,
        displayData: person.event,
        hasMenu: true
      }
    }

    case 2: {
      return {
        kind: GridCellKind.Text,
        data: person.name,
        allowOverlay: true,
        displayData: person.name,
      }
    }

    case 3: {
      return {
        kind: GridCellKind.Text,
        data: person.title,
        allowOverlay: true,
        displayData: person.title,
      }
    }

    case 4: {
      return {
        kind: GridCellKind.Text,
        data: person.module,
        allowOverlay: true,
        displayData: person.module,
      }
    }

    case 5: {
      return {
        kind: GridCellKind.Text,
        data: person.key1,
        allowOverlay: true,
        displayData: person.key1,
      }
    }

    default: {
      return {}
    }
  }
}

export default function ReactDataSource() {
  const ref = useRef(null)
  const [editorRect, setEditorRect] = useState({ width: 500, height: 300 })
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

  return (
    <div ref={ref}>
      <DataEditor
        width={width}
        height={height}
        columns={columns}
        getCellContent={getData}
        rows={data.length}
        rowMarkers={'both'}
        onCellEdited={(arr, obj) => {
          switch (arr[0]) {
            case 1: return data[arr[1]].event= obj.data
            case 2: return data[arr[1]].name = obj.data
            case 3: return data[arr[1]].title = obj.data
            case 4: return data[arr[1]].module = obj.data
            case 5: return data[arr[1]].key1 = obj.data
          }
        }}
      />
      <div id="portal" style={{ position: 'fixed', left: 0, top: 0, zIndex: 9999 }} />
    </div>
  )
}
