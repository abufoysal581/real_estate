import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Clients() {
  return (
    <AdminLayout>

<div class="container mt-5">
    <h2 class="text-center">Client List</h2>

    <div class="card mt-4">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover table-bordered">
            <thead class="table-dark">
              <tr>
                <th>Client ID</th>
                <th>Client Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- Example Row --> */}
              <tr>
                <td>C001</td>
                <td>John Doe</td>
                <td>johndoe@example.com</td>
                <td>(123) 456-7890</td>
                <td>123 Main St, Anytown, USA</td>
                <td>
                  <a href="#" class="btn btn-primary btn-sm">View</a>
                  <a href="#" class="btn btn-warning btn-sm">Edit</a>
                  <a href="#" class="btn btn-danger btn-sm">Delete</a>
                </td>
              </tr>
              <tr>
                <td>C002</td>
                <td>Jane Smith</td>
                <td>janesmith@example.com</td>
                <td>(098) 765-4321</td>
                <td>456 Elm St, Othertown, USA</td>
                <td>
                  <a href="#" class="btn btn-primary btn-sm">View</a>
                  <a href="#" class="btn btn-warning btn-sm">Edit</a>
                  <a href="#" class="btn btn-danger btn-sm">Delete</a>
                </td>
              </tr>
              <tr>
                <td>C003</td>
                <td>Michael Johnson</td>
                <td>michaelj@example.com</td>
                <td>(555) 123-4567</td>
                <td>789 Maple St, Thistown, USA</td>
                <td>
                  <a href="#" class="btn btn-primary btn-sm">View</a>
                  <a href="#" class="btn btn-warning btn-sm">Edit</a>
                  <a href="#" class="btn btn-danger btn-sm">Delete</a>
                </td>
              </tr>
              {/* <!-- Additional rows here --> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>



</AdminLayout>       
  )
}

export default Clients