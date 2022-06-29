import React from 'react'

export default function Hill({src, top, right, left, bottom, width}) {
    return (
        <div className='object-contain w-fit absolute select-none' style={{ top: top, right: right, left: left, bottom: bottom, width: width }}>
            <img src={src}></img>
        </div>
    )
}