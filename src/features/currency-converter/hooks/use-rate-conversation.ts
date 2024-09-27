import React, { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useConversionAPI } from "./use-conversion-api";

const useRateConversation = () => {
  // State for input values
  const [amount, setAmount] = useState<string>("1");
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");

  // Debounce the input values
  const debouncedAmount = useDebounce(amount, 300);
  const debouncedFromCurrency = useDebounce(fromCurrency, 300);
  const debouncedToCurrency = useDebounce(toCurrency, 300);

  // Custom hook for currency conversion
  const { result, exchangeRate, isLoading } = useConversionAPI(
    debouncedAmount,
    debouncedFromCurrency,
    debouncedToCurrency,
  );

  // Function to handle currency switch
  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    result,
    exchangeRate,
    handleSwitch,
    isLoading,
  };
};

export default useRateConversation;
