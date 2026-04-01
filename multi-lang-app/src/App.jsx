// src/App.jsx
import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { DEFAULT_LOCALE } from "./constants/locales";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Network from "./pages/Network";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import LocaleGuard from "./components/LocaleGuard";
import ScrollToTop from "./components/ScrollToTop";
import Home1 from "./pages/Home1";

function AppContent() {
  const location = useLocation();
  const { pathname } = useLocation();

  // 🔑 Detect HOME only
  const isHome =
    location.pathname === "/fr" ||
    location.pathname === "/en" ||
    location.pathname === "/esp"||
    pathname.endsWith("/home1");

  return (
    <>
      <Header variant={isHome ? "home" : "default"} />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />} />

        <Route path="/:locale" element={<LocaleGuard />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="network" element={<Network />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
          <Route path="home1" element={<Home1 />} />
        </Route>

        <Route path="*" element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />} />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return <AppContent />;
}
