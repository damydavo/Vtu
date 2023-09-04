import styles from "../style";
import { illustration } from "../asset";
import { FaSignInAlt, FaUser } from 'react-icons/fa'
import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div className={`block md:flex gap-8 container mx-auto w-full ${styles.paddingY}`}>

            <div className="">
                <h1 className="flex-1 text-[42px] md:text[52px] font-poppins font-semibold leading-[75px] text-brightRed  mt-20  md:mt-10">The Best Platform for<br /><span className="text-primary">Automated VTU<br />Services</span></h1>
                <p className={`${styles.paragraph} max-w-lg mt-5 text-primary`}>A technology platform that offers solutions to digital needs at best possible price without compromising quality.

                </p>
                <div className={`flex justify-center md:justify-start ${styles.paddingY} space-x-4 py-16 font-semibold`}>
                    <Link to="/profile" className="p-2 px-4 text-sm text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get
                        Started</Link>

                    <Link to="/register" className="flex items-center gap-1 p-2 px-4 text-sm text-primary bg-transparent rounded-full baseline hover:bg-brightRedLight border"><FaUser />Register
                    </Link>

                    <Link to="/login" className="flex items-center gap-1 p-2 px-4 text-sm text-primary bg-transparent rounded-full baseline hover:bg-brightRedLight border"><FaSignInAlt />Sign in</Link>
                </div>
            </div>
            <div className="md:w-1/2">
                <img src={illustration} alt="hero" />
            </div>
        </div>
    );
}

export default Hero;