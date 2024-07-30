import { useEffect, useState } from 'react';

export const Useinterval = (callback, delay) => {
    useEffect(() => {
      const intervalId = setInterval(callback, delay);
  
      return () => clearInterval(intervalId);
    }, [callback, delay]);
  };
  