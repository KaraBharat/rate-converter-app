import { useState, useEffect } from "react";

export const useConversionAPI = (
  amount: string,
  fromCurrency: string,
  toCurrency: string,
) => {
  const [result, setResult] = useState<string>("");
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleConvert = async () => {
      if (!amount) {
        setResult("");
        setExchangeRate(null);
        return;
      }

      try {
        setIsLoading(true);
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_CONVERTER_API_KEY}/pair/${fromCurrency}/${toCurrency}`,
        );
        const data = await response.json();

        if (data.result === "success") {
          const rate = data.conversion_rate;
          const convertedAmount = parseFloat(amount) * rate;
          setResult(convertedAmount.toFixed(2));
          setExchangeRate(rate);
        } else {
          throw new Error("Failed to fetch exchange rate");
        }
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
        setResult("Error");
        setExchangeRate(null);
      } finally {
        setIsLoading(false);
      }
    };

    handleConvert();
  }, [amount, fromCurrency, toCurrency]);

  return { result, exchangeRate, isLoading };
};
