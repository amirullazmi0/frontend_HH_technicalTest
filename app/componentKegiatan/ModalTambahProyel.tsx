'use client'
import React, { FC, useContext, useEffect, useState } from 'react'
import { KegiatanContext } from './KegiatanContext'
import FormTambahProyek from './FormTambahProyek'

const ModalTambahProyek = () => {
    const kegiatanContext: any = useContext(KegiatanContext)
    if (kegiatanContext.modalTambahProyek) {
        return (
            <div className='fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-[#0000004f] z-50'>
                <FormTambahProyek />
            </div>
        )
    }
}

export default ModalTambahProyek