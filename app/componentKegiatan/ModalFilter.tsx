'use client'
import React, { FC, useContext, useEffect, useState } from 'react'
import { KegiatanContext } from './KegiatanContext'
import Select from 'react-select';
import axios from 'axios';
import { proyekResponse } from '../model/proyek.model';



const ModalFilter = () => {
    const kegiatanContext: any = useContext(KegiatanContext)
    const handleFilter = () => {
        if (kegiatanContext.modalFilter == true) {
            kegiatanContext.setModalFilter(false)
        } else {
            kegiatanContext.setModalFilter(true)
        }
    }

    const API_URL = process.env.API_URL

    const [dataProyek, setDataProyek] = useState<any[]>([])
    const [dataFilter, setDataFilter] = useState<any>()
    const getProyek = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/proyek`)
            let isiProyek = []
            if (response.data.success == true) {
                // setDataProyek(response.data.data)
                const data: proyekResponse[] = response.data.data
                for (let i = 0; i < data.length; i++) {
                    isiProyek.push({
                        value: data[i].name, label: data[i].name
                    })
                }
            }
            setDataProyek(isiProyek)
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e: any) => {
        setDataFilter(e)
    };

    console.log('filter', dataFilter);
    


    useEffect(() => {
        getProyek()
    }, [])

    if (kegiatanContext.modalFilter === true) {
        return (
            <div className='fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-[#0000004f] z-50'>
                <div className="lg:w-[50%] bg-white rounded-lg shadow ">
                    <div className="flex justify-between p-3 border-b-2">
                        <div className="font-semibold">
                            Filter
                        </div>
                        <button onClick={handleFilter} className='active:scale-90 duration-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-5">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-xs">Proyek <span className='text-red'>*</span> </span>
                            </div>
                            <Select
                                value={dataFilter}
                                isMulti
                                name="colors"
                                options={dataProyek}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="flex justify-end p-5 gap-5 border-t-2">
                        <button onClick={handleFilter} className='text-red active:scale-95 duration-100'>Kembali</button>
                        <button className='text-white bg-red p-2 rounded active:scale-95 duration-100'>Simpan</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalFilter