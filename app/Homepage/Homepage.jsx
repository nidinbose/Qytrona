"use client";

import Navbar from "../Components/HomeComponents/Navbar";
import LandingPage from "../Components/HomeComponents/LandingPage";
import ServicesGrid from "../Components/HomeComponents/ServicesGrid";
import WorldConnections from "../Components/HomeComponents/WorldConnections";
import OurClients from "../Components/HomeComponents/OurClients";

export default function Homepage() {
  return (
    <main>
      <Navbar/>
      <LandingPage/>
      <OurClients/>
      <ServicesGrid/>
      <WorldConnections/>
    </main>
  );
}