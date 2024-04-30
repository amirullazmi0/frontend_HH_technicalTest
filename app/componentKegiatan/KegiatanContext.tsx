'use client'
import React, { createContext, useState } from "react";

export const KegiatanContext = createContext({})

export default function KegiatanProvider({ children }: { children: React.ReactNode }) {
    const [modalTambahKegiatan, setModalTambahKegiatan] = useState<boolean>(false)
    const [modalTambahProyek, setModalTambahProyek] = useState<boolean>(false)
    const [dropdownProyek, setDropdownProyek] = useState<boolean>(false)
    return (
        <KegiatanContext.Provider
            value={{
                modalTambahKegiatan, setModalTambahKegiatan,
                modalTambahProyek, setModalTambahProyek,
                dropdownProyek, setDropdownProyek
            }}
        >
            {children}
        </KegiatanContext.Provider>
    )
}