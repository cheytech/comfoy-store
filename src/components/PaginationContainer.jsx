import { useLocation,useLoaderData,useNavigate } from "react-router-dom"
const PaginationContainer = () => {
  const{meta} = useLoaderData();
  const{pageCount,page} = meta.pagination;
  console.log(pageCount);
  const pages = Array.from({length:pageCount},(_,index)=>{
    return index + 1;
  })
  const{search,pathname} = useLocation();
  const navigate = useNavigate();
  const handlePageChange = (pageNumber)=>{
    console.log(pageNumber);
    console.log(search);
    console.log(pathname);
    const params = new URLSearchParams(search);
    params.set('page',pageNumber);
    console.log(params);
    navigate(`${pathname}?${params.toString()}`);
  }
  if(pageCount < 2){
    return null;
  }
  return (
    <>
       <div className="mt-16 flex justify-end">
<div className="join">
  <button className="btn btn-xs sm:btn:md join-item" onClick={()=>{
    let previousPage = page - 1;
    if(previousPage < pageCount) previousPage = 1;
    handlePageChange(previousPage)
  }}>
prev
  </button>
{pages.map((pageNumber)=>{
  return <button key={pageNumber} onClick={()=>handlePageChange(pageNumber)} className={`btn btn-xs sm:btn-md border-none join-item ${pageNumber === page?'bg-base-300 border-base-300':''}`}>{pageNumber}</button>
})}
  <button className="btn btn-xs sm:btn:md join-item" onClick={()=>{
    let nextPage = page+1;
    if(nextPage > pageCount) nextPage = 1;
    handlePageChange(nextPage);
  }}>
Next
  </button>
</div>
       </div>
    </>
  )
}

export default PaginationContainer
