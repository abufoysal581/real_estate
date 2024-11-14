import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout'
import { Link } from 'react-router-dom';

function For_buying() {

    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/requestsforbuying`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/requestsforbuying/${id}`).then(function(response){
            getDatas();
        });
    }

  return (
    <AdminLayout>

<div className="container mt-5">
        <h2 className="mb-4">Property Purchase Requests</h2>
        <div className="table-responsive">
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                    <th>#</th>
                        <th>Client Name</th>
                        <th>Client ID</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Requested Property</th>
                        <th>Request Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                {data && data.map((d, key) =>
                <tr key={d.id}>
                        
                        <td>{d.id}</td>
                        <td>{d.client_name}</td>
                        <td>{d.client_id}</td>
                        <td>{d.email}</td>
                        <td>{d.phone}</td>
                        <td>{d.property?.property_title}</td>
                        <td>{d.request_date}</td>
                        <td>
                            <Link to={`/requestsforbuying/edit/${d.id}`} className='btn btn-info' >Edit</Link>
                            <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Decline</button>
                        </td>
                    </tr>
                )}
              </tbody>
            </table>
        </div>
    </div>

  

    </AdminLayout>       
  )
}

export default  For_buying