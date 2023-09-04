import { MdWallet, MdMoney, MdReviews } from 'react-icons/md'
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getWallet } from '../features/vtu/vtuSlice';
import { serviceCategory } from "../constants";
import Shared from './../component/shared';

const Profile = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWallet())
    }, [dispatch])

    const { wallet } = useSelector((state) => state.variations)
    return (
        <Shared>
            <div className="mx-4 md:mx-24 mt-24 overflow-x-auto">
                <div className="grid md:grid-cols-3 gap-2">

                    <div className="flex items-center h-[100px] w-[320px] bg-[#F6F6F7] rounded-md shadow-lg py-4">
                        <MdWallet color='#F25F3A' className='mx-4' size='78' />
                        <div className='text-lg items-center'>
                            <h2 className='text-[#222] font-poppins'>Wallet Balance</h2>
                            <div className='flex justify-start my-1'><strong>₦{wallet.balance?.toLocaleString()}</strong></div>
                        </div>
                    </div>
                    <div className="flex items-center text-center h-[100px] w-[320px] bg-[#F6F6F7] rounded-md shadow-md py-4 ">
                        <MdMoney color='#F25F3A' className='mx-4' size='78' />
                        <div className='text-lg items-center'>
                            <h2 className='text-[#222] font-poppins'>Referral Bonus</h2>
                            <div className='flex justify-start my-1'>₦0.00</div>
                        </div>
                    </div>
                    <div className="flex items-center h-[100px] w-[320px] bg-[#F6F6F7] rounded-md shadow-md py-4">
                        <MdReviews color='#F25F3A' className='mx-4' size='78' />
                        <div className='text-lg items-center'>
                            <h2 className='text-[#222] font-poppins'>My Total Referrals</h2>
                            <div className='flex justify-start my-1'>₦0.00</div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-4 gap-8 mt-12">
                    {serviceCategory.map(item => {
                        return (
                            <Link to={item.to} key={item.id} className="flex flex-col items-center bg-[#F6F6F7] rounded-md shadow-lg p-4">
                                <img className='w-[100px] h-[100px]' src={item.image} alt="" />
                                <div className='text-lg items-center pt-2'>
                                    {item.title}
                                </div>
                            </Link>

                        )

                    })}


                </div>
            </div>
        </Shared>
    );
}

export default Profile;