import { notFound } from "next/navigation";
import Navbar from "../../Components/HomeComponents/Navbar";
import Footer from "../../Components/HomeComponents/Footer";
import SolutionPage from "../../Components/SolutionComponents/SolutionPage";
import { getSolution, solutions } from "../../Components/SolutionComponents/solutionsData";

// Only the slugs in solutionsData exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};
  return {
    title: `${s.name} | Qytrona Technologies`,
    description: s.intro,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (!getSolution(slug)) notFound();

  return (
    <main>
      <Navbar />
      <SolutionPage slug={slug} />
      <Footer />
    </main>
  );
}
