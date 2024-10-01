import React,{useState,useEffect} from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Users() {
 
  return (
    <AdminLayout>

    <div className="container mt-5">
      <h2>User List</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <th>001</th>
            <th>Kamal</th>
            <th>kamal123@gmail.com</th>
            <th>01555555555</th>
            <th>Null</th>
          </tr>
          <tr>
            <th>002</th>
            <th>Jamal</th>
            <th>jamal123@gmail.com</th>
            <th>01555555554</th>
            <th>Null</th>
          </tr>
          <tr>
            <th>003</th>
            <th>Nur</th>
            <th>Nur123@gmail.com</th>
            <th>01555555556</th>
            <th>Null</th>
          </tr>
          <tr>
            <th>004</th>
            <th>Tanim</th>
            <th>tanim123@gmail.com</th>
            <th>01555555557</th>
            <th>Null</th>
          </tr>
          <tr>
            <th>005</th>
            <th>Tanbhir</th>
            <th>Tanbhir@gmail.com</th>
            <th>01555555558</th>
            <th>Null</th>
          </tr>
        </tbody>
        
      </table>
    </div>


    </AdminLayout>
  )
}

export default Users;