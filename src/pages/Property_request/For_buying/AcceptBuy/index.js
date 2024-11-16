import React, { useEffect, useState } from 'react';
import axios from '../../../../components/axios';
import AdminLayout from '../../../../layouts/AdminLayout'
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function AcceptBuy() {

    const userdata=JSON.parse(localStorage.getItem('front_userdata'));
    const { id } = useParams();
    const [inputs, setInputs] = useState([]);
    const navigate=useNavigate();
    const [selectedFiles, setSelectedFiles] = useState([]); // For image

    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/requestsforbuying/${id}`).then(function(response) {
            setInputs(response.data.data);
            
            setInputs(values => ({...values, ['total_amount']: response.data.data.property?.price}));
        });
    }

    useEffect(() => {
        if(id){
            getDatas();
        }
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    // Handle file input for images
    const handleFileChange = (e) => {
        setSelectedFiles(e.target.files);
    }

    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log(inputs)
      const formData = new FormData();
      
      try{
          let apiurl=`/requestsforbuying/create`;
          
          let response= await axios({
              method: 'post',
              responsiveTYpe: 'json',
              url: `${process.env.REACT_APP_API_URL}${apiurl}`,
              data: inputs,
              headers: {
                  'Content-Type': 'multipart/form-data',
              }
          });
          alert('form submited successfully');
          navigate('/')
      } 
      catch(e){
          console.log(e);
      }
  }



  return (
    <AdminLayout>


<div>
  <div className="container mt-5">
        <h2>Accept Buy Request</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" defaultValue={inputs.client_name} name="client_name" onChange={handleChange}  required/>
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email Address</label>
                <input type="text" className="form-control" id="email" defaultValue={inputs.email} name="email" onChange={handleChange}  required/>
            </div>
            <div className="mb-3">
                <label for="phone" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="phone" defaultValue={inputs.phone} name="phone" onChange={handleChange}  required/>
            </div>
            <div className="mb-3">
                <label for="phone" className="form-label">Total Amount</label>
                <input type="text" className="form-control" id="total_amount" defaultValue={inputs.total_amount} name="total_amount" onChange={handleChange}  required/>
            </div>
            <div className="mb-3">
                <label for="phone" className="form-label">Paid Amount</label>
                <input type="text" className="form-control" id="paid_amount" defaultValue={inputs.paid_amount} name="paid_amount" onChange={handleChange}  required/>
            </div>
            <div className="mb-3">
                <label for="phone" className="form-label">Remaining Amount</label>
                <input type="text" className="form-control" id="remaining_amount" defaultValue={inputs.remaining_amount} name="remaining_amount" onChange={handleChange}  required/>
            </div>
            <div className="mb-3">
                <label for="phone" className="form-label">Status</label>
                <input type="text" className="form-control" id="status" defaultValue={inputs.status} name="status" onChange={handleChange}  required/>
            </div>
            <button type="submit" className="btn btn-primary">Submit Request</button>
        </form>
    </div>
</div>

    </AdminLayout>       
  )
}

export default AcceptBuy