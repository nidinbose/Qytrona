import Navbar from "../Components/HomeComponents/Navbar";
import Footer from "../Components/HomeComponents/Footer";
import AboutPage from "../Components/CompanyComponents/AboutPage";

export const metadata = {
  title: "About Us | Qytrona Technologies",
  description: "Learn about Qytrona Technologies — our story, mission and the values behind every project.",
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <AboutPage />
      <Footer />
    </main>
  );
}
