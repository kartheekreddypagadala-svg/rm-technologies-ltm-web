
export type CareerCategory =
  | "full-time-roles"
  | "internships"
  | "fresher-programme"
  | "remote-and-hybrid"
  | "freelance-and-contract";

export type CareerJob = {
  slug: string;
  category: CareerCategory;
  title: string;
  team: string;
  location: string;
  employmentType: string;
  experience: string;
  openings: number;
  summary: string;
  description: string;
  responsibilities: string[];
  mandatorySkills: string[];
  goodToHave: string[];
};

export const careerCategories: Record<
  CareerCategory,
  { title: string; description: string }
> = {
  "full-time-roles": {
    title: "Full-time roles",
    description: "Build your career with RulingMindTech.",
  },
  internships: {
    title: "Internships",
    description: "Learn, collaborate and gain practical experience.",
  },
  "fresher-programme": {
    title: "Fresher programme",
    description: "Start your professional journey in technology.",
  },
  "remote-and-hybrid": {
    title: "Remote and hybrid",
    description: "Discover flexible opportunities with our team.",
  },
  "freelance-and-contract": {
    title: "Freelance and contract",
    description: "Bring your expertise to exciting projects.",
  },
};

export const careerJobs: CareerJob[] = [
  // FULL-TIME ROLES
  {
    slug: "full-stack-java-developer",
    category: "full-time-roles",
    title: "Full-Stack Java Developer",
    team: "Engineering",
    location: "Hyderabad, India",
    employmentType: "Full-time",
    experience: "1–3 Years",
    openings: 2,
    summary: "Develop modern full-stack applications using Java and React.",
    description:
      "We are looking for a Full-Stack Java Developer to design, develop and maintain scalable web applications and REST APIs.",
    responsibilities: [
      "Develop backend services using Java and Spring Boot.",
      "Build responsive frontend applications using React.",
      "Design and integrate REST APIs.",
      "Work with MySQL and relational databases.",
      "Write maintainable code and participate in code reviews.",
    ],
    mandatorySkills: [
      "Core Java and OOP",
      "Spring Boot",
      "REST APIs",
      "React, JavaScript, HTML and CSS",
      "MySQL and SQL",
      "Git",
    ],
    goodToHave: ["Hibernate and JPA", "Maven", "Docker", "Cloud fundamentals"],
  },
  {
    slug: "python-ai-engineer",
    category: "full-time-roles",
    title: "Python & AI Engineer",
    team: "Artificial Intelligence",
    location: "Bangalore, India",
    employmentType: "Full-time",
    experience: "1–3 Years",
    openings: 2,
    summary: "Develop AI-powered applications and intelligent workflows.",
    description:
      "Build Python applications and integrate machine learning and AI capabilities into business solutions.",
    responsibilities: [
      "Develop applications using Python.",
      "Build and integrate machine learning workflows.",
      "Work with APIs and data processing pipelines.",
      "Evaluate model performance and improve solutions.",
      "Collaborate with software and product teams.",
    ],
    mandatorySkills: [
      "Python programming",
      "Data structures and algorithms",
      "Machine learning fundamentals",
      "REST API development",
      "SQL and data handling",
    ],
    goodToHave: ["PyTorch", "TensorFlow", "LLM integration", "FastAPI"],
  },
  {
    slug: "cloud-devops-engineer",
    category: "full-time-roles",
    title: "Cloud / DevOps Engineer",
    team: "Cloud Engineering",
    location: "Hyderabad, India",
    employmentType: "Full-time",
    experience: "2–4 Years",
    openings: 2,
    summary: "Manage cloud infrastructure and automate software delivery.",
    description:
      "Support reliable application delivery through cloud infrastructure, automation and continuous integration practices.",
    responsibilities: [
      "Build and maintain CI/CD pipelines.",
      "Manage cloud infrastructure and deployments.",
      "Automate infrastructure using Terraform.",
      "Monitor application performance and availability.",
      "Troubleshoot deployment and environment issues.",
    ],
    mandatorySkills: [
      "Linux fundamentals",
      "CI/CD pipelines",
      "Docker",
      "Cloud fundamentals",
      "Bash or PowerShell scripting",
    ],
    goodToHave: ["Azure DevOps", "Kubernetes", "Terraform", "AWS or Azure"],
  },
  {
    slug: "ui-ux-designer",
    category: "full-time-roles",
    title: "UI/UX Designer",
    team: "Design",
    location: "India",
    employmentType: "Full-time",
    experience: "1–3 Years",
    openings: 1,
    summary: "Create intuitive digital experiences and modern interfaces.",
    description:
      "Design user-focused websites and applications, translating requirements into clear and engaging digital experiences.",
    responsibilities: [
      "Create wireframes and interactive prototypes.",
      "Design responsive web interfaces.",
      "Collaborate with developers and stakeholders.",
      "Conduct usability reviews.",
      "Maintain design consistency across products.",
    ],
    mandatorySkills: ["Figma", "Wireframing", "Prototyping", "UI design", "UX principles"],
    goodToHave: ["Design systems", "HTML and CSS", "Accessibility", "Motion design"],
  },

  // INTERNSHIPS
  {
    slug: "java-development-intern",
    category: "internships",
    title: "Java Development Intern",
    team: "Engineering",
    location: "Hyderabad, India",
    employmentType: "Internship",
    experience: "0–1 Years",
    openings: 3,
    summary: "Learn Java development and backend application engineering.",
    description:
      "Work with experienced developers to learn Java, backend programming and database integration.",
    responsibilities: [
      "Practise Core Java programming.",
      "Assist in developing REST APIs.",
      "Write SQL queries and test database operations.",
      "Fix bugs and document code.",
      "Participate in team learning sessions.",
    ],
    mandatorySkills: ["Java basics", "OOP concepts", "SQL basics", "Problem solving"],
    goodToHave: ["Spring Boot", "JDBC", "Git", "HTML and CSS"],
  },
  {
    slug: "python-machine-learning-intern",
    category: "internships",
    title: "Python & Machine Learning Intern",
    team: "AI & ML",
    location: "India",
    employmentType: "Internship",
    experience: "0–1 Years",
    openings: 2,
    summary: "Explore Python, machine learning and intelligent applications.",
    description:
      "Assist in data preparation, experimentation and development of machine learning solutions.",
    responsibilities: [
      "Prepare and clean datasets.",
      "Develop Python scripts.",
      "Experiment with machine learning algorithms.",
      "Evaluate model results.",
      "Document experiments and findings.",
    ],
    mandatorySkills: ["Python basics", "Basic statistics", "Data handling", "Problem solving"],
    goodToHave: ["Pandas", "NumPy", "Scikit-learn", "Jupyter Notebook"],
  },
  {
    slug: "react-frontend-intern",
    category: "internships",
    title: "Frontend React Developer Intern",
    team: "Frontend Development",
    location: "Hyderabad, India",
    employmentType: "Internship",
    experience: "0–1 Years",
    openings: 2,
    summary: "Build responsive user interfaces using React.",
    description:
      "Assist in building modern web interfaces and reusable frontend components.",
    responsibilities: [
      "Develop React components.",
      "Implement responsive layouts.",
      "Integrate APIs with frontend applications.",
      "Test interfaces across devices.",
      "Collaborate with designers and developers.",
    ],
    mandatorySkills: ["HTML", "CSS", "JavaScript", "React basics"],
    goodToHave: ["TypeScript", "Tailwind CSS", "Git", "REST APIs"],
  },
  {
    slug: "data-analytics-intern",
    category: "internships",
    title: "Data Analytics Intern",
    team: "Data & Analytics",
    location: "Bangalore, India",
    employmentType: "Internship",
    experience: "0–1 Years",
    openings: 2,
    summary: "Transform data into useful business insights.",
    description:
      "Support reporting and analysis activities using spreadsheets, SQL and visualisation tools.",
    responsibilities: [
      "Clean and organise datasets.",
      "Prepare analytical reports.",
      "Create dashboards and charts.",
      "Write basic SQL queries.",
      "Present findings to the team.",
    ],
    mandatorySkills: ["Excel", "SQL basics", "Analytical thinking", "Communication"],
    goodToHave: ["Tableau", "Power BI", "Python", "Statistics"],
  },

  // FRESHER PROGRAMME
  {
    slug: "graduate-software-engineer",
    category: "fresher-programme",
    title: "Graduate Software Engineer",
    team: "Engineering",
    location: "Hyderabad, India",
    employmentType: "Fresher",
    experience: "0–1 Years",
    openings: 3,
    summary: "Start your software engineering career with real projects.",
    description:
      "Join our engineering team and build a strong foundation in software development.",
    responsibilities: [
      "Develop and test application features.",
      "Learn development standards and workflows.",
      "Work with senior engineers.",
      "Debug and resolve software issues.",
      "Participate in technical discussions.",
    ],
    mandatorySkills: ["Programming fundamentals", "OOP", "DSA basics", "SQL basics"],
    goodToHave: ["Java", "Python", "JavaScript", "Git"],
  },
  {
    slug: "associate-java-developer",
    category: "fresher-programme",
    title: "Associate Java Developer",
    team: "Backend Development",
    location: "Bangalore, India",
    employmentType: "Fresher",
    experience: "0–1 Years",
    openings: 2,
    summary: "Build backend services using Java and Spring Boot.",
    description:
      "Work on backend development tasks and learn enterprise Java application development.",
    responsibilities: [
      "Write Java application code.",
      "Develop and test REST endpoints.",
      "Work with SQL databases.",
      "Fix bugs and improve code quality.",
      "Learn Spring Boot development practices.",
    ],
    mandatorySkills: ["Core Java", "OOP", "SQL", "Problem solving"],
    goodToHave: ["Spring Boot", "JDBC", "Hibernate", "Maven"],
  },
  {
    slug: "junior-data-analyst",
    category: "fresher-programme",
    title: "Junior Data Analyst",
    team: "Data & Analytics",
    location: "Hyderabad, India",
    employmentType: "Fresher",
    experience: "0–1 Years",
    openings: 2,
    summary: "Analyse data and create meaningful reports.",
    description:
      "Support data analysis, reporting and dashboard development for business teams.",
    responsibilities: [
      "Collect and clean data.",
      "Prepare reports using Excel.",
      "Write SQL queries.",
      "Build visual dashboards.",
      "Communicate analytical findings.",
    ],
    mandatorySkills: ["Excel", "SQL", "Analytical thinking", "Data interpretation"],
    goodToHave: ["Tableau", "Power BI", "Python", "Statistics"],
  },
  {
    slug: "associate-cloud-engineer",
    category: "fresher-programme",
    title: "Associate Cloud Engineer",
    team: "Cloud Engineering",
    location: "India",
    employmentType: "Fresher",
    experience: "0–1 Years",
    openings: 2,
    summary: "Learn cloud infrastructure and modern deployment practices.",
    description:
      "Assist with cloud operations, application deployment and infrastructure monitoring.",
    responsibilities: [
      "Assist with cloud resource management.",
      "Monitor application environments.",
      "Learn deployment automation.",
      "Support troubleshooting activities.",
      "Document infrastructure procedures.",
    ],
    mandatorySkills: ["Networking basics", "Linux basics", "Cloud fundamentals", "Scripting basics"],
    goodToHave: ["AWS", "Azure", "Docker", "Git"],
  },

  // REMOTE AND HYBRID
  {
    slug: "remote-full-stack-developer",
    category: "remote-and-hybrid",
    title: "Remote Full-Stack Developer",
    team: "Engineering",
    location: "India",
    employmentType: "Remote",
    experience: "1–3 Years",
    openings: 1,
    summary: "Develop full-stack applications in a remote team.",
    description:
      "Build frontend and backend features while collaborating with distributed engineering teams.",
    responsibilities: [
      "Develop application features.",
      "Integrate APIs and databases.",
      "Review and test code.",
      "Collaborate through remote development tools.",
      "Document technical work.",
    ],
    mandatorySkills: ["JavaScript or TypeScript", "React", "Backend development", "SQL or NoSQL"],
    goodToHave: ["Next.js", "Node.js", "Java", "Cloud platforms"],
  },
  {
    slug: "remote-python-developer",
    category: "remote-and-hybrid",
    title: "Remote Python Developer",
    team: "Backend Development",
    location: "India",
    employmentType: "Remote",
    experience: "1–3 Years",
    openings: 1,
    summary: "Develop Python services and backend integrations.",
    description:
      "Build maintainable Python applications and collaborate with a distributed development team.",
    responsibilities: [
      "Develop Python modules and services.",
      "Create API integrations.",
      "Work with databases.",
      "Write automated tests.",
      "Troubleshoot application issues.",
    ],
    mandatorySkills: ["Python", "REST APIs", "SQL", "Git"],
    goodToHave: ["FastAPI", "Django", "Docker", "Cloud services"],
  },
  {
    slug: "hybrid-business-analyst",
    category: "remote-and-hybrid",
    title: "Hybrid Business Analyst",
    team: "Business Consulting",
    location: "Hyderabad, India",
    employmentType: "Hybrid",
    experience: "1–3 Years",
    openings: 1,
    summary: "Translate business needs into practical technology requirements.",
    description:
      "Work with business stakeholders and technology teams to analyse processes and document requirements.",
    responsibilities: [
      "Gather and document requirements.",
      "Prepare process flows and user stories.",
      "Coordinate with development teams.",
      "Support testing and validation.",
      "Track project requirements.",
    ],
    mandatorySkills: ["Requirements analysis", "Documentation", "Communication", "Excel"],
    goodToHave: ["Jira", "SQL", "Agile", "Process modelling"],
  },
  {
    slug: "remote-ui-ux-designer",
    category: "remote-and-hybrid",
    title: "Remote UI/UX Designer",
    team: "Design",
    location: "India",
    employmentType: "Remote",
    experience: "1–3 Years",
    openings: 1,
    summary: "Create accessible and engaging digital experiences.",
    description:
      "Design user interfaces and prototypes while working with distributed product teams.",
    responsibilities: [
      "Create wireframes and prototypes.",
      "Design responsive interfaces.",
      "Maintain design systems.",
      "Collaborate with developers.",
      "Review usability and accessibility.",
    ],
    mandatorySkills: ["Figma", "UI design", "UX principles", "Prototyping"],
    goodToHave: ["Design systems", "Accessibility", "HTML and CSS", "Motion design"],
  },

  // FREELANCE AND CONTRACT
  {
    slug: "freelance-react-developer",
    category: "freelance-and-contract",
    title: "Freelance React Developer",
    team: "Frontend Development",
    location: "Remote",
    employmentType: "Freelance",
    experience: "2+ Years",
    openings: 1,
    summary: "Build modern frontend applications for project engagements.",
    description:
      "Work on defined frontend projects and deliver responsive, reusable React components.",
    responsibilities: [
      "Build React components and pages.",
      "Integrate APIs.",
      "Optimise frontend performance.",
      "Coordinate project deliverables.",
      "Maintain code quality.",
    ],
    mandatorySkills: ["React", "JavaScript", "HTML", "CSS"],
    goodToHave: ["Next.js", "TypeScript", "Tailwind CSS", "Git"],
  },
  {
    slug: "freelance-wordpress-developer",
    category: "freelance-and-contract",
    title: "Freelance WordPress Developer",
    team: "Web Development",
    location: "Remote",
    employmentType: "Freelance",
    experience: "1–3 Years",
    openings: 1,
    summary: "Build and customise professional WordPress websites.",
    description:
      "Create and maintain responsive WordPress websites for defined client projects.",
    responsibilities: [
      "Develop WordPress pages and themes.",
      "Customise plugins and layouts.",
      "Optimise website performance.",
      "Maintain website security.",
      "Coordinate delivery with clients.",
    ],
    mandatorySkills: ["WordPress", "PHP basics", "HTML", "CSS"],
    goodToHave: ["WooCommerce", "SEO", "JavaScript", "Hosting"],
  },
  {
    slug: "contract-graphic-designer",
    category: "freelance-and-contract",
    title: "Contract Graphic Designer",
    team: "Creative Design",
    location: "Remote",
    employmentType: "Contract",
    experience: "1–3 Years",
    openings: 1,
    summary: "Create visual assets for digital and brand communication.",
    description:
      "Produce consistent visual designs for digital campaigns, websites and company communications.",
    responsibilities: [
      "Create digital marketing graphics.",
      "Prepare brand assets.",
      "Design social media creatives.",
      "Work with content and marketing teams.",
      "Deliver design files on schedule.",
    ],
    mandatorySkills: ["Graphic design", "Typography", "Layout design", "Visual communication"],
    goodToHave: ["Figma", "Adobe Illustrator", "Photoshop", "Motion graphics"],
  },
  {
    slug: "freelance-digital-marketing-specialist",
    category: "freelance-and-contract",
    title: "Freelance Digital Marketing Specialist",
    team: "Marketing",
    location: "Remote",
    employmentType: "Freelance",
    experience: "1–3 Years",
    openings: 1,
    summary: "Support digital marketing, SEO and online growth initiatives.",
    description:
      "Plan and execute digital marketing activities for defined campaigns and business objectives.",
    responsibilities: [
      "Support SEO and content planning.",
      "Manage digital campaign activities.",
      "Monitor website and campaign metrics.",
      "Prepare performance reports.",
      "Coordinate marketing deliverables.",
    ],
    mandatorySkills: ["Digital marketing", "SEO fundamentals", "Content planning", "Analytics"],
    goodToHave: ["Google Analytics", "Social media marketing", "Email campaigns", "Paid ads"],
  },
];

export function getCareerJob(category: string, jobSlug: string) {
  return careerJobs.find(
    (job) => job.category === category && job.slug === jobSlug
  );
}

export function getCareerJobs(category: string) {
  return careerJobs.filter((job) => job.category === category);
}
