"use client";

import { useEffect } from "react";

export const ErrorComponent = () => {
  useEffect(() => {
    throw new Error("Teste erro");
  }, []);
  
  return <h2>Error component</h2>;
};
