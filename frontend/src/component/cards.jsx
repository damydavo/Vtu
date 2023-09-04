import { Link } from "react-router-dom";


const Card = ({ card }) => {
    return (
        <Link to='/profile' className="flex-col w-[340px] md:w-[380px] h-[208px] md:h-[180px] rounded-md bg-[#F6F6F7] px-4 shadow-md cursor-pointer">
            <img className="container mx-auto w-[80px] h-[80px] bg-inherit p-4 object-contain" src={card.image} alt="damy" />
            <h2 className="text-lg font-poppins font-semibold text-brightRed">{card.title}</h2>
            <p className="font-poppins text-[#6B6B8E] text-[18px] md:text-[14px]">{card.desc}</p>
        </Link>
    );
}

export default Card;


