// 

import React from 'react'

function LeftControl({ handleDirection }) {

    return (
        <div className="w-[100px] h-[250px] border-4 border-solid  relative bg-yellow-300 rounded-l-3xl">

            <div className="absolute -top-3 right-1 -translate-x-1/2 text-4xl font-extrabold">-</div>

            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-15 h-15 border-4 rounded-full"></div>

            <div className="absolute top-33 left-1/2 -translate-x-1/2 w-14 h-14 relative">
                <div onClick={() => handleDirection('up')} className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 border-2 rounded-full flex items-center justify-center text-xs"></div>
                <div onClick={() => handleDirection('down')} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 border-2 rounded-full flex items-center justify-center text-xs"></div>
                <div onClick={() => handleDirection('left')} className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 border-2 rounded-full flex items-center justify-center text-xs">{""}</div>
                <div onClick={() => handleDirection('right')} className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 border-2 rounded-full flex items-center justify-center text-xs">{""}</div>
            </div>

        </div>
    )
}

export default LeftControl