"use client";

import React from "react";

type Props = {
  amount: string;
  fromCurrency: string;
  toCurrency: string;
  result: string;
  exchangeRate: number;
};

const ConversionResult = ({
  amount,
  fromCurrency,
  toCurrency,
  result,
  exchangeRate,
}: Props) => {
  return (
    <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6 text-center shadow-lg">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
      <div className="space-y-2">
        <p className="text-sm font-medium uppercase tracking-wide text-indigo-600">
          Converted Amount
        </p>
        <div className="flex items-center justify-center space-x-2">
          <p className="text-2xl font-semibold text-indigo-800">
            {amount} <span className="text-indigo-800">{fromCurrency}</span>
          </p>
        </div>
        <p className="text-4xl font-bold tracking-tight text-purple-600">
          {result} <span className="text-purple-500">{toCurrency}</span>
        </p>
      </div>
      {exchangeRate && (
        <div className="mt-4 text-xs font-medium text-indigo-400">
          Exchange rate: 1 {fromCurrency} = {exchangeRate.toFixed(4)}{" "}
          {toCurrency}
        </div>
      )}
      <div className="absolute bottom-0 right-0 -mb-8 -mr-8 h-24 w-24 rounded-tl-full bg-gradient-to-tl from-indigo-200 to-purple-200 opacity-50"></div>
    </div>
  );
};

export default ConversionResult;
