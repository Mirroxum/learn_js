import React from "react";
import { getPagesArray } from "../../utils/pages";


const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages, page)
    
    return (
    <div className="page__wrapper">
      <span
        onClick={() => changePage(1)}
        className="page"
        >В начало</span>
      {pagesArray.map(p => 
      <span 
          onClick={() => {changePage(p)}}
          key={p}
          className={page === p ? "page__current" : "page"}
      >
        {p}
      </span>)}
      <span
        onClick={() => changePage(totalPages)}
        className="page"
        >В конец</span>
    </div>
    );
};

export default Pagination