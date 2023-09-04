import Shared from './../component/shared';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTvCategory } from '../features/vtu/vtuSlice';

const Cable = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTvCategory())
    }, [dispatch])

    const { cable } = useSelector((state) => state.variations)
    return (
        <Shared>

            <div className='container mx-auto mt-24 font-poppins'>
                <div className="text-center">
                    <h4 className="flex justify-center mt-6 mb-2 text-2xl font-semibold gap-1 items-center">Cable Subscription</h4>

                </div>
                <section className="mt-4">
                    <form className="w-full space-y-4">

                        <label className="block">
                            <span className="block text-sm font-medium text-slate-700">Category</span>
                            <select type="text" name="email" className="mt-1 w-[400px] px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 bg-[#E0E8F3] focus:outline-none" >
                                <option>Select cable Type</option>
                                {cable.map(item => {
                                    return (
                                        <option key={item.serviceID}>{item.name}</option>
                                    )
                                })}

                            </select>
                        </label>
                        <div className='flex gap-8 items-center'>
                            <label className="block">
                                <span className="block text-sm font-medium text-slate-700">Mobile Number</span>
                                <input type="text"
                                    placeholder='Mobile Number'
                                    name="text"
                                    className="mt-1 w-[400px] px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 font-semibold  bg-[#E0E8F3] focus:outline-none" />
                            </label>

                            <div className='flex flex-col'>
                                <label className="block">
                                    <span className="block text-sm font-medium text-slate-700">Packages</span>
                                    <select type="text" name="email" className="mt-1 w-[400px] px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 bg-[#E0E8F3] focus:outline-none" >
                                        <option>select package type</option>
                                        <option>mtn</option>
                                        <option>mtn</option>
                                        <option>mtn</option>
                                        <option>mtn</option>
                                        <option>mtn</option>
                                        <option>mtn</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <label className="block">
                            <span className="block text-sm font-medium text-slate-700">Email Address</span>
                            <input type="email"
                                placeholder='Email Address'
                                name="email"
                                className="mt-1 w-[400px] px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 font-semibold  bg-[#E0E8F3] focus:outline-none" />
                        </label>


                        <label className="block">
                            <span className="block text-sm font-medium text-slate-700">Amount</span>
                            <input type="text"
                                name="amount"
                                className="mt-1 w-[400px] px-3 py-3 border border-slate-300 text-sm shadow-sm placeholder-slate-400 font-semibold  bg-[#E0E8F3] focus:outline-none" />
                        </label>
                        <div className='flex gap-2 py-4'>
                            <button className="px-4 py-3 w-36 text-sm font-semibold rounded-lg border border-red-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Cancel</button>
                            <button className="px-4 py-3 w-36 text-sm font-semibold rounded-lg border border-purple-200 bg-[#28A745] text-white  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Continue</button>

                        </div>

                    </form>
                </section>
            </div>


        </Shared>
    );
}

export default Cable;