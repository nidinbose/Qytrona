import Navbar from "../Components/HomeComponents/Navbar";
import Footer from "../Components/HomeComponents/Footer";
import PortfolioListPage from "../Components/PortfolioComponents/PortfolioListPage";

export const metadata = {
  title: "Portfolio | Qytrona Technologies",
  description: "Websites, web applications and mobile apps designed and built by Qytrona Technologies.",
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <PortfolioListPage />
      <Footer />
    </main>
  );
}
