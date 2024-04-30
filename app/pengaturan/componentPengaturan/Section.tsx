'use client'
import { userResponse } from '@/app/model/user.model'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Section = () => {
    const [dataKaryawan, setDataKaryawan] = useState<userResponse>()
    const [fullName, setFullName] = useState<string>('')
    const [rate, setRate] = useState<number>(0)
    const [id, setId] = useState<string>('')
    const [alertSuccess, setAlertSuccess] = useState<boolean>(false)

    const API_URL = 'http://localhost:5555'

    const getData = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/user`)
            if (response.data.success == true) {
                setDataKaryawan(response.data.data)
                setFullName(response.data.data.fullName)
                setRate(response.data.data.rate)
                setId(response.data.data.id)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const updateData = async () => {
        try {
            const data = {
                fullName: fullName,
                rate: rate
            }
            const response = await axios.put(`${API_URL}/api/user/${id}`, data)

            console.log(response.data);

            if (response.data.success) {
                setFullName(response.data.data.fullName)
                setRate(response.data.data.rate)
                setId(response.data.data.id)
                setAlertSuccess(true)
                setTimeout(() => {
                    setAlertSuccess(false)
                }, 10000)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='min-h-[60vh] flex items-center justify-center rounded-lg'>
            <div className="p-10 rounded-lg bg-white shadow min-w-[30%] grid gap-4">
                {dataKaryawan ?
                    <React.Fragment>
                        {alertSuccess && <div className="p-2 bg-green-200 text-green-700 text-sm rounded-sm text-center">Update Success </div>}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Nama Karyawan</span>
                            </div>
                            <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Rate</span>
                            </div>
                            <input value={rate} onChange={(e) => setRate(e.target.valueAsNumber)} type="number" className="input input-bordered w-full" />
                        </label>
                        <div className="flex justify-center gap-3">
                            <button className='p-2 rounded-sm bg-primary text-blue w-[40%] active:scale-95 duration-200'>Batalkan</button>
                            <button onClick={updateData} className='p-2 rounded-sm bg-blue text-white w-[40%] active:scale-95 duration-200'>Simpan</button>
                        </div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <div className=" flex justify-center items-center">
                            <span className="loading loading-spinner loading-lg"></span>
                        </div>
                    </React.Fragment>
                }
            </div>
        </div>
    )
}

export default Section