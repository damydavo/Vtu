import { Link } from "react-router-dom";
import { navLink } from "../constants";

const Footer = () => {
    return (
        <div className="bg-[#242D52] px-8">
            <div className="flex flex-col-reverse justify-between space-y-8 md:space-y-0 md:flex-row container mx-auto py-10 md:px-0">
                <div className="flex flex-col space-y-4 items-center md:items-start">
                    <Link to='/'><h2 className="font-bold">Dvtu</h2></Link>
                    <p className="flex text-white w-[400px] px-8">We offer instant recharge of Airtime, Databundle, CableTV (DStv, GOtv & Startimes), Electricity Bill Payment and more.</p>
                </div>
                <div className="">
                    <h2 className="mb-4 text-lg font-bold text-white">Useful Links</h2>
                    <ul className="flex flex-col list-none space-y-6">
                        {navLink.map((nav) => {
                            return (
                                <li key={nav.id} className="text-white text-lg md:text-sm font-semibold"><a href={`#${nav.id}`}>{nav.title}</a></li>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex flex-col space-y-2 justify-start text-white">
                    <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
                    <h2 className="text-lg md:text-sm font-semibold"><strong>Address:</strong> Lagos, Nigeria.</h2>
                    <h2 className="text-lg md:text-sm font-semibold"><strong>Email:</strong> damydavo2015@gmail.com.</h2>
                    <h2 className="text-lg md:text-sm font-semibold"><strong>Phone:</strong> 08106048379.</h2>

                </div>
            </div>
        </div>
    );
}

export default Footer;