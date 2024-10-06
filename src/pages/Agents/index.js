import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Agents() {
  return (
    <AdminLayout>

<div class="container mt-5">
    <h1 class="mb-4">Real Estate Agents List</h1>

    {/* <!-- Add Agent Button --> */}
    <div class="mb-3">
        <a href="#" class="btn btn-primary">Add New Agent</a>
    </div>

    {/* <!-- Agents Table --> */}
    <div class="table-responsive">
        <table class="table table-striped table-bordered align-middle">
            <thead class="table-dark">
                <tr>
                    <th>#</th>
                    <th>Agent Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* <!-- Sample Row 1 --> */}
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>johndoe@example.com</td>
                    <td>+1 (555) 123-4567</td>
                    <td>New York</td>
                    <td><span class="badge bg-success">Active</span></td>
                    <td>
                        <a href="#" class="btn btn-sm btn-info">View</a>
                        <a href="#" class="btn btn-sm btn-warning">Edit</a>
                        <a href="#" class="btn btn-sm btn-danger">Delete</a>
                    </td>
                </tr>

                {/* <!-- Sample Row 2 --> */}
                <tr>
                    <td>2</td>
                    <td>Jane Smith</td>
                    <td>janesmith@example.com</td>
                    <td>+1 (555) 987-6543</td>
                    <td>Los Angeles</td>
                    <td><span class="badge bg-danger">Inactive</span></td>
                    <td>
                        <a href="#" class="btn btn-sm btn-info">View</a>
                        <a href="#" class="btn btn-sm btn-warning">Edit</a>
                        <a href="#" class="btn btn-sm btn-danger">Delete</a>
                    </td>
                </tr>
                {/* <!-- Additional rows can be added here --> */}
            </tbody>
        </table>
    </div>
</div>

</AdminLayout>       
)
}

export default Agents