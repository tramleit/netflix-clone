"use client"

import HeroContent from "./components/HeroContent";
import Slider from "./components/slider/Slider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import useContentRetriever from "./hooks/useContentRetriever";
import { FC } from "react";

const Home: FC<{ avatar: string }> = ({ avatar }) => {
  const { movies } = useContentRetriever()

  return (
    <main>
      <div className="relative">
        <Header avatar={avatar} />
        <Image alt="Home Top Background Image" src="/images/app-home.webp" width={0} height={0} sizes="100vh" fill objectFit="cover" unoptimized />
        <div className="absolute bg-app-home-hero-vignette-gradient z-2 bottom-0 top-0 left-0 right-[26.09%]"></div>
        <div className="flex flex-col relative z-2 pt-[10%]">
          <HeroContent />
          <div className="text-[12px] md:text-[1.4vw] text-white font-NetflixSansSemiBold pt-[7.2vw]">
            <p className="mb-4 pl-3.9r 1.5lg:pl-14.5">Top 10 Movies in Dominican Republic Today</p>
            <Slider sliderType="category" showVignette data={movies?.topRated} /> 
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Home
