'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

interface NavbarProps {
    active: string;
}


const Navbar: React.FC<NavbarProps> = ({ active }) => {
    const router = useRouter()

    const handleNavigation = (e: string) => {
        router.push(e)
    }
    return (
        <div className="bg-white">
            <div className='p-3 pl-5 pr-5 shadow flex'>
                <div className="w-fit text-center">
                    <div className="text-red font-bold text-lg">Timesheet</div>
                    <div className="text-red font-bold text-sm mt-[-7px]">Management</div>
                </div>
            </div>
            <div className=" shadow-sm ">
                <div className="p-5 font-bold text-xl">
                    HH Timesheet
                </div>
                <div className="pl-10">
                    <button onClick={()=> handleNavigation('/')} className={`pl-2 pr-2 ${active == 'dashboard' ? `text-blue font-semibold border-blue border-b-2` : ``}`}>Daftar Kegiatan</button>
                    <button onClick={() => handleNavigation('/pengaturan')} className={`pl-2 pr-2 ${active == 'pengaturan' ? `text-blue font-semibold border-blue border-b-2` : ``}`}>Pengaturan</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar