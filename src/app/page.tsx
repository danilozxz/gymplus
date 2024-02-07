'use client'

import { HeroBanner } from "@/components/HeroBanner";
import { Modalidades } from "@/components/Modalidades";

const Page = () => {
  return (
    <div className="bg-[#110F0F] max-w-[2200px] mx-auto">
      <HeroBanner/>
      <Modalidades/>
    </div>
  )
}

export default Page;