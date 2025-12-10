// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from './constants/locales';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Network from './pages/Network';
import ServicesPage from "./pages/ServicesPage";
import LocaleGuard from './components/LocaleGuard'; // <- import the guard


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* root -> default locale under basename (/prs) */}
        <Route path="/" element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />} />

        {/* guarded locale-scoped routes (basename already provides /prs) */}
        <Route path="/:locale" element={<LocaleGuard />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="network" element={<Network />} />
          <Route path="services" element={<ServicesPage />} />
          {/* more pages... */}
          <Route path="*" element={<Home />} />
        </Route>

        {/* fallback */}
        <Route path="*" element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />} />
      </Routes>
      <Footer />
    </>
  );
}
