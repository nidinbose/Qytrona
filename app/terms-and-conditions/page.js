import Navbar from "../Components/HomeComponents/Navbar";
import Footer from "../Components/HomeComponents/Footer";
import LegalPage from "../Components/CompanyComponents/LegalPage";
import { termsAndConditions } from "../Components/CompanyComponents/legalData";

export const metadata = {
  title: "Terms & Conditions | Qytrona Technologies",
  description: "The terms that apply when you use our website or hire Qytrona Technologies for our services.",
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <LegalPage
        content={termsAndConditions}
        related={{ label: "Privacy Policy", href: "/privacy-policy" }}
      />
      <Footer />
    </main>
  );
}
