import React from 'react'

const searchstars = ({index,count,star}) => {

    {
        if(index < count) {
            star=(<span className="rating-filter-text">★</span>)
        }
       
    }
    return (
        <div>{star}</div>
    )
}
export default searchstars