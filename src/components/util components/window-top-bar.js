import React from 'react'

export default function WindowTopBar(props) {
    return (
        <div className="relative bg-ub-window-title border-white border-t-2 border-opacity-5 py-1.5 px-3 text-white w-full select-none rounded-lg rounded-b-none">
            <div className="flex justify-center text-sm font-bold">{props.title}</div>
        </div>
    )
}
