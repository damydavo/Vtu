import { cardImage } from "../constants";


const Partners = () => {
    return (
        <div className="">
            <h2 className="text-center text-2xl font-bold pb-8">Our Partners</h2>
            <p className="text-2xl md:text-lg text-center pb-8">Below are some of our supported service providers</p>

            <div className="grid md:grid-cols-5">
                {cardImage.map(card => {
                    return (
                        <div key={card.id} className="items-center border md:w-full md:h-full w-80 py-4 ">
                            <img className="mx-auto" src={card.image} alt="sponsor" />
                        </div>
                    )
                })}

            </div>
        </div>

    );
}

export default Partners;