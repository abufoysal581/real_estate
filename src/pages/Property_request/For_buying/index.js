import React from 'react'
import AdminLayout from '../../../layouts/AdminLayout'

function For_buying() {
  return (
    <AdminLayout>

<div className="container mt-5">
        <h2 className="mb-4">Property Purchase Requests</h2>
        <div className="table-responsive">
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Client Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Requested Property</th>
                        <th>Request Date</th>
                        <th>Offer Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- Request Item 1 --> */}
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>johndoe@example.com</td>
                        <td>+1 555-1234</td>
                        <td>Luxury Apartment - New York, NY</td>
                        <td>2024-09-01</td>
                        <td>$2,000,000</td>
                        <td><span className="badge bg-warning">Pending</span></td>
                        <td>
                            <a href="#" className="btn btn-success btn-sm">Approve</a>
                            <a href="#" className="btn btn-danger btn-sm">Reject</a>
                        </td>
                    </tr>
                    {/* <!-- Request Item 2 --> */}
                    <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>janesmith@example.com</td>
                        <td>+1 555-5678</td>
                        <td>Modern House - Los Angeles, CA</td>
                        <td>2024-09-03</td>
                        <td>$1,500,000</td>
                        <td><span className="badge bg-success">Approved</span></td>
                        <td>
                            <a href="#" className="btn btn-info btn-sm">View</a>
                            <a href="#" className="btn btn-secondary btn-sm">Cancel</a>
                        </td>
                    </tr>
                    {/* <!-- Request Item 3 --> */}
                    <tr>
                        <td>3</td>
                        <td>Emily Davis</td>
                        <td>emilydavis@example.com</td>
                        <td>+1 555-9876</td>
                        <td>Office Space - Chicago, IL</td>
                        <td>2024-09-10</td>
                        <td>$1,000,000</td>
                        <td><span className="badge bg-danger">Rejected</span></td>
                        <td>
                            <a href="#" className="btn btn-info btn-sm">View</a>
                            <a href="#" className="btn btn-secondary btn-sm">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

  

    </AdminLayout>       
  )
}

export default  For_buying