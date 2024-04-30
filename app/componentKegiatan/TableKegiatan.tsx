'use client'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { kegiatanResponse } from '../model/kegiatan.model'
import moment from 'moment'
import 'moment/locale/id';
import { KegiatanContext } from './KegiatanContext'
const TableKegiatan = () => {
    const kegiatanContext: any = useContext(KegiatanContext)
    const [dataKegiatan, setDataKegiatan] = useState<kegiatanResponse[]>([])
    const [totalDurasi, setTotalDurasi] = useState<number>(0)
    const API_URL = 'http://localhost:5555'

    const getDatakegiatan = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/kegiatan`)
            if (response.data.success == true) {
                setDataKegiatan(response.data.data.kegiatan)
                setTotalDurasi(response.data.data.totalDurasi)
            }
        } catch (error) {

        }
    }

    const handleDelete = (item: kegiatanResponse) => {
        kegiatanContext.setDeleteSelect(item)
    }

    const handleEdit = (item: kegiatanResponse) => {
        kegiatanContext.setEditSelect(item)
    }

    useEffect(() => {
        getDatakegiatan()
    }, [dataKegiatan, kegiatanContext.alertKegiatan, kegiatanContext.alertDelete])
    return (
        <div className='p-5'>

            <div className="shadow-sm overflow-hidden rounded-lg">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='w-[30%]'>
                                    <div className="flex items-center">
                                        Judul Kegiatan
                                        <button className='active:scale-90 duration-200'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                            </svg>
                                        </button>
                                    </div>
                                </th>
                                <th className=''>
                                    <div className="flex items-center">
                                        Job
                                        <button className='active:scale-90 duration-200'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                            </svg>
                                        </button>
                                    </div>
                                </th>
                                <th className=''>
                                    <div className="flex items-center">
                                        Tanggal Mulai
                                        <button className='active:scale-90 duration-200'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                            </svg>
                                        </button>
                                    </div>
                                </th>
                                <th className=''>
                                    <div className="flex items-center">
                                        Tanggal Berakhir
                                        <button className='active:scale-90 duration-200'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                            </svg>
                                        </button>
                                    </div>
                                </th>
                                <th className=''>
                                    <div className="flex items-center">
                                        Waktu Mulai
                                        <button className='active:scale-90 duration-200'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                            </svg>
                                        </button>
                                    </div>
                                </th>
                                <th className=''>
                                    <div className="flex items-center">
                                        Waktu Berakhir
                                        <button className='active:scale-90 duration-200'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                            </svg>
                                        </button>
                                    </div>
                                </th>
                                <th className=''>
                                    <div className="flex items-center">
                                        Durasi
                                        <button className='active:scale-90 duration-200'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                            </svg>
                                        </button>
                                    </div>
                                </th>
                                <th className=''>Akhir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataKegiatan && dataKegiatan.length > 0 &&
                                dataKegiatan.map((item: kegiatanResponse, index: number) => {
                                    const durasi = moment.duration(item.durasi, 'minutes');
                                    const jam = Math.floor(durasi.asHours());
                                    const menit = durasi.minutes();
                                    return (
                                        <tr>
                                            <th>{item.judulKegiatan}</th>
                                            <td>{item.proyekName}</td>
                                            <td>{moment(item.tanggalMulai).format('DD MMMM YYYY')}</td>
                                            <td>{moment(item.tanggalSelesai).format('DD MMMM YYYY')}</td>
                                            <td>{item.waktuMulai}</td>
                                            <td>{item.waktuSelesai}</td>
                                            <td>{jam} jam {menit} menit</td>
                                            <td>
                                                <div className="flex gap-2">
                                                    <button onClick={() => handleEdit(item)} className='text-red p-1 rounded shadow-sm active:scale-90 duration-200'>
                                                        <svg height={20} width={20} fill='#F15858' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="edit"><path d="M82.2 79.2H18.8c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4h63.4c1.3 0 2.4-1.1 2.4-2.4s-1.1-2.4-2.4-2.4zM16.5 58.2l-.1 11.3c0 .6.2 1.3.7 1.7.5.4 1.1.7 1.7.7l11.3-.1c.6 0 1.2-.3 1.7-.7l38.8-38.8c.9-.9.9-2.5 0-3.4L59.4 17.7c-.9-.9-2.5-.9-3.4 0l-7.8 7.8-31 31c-.5.5-.7 1.1-.7 1.7zm49-27.6L61.1 35l-7.8-7.8 4.4-4.4 7.8 7.8zM21.3 59.2l28.6-28.6 7.8 7.8L29.1 67h-7.8v-7.8z"></path></svg>
                                                    </button>
                                                    <button onClick={() => handleDelete(item)} className='text-red p-1 rounded shadow-sm active:scale-90 duration-200'>
                                                        <svg height={16} width={20} fill='#F15858' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="trash"><path d="M21 5V4a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v20.91c0 .796.316 1.559.879 2.121A2.996 2.996 0 0 0 8 30.91h16c.796 0 1.559-.316 2.121-.879A2.996 2.996 0 0 0 27 27.91V7h1a1 1 0 0 0 0-2h-7Zm4 2v20.91a.997.997 0 0 1-1 1H8a.997.997 0 0 1-1-1V7h18Zm-6-2h-6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1Z"></path></svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {dataKegiatan && dataKegiatan.length == 0 &&
                        <div className="text-center p-5 font-thin text-sm">
                            Belum Ada Kegiatan
                        </div>
                    }
                </div>
                <div className="grid gap-2 p-4 bg-primary">
                    <div className="flex items-center justify-between">
                        <div className="text-blue">Total Durasi</div>
                        <div className="text-blue">
                            {dataKegiatan && dataKegiatan.length > 0
                                ?
                                <React.Fragment>
                                    {Math.floor(moment.duration(totalDurasi, 'minutes').asHours())} Jam {moment.duration(totalDurasi, 'minutes').minutes()} Menit
                                </React.Fragment>
                                :
                                '-'
                            }</div>
                    </div>
                    <div className="flex items-center justify-between text-blue font-bold text-xl">
                        <div className="text-blue">Total Pendapatan</div>
                        <div className="text-blue">{dataKegiatan && dataKegiatan.length > 0 ? `8000000` : '-'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableKegiatan