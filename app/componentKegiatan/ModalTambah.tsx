'use client'
import React, { FC, useContext, useEffect, useState } from 'react'
import { KegiatanContext } from './KegiatanContext'

const ModalTambah = () => {
    const kegiatanContext: any = useContext(KegiatanContext)
    const [dropdownProyek, setDropdownProyek] = useState<boolean>()
    const handleCloseModal = () => {
        kegiatanContext.setModalTambahKegiatan(false)
        kegiatanContext.setDropdownProyek(false)
    }

    const handleTambahProyek = () => {
        kegiatanContext.setModalTambahProyek(true)
        setDropdownProyek(false)
    }

    const handleDropdown = () => {
        if (kegiatanContext.dropdownProyek == true) {
            kegiatanContext.setDropdownProyek(false)
        } else {
            kegiatanContext.setDropdownProyek(true)
        }
    }

    const handleModalTambahProyek = () => {
        if (kegiatanContext.modalTambahProyek == true) {
            kegiatanContext.setModalTambahProyek(false)
            kegiatanContext.setDropdownProyek(false)
        } else {
            kegiatanContext.setModalTambahProyek(true)
            kegiatanContext.setDropdownProyek(false)
        }
    }

    useEffect(() => {
        console.log(dropdownProyek);

    }, [dropdownProyek])

    return (
        <div className='fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-[#0000004f] z-50'>

            {kegiatanContext.modalTambahProyek !== true ?
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
                                <input type="date" placeholder="Type here" className="input input-bordered w-full text-xs" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-xs">Tanggal Berakhir <span className='text-red'>*</span> </span>
                                </div>
                                <input type="date" placeholder="Type here" className="input input-bordered w-full text-xs" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-xs">Waktu Berakhir <span className='text-red'>*</span> </span>
                                </div>
                                <input type="time" placeholder="Type here" className="input input-bordered w-full text-xs" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-xs">Waktu Berakhir <span className='text-red'>*</span> </span>
                                </div>
                                <input type="time" placeholder="Type here" className="input input-bordered w-full text-xs" />
                            </label>
                            <label className="col-span-4 form-control w-full">
                                <div className="label">
                                    <span className="label-text text-xs">Judul Kegiatan <span className='text-red'>*</span> </span>
                                </div>
                                <input type="text" className="input input-bordered w-full text-xs" />
                            </label>
                            <label className="col-span-4 form-control w-full">
                                <div className="label">
                                    <span className="label-text text-xs">Nama Proyek <span className='text-red'>*</span> </span>
                                </div>
                                <div className="relative">
                                    <button onClick={handleDropdown} className='p-3 flex justify-between items-center w-full rounded-lg border-2 bg-white relative'>
                                        <div className="">lasda</div>
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>
                                    </button>
                                    {kegiatanContext.dropdownProyek &&
                                        <div className="absolute bottom-0 left-0 translate-y-[105%] bg-white shadow-lg border w-full rounded-lg p-3 max-h-60 overflow-hidden">
                                            <div className="overflow-y-scroll">
                                                <button onClick={() => handleTambahProyek()} className='p-2 flex justify-start items-center text-red hover:shadow-sm active:scale-[98%] duration-200 w-full rounded'>+ Tambah Proyek</button>
                                                <>
                                                    <button onClick={() => setDropdownProyek(false)} className='p-2 flex justify-start items-center hover:shadow-sm active:scale-[98%] duration-200 w-full rounded'>Tambah Proyek</button>
                                                </>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-between p-6 border-t-2">
                    </div>
                </div>
                :
                <React.Fragment>
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
                                <input type="text" className="input input-bordered w-full text-xs" />
                            </label>
                        </div>
                        <div className="flex justify-end p-5 gap-5 border-t-2">
                            <button onClick={handleModalTambahProyek} className='text-red active:scale-95 duration-100'>Kembali</button>
                            <button className='text-white bg-red p-2 rounded active:scale-95 duration-100'>Simpan</button>
                        </div>
                    </div>
                </React.Fragment>
            }
        </div>
    )
}

export default ModalTambah