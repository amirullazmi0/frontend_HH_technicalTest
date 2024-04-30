'use client'
import React, { useContext, useState } from 'react'
import TableKegiatan from './TableKegiatan'
import ModalTambah from './ModalTambah'
import { KegiatanContext } from './KegiatanContext'
import AlertKegiatan from './AlertKegiatan'
import AlertProyek from './AlertProyek'
import AlertDelete from './AlertDelete'
import ModalEdit from './ModalEdit'

import ModalFilter from './ModalFilter'
import ModalTambahProyek from './ModalTambahProyel'

const Section = () => {
    const [modalTambah, setModalTambah] = useState<boolean>(false)
    const kegiatanContext: any = useContext(KegiatanContext)


    return (
        <div className='p-5'>
            <AlertKegiatan />
            <AlertProyek />
            <AlertDelete />
            <ModalFilter />
            <ModalEdit />
            <ModalTambah />
            <ModalTambahProyek />
            <div className="bg-white rounded-lg shadow">

                <TableKegiatan />
            </div>
        </div>
    )
}

export default Section