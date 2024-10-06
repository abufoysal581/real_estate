import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Soldproperty() {
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
                    <th>Property Address</th>
                    <th>Tenant Name</th>
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
                <tr>
                    <td>1</td>
                    <td>Z0008</td>
                    <td>123 Main St, New York, NY</td>
                    <td>John Doe</td>
                    <td>12</td>
                    <td>$6,000</td>
                    <td>$12,000</td>
                    <td>$6,000</td>
                    <td>6</td>
                    <td>
                        <a href="#" class="btn btn-sm btn-info">View</a>
                        <a href="#" class="btn btn-sm btn-warning">Edit</a>
                        <a href="#" class="btn btn-sm btn-danger">Delete</a>
                    </td>
                </tr>

                {/* <!-- Sample Row 2 --> */}
                <tr>
                    <td>2</td>
                    <td>Z0009</td>
                    <td>456 Oak Ave, Los Angeles, CA</td>
                    <td>Jane Smith</td>
                    <td>24</td>
                    <td>$24,000</td>
                    <td>$48,000</td>
                    <td>$24,000</td>
                    <td>12</td>
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
export default Soldproperty