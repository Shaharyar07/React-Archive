import React from "react";

const Categories = ({categories, filterItems }) => {
  return (
    <div className="btn-container">
     {
       categories.map((catogory)=>{
         return(
           <button type='button' onClick={()=>filterItems(catogory)} className='filter-btn'>{catogory}</button>
         )
       })
     }
    </div>
  );
};

export default Categories;
