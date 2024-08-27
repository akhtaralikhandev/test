"use client"
import React, { useState, useEffect } from 'react';
import MainSection from "@/components/main/main";
import Loading from '@/components/common/loading';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }
    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <MainSection />
      )}
    </>
  );
};

export default HomePage;
