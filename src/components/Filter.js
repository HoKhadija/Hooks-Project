import React from 'react';

function Filter({ titleFilter, onTitleFilterChange, ratingFilter, onRatingFilterChange }) {
    return (
        <div className="filter">
            {/* Filtering by Title */}
            <input
                className='inputfilter'
                type="text"
                placeholder="Search by title"
                value={titleFilter}
                onChange={(e) => onTitleFilterChange(e.target.value)}
            />

            {/*Filtering by Rate*/}
            <select value={ratingFilter} onChange={(e) => onRatingFilterChange(Number(e.target.value))}
                style={{
                    border: 'solid',
                    borderRadius: '22px',
                    padding: '8px',
                    paddingRight: '190px',
                    fontSize: '16px',
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '20px auto',
                    color: 'black'
                }}>
                <option value="">Filter by rating</option>
                <option value={5}>5 stars</option>
                <option value={4.5}>4.5 stars</option>
                <option value={4}>4 stars</option>
                <option value={3.5}>3.5 stars</option>
                <option value={3}>3 stars</option>
                <option value={2.5}>2.5 stars</option>
                <option value={2}>2 stars</option>
                <option value={1.5}>1.5 stars</option>
                <option value={1}>1 star</option>
            </select>
        </div>
    );
}

export default Filter;



