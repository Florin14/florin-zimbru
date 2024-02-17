import React, { useState, useEffect } from "react";
import { Suspense } from "react";

import "./index.css";

import Layout from "./layout/Layout";
import Navbar from "./layout/Navbar";
import { Preloader } from "./layout/Preloader";
import { GoToTop } from "./layout/GoToTop";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense
      fallback={
        <>
          <Preloader />
        </>
      }
    >
      {loading ? (
        <>
          <Preloader />
        </>
      ) : (
        <>
          <Navbar />
          <Layout />
          <GoToTop />
        </>
      )}
    </Suspense>
  );
};

export default App;
