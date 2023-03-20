import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { Home } from "./components/Home/Home";
import { Contact } from "./components/Contact/Contact";
import { Invoices } from "./components/Invoices/Invoices";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/invoices" element={<Invoices/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
          <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>

    
  </React.StrictMode>
);
