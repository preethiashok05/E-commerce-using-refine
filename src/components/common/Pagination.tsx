

export default function Pagination({current,pageSize , pageCount ,setPageSize ,setCurrent}) {
  return (
    <>
       <div className="footer-pagination"
       style = {{
        width:'100%',
        display:'flex',
        alignItems:'center',
        bottom:0,
        marginTop:'2rem',
        position:'sticky',
        color:'black',
        justifyContent:'center',
        //background:'#56b807e8'
       }}>
       <div className="page" 
                        style=
                        {{
                            paddingRight:'1rem',
                            display:'flex',
                            width:'150px',
                            height:'40px',
                            alignItems:'center',
                            justifyContent :'space-around'
                        }}>
            <button onClick={() => {setCurrent((prev) => prev - 1)}}
                    disabled = {!(current > 1)}
            >
                    {"<"}
            </button>
            <h4> page: {current} of  {pageCount} </h4>
            <button onClick={() => {setCurrent((prev) => prev + 1)}}
                    disabled = {(current  === pageCount)}
            >
                    {">"}
            </button>
       </div>
       
       <h4>Show : <span><select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
        >
            {[5, 10, 20].map((size) => (
                <option key={size} value={size}>
                    {size}
                </option>
            ))}
        </select></span></h4>
       </div>
    </>
  )
}
