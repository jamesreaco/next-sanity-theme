"use client";
import { useLiveQuery } from "@sanity/preview-kit";
import HomeHero from "../pages/home/home-hero";
import { homePageQuery } from "@/sanity/lib/sanity.queries";

export default function HomeHeroPreview({ page }) {

  const [data] = useLiveQuery(page, homePageQuery);
  
  return (
    <HomeHero 
      heading={data.heading}
      paragraph={data.paragraph}
      image={data.image}
      btnText={data.btnText}
      btnDestination={data.btnDestination}
    />
  )
}