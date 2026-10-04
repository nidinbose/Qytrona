import Navbar from "../Components/HomeComponents/Navbar";
import Footer from "../Components/HomeComponents/Footer";
import TestimonialsPage from "../Components/CompanyComponents/TestimonialsPage";

export const metadata = {
  title: "Testimonials | Qytrona Technologies",
  description: "What businesses across India, the UAE and the UK say about working with Qytrona Technologies.",
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <TestimonialsPage />
      <Footer />
    </main>
  );
}
