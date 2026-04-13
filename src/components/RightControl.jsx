// 



import React from 'react'

function RightControl({handleSelection, handleBack}) {
    return (
        <div className="w-[100px] h-[250px] border-4 border-solid  relative bg-cyan-400 rounded-r-3xl">

            <div className="absolute -top-2 left-4 -translate-x-1/2 text-4xl font-extrabold">+</div>

            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-14 h-14 relative">
                <div className="bg-cyan-600 absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 border-2 rounded-full flex items-center justify-center text-xs">X</div>
                <div onClick={handleBack} className="bg-cyan-600 absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 border-2 rounded-full flex items-center justify-center text-xs">B</div>
                <div className="bg-cyan-600 absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 border-2 rounded-full flex items-center justify-center text-xs">Y</div>
                <div onClick={handleSelection} className="bg-cyan-600 absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 border-2 rounded-full flex items-center justify-center text-xs">A</div>
            </div>

            <div className="bg-zinc-900 absolute bottom-8 left-1/2 -translate-x-1/2 w-15 h-15 border-4 rounded-full"></div>

        </div>
    )
}

export default RightControl