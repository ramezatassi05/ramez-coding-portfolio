import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"
import { ExperienceCard } from "@/components/experience-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Ramez</span>Atassi
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" asChild>
            <Link href="#contact">Let's Connect</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-24 sm:py-32 space-y-8 md:space-y-16">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Computer Science Student</div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Building <span className="text-primary">AI-powered</span> solutions
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a Computer Science student at McGill University specializing in Artificial Intelligence. Passionate
              about software engineering and data science, I create innovative solutions to complex problems.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild>
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-muted/50 py-16 sm:py-24">
          <div className="container space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                A showcase of my technical projects and applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Barbershop Booking Application"
                description="A multi-platform booking system with React (web), Flutter (mobile), and Spring Boot backend, enabling seamless appointment scheduling and barber selection."
                tags={["Java", "React", "Flutter", "Spring Boot", "PostgreSQL", "AWS"]}
                image="/images/barbershop-booking.png"
                link="https://github.com/ramezatassi05"
              />
              <ProjectCard
                title="Credit Card Fraud Detection System"
                description="A machine learning model using multiple ML models (Random Forest, XGBoost, LightGBM) to detect fraudulent transactions, achieving 97.5% accuracy with SMOTE for imbalance handling."
                tags={["Python", "Pandas", "Scikit-learn", "Matplotlib"]}
                image="/images/credit-card-fraud.png"
                link="https://github.com/ramezatassi05/credit_card_fraud_detector"
              />
              <ProjectCard
                title="AI Spam Email Detector"
                description="An AI spam email detector ML model using Python and Large Language Models (LLMs), employing Naive Bayes and other algorithms to identify and filter spam with a 97.1% accuracy."
                tags={["Python", "Machine Learning", "NLP", "LLMs"]}
                image="/images/spam-email-detector.png"
                link="https://github.com/ramezatassi05/ai-spam-email-detector"
              />
              <ProjectCard
                title="Raven AI - Beard Style Generator"
                description="Led a team of 4 in creating an application that helps users decide on beard styles using advanced image manipulation techniques and facial parameter detection, generating the best beard overlay with 92.7% accuracy."
                tags={["Java", "OpenCV", "JavaFX", "Multi-threading"]}
                image="/images/raven-ai-project.png"
                link="https://devpost.com/software/raven-ai?ref_content=user-portfolio&ref_feature=in_progress"
              />
            </div>
          </div>
        </section>

        <section id="experience" className="container py-16 sm:py-24">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                My professional journey in software engineering and data science.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <ExperienceCard
                title="Software Engineering Intern"
                company="TripStack"
                location="Toronto, Ontario (Remote)"
                period="January 2024 - May 2024"
                description={[
                  "Developed backend for 5+ high-traffic applications using Python and Node.js, improving stability and processing millions of daily requests.",
                  "Optimized GCP cloud servers, cutting response times by 17% and saving $2,000 monthly through resource analysis.",
                  "Reverse-engineered web scraping algorithms using Python and Selenium, automating 85% of data collection.",
                  "Automated deployment pipelines with GitLab CI/CD and Docker, reducing deployment time by 40%.",
                ]}
                skills={["Python", "Node.js", "GCP", "Selenium", "GitLab CI/CD", "Docker"]}
              />
              <ExperienceCard
                title="Data Scientist Intern"
                company="Springs Global Consultancy"
                location="Dubai, UAE (Remote)"
                period="May 2024 - August 2024"
                description={[
                  "Analyzed and processed large datasets using Python, R, and SQL, uncovering actionable insights to drive strategic decisions, resulting in a 20% improvement in project efficiency.",
                  "Developed and deployed predictive models, integrating them into 5+ projects, reducing problem resolution time by 30%.",
                  "Created interactive dashboards in Tableau, presenting insights to 15+ stakeholders, improving decision speed by 25%.",
                  "Automated data cleaning workflows with SQL, ensuring accuracy across datasets, and reducing manual effort by 40%.",
                ]}
                skills={["Python", "R", "SQL", "Tableau", "Predictive Modeling", "Data Analysis"]}
              />
            </div>
          </div>
        </section>

        <section id="skills" className="bg-muted/50 py-16 sm:py-24">
          <div className="container space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Technologies and tools I've mastered throughout my journey.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillBadge name="Java" level={90} />
              <SkillBadge name="Python" level={95} />
              <SkillBadge name="JavaScript" level={85} />
              <SkillBadge name="TypeScript" level={80} />
              <SkillBadge name="SQL" level={85} />
              <SkillBadge name="HTML/CSS" level={80} />
              <SkillBadge name="React" level={85} />
              <SkillBadge name="Next.js" level={80} />
              <SkillBadge name="Node.js" level={85} />
              <SkillBadge name="Spring Boot" level={85} />
              <SkillBadge name="Flutter" level={75} />
              <SkillBadge name="AWS" level={70} />
              <SkillBadge name="Docker" level={80} />
              <SkillBadge name="Git" level={90} />
              <SkillBadge name="Machine Learning" level={85} />
              <SkillBadge name="Data Analysis" level={90} />
            </div>
          </div>
        </section>

        <section id="about" className="container py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
              <p className="text-muted-foreground">
                I'm a Computer Science student at McGill University specializing in Artificial Intelligence with a minor
                in Statistics. My academic journey has equipped me with a strong foundation in software engineering,
                machine learning, and data analysis.
              </p>
              <p className="text-muted-foreground">
                Through my internships at TripStack and Springs Global Consultancy, I've gained valuable experience in
                developing backend systems, optimizing cloud infrastructure, and extracting insights from complex
                datasets.
              </p>
              <p className="text-muted-foreground">
                I'm passionate about creating innovative solutions that leverage AI and machine learning to solve
                real-world problems. My projects range from fraud detection systems to multi-platform booking
                applications, showcasing my versatility as a developer.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Montreal, Quebec, Canada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>ramezfatassi@gmail.com</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/ramezatassi05" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://linkedin.com/in/ramez-atassi/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <img src="/images/profile-photo.png" alt="Ramez Atassi portrait" className="object-cover w-full h-full" />
            </div>
          </div>
        </section>

        <section id="education" className="bg-muted/50 py-16 sm:py-24">
          <div className="container space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="border rounded-lg p-6 bg-card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">McGill University</h3>
                    <p className="text-muted-foreground">Montreal, Quebec</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Expected Graduation: May 2027</p>
                    <p className="text-muted-foreground">GPA: 3.4/4.00</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-medium">B.Sc. in Computer Science - Artificial Intelligence | Minor Statistics</p>
                  <p className="mt-2 text-muted-foreground">Relevant Coursework:</p>
                  <ul className="mt-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 text-sm text-muted-foreground">
                    <li>• Software Engineering Practice</li>
                    <li>• Applied Machine Learning</li>
                    <li>• Operating Systems</li>
                    <li>• Computer Architecture</li>
                    <li>• Model-Based Programming</li>
                    <li>• Algorithms and Data Structures</li>
                    <li>• Intro. to Software Engineering</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="activities" className="container py-16 sm:py-24">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Activities & Leadership</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <ExperienceCard
                title="Participant Programmer"
                company="McHacks11"
                location="Montreal, Quebec"
                period="January 2024 - February 2024"
                description={[
                  "Led a team of 4 in creating an application that employed advanced image manipulation techniques and algorithms for facial parameter detection, and then generating the best beard overlay for the given face with a 92.7% accuracy.",
                  "Utilized Java/JavaOpenCV to code the backend, CascadeClassifier, and other public algorithms. Developed the interactive user interface on JavaFX to allow the user to upload, generate, edit, and save the image.",
                  "Implemented a multi-thread system, significantly reducing image-processing time.",
                ]}
                skills={["Java", "OpenCV", "JavaFX", "Multi-threading", "Team Leadership"]}
              />
              <ExperienceCard
                title="Founder and President"
                company="3D Innovation Club"
                location="Dubai, UAE"
                period="September 2020 - April 2021"
                description={[
                  "Leader of an organization of 50+ members, dedicated to educating students about the significance of additive manufacturing, empowering club members by supplying access to innovative CAD programs.",
                ]}
                skills={["Leadership", "3D Printing", "CAD", "Organization Management"]}
              />
            </div>
          </div>
        </section>

        <section id="contact" className="bg-muted/50 py-16 sm:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
                <p className="text-muted-foreground">
                  Have a project in mind or want to discuss potential opportunities? I'm always open to new challenges
                  and collaborations. Fill out the form, and I'll get back to you as soon as possible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>ramezfatassi@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <span>github.com/ramezatassi05</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <span>linkedin.com/in/ramez-atassi/</span>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Ramez Atassi. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/ramezatassi05" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/ramez-atassi/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
