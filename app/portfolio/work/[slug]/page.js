import { notFound } from "next/navigation";
import Navbar from "../../../Components/HomeComponents/Navbar";
import Footer from "../../../Components/HomeComponents/Footer";
import ProjectPage from "../../../Components/PortfolioComponents/ProjectPage";
import { getProject, projects } from "../../../Components/PortfolioComponents/portfolioData";

// Only the projects in portfolioData exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return { title: `${p.name} | Qytrona Portfolio`, description: p.summary };
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (!getProject(slug)) notFound();

  return (
    <main>
      <Navbar />
      <ProjectPage slug={slug} />
      <Footer />
    </main>
  );
}
