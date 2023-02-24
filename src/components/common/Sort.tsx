import React from 'react'

export default function Sort({sorter , setSorter}) {

    const currentPrice = sorter.find((item) => item.field === "product_cost")?.order;

    const toggleSort = (field: string) => {
        setSorter([{ field, order: currentPrice === "asc" ? "desc" : "asc" }]);
    };

  return (
   <h4
   style={{margin:0,
          padding:'1%'}}
   >SORT BY : <span> <button
   onClick ={() => toggleSort("product_cost")}
   >{`${currentPrice === "asc" ? "↑" : "↓"}`}
   </button></span></h4>
  )
}
