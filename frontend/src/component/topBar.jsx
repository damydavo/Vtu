import { menu } from '../asset';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';


const TopBar = ({ handleOpen, sidebarOpen }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <div className="py-2 bg-brightRed fixed w-full z-[20]">
            <div className="flex justify-between items-center px-6">
                <div className="flex space-x-6">
                    <Link to='/' className='text-white text-lg font-bold md:block hidden'>Welcome</Link>
                    <img onClick={() => handleOpen(!sidebarOpen)} className="flex md:hidden w-[32px] h-[32px] cursor-pointer" src={menu} alt="menu" />
                </div>

                <button onClick={onLogout} type="button" className="flex bg-transparent text-white px-4 py-2 font-semibold rounded-md border gap-1 items-center">Logout</button>
            </div>


        </div>
    );
}

export default TopBar;