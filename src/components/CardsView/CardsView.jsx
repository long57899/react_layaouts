import ShopCard from "../ShopCard/ShopCard";

export default function CardsView({cards}) {
    return (
      <div className="view-module">
        {cards.map((card, index) => (
            <ShopCard 
                key={index} 
                card={card} 
            />
        ))}
      </div>
    );
  }