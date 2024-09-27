"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import ConversionResult from "./conversion-result";
import ConversionResultSkeleton from "./conversion-result-skeleton";
import useRateConversation from "../hooks/use-rate-conversation";
import { ArrowUpDown } from "lucide-react";


export const CurrencyConverterCard: React.FC = () => {
  // Available currencies
  const currencies = [
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "EUR", symbol: "€", name: "Euro" },
    { code: "GBP", symbol: "£", name: "British Pound" },
    { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  ];

  const {
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
  } = useRateConversation();

  return (
    <Card className="w-96 rounded-2xl bg-white p-10 shadow-lg">
      {/* Amount Input Section */}
      <div className="space-y-6">
        <div className="mb-6">
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="h-12 w-full rounded-full border-stone-300 bg-white/50 text-center"
          />
        </div>

        {/* Currency Selection Section */}
        <div className="flex w-full flex-col items-center justify-center gap-1">
          <div className="w-full">
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger className="h-12 w-full rounded-full border-stone-300 bg-stone-50">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    {currency.symbol} {currency.code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="rounded-full border border-stone-300 bg-stone-50 p-2 focus:ring-offset-2">
            <div className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <Button
                onClick={handleSwitch}
                variant="ghost"
                className="rounded-full hover:bg-purple-500 hover:text-white"
                size="icon"
              >
                <ArrowUpDown className="size-5" />
              </Button>
            </div>
          </div>
          <div className="w-full">
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger className="h-12 w-full rounded-full border-stone-300 bg-stone-50">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    {currency.symbol} {currency.code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Result Display Section */}
        {isLoading ? (
          <ConversionResultSkeleton />
        ) : (
          <>
            {result && (
              <ConversionResult
                amount={amount}
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
                result={result}
                exchangeRate={exchangeRate ?? 0}
              />
            )}
          </>
        )}
      </div>
    </Card>
  );
};
