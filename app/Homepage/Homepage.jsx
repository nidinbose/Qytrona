"use client";

import Navbar from "../Components/HomeComponents/Navbar";
import LandingPage from "../Components/HomeComponents/LandingPage";
import ServicesGrid from "../Components/HomeComponents/ServicesGrid";
import WorldConnections from "../Components/HomeComponents/WorldConnections";

export default function Homepage() {
  return (
    <main>
      <Navbar/>
      <LandingPage/>
      <ServicesGrid/>
      <WorldConnections/>
    </main>
  );
}