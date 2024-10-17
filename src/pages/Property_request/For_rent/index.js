import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout'
import { Link } from 'react-router-dom';

function For_rent() {

    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/requestsforrent`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/requestsforrent/${id}`).then(function(response){
            getDatas();
        });
    }

  return (
    <AdminLayout>

<div className="container mt-5">
        <h2 className="mb-4">Property Rental Requests</h2>
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
                        <th>Requested Property ID</th>
                        <th>Request Date</th>
                        <th>Rental Duration</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- Request Item 1 --> */}
                    {data && data.map((d, key) =>
                                        <tr key={d.id}>
                                         
                                            <td>{d.id}</td>
                                            <td>{d.client_name}</td>
                                            <td>{d.client_id}</td>
                                            <td>{d.email}</td>
                                            <td>{d.phone}</td>
                                            <td>{d.property_title}</td>
                                            <td>{d.property_id}</td>
                                            <td>{d.request_date}</td>
                                            <td>{d.rental_duration}</td>
                                            
                                            <td>
                                                <Link to={`/requestsforrent/edit/${d.id}`} className='btn btn-info' >Edit</Link>
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

export default For_rent