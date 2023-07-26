import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function useUpdateProduk() {
    const [nama_produk, setNama] = useState('')
    const [keterangan, setDesc] = useState('')
    const [jumlah, setJumlah] = useState(0)
    const [harga, setHarga] = useState(0)
    const {id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id, {nama_produk, keterangan, jumlah: Number(jumlah), harga: Number(harga)})
        .then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Update Produk</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Nama Produk</label>
                    <input type='text' placeholder='Masukkan Nama' className='form-control'
                    onChange={e => setNama(e.target.value)}/>
                    
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Keterangan</label>
                    <input type='text' placeholder='Berikan Keterangan' className='form-control'
                    onChange={e => setDesc(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Jumlah</label>
                    <input type='text' placeholder='Masukka Jumlah' className='form-control'
                    onChange={e => setJumlah(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Harga</label>
                    <input type='text' placeholder='Berikan Harga' className='form-control'
                    onChange={e => setHarga(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default useUpdateProduk