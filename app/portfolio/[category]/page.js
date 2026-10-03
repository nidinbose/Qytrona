import { notFound } from "next/navigation";
import Navbar from "../../Components/HomeComponents/Navbar";
import Footer from "../../Components/HomeComponents/Footer";
import PortfolioListPage from "../../Components/PortfolioComponents/PortfolioListPage";
import { categories, getCategory } from "../../Components/PortfolioComponents/portfolioData";

// Only the categories in portfolioData exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) return {};
  return { title: `${c.name} | Qytrona Portfolio`, description: c.intro };
}

export default async function Page({ params }) {
  const { category } = await params;
  if (!getCategory(category)) notFound();

  return (
    <main>
      <Navbar />
      <PortfolioListPage categorySlug={category} />
      <Footer />
    </main>
  );
}
