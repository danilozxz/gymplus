'use client'

import { HeroBanner } from "@/components/HeroBanner";
import { Modalidades } from "@/components/Modalidades";
import { NewLife } from "@/components/NewLife";

const Page = () => {
  return (
    <div className="bg-[#110F0F]">
      <div className="max-w-[1600px] mx-auto">
        <HeroBanner />
        <Modalidades />
        <NewLife />
        <div className="mt-24">
          teste
        </div>
      </div>
    </div>
  )
}

export default Page;