import { useState, useEffect } from "react";

export const usePagination = ({itemsPerPage, data, startFrom}) => {
  const perPage = itemsPerPage ? itemsPerPage : 10;
  const pages = Math.ceil(data.length / perPage);
  const pagination = [];
  const [currentPage, setCurrentPage] = useState(startFrom <= pages ? startFrom : 1);
  const [slicedData, setSlicedData] = useState([]);

  let ellipsisLeft = false;
  let ellipsisRight = false;

  useEffect(()=>{
    setSlicedData([...data].slice((currentPage - 1) * perPage, (currentPage * perPage)));
  },[data])

  for (let i =0; i <= pages; i++) {
    if (i === currentPage) {
      pagination.push({
        id: 1, current: true, ellipsis: false
      });
    } else {
      if (i < 2 || i > pages - 1 || i === currentPage - 1 || i === currentPage + 1) {
        pagination.push(
          {id: i, current: false, ellipsis: false}
        );
      } else if ( i>1&& i<currentPage&&!ellipsisLeft) {
        pagination.push({id: i, current:false, ellipsis: true});
        ellipsisLeft=true;
      } else if ( i< pages&&i>currentPage&&!ellipsisRight) {
        pagination.push({id:i, current:false,ellipsis:true});
        ellipsisRight=true;
      }
    }
  }

  const changePage = (page, e) => {
    e.preventDefault();
    if (page !== currentPage) {
      setCurrentPage(page);
      setSlicedData([...data].slice((page - 1) * perPage, page * perPage));
    }
  }

  const goToPrevPage = (e) => {
    e.preventDefault();
    setCurrentPage(prevVal => prevVal - 1 === 0 ? prevVal : prevVal - 1);

    if (currentPage !== 1) {
      setSlicedData([...data].slice((currentPage - 2) * perPage, (currentPage - 1) * perPage));
    }
  }

  const goToNextPage = (e) => {
    e.preventDefault();
    setCurrentPage(prevVal => prevVal + 1 === pages ? prevVal : prevVal + 1);

    if (currentPage !== pages) {
      setSlicedData([...data].slice(currentPage * perPage, (currentPage + 1) * perPage ));
    }
  }

  return {
    slicedData,
    pagination,
    prevPage: goToPrevPage,
    nextPage: goToNextPage,
    changePage
  }
}