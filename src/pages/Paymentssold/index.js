import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Paymentssold() {
  return (
    <AdminLayout>

<div class="container mt-5">
    <h2 class="text-center">Sold Property Payments and Installments</h2>

    <div class="card mt-4">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover table-bordered">
            <thead class="table-dark">
              <tr>
                <th>Client Name</th>
                <th>Property ID</th>
                <th>Transaction ID</th>
                <th>Payment Type</th>
                <th>Total Amount</th>
                <th>Paid Amount</th>
                <th>Total Installments</th>
                <th>Paid Installments</th>
                <th>Remaining Installments</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- Example Row --> */}
              <tr>
                <td>John Doe</td>
                <td>#S12345</td>
                <td>TXN00123456</td>
                <td>Installment</td>
                <td>$250,000</td>
                <td>$100,000</td>
                <td>10</td>
                <td>4</td>
                <td>6</td>
                <td>
                  <a href="#" class="btn btn-primary btn-sm">View Invoice</a>
                  <a href="#" class="btn btn-info btn-sm">View Remaining Installments</a>
                </td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>#S67890</td>
                <td>TXN00198765</td>
                <td>Full Payment</td>
                <td>$300,000</td>
                <td>$300,000</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>
                  <a href="#" class="btn btn-primary btn-sm">View Invoice</a>
                </td>
              </tr>
              <tr>
                <td>Michael Johnson</td>
                <td>#S34567</td>
                <td>TXN00154321</td>
                <td>Installment</td>
                <td>$500,000</td>
                <td>$250,000</td>
                <td>10</td>
                <td>5</td>
                <td>5</td>
                <td>
                  <a href="#" class="btn btn-primary btn-sm">View Invoice</a>
                  <a href="#" class="btn btn-info btn-sm">View Remaining Installments</a>
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

export default Paymentssold