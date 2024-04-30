'use client'
import React, { createContext, useState } from "react";
import { kegiatanResponse } from "../model/kegiatan.model";
import ModalFilter from "./ModalFilter";

export const KegiatanContext = createContext({})

export default function KegiatanProvider({ children }: { children: React.ReactNode }) {
    const [modalTambahKegiatan, setModalTambahKegiatan] = useState<boolean>(false)
    const [modalTambahProyek, setModalTambahProyek] = useState<boolean>(false)
    const [dropdownProyek, setDropdownProyek] = useState<boolean>(false)
    const [alertKegiatan, setAlertKegiatan] = useState<boolean>(false)
    const [alertProyek, setAlertProyek] = useState<boolean>(false)

    const [deleteSelect, setDeleteSelect] = useState<kegiatanResponse>()
    const [alertDelete, setAlertDelete] = useState<kegiatanResponse>()

    const [editSelect, setEditSelect] = useState<kegiatanResponse>()
    const [alertEditKegiatan, setAlertEditKegiatan] = useState<kegiatanResponse>()

    const [modalFilter, setModalFilter] = useState<boolean>(false)

    return (
        <KegiatanContext.Provider
            value={{
                modalTambahKegiatan, setModalTambahKegiatan,
                modalTambahProyek, setModalTambahProyek,
                dropdownProyek, setDropdownProyek,
                alertKegiatan, setAlertKegiatan,
                alertProyek, setAlertProyek,
                deleteSelect, setDeleteSelect,
                alertDelete, setAlertDelete,
                editSelect, setEditSelect,
                alertEditKegiatan, setAlertEditKegiatan,
                modalFilter, setModalFilter
            }}
        >
            {children}
        </KegiatanContext.Provider>
    )
}