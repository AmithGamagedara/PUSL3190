import React from "react";
import { useState, useEffect } from 'react';

export default function Timer({ deadline }) {
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const difference = deadline - now;
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  const renderSquare = (value, label) => {
    return (
      <div className="w-16 h-16 p-4 border-2 border-white rounded-lg sm:w-24 sm:h-24">
        <div className="text-center">
          <div className="font-bold sm:text-3xl">{value}</div>
          <div className="text-xs sm:text-sm">{label}</div>
        </div>
      </div>
    );
  };

  const { days, hours, minutes, seconds } = timeRemaining;
    
  return (
    <div className="bg-gradient-to-tl from-[#161616] to-[#101010] py-8 sm:py-12 w-full flex items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-bold underline underline-offset-1 text-sm sm:text-xl text-slate-50 sm:p-8 decoration-[#FF1616] decoration-4">Next Event</h1>
        <div className="flex items-center justify-center mb-4 space-x-4 sm:mb-12 text-slate-50">
          {renderSquare(days, 'Days')}
          <div className="text-sm font-bold sm:text-3xl">:</div>
          {renderSquare(hours, 'Hours')}
          <div className="text-sm font-bold sm:text-3xl">:</div>
          {renderSquare(minutes, 'Minutes')}
          <div className="text-sm font-bold sm:text-3xl">:</div>
          {renderSquare(seconds, 'Seconds')}
        </div>
      </div>
    </div>    
  );
}