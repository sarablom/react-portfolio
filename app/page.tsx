import { Header } from "./ui/Header";
import { ExperienceSection } from "./ui/ExperienceSection";
import { ProjectsSection } from "./ui/ProjectsSection";
import { ContactSection } from "./ui/ContactSection";
import { BlogSection } from "./ui/BlogSection";
import { Footer } from "./ui/Footer";
import { MainHeading } from "./ui/MainHeading";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<MainHeading />
				<ExperienceSection />
				<ProjectsSection />
				<ContactSection />
				<BlogSection />
			</main>
			<Footer />
		</>
	);
}
