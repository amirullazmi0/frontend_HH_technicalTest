'use client'
import React, { useContext } from 'react'
import { KegiatanContext } from './KegiatanContext'
import Image from 'next/image'
import success from "../../public/success.gif";
const AlertKegiatan = () => {
    const kegiatanContext: any = useContext(KegiatanContext)
    if (kegiatanContext.alertKegiatan === true) {
        return (
            <div className='fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-[#0000004f] z-50'>
                <div className="lg:w-[30%] bg-white rounded-lg shadow flex justify-center p-10">
                    <div className="text-center">
                        <div className="flex justify-center">
                            <Image alt='' width={200} src={success} />
                        </div>
                        <div className="text-xl font-bold">Berhasil</div>
                        <div className="">Tambah Kegiatan Baru Berhasil</div>
                        <div className="">
                            <span className="loading loading-dots loading-md"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (kegiatanContext.alertEditKegiatan === true) {
        return (
            <div className='fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-[#0000004f] z-50'>
                <div className="lg:w-[30%] bg-white rounded-lg shadow flex justify-center p-10">
                    <div className="text-center">
                        <div className="flex justify-center">
                            <Image alt='' width={200} src={success} />
                        </div>
                        <div className="text-xl font-bold">Berhasil</div>
                        <div className="">Edit Kegiatan Berhasil</div>
                        <div className="">
                            <span className="loading loading-dots loading-md"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlertKegiatan