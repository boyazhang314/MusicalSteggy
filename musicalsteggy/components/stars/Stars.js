import React from 'react'

export default function Stars({pattern}) {
    const blueStar = (top, right, width, rotate) => {
        return (
            <img className={`absolute rotate-${rotate} z-100`} 
                style={{ top: top, right: right, width: width }} 
                src='/images/stars/BlueStar.svg'></img>
        )
    }

    const yellowStar = (top, right, width, rotate) => {
        return (
            <img className={`absolute rotate-${rotate}  z-100`} 
                style={{ top: top, right: right, width: width }} 
                src='/images/stars/YellowStar.svg'></img>
        )
    }

    const starryNightOne = (
        <div>
            {blueStar('30%', '80%', '3%', 45)}
            {blueStar('60%', '60%', '2%', 0)}
            {blueStar('10%', '95%', '1%', 90)}
            {yellowStar('5%', '33%', '1%', 90)}
            {yellowStar('10%', '20%', '3%', 45)}
            {yellowStar('30%', '66%', '2%', 0)}
        </div>
    )

    const starryNightTwo = (
        <div>
            {blueStar('20%', '25%', '3%', 45)}
            {blueStar('20%', '66%', '2%', 0)}
            {blueStar('30%', '90%', '1%', 90)}
            {yellowStar('8%', '85%', '1%', 90)}
            {yellowStar('10%', '40%', '3%', 45)}
            {yellowStar('20%', '50%', '2%', 0)}
        </div>
    )

    const starryNightThree = (
        <div>
            {blueStar('10%', '10%', '3%', 45)}
            {blueStar('25%', '90%', '2%', 0)}
            {blueStar('15%', '55%', '1%', 90)}
            {yellowStar('7%', '85%', '1%', 90)}
            {yellowStar('35%', '70%', '3%', 45)}
            {yellowStar('20%', '30%', '2%', 0)}
        </div>
    )

    return (
        <>
            {pattern === 1 ? starryNightOne : null}
            {pattern === 2 ? starryNightTwo : null}
            {pattern === 3 ? starryNightThree : null}
        </>
    )
}