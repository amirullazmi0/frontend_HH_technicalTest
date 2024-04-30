'use client'
import React, { useContext } from 'react'
import { KegiatanContext } from './KegiatanContext'
import Image from 'next/image'
import success from "../../public/success.gif";
import axios from 'axios';
const AlertDelete = () => {
    const kegiatanContext: any = useContext(KegiatanContext)
    const API_URL = process.env.API_URL

    const handleDeleteKegiatan = async () => {
        try {
            const response = await axios.delete(`${API_URL}/api/kegiatan`, {
                data: {
                    id: kegiatanContext.deleteSelect.id
                }
            })

            if (response.data.success == true) {
                kegiatanContext.setDeleteSelect()
                kegiatanContext.setAlertDelete(true)
                setTimeout(() => {
                    kegiatanContext.setAlertDelete(false)
                }, 5000)
            }
        } catch (error) {
            console.log(error);
        }
    }

    if (kegiatanContext.deleteSelect) {
        return (
            <div className='fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-[#0000004f] z-50'>
                <div className="lg:w-[30%] bg-white rounded-lg shadow flex justify-center p-10">
                    <div className="text-center">
                        <div className="text-lg font-thin">Yakin untuk menghapus data kegiatan dengan judul <span className='font-bold text-red text-xl'>{kegiatanContext.deleteSelect.judulKegiatan}</span> ?</div>
                        <div className="flex justify-center items-center gap-2 mt-10">
                            <button onClick={(e) => kegiatanContext.setDeleteSelect(null)} className='w-[40%] p-2 active:scale-95 duration-150 bg-lightblue text-blue'>Tidak</button>
                            <button onClick={handleDeleteKegiatan} className='w-[40%] p-2 active:scale-95 duration-150 bg-red text-white'>Ya</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (kegiatanContext.alertDelete === true) {
        return (
            <div className='fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-[#0000004f] z-50'>
                <div className="lg:w-[30%] bg-white rounded-lg shadow flex justify-center p-10">
                    <div className="text-center">
                        <div className="flex justify-center">
                            <Image alt='' width={200} src={success} />
                        </div>
                        <div className="text-xl font-bold">Berhasil</div>
                        <div className="">Delete Kegiatan Berhasil</div>
                        <div className="">
                            <span className="loading loading-dots loading-md"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlertDelete