import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Main from './pages/main';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/aboutUs';
import Result from './pages/service/result';
import ServiceEmail from './pages/service/email';
import Rule from './pages/service/rule';
import Upload from './pages/service/upload';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/service" element={<ServiceEmail />} />
                <Route path="/service/rule" element={<Rule />} />
                <Route path="/service/upload" element={<Upload />} />
                <Route path="/service/result" element={<Result />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
