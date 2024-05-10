import React from 'react'

export default function Wrapper() {
return (
    <div className="p-2 border border-red-500 ">
        <div className="mx-24 border border-red-500 grid grid-cols-5">
            <div className="col-span-3 bg-blue-200">Element 1</div>
            <div className="col-span-1 bg-green-200">Element 2</div>
            <div className="col-span-1 bg-yellow-200">Element 3</div>
        </div>
    </div>
);
}
