import { about, check } from "../asset";


const About = () => {
    return (
        <div id="about" className="grid md:grid-cols-2 gap-6 items-center">
            <div>
                <img className="flex rounded-full w-96 h-96 mx-auto items-center object-cover bg-brightRed pt-2" src={about} alt="About" />
            </div>
            <div className="">
                <h2 className="text-3xl font-semibold mb-2">Why choose us?</h2>
                <p className="md:text-sm text-lg w-[360px] m:w-full">We offer instant recharge of Airtime, Databundle, CableTV (DStv, GOtv & Startimes), Electricity Bill Payment and more.</p>
                <div className="flex flex-col md:flex-row gap-2 md:gap-32 my-8">

                    <div className="flex flex-col space-y-2 md:space-y-4">
                        <div className="flex gap-4 text-[#0b0e1d] font-semibold"><img className="w-5 h-5 object-cover" src={check} alt="check" />We're Fast</div>
                        <div className="flex gap-4 text-[#0b0e1d] font-semibold"><img className="w-5 h-5 object-cover" src={check} alt="check" />100% Secured</div>
                        <div className="flex gap-4 text-[#0b0e1d] font-semibold"><img className="w-5 h-5 object-cover" src={check} alt="check" />Always Online</div>
                    </div>

                    <div className="flex flex-col space-y-2 md:space-y-4">
                        <div className="flex gap-4 text-[#0b0e1d] font-semibold"><img className="w-5 h-5 object-cover" src={check} alt="check" />Automated Services</div>
                        <div className="flex gap-4 text-[#0b0e1d] font-semibold"><img className="w-5 h-5 object-cover" src={check} alt="check" />We are reliable</div>
                        <div className="flex gap-4 text-[#0b0e1d] font-semibold"><img className="w-5 h-5 object-cover" src={check} alt="check" />24/7 customer support</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;