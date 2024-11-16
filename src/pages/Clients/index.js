import React, { useEffect, useState } from 'react';
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Clients() {


  const[data, setData]=useState([]);
  useEffect(() => {
      getDatas();
  }, []);

  function getDatas() {
      axios.get(`${process.env.REACT_APP_API_URL}/clients`).then(function(response) {
          setData(response.data.data);
      });
  }
  const deleteData = (id) => {
      axios.delete(`${process.env.REACT_APP_API_URL}/clients/${id}`).then(function(response){
          getDatas();
      });
  }
return (

    <AdminLayout>

<div class="container mt-5">
        <h2 class="mb-4">Client list</h2>
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((d, key) =>
                        <tr key={d.id}>
                            
                            <td>{d.id}</td>
                            <td>{d.client_name}</td>
                            {/* <td>
                                {
                                    d?.image?.split(',').map((src, i) => (
                                        <img src={`${process.env.REACT_APP_BACKEND_URL}/clients/${src}`} alt="No Image" width="100%" height="50%" />
                                    ))
                                }
                            </td> */}
                            <td>{d.email}</td>
                            <td>{d.phone}</td>
                            <td>{d.address}</td>
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

export default Clients