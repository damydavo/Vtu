import Shared from './../component/shared';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataCategory, getMtn, getAirtel, getGlo, getMobile, buyData, reset } from '../features/vtu/vtuSlice';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify'

const Data = () => {

    const { data, mtn, airtel, glo, mobile, isSuccess, isError, message } = useSelector((state) => state.variations)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset())
            }

        }

    }, [isSuccess, dispatch, message, isError])

    useEffect(() => {
        dispatch(getDataCategory())
        dispatch(getMtn())
        dispatch(getAirtel())
        dispatch(getGlo())
        dispatch(getMobile())
    }, [dispatch])

    const [formData, setFormData] = useState({
        serviceID: '',
        phone: '',
        variation_code: '',
        email: '',
        amount: ''
    })

    const { serviceID, phone, variation_code, email, amount } = formData

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
            variation_code,
            email,
            amount
        }
        dispatch(buyData(userInput))

        if (isSuccess) {
            toast.success('Data has been purchased')
            navigate('/profile')
            dispatch(reset())

        }
    }

    return (
        <Shared>

            <div className='container mx-auto mt-24 font-poppins'>
                <div className="text-center">
                    <h4 className="flex justify-center mt-6 mb-2 text-2xl font-semibold gap-1 items-center">Data Subscription</h4>

                </div>
                <section className="mt-4">
                    <form onSubmit={handleSubmit} className="w-full space-y-4 px-10">

                        <label className="block">
                            <span className="block text-sm font-medium text-slate-700">Choose Network</span>
                            <select value={serviceID} onChange={handleChange} type="text" name="serviceID" className="mt-1 w-[400px] px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 bg-[#E0E8F3] focus:outline-none" >
                                <option>Select Network Type</option>
                                {data.map(item => {
                                    return (
                                        <option key={item.serviceID}>{item.serviceID}</option>
                                    )
                                })}

                            </select>
                        </label>
                        <div className='block md:flex gap-8 items-center'>
                            <label className="block">
                                <span className="block text-sm font-medium text-slate-700">Mobile Number</span>
                                <input type="text"
                                    placeholder='Mobile Number'
                                    onChange={handleChange}
                                    name="phone"
                                    value={phone}
                                    className="mt-1 w-[400px] px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 font-semibold  bg-[#E0E8F3] focus:outline-none" />
                            </label>

                            <div className='flex flex-col'>
                                <label className="block">
                                    <span className="block text-sm font-medium text-slate-700">Data type</span>
                                    <select value={variation_code} type="text" name="variation_code" onChange={handleChange} className="mt-1 w-[400px] px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 bg-[#E0E8F3] focus:outline-none" >
                                        <option>select Data type</option>
                                        {serviceID === 'mtn-data' ? mtn.varations?.map(item => {
                                            return (
                                                <option key={item.name}>{item.variation_code}</option>
                                            )
                                        }) : serviceID === 'airtel-data' ? airtel.varations?.map(item => {
                                            return (
                                                <option key={item.name}>{item.variation_code}</option>
                                            )
                                        }) : serviceID === 'glo-data' ? glo.varations?.map(item => {
                                            return (
                                                <option key={item.name}>{item.variation_code}</option>
                                            )
                                        }) : serviceID === 'etisalat-data' ? mobile.varations?.map(item => {
                                            return (
                                                <option key={item.name}>{item.variation_code}</option>
                                            )
                                        }) : <option></option>}
                                    </select>
                                </label>
                            </div>
                        </div>

                        <label className="block">
                            <span className="block text-sm font-medium text-slate-700">Email Address</span>
                            <input type="email"
                                placeholder='Email Address'
                                onChange={handleChange}
                                name="email"
                                value={email}
                                className="mt-1 w-[400px] px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 font-semibold  bg-[#E0E8F3] focus:outline-none" />
                        </label>

                        <label className="block">
                            <span className="block text-sm font-medium text-slate-700">Amount</span>
                            <input type="text"
                                name="amount"
                                onChange={handleChange}
                                value={amount}
                                className="mt-1 w-[400px] px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 font-semibold  bg-[#E0E8F3] focus:outline-none" />
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

export default Data;