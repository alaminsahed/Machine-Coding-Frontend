import React from 'react';

const Paginate = ({ productsPerPage, paginate, totalProducts }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul style={{ display: "flex" }}>
                {
                    pageNumbers.map((numbers, index) => (
                        <span key={index} style={{ padding: "5px" }} >
                            <a href='!#' onClick={() => paginate(numbers)}>{numbers}</a>
                        </span>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Paginate;