'use client'

import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import { Modalidades } from "@/components/Modalidades";
import { Nav } from "@/components/Nav";
import { NewLife } from "@/components/NewLife";
import { Planos } from "@/components/Planos";

const Page = () => {
  return (
    <div className="bg-[#110F0F]">
      <div className="max-w-[1600px] mx-auto">
        <Nav/>
        <HeroBanner />
        <Modalidades />
        <NewLife />
        <Planos/>
        <Contato/>
      </div>
        <Footer/>
    </div>
  )
}

export default Page;