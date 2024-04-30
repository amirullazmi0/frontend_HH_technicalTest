'use client'
import React, { useContext, useState } from 'react'
import { KegiatanContext } from './KegiatanContext'
import axios from 'axios'

const FormTambahProyek = () => {
    const kegiatanContext: any = useContext(KegiatanContext)

    const [name, setName] = useState<string>('')

    const API_URL = 'http://localhost:5555'

    const handleCreateProyek = async () => {
        try {
            const response = await axios.post(`${API_URL}/api/proyek`, {
                name: name
            })

            if (response.data.success == true) {
                kegiatanContext.setAlertProyek(true)
                kegiatanContext.setModalTambahProyek(false)
                kegiatanContext.setModalTambahKegiatan(false)
                setTimeout(() => {
                    kegiatanContext.setAlertProyek(false)
                    // kegiatanContext.setModalTambahKegiatan(true)
                    // kegiatanContext.setDropdownProyek(false)
                }, 5000)
            }

        } catch (error) {
            console.log(error);
        }
    }

    const handleModalTambahProyek = () => {
        if (kegiatanContext.modalTambahProyek == true) {
            kegiatanContext.setModalTambahProyek(false)
            kegiatanContext.setDropdownProyek(true)
        } else {
            kegiatanContext.setModalTambahProyek(true)
            kegiatanContext.setDropdownProyek(false)
        }
    }
    return (
        <div className="lg:w-[50%] bg-white rounded-lg shadow overflow-hidden">
            <div className="flex justify-between p-3 border-b-2">
                <div className="font-semibold">
                    Tambah Proyek Baru
                </div>
                <button onClick={handleModalTambahProyek} className='active:scale-90 duration-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="p-5">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-xs">Nama Proyek <span className='text-red'>*</span> </span>
                    </div>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="input input-bordered w-full text-xs" />
                </label>
            </div>
            <div className="flex justify-end p-5 gap-5 border-t-2">
                <button onClick={handleModalTambahProyek} className='text-red active:scale-95 duration-100'>Kembali</button>
                <button onClick={handleCreateProyek} className='text-white bg-red p-2 rounded active:scale-95 duration-100'>Simpan</button>
            </div>
        </div>
    )
}

export default FormTambahProyek