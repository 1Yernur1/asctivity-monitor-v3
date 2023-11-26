"use client";
import { Suspense } from "react";
import Loading from "./loading";
import { Header } from "../components/Header";
import { ActivityBoard } from "./components/ActivityBoard";
import { StatusModal } from "./components/StatusModal";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  return (
    <Suspense fallback={<Loading />}>
      <div className="h-screen grid grid-cols-6 grid-rows-xs xs:grid-rows-projects">
        <div className="col-span-full">
          <Header />
        </div>
        <div className="col-span-full">
          <ActivityBoard />
        </div>
      </div>
      {searchParams.has("status") && <StatusModal />}
    </Suspense>
  );
}
