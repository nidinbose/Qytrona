import Navbar from "../Components/HomeComponents/Navbar";
import Footer from "../Components/HomeComponents/Footer";
import LegalPage from "../Components/CompanyComponents/LegalPage";
import { privacyPolicy } from "../Components/CompanyComponents/legalData";

export const metadata = {
  title: "Privacy Policy | Qytrona Technologies",
  description: "How Qytrona Technologies collects, uses and protects your personal information.",
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <LegalPage
        content={privacyPolicy}
        related={{ label: "Terms & Conditions", href: "/terms-and-conditions" }}
      />
      <Footer />
    </main>
  );
}
