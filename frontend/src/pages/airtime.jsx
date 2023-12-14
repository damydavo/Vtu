import Shared from './../component/shared';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAirtimeCategory, buyAirtime, reset } from '../features/vtu/vtuSlice';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify'

const AirTime = () => {

    const { airtime, isSuccess, isError, message } = useSelector((state) => state.variations)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAirtimeCategory())
    }, [dispatch])

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset())
            }

        }

    }, [isSuccess, dispatch, message, isError])

    const [formData, setFormData] = useState({
        serviceID: '',
        phone: '',
        email: '',
        amount: ''
    })

    const { serviceID, phone, email, amount } = formData

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const userInput = {
            request_id: moment().format('YYYYMMDDHHII').concat(uuidv4()),
            serviceID,
            phone,
            email,
            amount
        }
        dispatch(buyAirtime(userInput))

        if (isSuccess) {
            toast.success('Airtime purchased successfully')
            navigate('/profile')
            dispatch(reset())

        }
    }

    return (
        <Shared>

            <div className='container mx-auto mt-24 font-poppins'>
                <div className="text-center">
                    <h4 className="flex justify-center mt-6 mb-2 text-2xl font-semibold gap-1 items-center">Airtime Top up</h4>

                </div>
                <section className="mt-4">
                    <form onSubmit={handleSubmit} className="w-full space-y-4 px-10">

                        <label className="block">
                            <span className="block text-sm font-medium text-slate-700">Network</span>
                            <select type="text" value={serviceID} name="serviceID" onChange={handleChange} className="mt-1 w-80 md:w-[400px] px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 bg-[#E0E8F3] focus:outline-none" >
                                <option>Select Network Type</option>
                                {airtime.map(item => {
                                    return (
                                        <option key={item.serviceID}>{item.serviceID}</option>
                                    )
                                })}

                            </select>
                        </label>

                        <div className='items-center block md:flex gap-8'>
                            <label className="block">
                                <span className="block text-sm font-medium text-slate-700">Mobile Number</span>
                                <input type="text"
                                    placeholder='Mobile Number'
                                    required
                                    onChange={handleChange}
                                    value={phone}
                                    name="phone"
                                    className="mt-1 md:w-[400px] w-80  px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 font-semibold  bg-[#E0E8F3] focus:outline-none" />
                            </label>

                            <label className="block">
                            <span className="block text-sm font-medium text-slate-700">Email Address</span>
                            <input type="email"
                                    required
                                placeholder='Email Address'
                                    onChange={handleChange}
                                name="email"
                                    value={email}
                                    className="mt-1 md:w-[400px] w-80 px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 font-semibold  bg-[#E0E8F3] focus:outline-none" />
                        </label>
                        </div>

                        <label className="block">
                            <span className="block text-sm font-medium text-slate-700">Amount</span>
                            <input type="text"
                                name="amount"
                                required
                                value={amount}
                                onChange={handleChange}
                                className="mt-1 w-80 md:w-[400px] px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 font-semibold  bg-[#E0E8F3] focus:outline-none" />
                        </label>
                        <div className='flex gap-2 py-4'>
                            <button className="px-4 py-3 w-36 text-sm font-semibold rounded-lg border border-red-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2"><Link to='/profile'>Cancel</Link></button>
                            <button className="px-4 py-3 w-36 text-sm font-semibold rounded-lg border border-purple-200 bg-[#28A745] text-white  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Continue</button>

                        </div>

                    </form>
                </section>
            </div>

        </Shared>
    );
}

export default AirTime;