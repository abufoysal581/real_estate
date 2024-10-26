import React, { useEffect, useState } from 'react';
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';


function Property() {
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/property`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/property/${id}`).then(function(response){
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
                        <th>Property Title</th>
                        <th>Image</th>
                        <th>Location</th>
                        <th>Price</th>
                        <th>Type</th>
                        <th>Listing Type</th>
                        <th>Bedrooms</th>
                        <th>Bathrooms</th>
                        <th>area</th>
                        <th>parking</th>
                        <th>description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((d, key) =>
                        <tr key={d.id}>
                            
                            <td>{d.id}</td>
                            <td>{d.property_title}</td>
                            <td>
                                {
                                    d?.image?.split(',').map((src, i) => (
                                        <img src={`${process.env.REACT_APP_BACKEND_URL}/addproperty/${src}`} alt="No Image" width="100%" height="50%" />
                                    ))
                                }
                            </td>
                            <td>{d.location}</td>
                            <td>{d.price}</td>
                            <td>{d.type}</td>
                            <td>{d.listing_type}</td>
                            <td>{d.bedrooms}</td>
                            <td>{d.bathrooms}</td>
                            <td>{d.area}</td>
                            <td>{d.parking}</td>
                            <td>{d.description}</td>
                            <td>
                                <Link to={`/property/edit/${d.id}`} className='btn btn-info' >Edit</Link>
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

export default Property