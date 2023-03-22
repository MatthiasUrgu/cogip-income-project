

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { Home } from "./Page/Home/Home";
import { Contact } from "./Page/Contact/Contact";
import { Invoices } from "./Page/Invoices/Invoices";
import SignIn from "./Page/SignIn/SignIn";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/invoices" element={<Invoices/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
        </Route>
          <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>

    
  </React.StrictMode>
);
