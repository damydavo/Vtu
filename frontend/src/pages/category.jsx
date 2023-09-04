import { glo_img, airtel_img, mobile_img, mtn_img } from "../asset";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getMtn, getAirtel, getGlo, getMobile, reset } from "../features/vtu/vtuSlice";



const Category = () => {
    const { mtn, airtel, glo, mobile, isSuccess, message } = useSelector((state) => (state.variations))
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset())
            }
        }
    }, [])

    useEffect(() => {
        dispatch(getMtn())
        dispatch(getAirtel())
        dispatch(getGlo())
        dispatch(getMobile())
    }, [])

    return (

        <div id="pricing">
            <h2 className="flex justify-center md:text-4xl text-lg font-bold pb-10">Affordable Data Plans and Prices</h2>

            <div className="grid md:grid-cols-4 gap-4 w-full text-center">
                <div className="px-3 bg-[#FFD500] py-4 rounded-md w-[340px] md:w-full">
                    <div>
                        <img className="w-32 h-32 mx-auto" src={mtn_img} alt="mtn" />
                        <h2 className="text-center font-bold">MTN Data</h2>
                    </div>
                    {mtn.varations?.map(item => {
                        return (
                            <>
                                <div className="py-2 px-1">{item.name}</div>
                            </>

                        )
                    })}
                </div>

                <div className="px-3 bg-[#FE4141] py-4 rounded-md w-[340px] md:w-full">
                    <div>
                        <img className="w-32 h-32 mx-auto" src={airtel_img} alt="airtel" />
                        <h2 className="text-center font-bold">Airtel Data</h2>

                    </div>
                    {airtel.varations?.map(item => {
                        return (
                            <div className="py-2 px-1">{item.name}</div>
                        )
                    })}
                </div>
                <div className="px-3 bg-[#10E331] py-4 rounded-md w-[340px] md:w-full">
                    <div>
                        <img className="w-32 h-32 mx-auto" src={glo_img} alt="glo" />
                        <h2 className="text-center font-bold">Glo Data</h2>
                    </div>
                    {glo.varations?.map(item => {
                        return (

                            <div className="py-2 px-1">{item.name}</div>
                        )
                    })}
                </div>
                <div className="px-3 bg-[#A4BC0B] py-4 rounded-md w-[340px] md:w-full">
                    <div>
                        <img className="w-32 h-32 mx-auto" src={mobile_img} alt="mtn" />
                        <h2 className="text-center font-bold">9mobile Data</h2>
                    </div>
                    {mobile.varations?.map(item => {
                        return (
                            <div className="py-2 px-1">{item.name}</div>
                        )
                    })}
                </div>
            </div>
        </div>





    );
}

export default Category;