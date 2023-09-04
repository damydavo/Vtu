import { useState } from 'react';
import TopBar from './../component/topBar';
import SideBar from './../component/sideBar';

const Shared = ({ children }) => {

    const [sidebarOpen, setsidebarOpen] = useState(false)

    const handleOpen = () => {
        setsidebarOpen(!sidebarOpen)
    }

    return (
        <>
            <TopBar sidebarOpen={sidebarOpen} handleOpen={handleOpen} />
            <div className='flex'>
                <div className={`flex-[2] ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
                    <SideBar />
                </div>

                <div className="flex-[10]">
                    {children}
                </div>
            </div>
        </>

    );
}

export default Shared;