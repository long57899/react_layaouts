import ShopItem from "../ShopItem/ShopItem";

export default function ListView({cards}) {
    return (
      <div className="list-view">
        {cards.map((card, index) => (
            <ShopItem 
                key={index} 
                card={card} 
            />
        ))}
      </div>
    );
  }