// import styles, { layout } from "../style";
import { cards } from "../constants";
import Card from './cards';

const CardFeature = () => {
    return (
        <div id="services" className="container mx-auto grid md:grid-cols-3 sm:grid-cols-6 gap-3">
            {cards.map(card => {
                return (
                    <Card key={card.id} card={card} />
                )
            })}
        </div>
    );
}

export default CardFeature;