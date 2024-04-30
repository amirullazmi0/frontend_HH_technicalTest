'use client'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { kegiatanResponse } from '../model/kegiatan.model'
import moment from 'moment'
import 'moment/locale/id';
import { KegiatanContext } from './KegiatanContext'
import { userResponse } from '../model/user.model'
const TableKegiatan = () => {
    const kegiatanContext: any = useContext(KegiatanContext)
    const [dataKegiatan, setDataKegiatan] = useState<kegiatanResponse[]>([])
    const [totalDurasi, setTotalDurasi] = useState<number>(0)
    const [totalRate, setTotalRate] = useState<any>(0)
    const API_URL = process.env.API_URL

    const [cariJudul, setCariJudul] = useState<string>('')

    const getDatakegiatan = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/kegiatan?name=${cariJudul}`)
            if (response.data.success == true) {
                setDataKegiatan(response.data.data.kegiatan)
                setTotalDurasi(response.data.data.totalDurasi)

            }
        } catch (error) {

        }
    }
    const [user, setUser] = useState<userResponse>()
    const [ratePerMinute, setRatePerMinute] = useState<any>(0)
    const getUser = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/user`)

            if (response.data.success) {
                setUser(response.data.data)
            }
        } catch (error) {
            console.log(error);

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
        getUser()
        if (user) {
            const rate = user.rate ? user.rate / 60 * totalDurasi : 0
            setRatePerMinute(rate.toLocaleString('id-ID'))
        }
    }, [dataKegiatan, kegiatanContext.alertKegiatan, kegiatanContext.alertDelete, cariJudul])
    return (
        <>
            <div className="flex justify-between items-center p-5 border-b-[1px]">
                <div className="flex items-center gap-3">
                    <div className="">
                        Daftar Kegiatan
                    </div>
                    <button onClick={() => kegiatanContext.setModalTambahKegiatan(true)} className=" rounded-sm active:scale-95 duration-200 p-2 h-fit bg-lightblue border-none flex text-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div className="">Tambah Kegiatan</div>
                    </button>
                </div>
                <div className="flex items-center gap-4">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input value={cariJudul} onChange={(e) => setCariJudul(e.target.value)} type="text" className="grow" placeholder="Cari" />
                    </label>
                    <button onClick={() => kegiatanContext.setModalFilter(true)} className=' p-3 rounded hover:bg-lightblue active:scale-95 duration-200 w-fit bg-white shadow-sm text-red'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" id="menu-strawberry"><path fill="#F15858" fillRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM5 12C5 11.4477 5.44772 11 6 11L18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13L6 13C5.44772 13 5 12.5523 5 12ZM7 18C7 17.4477 7.44772 17 8 17H16C16.5523 17 17 17.4477 17 18C17 18.5523 16.5523 19 16 19H8C7.44772 19 7 18.5523 7 18Z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
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
                                            <tr key={index}>
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
                            <div className="text-blue">
                                {dataKegiatan && dataKegiatan.length && user ?
                                    <div className="">
                                        Rp{ratePerMinute}
                                    </div>
                                    : '-'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableKegiatan