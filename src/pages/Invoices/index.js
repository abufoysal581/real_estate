import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Invoices() {
  return (
    <AdminLayout>

<div class="container mt-5">
    <h2 class="text-center">Paid Invoices</h2>

    <div class="card mt-4">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover table-bordered">
            <thead class="table-dark">
              <tr>
                <th>Invoice ID</th>
                <th>Client Name</th>
                <th>Property ID</th>
                <th>Transaction ID</th>
                <th>Total Amount</th>
                <th>Paid Amount</th>
                <th>Payment Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- Example Row --> */}
              <tr>
                <td>INV001234</td>
                <td>John Doe</td>
                <td>#R12345</td>
                <td>TXN00123456</td>
                <td>$5,000</td>
                <td>$5,000</td>
                <td>2024-10-01</td>
                <td>Paid</td>
                <td>
                  <a href="#" class="btn btn-primary btn-sm">View</a>
                  <a href="#" class="btn btn-secondary btn-sm" onclick="window.print();">Print</a>
                </td>
              </tr>
              <tr>
                <td>INV001235</td>
                <td>Jane Smith</td>
                <td>#R67890</td>
                <td>TXN00198765</td>
                <td>$3,500</td>
                <td>$3,500</td>
                <td>2024-09-15</td>
                <td>Paid</td>
                <td>
                  <a href="#" class="btn btn-primary btn-sm">View</a>
                  <a href="#" class="btn btn-secondary btn-sm" onclick="window.print();">Print</a>
                </td>
              </tr>
              <tr>
                <td>INV001236</td>
                <td>Michael Johnson</td>
                <td>#R34567</td>
                <td>TXN00154321</td>
                <td>$7,000</td>
                <td>$7,000</td>
                <td>2024-08-20</td>
                <td>Paid</td>
                <td>
                  <a href="#" class="btn btn-primary btn-sm">View</a>
                  <a href="#" class="btn btn-secondary btn-sm" onclick="window.print();">Print</a>
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

export default Invoices