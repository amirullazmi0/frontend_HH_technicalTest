'use client'
import React, { FC, useContext, useEffect, useState } from 'react'
import { KegiatanContext } from './KegiatanContext'
import FormTambahProyek from './FormTambahProyek'
import FormEditKegiatan from './FormEditKegiatan'


const ModalEdit = () => {
    const kegiatanContext: any = useContext(KegiatanContext)
    if (kegiatanContext.editSelect) {
        return (
            <div className='fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-[#0000004f] z-50'>
                <FormEditKegiatan />
            </div>
        )
    }
}

export default ModalEdit