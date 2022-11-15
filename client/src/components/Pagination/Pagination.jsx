import React from "react";
import './Pagination.css';

const Pagination = ({pokemonsPerPage, pokemons, pagination, currentPage}) => {
    
    const numOfPages = [];
    const amountOfPages = Math.ceil(pokemons/pokemonsPerPage);
    for (let i = 1; i <= amountOfPages; i++) {
        numOfPages.push(i);
    }

    return (
        <div className="pagination-cont">
            <div className="page-cont"><h3>Page:</h3></div>
            <div className="buttons-container">
                <div className="prev-cont"><button className="prev-button">Previous</button></div>
                {
                    numOfPages?.map((page) => {
                        return <button className="page-num" key={page}>
                        { currentPage === page ? <a id="first-pag" onClick={() => pagination(page)}>{page}</a> : <a id="second-pag" onClick={() => pagination(page)}>{page}</a>}
                        </button>
                    })
                    
                }
                <div className="next-cont"><button className="next-button">Next</button></div>
            </div>
        </div>
    )
}

export default Pagination;