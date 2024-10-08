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


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from './components/protected';
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

          <Route path={"/Property/Addproperty"} element={
            <Protected isSignedIn={isSignedIn} >
              <Addproperty />
            </Protected>
          } />

          <Route path={"/Property"} element={
            <Protected isSignedIn={isSignedIn} >
              <Property />
            </Protected>
          } />

          <Route path={"/Property_request/For_rent"} element={
            <Protected isSignedIn={isSignedIn} >
              <For_rent />
            </Protected>
          } />

          <Route path={"/Property_request/For_buying"} element={
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
        
        </Routes>
      </BrowserRouter>
  );
}

export default App;
