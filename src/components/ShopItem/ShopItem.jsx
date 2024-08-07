export default function ShopItem({card}) {
    return (
      <div className="shop">
        <img src={card.img} alt={card.name} className="shop_img"></img>
        <h3 className="shop_name">{card.name}</h3>
        <span className="shop_color">{card.color}</span>
        <div className="shop_price">${card.price}</div>
        <button className="shop_button">ADD TO CART</button>
      </div>
    );
  }