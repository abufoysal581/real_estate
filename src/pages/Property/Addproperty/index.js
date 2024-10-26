import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout'
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function Addproperty() {

    const [inputs, setInputs] = useState({id:'',image:'',property_title:'',location:'',price:'',type:'',listing_type:'',bedrooms:'',bathrooms:'', area:'', parking:'',description:''});
    const navigate=useNavigate();
    const [selectedFiles, setSelectedFiles] = useState([]); // For image
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/property/${id}`).then(function(response) {
            setInputs(response.data.data);
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

        // Append images to formData
        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('files[]', selectedFiles[i]);
        }

        // Append other form inputs to formData
        for (const property in inputs) {
            formData.append(property, inputs[property]);
        }
        
        try{
            let apiurl='';
            if(inputs.id !==''){
                apiurl=`/property/edit/${inputs.id}`;
            }else{
                apiurl=`/property/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            navigate('/property')
        } 
        catch(e){
            console.log(e);
        }
    }

  return (
    <AdminLayout>

<div className="container mt-5">
        <h2 className="mb-4">Add New Property</h2>
        <form onSubmit={handleSubmit}>
            {/* <!-- Property Title and Type --> */}
            <div className="row mb-3">
                <div className="col-md-6">
                    <label for="propertyTitle" className="form-label">Property Title</label>
                    <input type="text" className="form-control" id="propertyTitle" defaultValue={inputs.property_title} name="property_title" onChange={handleChange} placeholder="Property Title" required/>
                </div>
                <div className="col-md-6">
                    <label for="propertyType" className="form-label">Property Type</label>
                    <select className="form-select" value={inputs.type} name="type" id="propertyType"  placeholder="Type"  onChange={handleChange} required>
                        <option value="">Choose type</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="commercial">Commercial</option>
                        <option value="land">Land</option>
                    </select>
                </div>
            </div>

            {/* <!-- Listing Type and Price --> */}
            <div className="row mb-3">
                <div className="col-md-6">
                    <label for="listingType" className="form-label">Listing Type</label>
                    <select className="form-select" value={inputs.listing_type} id="listingType" name="listing_type" onChange={handleChange}   placeholder="Listing Type"   required>
                        <option value="">Choose listing type</option>
                        <option value="sale">For Sale</option>
                        <option value="rent">For Rent</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label for="price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" defaultValue={inputs.price} name="price" onChange={handleChange} placeholder="Price" required/>
                </div>
            </div>

            {/* <!-- Location --> */}
            <div className="row mb-3">
                <div className="col-md-12">
                    <label for="address" className="form-label">Location</label>
                    <input type="text" className="form-control" id="address"  defaultValue={inputs.location} name="location" onChange={handleChange} placeholder="location"  required/>
                </div>
            </div>

            {/* <!-- Property Features --> */}
            <div className="row mb-3">
                <div className="col-md-3">
                    <label for="bedrooms" className="form-label">Bedrooms</label>
                    <input type="number" className="form-control" id="bedrooms" min="1" defaultValue={inputs.bedrooms} name="bedrooms" onChange={handleChange} placeholder="Enter bedrooms" required/>
                </div>
                <div className="col-md-3">
                    <label for="bathrooms" className="form-label">Bathrooms</label>
                    <input type="number" className="form-control" id="bathrooms" min="1" defaultValue={inputs.bathrooms} name="bathrooms" onChange={handleChange} placeholder="Enter bathrooms" required/>
                </div>
                <div className="col-md-3">
                    <label for="area" className="form-label">Area (sq ft)</label>
                    <input type="number" className="form-control" id="area" defaultValue={inputs.area} name="area" onChange={handleChange} placeholder="Enter area" required/>
                </div>
                <div className="col-md-3">
                    <label for="parkingSpaces" className="form-label">Parking Spaces</label>
                    <input type="number" className="form-control" id="parkingSpaces" defaultValue={inputs.parking} name="parking" onChange={handleChange} placeholder="Enter parking spaces"/>
                </div>
            </div>

            {/* <!-- Description --> */}
            <div className="mb-3">
                <label for="shortDescription" className="form-label">Short Description</label>
                <textarea className="form-control" id="shortDescription" rows="2" defaultValue={inputs.description} name="description" onChange={handleChange} placeholder="Enter a short description" required></textarea>
            </div>
           

            {/* <!-- Media Uploads --> */}
            <div className="mb-3">
                <label for="propertyImages" className="form-label">Upload Property Images</label>
                <input type="file" id="image" className="form-control" defaultValue={inputs.image} name="image" multiple onChange={handleFileChange} />
                {/* <input type="file" className="form-control" id="propertyImages"  defaultValue={inputs.image} name="image" onChange={handleChange} placeholder="image"  multiple accept="image/*"/> */}
            </div>
           




            {/* <!-- Submit Buttons --> */}
            <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-success">Publish</button>
                <button type="reset" className="btn btn-secondary">Cancel</button>
            </div>
        </form>
    </div>
  

    </AdminLayout>       
  )
}

export default Addproperty