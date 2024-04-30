'use client'
import React, { useContext, useState } from 'react'
import TableKegiatan from './TableKegiatan'
import ModalTambah from './ModalTambah'
import { KegiatanContext } from './KegiatanContext'

const Section = () => {
    const [modalTambah, setModalTambah] = useState<boolean>(false)
    const kegiatanContext: any = useContext(KegiatanContext)

    const renderModalTambahKegiatan = () => {
        if (kegiatanContext.modalTambahKegiatan == true) {
            window.document.body.style.overflow = 'hidden'
            return <ModalTambah />
        } else {
            window.document.body.style.overflow = 'auto'
            return null
        }
    }

    return (
        <div className='p-5'>
            {renderModalTambahKegiatan()}
            <div className="bg-white rounded-lg shadow">
                <div className="flex justify-between items-center p-5 border-b-[1px]">
                    <div className="flex items-center gap-3">
                        <div className="">
                            Daftar Kegiatan
                        </div>
                        <button onClick={(e) => kegiatanContext.setModalTambahKegiatan(true)} className=" rounded-sm active:scale-95 duration-200 p-2 h-fit bg-lightblue border-none flex text-blue">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <div className="">Tambah Kegiatan</div>
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            <input type="text" className="grow" placeholder="Cari" />
                        </label>
                        <button className=' p-3 rounded hover:bg-lightblue active:scale-95 duration-200 w-fit bg-white shadow-sm text-red'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" id="menu-strawberry"><path fill="#F15858" fillRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM5 12C5 11.4477 5.44772 11 6 11L18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13L6 13C5.44772 13 5 12.5523 5 12ZM7 18C7 17.4477 7.44772 17 8 17H16C16.5523 17 17 17.4477 17 18C17 18.5523 16.5523 19 16 19H8C7.44772 19 7 18.5523 7 18Z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
                <TableKegiatan />
            </div>
        </div>
    )
}

export default Section