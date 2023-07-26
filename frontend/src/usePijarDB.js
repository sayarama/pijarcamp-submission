import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function usePijarDB() {
    const [produk, setProduk] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8081/")
            .then((res) => setProduk(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8081/remove/'+id)
            window.location.reload()
        }catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-75 bg-white rounded p-3 ">
                <Link to="/create" className="btn btn-success">Add +</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>nama-produk</th>
                            <th>keterangan</th>
                            <th>jumlah</th>
                            <th>harga</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            produk.map((data, i)=> (
                                <tr key={i}>
                                    <td>{data.nama_produk}</td>
                                    <td>{data.keterangan}</td>
                                    <td>{data.jumlah}</td>
                                    <td>{data.harga}</td>
                                    <td>
                                        <Link to={`update/${data.ID}`} className="btn btn-primary">Update</Link>
                                        <button className="btn btn-danger ms-2" onClick={ e => handleDelete(data.ID)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default usePijarDB;
