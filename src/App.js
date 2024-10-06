import * as React from 'react';


import Register from './pages/Register';
import Login from './pages/Login';

import Dashboard from './pages/Dashboard';
import Addproperty from './pages/Addproperty';
import Propertylist from './pages/Propertylist';
import Propertyrqstrent from './pages/Propertyrqstrent';
import Propertyrqstbuy from './pages/Propertyrqstbuy';
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

          <Route path={"/addproperty"} element={
            <Protected isSignedIn={isSignedIn} >
              <Addproperty />
            </Protected>
          } />

          <Route path={"/propertylist"} element={
            <Protected isSignedIn={isSignedIn} >
              <Propertylist />
            </Protected>
          } />

          <Route path={"/propertyrqstrent"} element={
            <Protected isSignedIn={isSignedIn} >
              <Propertyrqstrent />
            </Protected>
          } />

          <Route path={"/propertyrqstbuy"} element={
            <Protected isSignedIn={isSignedIn} >
              <Propertyrqstbuy />
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
