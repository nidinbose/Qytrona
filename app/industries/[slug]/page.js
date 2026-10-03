import { notFound } from "next/navigation";
import Navbar from "../../Components/HomeComponents/Navbar";
import Footer from "../../Components/HomeComponents/Footer";
import IndustryPage from "../../Components/IndustryComponents/IndustryPage";
import { getIndustry, industries } from "../../Components/IndustryComponents/industriesData";

// Only the slugs in industriesData exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  return {
    title: `${ind.name} Solutions | Qytrona Technologies`,
    description: ind.intro,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (!getIndustry(slug)) notFound();

  return (
    <main>
      <Navbar />
      <IndustryPage slug={slug} />
      <Footer />
    </main>
  );
}
