"use client";

import Navbar from "../Components/HomeComponents/Navbar";
import LandingPage from "../Components/HomeComponents/LandingPage";
import ServicesGrid from "../Components/HomeComponents/ServicesGrid";
import WorldConnections from "../Components/HomeComponents/WorldConnections";
import OurClients from "../Components/HomeComponents/OurClients";
import Footer from "../Components/HomeComponents/Footer";
import {
  FeaturedWork,
  HomeCta,
  HomeFaq,
  HowWeWork,
  LatestBlogs,
  TestimonialsStrip,
  WhyChooseUs,
} from "../Components/HomeComponents/HomeSections";

export default function Homepage({ posts = [] }) {
  return (
    <main>
      <Navbar/>
      <LandingPage/>
      <OurClients/>
      <ServicesGrid/>
      <WhyChooseUs/>
      <HowWeWork/>
      <FeaturedWork/>
      <WorldConnections/>
      <LatestBlogs posts={posts}/>
      <TestimonialsStrip/>
      <HomeFaq/>
      <HomeCta/>
      <Footer/>
    </main>
  );
}
