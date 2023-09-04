import styles from "../style";
import { useState, useEffect } from "react";


import {
    NavBar,
    Hero,
    CardFeature,
    About,
    Category,
    Partners,
    Footer,
} from '../component/main'


const Home = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className={`w-full fixed top-0 z-[20] ${scrolled ? 'bg-white border-b shadow-md' : 'bg-transparent'}`}>
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <NavBar />
                    </div>
                </div>
            </div>

            <div className={`${styles.paddingX} ${styles.flexCenter} pt-[40px] z-[20]`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>

            <div className={`${styles.paddingX} ${styles.flexCenter} pb-10`}>
                <div className={`${styles.boxWidth}`}>
                    <CardFeature />
                </div>
            </div>
            <div className={`container ${styles.paddingX} ${styles.paddingY}  ${styles.flexCenter} pb-4 m:pb-10 mx-auto w-full`}>
                <div className={`${styles.boxWidth}`}>
                    <About />
                </div>
            </div>
            <div id="pricing" className={`container ${styles.paddingX} ${styles.paddingY}  ${styles.flexCenter} pb-4 md:pb-10 mx-auto w-full`}>
                <div className={`${styles.boxWidth}`}>
                    <Category />
                </div>
            </div>
            <div className={`${styles.paddingX} ${styles.paddingY}  ${styles.flexCenter} pb-10 md:pb-10 w-full bg-[#F6F6F7]`}>
                <div className={`container mx-auto ${styles.boxWidth}`}>
                    <Partners />
                </div>
            </div>
            <div className="w-full">
                <Footer />
            </div>

        </>
    );
}

export default Home;