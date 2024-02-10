'use client'

import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import { Modalidades } from "@/components/Modalidades";
import { NewLife } from "@/components/NewLife";
import { Planos } from "@/components/Planos";

const Page = () => {
  return (
    <div className="bg-[#110F0F]">
      <div className="max-w-[1600px] mx-auto">
        <HeroBanner />
        <Modalidades />
        <NewLife />
        <Planos/>
        <Contato/>
        <Footer/>
      </div>
    </div>
  )
}

export default Page;