import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Propertylist() {
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
                        <th>Image</th>
                        <th>Property Title</th>
                        <th>Location</th>
                        <th>Price</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- Property Item 1 --> */}
                    <tr>
                        <td>1</td>
                        <td>Z0001</td>
                        <td><img src="https://via.placeholder.com/100x60" alt="Property Image" class="img-fluid"/></td>
                        <td>Luxury Apartment</td>
                        <td>New York, NY</td>
                        <td>$2,000,000</td>
                        <td>For Sale</td>
                        <td><span class="badge bg-success">Available</span></td>
                        <td>
                            <a href="#" class="btn btn-info btn-sm">View</a>
                            <a href="#" class="btn btn-warning btn-sm">Edit</a>
                            <a href="#" class="btn btn-danger btn-sm">Delete</a>
                        </td>
                    </tr>
                    {/* <!-- Property Item 2 --> */}
                    <tr>
                        <td>2</td>
                        <td>Z0002</td>
                        <td><img src="https://via.placeholder.com/100x60" alt="Property Image" class="img-fluid"/></td>
                        <td>Modern House</td>
                        <td>Los Angeles, CA</td>
                        <td>$1,500,000</td>
                        <td>For Sale</td>
                        <td><span class="badge bg-danger">Sold</span></td>
                        <td>
                            <a href="#" class="btn btn-info btn-sm">View</a>
                            <a href="#" class="btn btn-warning btn-sm">Edit</a>
                            <a href="#" class="btn btn-danger btn-sm">Delete</a>
                        </td>
                    </tr>
                    {/* <!-- Property Item 3 --> */}
                    <tr>
                        <td>3</td>
                        <td>Z0003</td>
                        <td><img src="https://via.placeholder.com/100x60" alt="Property Image" class="img-fluid"/></td>
                        <td>Office Space</td>
                        <td>Chicago, IL</td>
                        <td>$5,000/month</td>
                        <td>For Rent</td>
                        <td><span class="badge bg-warning">Rented</span></td>
                        <td>
                            <a href="#" class="btn btn-info btn-sm">View</a>
                            <a href="#" class="btn btn-warning btn-sm">Edit</a>
                            <a href="#" class="btn btn-danger btn-sm">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>



</AdminLayout>       
  )
}

export default Propertylist