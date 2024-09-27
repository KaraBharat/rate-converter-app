import { CurrencyConverterCard } from "@/features/currency-converter/components/conversion-card";

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center pt-14">
      <div className="relative flex items-start justify-center rounded-2xl border border-pink-200 bg-gradient-to-r from-stone-100 to-stone-50 p-1">
        <div
          className="relative flex h-full w-full items-start justify-center rounded-2xl p-4"
          style={{
            backgroundImage: `url('/images/background.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <CurrencyConverterCard />
        </div>
      </div>
    </div>
  );
}
