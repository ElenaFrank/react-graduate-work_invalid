import React from "react"
import _ from "lodash"
import PropType from "prop-types"

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemsCount / pageSize)
    if (1 === pageCount) return null
    const pages = _.range(1, pageCount + 1)
    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={"page-item " + (currentPage === page ? "active" : "")}
                        key={"page_" + page}
                    >
                        <a className="page-link" onClick={() => onPageChange(page)}>
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
Pagination.propTypes = {
    itemsCount: PropType.number.isRequired,
    pageSize: PropType.number.isRequired,
    onPageChange: PropType.func.isRequired,
    currentPage: PropType.number.isRequired,
}

export default Pagination
