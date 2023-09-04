import { MdSignalCellularAlt, MdPhone, MdLightbulb, MdGroups, MdArrowDropDown, MdArrowDropUp, MdBookmark, MdOutlineLight, MdLogout, MdCable, MdPriceCheck, MdHome, MdSettings } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const SideBar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="h-screen bg-[#242D52] px-4 py-6 fixed z-0 top-14">
            <Link to='/profile' className="flex bg-gray-300 justify-center px-4 py-1 font-semibold rounded-sm border w-[200px] items-center"><MdHome className='flex items-center mx-4' size='26' />Dashboard</Link>

            <ul className='space-y-8 font-semibold tracking-tight block text-[#F6F6F7] pt-4'>
                <li>
                    <Link to='/data' className='flex gap-3 items-center'>
                        <MdSignalCellularAlt size='26' /><div>Buy Data</div>
                    </Link>
                </li>
                <li>
                    <Link to='/airtime' className='flex gap-3 items-center'>
                        <MdPhone size='26' /><div>Buy Airtime</div>
                    </Link>
                </li>
                <li>
                    <div onClick={() => setToggle(!toggle)} className='flex gap-3 items-center cursor-pointer'>

                        <MdLightbulb size='28' /><div>Utilities Payment</div>
                        {toggle ? <MdArrowDropDown size='28' className='justify-end' /> : <MdArrowDropUp size='28' className='justify-end' />}
                    </div>
                    <div className={`${toggle ? 'flex flex-col' : 'hidden'} space-y-4 mx-10 text-sm mt-2`}>
                        <Link className='flex items-center gap-2' to='/electricity'><MdOutlineLight size='20' />Bill Payment</Link>
                        <Link className='flex items-center gap-2' to='/cable'><MdCable size='20' />Cable Subscription</Link>
                    </div>

                </li>
                <li>
                    <Link to='/pricing' className='flex gap-3 items-center'>
                        <MdPriceCheck size='28' /><div>Pricing</div>
                    </Link>
                </li>
                <li>
                    <Link to='/feed' className='flex gap-3 items-center'>
                        <MdGroups size='28' /><div>Users</div>
                    </Link>
                </li>
                <li>
                    <Link to='/feed' className='flex gap-3 items-center'>
                        <MdBookmark size='28' />Wallet Funding
                    </Link>
                </li>
                <li>
                    <Link to='/feed' className='flex gap-3 items-center'>
                        <MdSettings size='28' />Settings
                    </Link>
                </li>
                <li>
                    <Link to='/feed' className='flex gap-3 items-center'>
                        <MdLogout size='28' />Logout
                    </Link>
                </li>

            </ul>
        </div>
    );
}

export default SideBar;


