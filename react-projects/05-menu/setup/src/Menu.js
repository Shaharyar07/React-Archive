import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuitem) => {
        const { id, title, img, desc, price } = menuitem;
      return (
        <article className="menu-item">
          <img src={img} alt={title} className='photo' />
          <div className="item-info">
            <header>
              <h3>{title}</h3>
              <h4 className='price'> ${price}</h4>
            </header>
            <div className="item-text">
              <p>{desc}</p>
            </div>
          </div>
        </article>
      );
      })}
    </div>
  );
};

export default Menu;
