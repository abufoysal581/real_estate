import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout'
import { Link } from 'react-router-dom';

function Soldproperty() {
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/soldpropertylist`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/soldpropertylist/${id}`).then(function(response){
            getDatas();
        });
    }

  return (
    <AdminLayout>

<div class="container mt-5">
    <h1 class="mb-4">Sold Properties List</h1>

    {/* <!-- Add Property Button --> */}
    <div class="mb-3">
        <a href="#" class="btn btn-primary">Add New Property</a>
    </div>

    {/* <!-- Rented Properties Table --> */}
    <div class="table-responsive">
        <table class="table table-striped table-bordered align-middle">
            <thead class="table-dark">
                <tr>
                    <th>#</th>
                    <th>Property ID</th>
                    <th>Property Title</th>
                    <th>Client Name</th>
                    <th>Client ID</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Total Installments</th>
                    <th>Paid Amount</th>
                    <th>Total Amount</th>
                    <th>Remaining Amount</th>
                    <th>Remaining Installments</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* <!-- Sample Row 1 --> */}
                {data && data.map((d, key) =>
                                        <tr key={d.id}>
                                            <td>{d.id}</td>
                                            <td>{d.property_id}</td>
                                            <td>{d.property_title}</td>
                                            <td>{d.client_name}</td>
                                            <td>{d.client_id}</td>
                                            <td>{d.email}</td>
                                            <td>{d.phone}</td>
                                            <td>{d.rental_duration}</td>
                                            <td>{d.total_installments}</td>
                                            <td>{d.remaining_installments}</td>
                                            <td>{d.total_amount}</td>
                                            <td>{d.paid_amount}</td>
                                            <td>{d.remaining_amount}</td>
                                            
                                            <td>
                                                <Link to={`/soldpropertylist/edit/${d.id}`} className='btn btn-info' >Edit</Link>
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
export default Soldproperty