import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { sunking, visibility } from "../asset";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { name, email, password, confirmPassword } = formData

    const [showPassword, setShowPassword] = useState(false)
    const [showCpassword, setShowCpassword] = useState(false)


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isError, isSuccess, message } = useSelector(state => state.auth)

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value,
        }))
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        //success redirect
        if (isSuccess || user) {
            navigate('/profile')
        }

        dispatch(reset())
    }, [isError, isSuccess, message, dispatch, navigate, user])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error("password does not match")
        } else {
            const userData = {
                name,
                email,
                password
            }

            dispatch(register(userData))
        }
    }

    return (
        <div className="block p-8 md:p-0 md:flex items-center justify-center my-18 md:my-28 space-x-0 md:space-x-12">
            <div className="block space-y-3 w-80 md:w-96 my-8">
                <Link to='/'><img className="w-[130px] h-[32px]" src={sunking} alt="sun king" /></Link>
                <p className="text-xl md:text-lg">Welcome to Sun King to get started, please register</p>
            </div>

            <section className="flex justify-center items-center mt-4 md:p-6 bg-[#f2f2f2] rounded-md">
                <form onSubmit={handleSubmit} className="w-80 space-y-4 p-8 md:p-0">
                    <input type="text" required name="name" placeholder="name" value={name} onChange={handleChange}
                        className="mt-1 w-full px-2 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 " />
                    <input type="text" placeholder="Email" name="email" value={email} onChange={handleChange} className="mt-1 w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 " />

                    <div className='flex relative items-center'>
                        <input type={showPassword ? 'text' : 'password'} placeholder="Password" value={password} onChange={handleChange} name="password" className="mt-1 w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 " />
                        <img onClick={() => setShowPassword((prevState) => !prevState)} className='flex absolute right-2 cursor-pointer' src={visibility} alt="visibility" />
                    </div>

                    <div className='flex relative items-center'>
                        <input type={showCpassword ? 'text' : 'password'} placeholder="Confirm password" value={confirmPassword} onChange={handleChange} name="confirmPassword" className="mt-1 w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 " />
                        <img onClick={() => setShowCpassword((prevState) => !prevState)} className='flex absolute right-2 cursor-pointer' src={visibility} alt="visibility" />
                    </div>
                    <button className="px-3 py-3 w-full text-sm text-primary font-semibold rounded-lg border border-purple-200 bg-[#FFDB00] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Sign up</button>

                    <p className="flex justify-center text-blue-500">Forgot password?</p>
                    <Link to="/login" className="flex items-center justify-center mx-7 mt-2 md:mx-14 px-3 py-3 w-52 text-sm text-dark font-semibold rounded-lg border border-purple-200 bg-[#182214] text-white  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Log into Account</Link>


                </form>
            </section>
        </div>);
}

export default Register;