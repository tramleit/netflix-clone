import Image from "next/image"
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card"
import { FC } from "react"
import SliderItemContent from "./SliderItemContent"
import { SliderTypeItemProps } from "../../../libs/interfaces"
import { TMBD_IMG_BASE_URL } from "../../../libs/constants";

const CategoryItem: FC<SliderTypeItemProps> = ({ content }) => {
  return (
    <HoverCard openDelay={500}>
      <HoverCardTrigger className="inline-block w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 1.5lg:w-1/6 h-full px-1">
        <Image 
          alt="rank-slide-one" 
          src={`${TMBD_IMG_BASE_URL}/w500/${content.backdrop_path}`}
          width={0} 
          height={0} 
          sizes="100vh" 
          objectFit="cover"
          className="w-full max-h-[148px] inline-block rounded" 
          unoptimized
        />
      </HoverCardTrigger>
      <SliderItemContent content={content} />
    </HoverCard>
  )
}

export default CategoryItem
