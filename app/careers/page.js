import Navbar from "../Components/HomeComponents/Navbar";
import Footer from "../Components/HomeComponents/Footer";
import CareersPage from "../Components/CompanyComponents/CareersPage";

export const metadata = {
  title: "Careers | Qytrona Technologies",
  description: "Join Qytrona Technologies. Explore open roles in development, design and digital marketing.",
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <CareersPage />
      <Footer />
    </main>
  );
}
