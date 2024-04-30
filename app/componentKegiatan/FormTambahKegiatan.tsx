'use client'
import React, { useContext, useEffect, useState } from 'react'
import { KegiatanContext } from './KegiatanContext'
import axios from 'axios'
import { proyekResponse } from '../model/proyek.model'
import { kegiatanRequest } from '../model/kegiatan.model'

const FormTambahKegiatan = () => {
    const kegiatanContext: any = useContext(KegiatanContext)

    const [dataCreate, setDataCreate] = useState<kegiatanRequest>({
        judulKegiatan: '',
        proyekName: '',
        tanggalMulai: '',
        tanggalSelesai: '',
        waktuMulai: '',
        waktuSelesai: ''
    })

    const handleCloseModal = () => {
        kegiatanContext.setModalTambahKegiatan(false)
        kegiatanContext.setDropdownProyek(false)
    }

    const handleTambahProyek = () => {
        kegiatanContext.setModalTambahProyek(true)
        kegiatanContext.setModalTambahKegiatan(false)
    }

    const handleDropdown = () => {
        if (kegiatanContext.dropdownProyek == true) {
            kegiatanContext.setDropdownProyek(false)
        } else {
            kegiatanContext.setDropdownProyek(true)
        }
    }

    const handleSelectProyek = (item: proyekResponse) => {
        setDataCreate({ ...dataCreate, proyekName: item.name })
        kegiatanContext.setDropdownProyek(false)
        setTimeout(() => {
            kegiatanContext.setDropdownProyek(false)
        });
    }

    const API_URL = process.env.API_URL

    const [dataProyek, setDataProyek] = useState<proyekResponse[]>([])

    const getDataProyek = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/proyek`)
            if (response.data.success == true) {
                setDataProyek(response.data.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleCreate = async () => {
        try {
            const response = await axios.post(`${API_URL}/api/kegiatan`, dataCreate)

            if (response.data.success == true) {
                kegiatanContext.setModalTambahKegiatan(false)
                kegiatanContext.setModalTambahProyek(false)
                kegiatanContext.setDropdownProyek(false)
                kegiatanContext.setAlertKegiatan(true)
                setTimeout(() => {
                    kegiatanContext.setAlertKegiatan(false)
                }, 5000)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        getDataProyek()
    }, [])

    return (
        <div className="lg:w-[50%] bg-white rounded-lg shadow">
            <div className="flex justify-between p-3 border-b-2">
                <div className="font-semibold">
                    Tambah Kegiatan Baru
                </div>
                <button onClick={handleCloseModal} className='active:scale-90 duration-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="p-5">
                <div className="grid grid-cols-4 gap-2">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-xs">Tanggal Mulai <span className='text-red'>*</span> </span>
                        </div>
                        <input type="date" value={dataCreate.tanggalMulai} onChange={(e) => setDataCreate({ ...dataCreate, tanggalMulai: e.target.value })} className="input input-bordered w-full text-xs" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-xs">Tanggal Berakhir <span className='text-red'>*</span> </span>
                        </div>
                        <input type="date" value={dataCreate.tanggalSelesai} onChange={(e) => setDataCreate({ ...dataCreate, tanggalSelesai: e.target.value })} placeholder="Type here" className="input input-bordered w-full text-xs" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-xs">Waktu Mulai <span className='text-red'>*</span> </span>
                        </div>
                        <input type="time" value={dataCreate.waktuMulai} onChange={(e) => setDataCreate({ ...dataCreate, waktuMulai: e.target.value })} placeholder="Type here" className="input input-bordered w-full text-xs" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-xs">Waktu Berakhir <span className='text-red'>*</span> </span>
                        </div>
                        <input type="time" value={dataCreate.waktuSelesai} onChange={(e) => setDataCreate({ ...dataCreate, waktuSelesai: e.target.value })} placeholder="Type here" className="input input-bordered w-full text-xs" />
                    </label>
                    <label className="col-span-4 form-control w-full">
                        <div className="label">
                            <span className="label-text text-xs">Judul Kegiatan <span className='text-red'>*</span> </span>
                        </div>
                        <input value={dataCreate.judulKegiatan} onChange={(e) => setDataCreate({ ...dataCreate, judulKegiatan: e.target.value })} type="text" className="input input-bordered w-full text-xs" />
                    </label>
                    <label className="col-span-4 form-control w-full">
                        <div className="label">
                            <span className="label-text text-xs">Nama Proyek <span className='text-red'>*</span> </span>
                        </div>
                        <div className="relative">
                            <button onClick={handleDropdown} className='p-3 flex justify-between items-center w-full rounded-lg border-2 bg-white relative'>
                                <div className="">{dataCreate.proyekName}</div>
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </button>
                            {kegiatanContext.dropdownProyek &&
                                <div className="absolute bottom-0 left-0 overflow-hidden overflow-y-scroll  translate-y-[105%] bg-white shadow-lg border w-full rounded-lg p-3 max-h-40">
                                    <div className="">
                                        <button onClick={() => handleTambahProyek()} className='p-2 flex justify-start items-center text-red hover:shadow-sm active:scale-[98%] duration-200 w-full rounded'>+ Tambah Proyek</button>

                                    </div>
                                    {dataProyek && dataProyek.length > 0 &&
                                        dataProyek.map((item: proyekResponse, index: number) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <button onClick={() => handleSelectProyek(item)} className='p-2 flex justify-start items-center hover:shadow-sm active:scale-[98%] duration-200 w-full rounded'>{item.name}</button>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </div>
                            }

                        </div>
                    </label>
                </div>
            </div>
            <div className="flex justify-end p-5 gap-5 border-t-2">
                <button onClick={handleCloseModal} className='text-red active:scale-95 duration-100'>Kembali</button>
                <button onClick={handleCreate} className='text-white bg-red p-2 rounded active:scale-95 duration-100'>Simpan</button>
            </div>
        </div>
    )
}

export default FormTambahKegiatan