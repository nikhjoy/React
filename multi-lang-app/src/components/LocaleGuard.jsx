// src/components/LocaleGuard.jsx
import React from "react";
import { useParams, Navigate, Outlet } from "react-router-dom";
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from "../constants/locales";

export default function LocaleGuard() {
  const { locale } = useParams();

  // redirect to default if missing / unsupported
  if (!locale || !SUPPORTED_LOCALES.includes(locale)) {
    return <Navigate to={`/${DEFAULT_LOCALE}`} replace />;
  }

  return <Outlet />;
}
