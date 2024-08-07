export default function ShopCard({card}) {
    return (
      <div className="shop_card">
        <img className="shop_card_img" src={card.img} alt={card.name}></img>
        <div className="shop_card_content">
          <h3 className="shop_card_name">{card.name}</h3>
          <span className="shop_card_color">{card.color}</span>
          <div className="shop_card_footer">
            <div className="shop_card_price">${card.price}</div>
            <button className="shop_card_button">Add to cart</button>
          </div>
  
        </div>
  
  
      </div>
    );
  }