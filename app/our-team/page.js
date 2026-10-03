import Navbar from "../Components/HomeComponents/Navbar";
import Footer from "../Components/HomeComponents/Footer";
import TeamPage from "../Components/CompanyComponents/TeamPage";

export const metadata = {
  title: "Our Team | Qytrona Technologies",
  description: "Meet the designers, developers and marketers behind Qytrona Technologies.",
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <TeamPage />
      <Footer />
    </main>
  );
}
