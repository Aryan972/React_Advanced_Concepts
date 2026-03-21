
export default function Pagination({ totalPages, currentPage, setCurrentPage}) {

     

    const handlePageChange = (n) => {
    setCurrentPage(prev =>  n);
    }

    const goToPrevPage = () => {
        setCurrentPage(prev => prev - 1);
    }

    const goToNextPage = () => {
        setCurrentPage(prev => prev + 1);
    }

    return (
        <>
            <button disabled={currentPage === 0} onClick={() => goToPrevPage()}>⬅️</button>
            {[...Array(totalPages).keys()].map((n) =>(
            <button 
                className={"page-number " + (n === currentPage ? "active" : "")}
                key={n} 
                onClick={() => handlePageChange(n)}>{n}</button>
            ))}
            <button disabled={currentPage === totalPages-1} onClick={() => goToNextPage()}>➡️</button>
        </>
    )
}