import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { visibility } from "../asset";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const [showPassword, setShowPassword] = useState(false)


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, isSuccess, isLoading, isError, message } = useSelector(state => state.auth)

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value,
        }))
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        //redirect if it's successful
        if (isSuccess || user) {
            navigate('/profile')
        }

        dispatch(reset())

    }, [isLoading, isError, isSuccess, message, dispatch, navigate, user])

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email,
            password
        }
        dispatch(login(userData))
    }

    return (
        <div className="block p-8 md:p-0 md:flex items-center justify-center my-18 md:my-44 space-x-0 md:space-x-12">
            <div className="block space-y-3 w-80 md:w-96 my-8">
                <Link to='/'><h2 className="font-bold">Dvtu</h2></Link>
                <p className="text-xl md:text-lg">Welcome to Sun King to get started, please sign in</p>
            </div>

            <section className="flex justify-center items-center mt-4 md:p-6 bg-[#f2f2f2] rounded-md">
                <form onSubmit={handleSubmit} className="w-80 space-y-4 p-8 md:p-0">
                    <input type="email"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className="mt-1 w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 " />
                    <div className='flex relative items-center'>
                        <input type={showPassword ? 'text' : 'password'} placeholder="Password" value={password} onChange={handleChange} name="password" className="mt-1 w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 " />
                        <img onClick={() => setShowPassword((prevState) => !prevState)} className='flex absolute right-2 cursor-pointer' src={visibility} alt="visibility" />
                    </div>

                    <button className="px-3 py-3 w-full text-sm text-primary font-semibold rounded-lg border border-purple-200 bg-[#FFDB00] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Log In</button>

                    <p className="flex justify-center text-[#182214]">Login with Google</p>
                    <Link to='/register' className="flex items-center justify-center mx-7 md:mx-14 px-3 py-3 w-52 text-sm text-dark font-semibold rounded-lg border border-purple-200 bg-[#182214] text-white  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Create an Account</Link>


                </form>
            </section>
        </div>);
}

export default Login;