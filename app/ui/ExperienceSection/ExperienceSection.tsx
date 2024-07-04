import { SecondaryHeading } from "../Headings/SecondaryHeading";
import { SectionWrapper, ExperienceList } from "./style";
import { SingleWaveBackground } from "../BackgroundImages/SingleWaveBackground";

export const ExperienceSection = () => {
	return (
		<>
			<SingleWaveBackground />
			<SectionWrapper id="experience">
				<div className="content-wrap">
					<SecondaryHeading title="Erfarenhet" />
					<p>
						I&apos;m a fullstack developer, with focus on frontend. My main
						languages are <span>JavaScript</span> and <span>TypeScript</span>{" "}
						and I&apos;ve mainly been working with <span>React, NodeJS</span>{" "}
						and <span>Express</span>. I have experince with <span>NoSQL</span>{" "}
						and
						<span>SQL databases</span> like <span>MongoDB, Firebase</span> and{" "}
						<span>SQLite</span>.
					</p>

					<p>Other teqniques I&apos;ve been working with are:</p>
					<ExperienceList>
						<li>Adobe XD</li>
						<li>Figma</li>
						<li>Azure</li>
						<li>Git</li>
						<li>GitHub</li>
						<li>Scrum</li>
						<li>Kanban</li>
					</ExperienceList>

					<p>
						I&apos;ve been working in Scrum and Kanban teams for several
						years,so I know a lot about agile team work. I&apos;m great at
						keeping a good relationship with both customers and team members.
					</p>

					<h2 className="edu">Work experience</h2>

					<ExperienceList>
						<li>
							Frontend developer, Medtanken Group
							<br />
							2023 - current
							<br />
							Developing and maintaining apps, internal systems and webpages of
							multiple health care centers.
							<br />
							Techniques: React, TypeScript, JavaScript, Flutter, SCSS, Trello,
							Figma and a little bit of Python
						</li>
						<li>
							Software developer, FrontEdge IT
							<br />
							2022
							<br />
							Internship and hourly employment during the end of my education.
							<br />
							Techniques: React, TypeScript, JavaScript, Next, Gatsby, Node,
							Express, Styled components, SCSS, Azure, Figma and a little bit of
							C#
						</li>
						<li>
							Project manager and personnel planner at Trafikantservice
							<br />
							2013-2020
						</li>
					</ExperienceList>

					<h3 className="edu">Education</h3>

					<ExperienceList>
						<li>
							Frontend development with special orientation towards Web security
							at Jensens Higher Vocational Education
						</li>
						<li>UX and Interaction design at Borås University</li>
						<li>Master in sustainable urban development at Malmö University</li>
						<li>
							Bachelor in leadership, quality and change-management at Uppsala
							University
						</li>
					</ExperienceList>

					<h3 className="edu">Courses</h3>
					<ExperienceList>
						<li>CSS for JavaScript Developers - Josh W Comeau</li>
						<li>The Joy of React - Josh W Comeau</li>
						<li>
							Modern JavaScript (Complete guide from Novice to Ninja) - Shaun
							Pelling
						</li>
						<li>
							Design rules: Principles + Practices for Great UI Design - Joe
							Natoli
						</li>
						<li>Clean Code - Maximilian Schwarzmüller</li>
						<li>Build Web Apps with React & Firebase - Shaun Pelling</li>
						<li>Svelte Tutorial - Shaun Pelling</li>
						<li>
							C# Basics for Beginners: Learn C# Fundamentals by Coding - Mosh
							Hamedani
						</li>
					</ExperienceList>
				</div>
			</SectionWrapper>
		</>
	);
};
