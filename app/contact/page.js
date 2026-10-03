import Navbar from "../Components/HomeComponents/Navbar";
import Footer from "../Components/HomeComponents/Footer";
import ContactPage from "../Components/CompanyComponents/ContactPage";

export const metadata = {
  title: "Contact Us | Qytrona Technologies",
  description: "Get in touch with Qytrona Technologies to start your website, app, software or marketing project.",
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <ContactPage />
      <Footer />
    </main>
  );
}
