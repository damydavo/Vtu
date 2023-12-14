import Shared from './../component/shared';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getElectricityCategory, verifyMeter, reset } from '../features/vtu/vtuSlice';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify'

const Electricity = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(getElectricityCategory())
    }, [dispatch])

    const { electricity, isSuccess } = useSelector((state) => state.variations)

    const [formData, setFormData] = useState({
        variation_code: '',
        serviceID: '',
        phone: '',
        billersCode: '',
        email: '',
        amount: ''
    })

    const { variation_code, serviceID, phone, billersCode, email, amount } = formData

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value,
        }))
    }

    const meterVerifiction = (e) => {
        e.preventDefault()
        const userInput = {
            request_id: moment().format('YYYYMMDDHHII').concat(uuidv4()),
            variation_code,
            serviceID,
            phone,
            billersCode,
            email,
            amount
        }
        dispatch(verifyMeter(userInput))

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
                    <h4 className="flex justify-center mt-6 mb-2 text-2xl font-semibold gap-1 items-center">Electricity Payment</h4>

                </div>
                <section className="mt-4 p-8">
                    <form onSubmit={meterVerifiction} className="w-full space-y-4">
                        <div className='block md:flex gap-8 items-center'>

                            <label className="block">
                                <span className="block text-sm font-medium text-slate-700">Meter Type</span>
                                <select onChange={handleChange} type="text" name="variation_code" value={variation_code} className="mt-1 w-full md:w-[400px] px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 bg-[#E0E8F3] focus:outline-none" >
                                    <option>Select meter Type</option>
                                    <option value="prepaid">prepaid</option>
                                    <option value="postpaid">postpaid</option>

                                </select>
                            </label>

                            <label className="block">
                                <span className="block text-sm font-medium text-slate-700">Disco Name</span>
                                <select onChange={handleChange} type="text" name="serviceID" value={serviceID} className="mt-1 w-full md:w-[400px] px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 bg-[#E0E8F3] focus:outline-none" >
                                <option>Select Network Type</option>
                                {electricity.map(item => {
                                    return (
                                        <option key={item.serviceID}>{item.serviceID}</option>
                                    )
                                })}

                            </select>
                        </label>
                        </div>

                        <div className='block md:flex gap-8 items-center'>
                            <label className="block">
                                <span className="block text-sm font-medium text-slate-700">Mobile Number</span>
                                <input onChange={handleChange} type="text"
                                    placeholder='Mobile Number'
                                    required
                                    name="phone"
                                    value={phone}
                                    className="mt-1 w-full md:w-[400px] px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 font-semibold  bg-[#E0E8F3] focus:outline-none" />
                            </label>

                            <div className='flex flex-col'>
                                <label className="block">
                                    <span className="block text-sm font-medium text-slate-700">Meter number</span>
                                    <input onChange={handleChange} type="text" name="billersCode"
                                        value={billersCode} placeholder='meter number' className="mt-1 w-full md:w-[400px] px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 bg-[#E0E8F3] focus:outline-none" />
                                </label>
                            </div>
                        </div>

                        <label className="block">
                            <span className="block text-sm font-medium text-slate-700">Email Address</span>
                            <input onChange={handleChange} type="email"
                                placeholder='Email Address'
                                required
                                name="email"
                                value={email}
                                className="mt-1 w-full md:w-[400px] px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 font-semibold  bg-[#E0E8F3] focus:outline-none" />
                        </label>

                        <label className="block">
                            <span className="block text-sm font-medium text-slate-700">Amount</span>
                            <input onChange={handleChange} type="text"
                                name="amount"
                                value={amount}
                                required
                                className="mt-1 w-full md:w-[400px] px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 font-semibold  bg-[#E0E8F3] focus:outline-none" />
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

export default Electricity;