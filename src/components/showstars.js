import React from 'react'

const ratingetoilees = ({count}) => {
    let star = []
    for(let i = 0; i < 5; i++) {
        if(i < count) {
            star.push(<span className="rating-filter-text">★</span>)
        }
        else {
            star.push(<span className='rating-vide'>☆</span>)
        }
    }
    return (
        <div>{star}</div>
    )
}
export default ratingetoilees