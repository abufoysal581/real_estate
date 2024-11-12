import React, { useEffect, useState } from 'react';
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';


function Allocations() {
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/allocations`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/allocations/${id}`).then(function(response){
            getDatas();
        });
    }
  return (
    <AdminLayout>

<div class="container mt-5">
        <h2 class="mb-4">Properties List</h2>
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Property ID</th>
                        <th>Client ID</th>
                        <th>Property title</th>
                        <th>Allocation date</th>
                        <th>Allocation type</th>                    
                        <th>Price</th>                       
                        <th>Leave date</th>
                        <th>Property docs</th>                       
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((d, key) =>
                        <tr key={d.id}>
                            
                            <td>{d.property_id}</td>
                            <td>{d.client_id}</td>
                            <td>{d.property_title}</td>
                            <td>{d.allocation_date}</td>
                            <td>{d.allocation_type}</td>
                            <td>{d.price}</td>
                            <td>{d.leave_date}</td>
                            <td>{d.property_docs}</td>
                            <td>
                                <Link to={`/allocations/edit/${d.id}`} className='btn btn-info' >Edit</Link>
                                <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
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

export default Allocations