'use client'
// import Link from 'next/link'
import React, { useEffect } from 'react'
// interface MyListItem {
//   tilte: string; id: string, desc: string
// }
// const lits = [
//   { tilte: "这是1", id: "1", desc: "1" },
//   { tilte: "这是2", id: "2", desc: "2" },
//   { tilte: "这是3", id: "3", desc: "3" },
// ] as MyListItem[]
export default function page() {
  useEffect(() => {
    console.log('888');
    const div = document.getElementById('test1')

    console.log('div', div);
  }, [])
  return (
    <div id='test1'>
      <ul>
        {/* {
          lits.map((item, key) => {
            return (
              <li key={key}>
                <Link href={'/list/' + item.id} >{item.tilte} </Link>
              </li>
            )
          })
        } */}
      </ul>
    </div>
  )
}

