import { Header } from "./ui/Header";
import { ExperienceSection } from "./ui/ExperienceSection";
import { ProjectsSection } from "./ui/ProjectsSection";
import { ContactSection } from "./ui/ContactSection";
import { BlogSection } from "./ui/BlogSection";
import { Footer } from "./ui/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<h1>
					Sara Blom<span>Frontend</span>
				</h1>
				<ExperienceSection />
				<ProjectsSection />
				<ContactSection />
				<BlogSection />
			</main>
			<Footer />
		</>
	);
}
