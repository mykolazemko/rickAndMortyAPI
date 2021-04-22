import React, { useState, useEffect } from 'react';
import './pagination.scss'

const Pagination = ({ page, pageCount, ...props }) => {

    const paginationList = () => {
        let list = [];
        for (let i = 1; i <= pageCount; i++) {
            list.push(i)
        }
        return (
            list.map(num => {
                return <span onClick={() => handleClick(num) } className="pagination__num">
                    {num==page
                    ? <b>{`${num}`}&ensp;</b>
                    : <span>{`${num}`}&ensp;</span>
                    }
                </span>
            })
        )
    }

    const handleClick = (p) => {
        props.handlePage(p)
    }
    return (
        <div className="pagination">
            <button onClick={() => handleClick(page - 1)}>Prev</button>
            <span>{paginationList()}</span>
            <button onClick={() => handleClick(page + 1)}>Next</button>
        </div>
    )
}

export default Pagination