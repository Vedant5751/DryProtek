import React from 'react'

export default function Modal() {
  return (
    <>
    <div className=" border border-blue-500">
        <h1>Modal</h1>
        <div className="grid grid-row-3 gap-2">
            <ul>
                <li><button className="p-10 border border-red-900">Ask a Question</button> </li>
                <li><button className="p-10 border border-red-900">Ask a Question</button> </li>
                <li><button className="p-10 border border-red-900">Ask a Question</button> </li>
            </ul>
        </div>
    </div>
    </>
  )
}
