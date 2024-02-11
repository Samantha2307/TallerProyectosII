import React from 'react';

const PaginationMenu = ({ totalPages, currentPage, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Solo mostrar la primera página si no es la página actual y la página actual no es 2 o 3
    if (currentPage !== 1 && currentPage !== 2 && currentPage !== 3) {
      pageNumbers.push(
        <span key={1} className={`pagination-button ${1 === currentPage ? 'active' : ''} single-digit`} onClick={() => onPageChange(1)}>
          1
        </span>
      );
    }

    // Mostrar puntos suspensivos si hay más de 5 páginas y no estamos en las primeras páginas
    if (currentPage > 3) {
      pageNumbers.push(<span1 key="ellipsis-start">...</span1>);
    }

    // Calcular el rango de páginas a mostrar
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);

    // Ajustar el rango si está cerca del final
    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }

    // Renderizar las páginas en el rango
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span key={i} className={`pagination-button ${i === currentPage ? 'active' : ''} ${i <= 9 ? 'single-digit' : 'double-digit'}`} onClick={() => onPageChange(i)}>
          {i}
        </span>
      );
    }

    // Mostrar puntos suspensivos si hay más de 5 páginas y no estamos en las últimas páginas
    if (endPage < totalPages) {
      pageNumbers.push(<span1 key="ellipsis-end">...</span1>);
    }

    // Solo mostrar la última página si no es la página actual y la página actual no es la penúltima ni la última
    if (currentPage !== totalPages && currentPage !== totalPages - 1 && currentPage !== totalPages - 2) {
      pageNumbers.push(
        <span key={totalPages} className={`pagination-button ${totalPages === currentPage ? 'active' : ''} double-digit`} onClick={() => onPageChange(totalPages)}>
          {totalPages}
        </span>
      );
    }

    return pageNumbers;
  };

  return <div className="pagination-menu">{renderPageNumbers()}</div>;
};

export default PaginationMenu;
