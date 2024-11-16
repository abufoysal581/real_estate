import * as React from 'react';


import Register from './pages/Register';
import Login from './pages/Login';

import Dashboard from './pages/Dashboard';
import Addproperty from './pages/Property/Addproperty';
import Property from './pages/Property';
import For_rent from './pages/Property_request/For_rent';
import For_buying from './pages/Property_request/For_buying';
import Agents from './pages/Agents';
import Rentedproperty from './pages/Rentedproperty';
import Soldproperty from './pages/Soldproperty';
import Paymentssold from './pages/Paymentssold';
import Paymentsrented from './pages/Paymentsrented';
import Invoices from './pages/Invoices';
import Clients from './pages/Clients';
import Catagory from './pages/Catagory';
import CatagoryAdd from './pages/Catagory/CatagoryAdd';
import Allocations from './pages/Allocations';
import AcceptBuy from './pages/Property_request/For_buying/AcceptBuy';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from './components/protected';
import AcceptRent from './pages/Property_request/For_rent/AcceptRent';
function App() {
  const isSignedIn = localStorage.getItem("access_token") || false;
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path={"/"} element={
            <Protected isSignedIn={isSignedIn} >
              <Dashboard />
            </Protected>
          } />

          <Route path={"/property/addproperty"} element={
            <Protected isSignedIn={isSignedIn} >
              <Addproperty />
            </Protected>
          } />
          <Route path={"/property/edit/:id"} element={
            <Protected isSignedIn={isSignedIn} >
              <Addproperty />
            </Protected>
          } />

          <Route path={"/property"} element={
            <Protected isSignedIn={isSignedIn} >
              <Property />
            </Protected>
          } />

          <Route path={"/property_request/For_rent"} element={
            <Protected isSignedIn={isSignedIn} >
              <For_rent />
            </Protected>
          } />

          <Route path={"/property_request/For_buying"} element={
            <Protected isSignedIn={isSignedIn} >
              <For_buying />
            </Protected>
          } />

          <Route path={"/agents"} element={
            <Protected isSignedIn={isSignedIn} >
              <Agents />
            </Protected>
          } />

          <Route path={"/rentedproperty"} element={
            <Protected isSignedIn={isSignedIn} >
              <Rentedproperty />
            </Protected>
          } />

          <Route path={"/soldproperty"} element={
            <Protected isSignedIn={isSignedIn} >
              <Soldproperty />
            </Protected>
          } />

          <Route path={"/paymentssold"} element={
            <Protected isSignedIn={isSignedIn} >
              <Paymentssold />
            </Protected>
          } />

          <Route path={"/paymentsrented"} element={
            <Protected isSignedIn={isSignedIn} >
              <Paymentsrented />
            </Protected>
          } />

          <Route path={"/invoices"} element={
            <Protected isSignedIn={isSignedIn} >
              <Invoices />
            </Protected>
          } />
          
          <Route path={"/clients"} element={
            <Protected isSignedIn={isSignedIn} >
              <Clients />
            </Protected>
          } />

          <Route path={"/catagory"} element={
            <Protected isSignedIn={isSignedIn} >
              <Catagory />
            </Protected>
          } />

          <Route path={"/catagory/catagoryadd"} element={
            <Protected isSignedIn={isSignedIn} >
              <CatagoryAdd />
            </Protected>
          } />

          <Route path={"/allocations"} element={
            <Protected isSignedIn={isSignedIn} >
              <Allocations />
            </Protected>
          } />

          <Route path={"/Property_request/For_buying/Accept/:id"} element={
            <Protected isSignedIn={isSignedIn} >
              <AcceptBuy />
            </Protected>
          } />
          <Route path={"/Property_request/For_rent/Accept/:id"} element={
            <Protected isSignedIn={isSignedIn} >
              <AcceptRent />
            </Protected>
          } />
        
        </Routes>
      </BrowserRouter>
  );
}

export default App;
