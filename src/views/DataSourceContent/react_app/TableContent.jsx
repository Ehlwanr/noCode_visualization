import '@glideapps/glide-data-grid/dist/index.css'

import { DataEditor, GridCellKind, GridColumnIcon } from '@glideapps/glide-data-grid'
import { useEffect, useRef, useState } from 'react'

let data = [
  {
    id: '001',
    name: '小葱',
    age: '20',
  }
]



// Grid columns may also provide icon, overlayIcon, menu, style, and theme overrides
const columns = [
  { title: 'ID', width: 100, icon: GridColumnIcon.HeaderNumber },
  { title: '埋点', width: 200, icon: GridColumnIcon.HeaderString },
  { title: '事件', width: 200, icon: GridColumnIcon.HeaderNumber },
  { title: '年龄', width: 200, icon: GridColumnIcon.HeaderNumber },
  { title: '年龄', width: 200, icon: GridColumnIcon.HeaderNumber },
  { title: '年龄', width: 200, icon: GridColumnIcon.HeaderNumber },

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
        data: person.name,
        allowOverlay: true,
        displayData: person.name,
        hasMenu: true
      }
    }

    case 2: {
      return {
        kind: GridCellKind.Text,
        data: person.age,
        allowOverlay: true,
        displayData: person.age,
      }
    }

    case 3: {
      return {
        kind: GridCellKind.Text,
        data: person.age,
        allowOverlay: true,
        displayData: person.age,
      }
    }

    case 4: {
      return {
        kind: GridCellKind.Text,
        data: person.age,
        allowOverlay: true,
        displayData: person.age,
      }
    }

    case 5: {
      return {
        kind: GridCellKind.Text,
        data: person.age,
        allowOverlay: true,
        displayData: person.age,
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
        // onCellEdited={(p,q)=>{console.log(p,q)}}
        onCellEdited={(arr, obj) => {
          switch(arr[0]){
            // case 1: data[arr[1]].name= obj.data
            case 2: data[arr[1]].age= obj.data
          }
          console.log(arr,obj)
        }}
      />
      <div id="portal" style={{ position: 'fixed', left: 0, top: 0, zIndex: 9999 }} />
    </div>
  )
}
