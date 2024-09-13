"use client";

import { useUser } from "@/context/UserContext";
import { Search } from "@/components/Search";
import Tradeshops from "./Tradeshops";
export default function HomePage() {
  const { userProfile, loading } = useUser();

  console.log(userProfile, "user");

  if (loading) {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        Loading...
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div className="">
        <main className="flex flex-col">page section</main>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 mt-10">
      <div>
        <Search />
      </div>
      <div className="felx items-center justify-center">
        {userProfile &&
          userProfile.businesses.map((buss: any, idx: string) => (
            <div key={idx} className="felx items-center justify-center">
              {buss.tradeshops.map((trade: any) => (
                <div key={idx}>
                  <Tradeshops tradeshops={trade} />
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
