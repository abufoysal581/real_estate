import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout'
import { Link } from 'react-router-dom';

function Rentedproperty() {

    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/rentedpropertylist`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/rentedpropertylist/${id}`).then(function(response){
            getDatas();
        });
    }
  return (
    <AdminLayout>

<div class="container mt-5">
    <h1 class="mb-4">Rented Properties List</h1>

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
                    <th>Property Address</th>
                    <th>Client Name</th>
                    <th>Client ID</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Rental Duration</th>
                    <th>Total Installments</th>
                    <th>Remaining Installments</th>
                    <th>Total Amount</th>
                    <th>Paid Amount</th>
                    <th>Remaining Amount</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* <!-- Sample Row 1 --> */}
                {data && data.map((d, key) =>
                                        <tr key={d.id}>
                                         
                                            <td>{d.id}</td>
                                            <td></td>
                                            <td>{d.property_title}</td>
                                            <td>{d.property_address}</td>
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
                                                <Link to={`/rentedpropertylist/edit/${d.id}`} className='btn btn-info' >Edit</Link>
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
export default Rentedproperty