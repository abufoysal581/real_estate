import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Addproperty() {
  return (
    <AdminLayout>

<div className="container mt-5">
        <h2 className="mb-4">Add New Property</h2>
        <form>
            {/* <!-- Property Title and Type --> */}
            <div className="row mb-3">
                <div className="col-md-6">
                    <label for="propertyTitle" className="form-label">Property Title</label>
                    <input type="text" className="form-control" id="propertyTitle" placeholder="Enter property title" required/>
                </div>
                <div className="col-md-6">
                    <label for="propertyType" className="form-label">Property Type</label>
                    <select className="form-select" id="propertyType" required>
                        <option selected disabled>Choose type</option>
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
                    <select className="form-select" id="listingType" required>
                        <option selected disabled>Choose listing type</option>
                        <option value="sale">For Sale</option>
                        <option value="rent">For Rent</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label for="price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" placeholder="Enter price" required/>
                </div>
            </div>

            {/* <!-- Location --> */}
            <div className="row mb-3">
                <div className="col-md-12">
                    <label for="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter full address" required/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label for="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" placeholder="Enter city" required/>
                </div>
                <div className="col-md-3">
                    <label for="state" className="form-label">State</label>
                    <input type="text" className="form-control" id="state" placeholder="Enter state" required/>
                </div>
                <div className="col-md-3">
                    <label for="postalCode" className="form-label">Postal Code</label>
                    <input type="text" className="form-control" id="postalCode" placeholder="Enter postal code" required/>
                </div>
            </div>

            {/* <!-- Map Location (optional) --> */}
            <div className="row mb-3">
                <div className="col-md-6">
                    <label for="latitude" className="form-label">Latitude</label>
                    <input type="text" className="form-control" id="latitude" placeholder="Latitude"/>
                </div>
                <div className="col-md-6">
                    <label for="longitude" className="form-label">Longitude</label>
                    <input type="text" className="form-control" id="longitude" placeholder="Longitude"/>
                </div>
            </div>

            {/* <!-- Property Features --> */}
            <div className="row mb-3">
                <div className="col-md-3">
                    <label for="bedrooms" className="form-label">Bedrooms</label>
                    <input type="number" className="form-control" id="bedrooms" min="1" placeholder="Enter bedrooms" required/>
                </div>
                <div className="col-md-3">
                    <label for="bathrooms" className="form-label">Bathrooms</label>
                    <input type="number" className="form-control" id="bathrooms" min="1" placeholder="Enter bathrooms" required/>
                </div>
                <div className="col-md-3">
                    <label for="area" className="form-label">Area (sq ft)</label>
                    <input type="number" className="form-control" id="area" placeholder="Enter area" required/>
                </div>
                <div className="col-md-3">
                    <label for="parkingSpaces" className="form-label">Parking Spaces</label>
                    <input type="number" className="form-control" id="parkingSpaces" placeholder="Enter parking spaces"/>
                </div>
            </div>

            {/* <!-- Description --> */}
            <div className="mb-3">
                <label for="shortDescription" className="form-label">Short Description</label>
                <textarea className="form-control" id="shortDescription" rows="2" placeholder="Enter a short description" required></textarea>
            </div>
            <div className="mb-3">
                <label for="detailedDescription" className="form-label">Detailed Description</label>
                <textarea className="form-control" id="detailedDescription" rows="4" placeholder="Enter a detailed description"></textarea>
            </div>

            {/* <!-- Media Uploads --> */}
            <div className="mb-3">
                <label for="propertyImages" className="form-label">Upload Property Images</label>
                <input type="file" className="form-control" id="propertyImages" multiple accept="image/*"/>
            </div>
            <div className="mb-3">
                <label for="videoLink" className="form-label">Video Tour Link</label>
                <input type="url" className="form-control" id="videoLink" placeholder="Enter video tour link (YouTube, Vimeo)"/>
            </div>

            {/* <!-- SEO Metadata (Optional) --> */}
            <div className="mb-3">
                <label for="metaTitle" className="form-label">Meta Title</label>
                <input type="text" className="form-control" id="metaTitle" placeholder="Enter meta title for SEO"/>
            </div>
            <div className="mb-3">
                <label for="metaDescription" className="form-label">Meta Description</label>
                <textarea className="form-control" id="metaDescription" rows="2" placeholder="Enter meta description for SEO"></textarea>
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