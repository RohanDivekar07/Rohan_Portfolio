import { Skill, Project, Experience, Education, ResearchPaper, Achievement, Certification } from './types';

export const personalInfo = {
  fullName: "Rohan Vijay Divekar",
  role: "Final-Year B.Tech Student | Aspiring Software Developer",
  tagline: "Building scalable and user-friendly software applications using Python, Java, SQL, FastAPI, REST APIs, and modern web technologies. Passionate about backend development, clean code, and solving real-world problems through software engineering.",
  email: "rohandivekar57@gmail.com",
  secondaryEmail: "rohandivekar689@gmail.com",
  phone: "+91 8010990697",
  secondaryPhone: "+91 9373065694",
  location: "Pune, Maharashtra, India - 411028",
  currentAddress: "Flat No: 07, Monal park 'D', Gadital, Hadapsar, Pune - 411028, Maharashtra, India",
  permanentAddress: "Warvand, Tal-Daund, District- Pune - 412215, Pune, Maharashtra, India",
  birthDate: "16 Oct, 2005",
  languages: ["English", "Hindi", "Marathi"],
  maritalStatus: "Single",
  github: "https://github.com/RohanDivekar07",
  linkedin: "https://www.linkedin.com/in/rohandivekar57/",
  aboutMe: "I am a final-year B.Tech student specializing in Information Technology with a strong interest in Software Development. I enjoy building backend applications, REST APIs, and web-based solutions using Python, Java, SQL, and FastAPI. Through academic projects and internships, I have developed a solid foundation in programming, object-oriented design, database management, and problem-solving. I am eager to apply my skills in a Software Developer Internship or Entry-Level Software Engineer role while continuously learning modern technologies."
};

export const skills: Skill[] = [
  // Primary Skills
  { name: "Core Python", category: "programming", isPrimary: true },
  { name: "Core Java", category: "programming", isPrimary: true },
  { name: "SQL", category: "programming", isPrimary: true },
  { name: "Object-Oriented Programming (OOP)", category: "concepts", isPrimary: true },
  { name: "Data Structures & Algorithms (Basic)", category: "concepts", isPrimary: true },
  { name: "Problem Solving", category: "concepts", isPrimary: true },

  // Secondary/Other technical skills
  { name: "FastAPI", category: "backend", isPrimary: false },
  { name: "REST API Development", category: "backend", isPrimary: false },
  { name: "PHP", category: "backend", isPrimary: false },
  { name: "MySQL", category: "databases", isPrimary: false },
  { name: "PostgreSQL (Supabase)", category: "databases", isPrimary: false },
  { name: "HTML5", category: "frontend", isPrimary: false },
  { name: "CSS3", category: "frontend", isPrimary: false },
  { name: "JavaScript", category: "frontend", isPrimary: false },
  { name: "Git", category: "tools", isPrimary: false },
  { name: "GitHub", category: "tools", isPrimary: false },
  { name: "Postman", category: "tools", isPrimary: false },
  { name: "C", category: "programming", isPrimary: false },
  { name: "C++", category: "programming", isPrimary: false },
  { name: "XAMPP", category: "tools", isPrimary: false },
  { name: "VS Code", category: "tools", isPrimary: false },
  { name: "Render", category: "tools", isPrimary: false },
  { name: "DBMS", category: "concepts", isPrimary: false },
  { name: "Software Engineering", category: "concepts", isPrimary: false },
  { name: "Computer Networks", category: "concepts", isPrimary: false },
  { name: "OpenCV", category: "tools", isPrimary: false }
];

export const experience: Experience[] = [
  {
    company: "Elite Softwares",
    role: "Web Development Intern",
    location: "Pune District, India",
    duration: "June 2023 - July 2023 (2 months)",
    keySkills: ["HTML", "CSS", "Python", "MySQL", "Django", "Javascript"],
    description: "Successfully completed an internship as a Web Development & Python Django Framework Intern at Elite Softwares, Pune. Worked on web application development using the Django framework, gained hands-on experience in Python programming, backend development, database integration, and implementing responsive web solutions. Enhanced problem-solving, debugging, and software development skills while working under industry guidance."
  }
];

export const education: Education[] = [
  {
    institution: "MIT School of Computing (MIT ADT University), Pune",
    degree: "Bachelor of Technology - B.Tech, Information Technology",
    duration: "July 2024 - July 2027 (Expected)",
    grade: "CGPA: 7.81 / 10",
    details: "Focusing on Artificial Intelligence and modern software engineering, while pursuing a specialization in Data Science and advanced analytics."
  },
  {
    institution: "MIT Polytechnic, Kothrud, Pune",
    degree: "Diploma in Information Technology",
    duration: "July 2021 - July 2024",
    grade: "Percentage: 77.56 / 100",
    details: "MSBTE Board. Core coursework in Object-Oriented Programming, Database Systems, Computer Networks, and Software Engineering."
  },
  {
    institution: "Sadhana Vidhyalaya, Hadapsar, Pune",
    degree: "10th Grade Standard (Secondary School Certificate)",
    duration: "Completed 2021",
    grade: "Percentage: 82.20 / 100",
    details: "MSBSHSE Board. Developed early foundations in logical reasoning, mathematics, and science."
  }
];

export const projects: Project[] = [
  {
    id: "medical-store",
    title: "Medical Store System",
    duration: "01 June, 2026 - 23 June, 2026",
    mentor: "Prof. Akanksha Verma",
    teamSize: 6,
    keySkills: ["HTML", "CSS", "Javascript", "Python", "FASTAPI", "POSTMAN", "RENDER", "SUPABASE"],
    technologies: ["FastAPI", "Python", "Supabase (PostgreSQL)", "JWT", "REST API", "Postman", "GitHub", "Render"],
    projectLink: "https://github.com/RohanDivekar07/Medical-Store.git",
    description: "Medical Store System is a secure healthcare record management application developed using FastAPI, Supabase (PostgreSQL), JWT Authentication, and Postman. Enables authorized users to securely add, view, update, and delete customer records through REST APIs.",
    details: [
      "Designed and developed a highly secure healthcare record management application using FastAPI backend.",
      "Integrated Supabase (PostgreSQL) as a scalable cloud database solution for permanent data persistence.",
      "Implemented standard JSON Web Token (JWT) based authentication to protect rest endpoints.",
      "Conducted extensive API testing, profiling, and validation using Postman.",
      "Deployed backend services to Render with CI/CD integration connected with GitHub."
    ],
    category: "backend"
  },
  {
    id: "study-tracker",
    title: "Student Study Tracker",
    duration: "01 March, 2026 - 20 March, 2026",
    mentor: "None (Self-Initiated)",
    teamSize: 3,
    keySkills: ["Core Java", "Object-Oriented Programming (OOP)", "ArrayList & TreeMap", "File Handling & CSV Export", "Java Collections Framework", "LocalDate API", "Menu-Driven Console Application", "Problem Solving & Debugging"],
    technologies: ["Core Java", "Collections Framework", "File Handling", "LocalDate API", "OOP Design Patterns"],
    projectLink: "https://github.com/RohanDivekar07/StudentStudyTracker.git",
    description: "A console-based Java application developed to help students record, manage, summarize, and export daily study activities. Features robust search and date-based summarization filters with offline CSV exporting capabilities.",
    details: [
      "Built completely in Core Java using Object-Oriented Design principles (Encapsulation, Polymorphism, Inheritance).",
      "Utilized Java Collections Framework (ArrayList, TreeMap) to represent memory record states efficiently.",
      "Implemented Date-based calculations and record sorting using the modern Java LocalDate API.",
      "Engineered file writer processes to export study logs safely as offline CSV files for analytical review."
    ],
    category: "core-programming"
  },
  {
    id: "organic-vegetables",
    title: "Organic Vegetables Portal",
    duration: "10 January, 2025 - 22 May, 2025",
    mentor: "Prof. Rohini Bhosale",
    teamSize: 1,
    keySkills: ["HTML", "CSS", "Javascript", "PHP", "MySQL", "XAMPP"],
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "XAMPP Server"],
    projectLink: "https://github.com/RohanDivekar07/Organic-Vegetables-Portal.git",
    description: "Developed an Organic Vegetables Portal providing users with information about fresh organic vegetables. The website features responsive product catalogs, category filtering, a user-friendly shopping experience, and database management.",
    details: [
      "Engineered responsive user interfaces with HTML5, CSS3, and interactive Javascript elements.",
      "Developed secure full-stack customer portals and administration interfaces using backend PHP scripting.",
      "Designed and structured relational database schemas in MySQL to manage product catalogs and registrations.",
      "Maintained full localized server setup and validation pipelines with XAMPP stack."
    ],
    category: "fullstack"
  },
  {
    id: "virtual-trial-room",
    title: "Virtual Trial Room in 2D Animation",
    duration: "01 January, 2024 - 20 June, 2024",
    mentor: "Prof. Pallavi Nehete",
    teamSize: 3,
    keySkills: ["Python", "Computer Vision", "Opencv", "Image Processing", "Real-Time Video Processing", "Tkinter"],
    technologies: ["Python", "OpenCV", "Tkinter GUI", "Computer Vision Algorithms", "Image Overlay Pipeline"],
    projectLink: "https://github.com/RohanDivekar07/Virtual-Trial-Room-in-2D-animation.git",
    description: "Developed a Virtual Trial Room application using Python and OpenCV that enables users to virtually try on clothes in real time through a webcam. Leverages computer vision coordinate estimations to seamlessly overlay apparel.",
    details: [
      "Architected real-time video capture and frames processing pipelines using OpenCV.",
      "Designed custom image processing algorithms to overlay 2D garment templates on human coordinates.",
      "Developed a lightweight desktop graphical user interface (GUI) using Tkinter.",
      "Programmed frame filters and coordinate matching formulas for smooth, flicker-free garments rendering."
    ],
    category: "ai-cv"
  }
];

export const researchPapers: ResearchPaper[] = [
  {
    title: "The Future of Online Shopping: Web-Based Virtual Trial Room Application",
    conference: "2nd International Conference on Recent Advances in Artificial Intelligence, Computer Vision & Smart Systems (ICRACS-2025)",
    date: "16 April, 2025",
    description: "Presented research paper at ICRACS 2025, organized by the Department of Artificial Intelligence & Data Science at Poornima Institute of Engineering & Technology, Jaipur. The research explored the application of Artificial Intelligence and Computer Vision in developing a web-based virtual trial room to enhance the online shopping experience. This work strengthened my skills in AI, computer vision, web development, technical writing, and research methodology.",
    keySkills: ["Artificial Intelligence", "Computer Vision", "Web Development", "Python", "Research Paper", "Innovation", "Problem Solving", "Technical Writing"]
  }
];

export const achievements: Achievement[] = [
  {
    title: "Software Copyright & Patent Registration (Smart Drone AI)",
    category: "copyright",
    description: "Successfully obtained an official Copyright & Patent Registration from the Copyright Office, Government of India, for the original software work titled 'Smart Drone System Using AI to Detect Damages in High Voltage Insulators'. The system leverages computer vision and AI to automate automated grid inspection and defect detection."
  },
  {
    title: "Smart India Hackathon (SIH) Participant",
    category: "hackathon",
    description: "Selected and participated in the national-level Smart India Hackathon (SIH) as a core member of 'Team: Q'S - TeaM', collaborating to solve challenging government-sponsored statements with scalable technology solutions."
  },
  {
    title: "ICRACS 2025 Research Presentation",
    category: "other",
    description: "Successfully presented the academic research paper on 'The Future of Online Shopping: Web-Based Virtual Trial Room' in front of a global panel of computer vision and AI experts at the ICRACS 2025 conference."
  }
];

export const certifications: Certification[] = [
  {
    title: "Java Training Program Certification",
    provider: "Spoken Tutorial Project, IIT Bombay",
    keySkills: ["Core Java", "OOP", "Classes & Objects", "Exception Handling", "File Handling", "Debugging"],
    description: "Successfully cleared the online assessment with an outstanding score of 82.50%. Acquired professional-grade comprehension of Core Java and menu-driven programming."
  },
  {
    title: "Python for Data Science, AI & Development",
    provider: "IBM (offered through Coursera)",
    keySkills: ["Python", "Data Science", "Artificial Intelligence", "Data Structures", "NumPy", "Pandas", "Jupyter Notebooks"],
    description: "Completed IBM-authorized curriculum. Covered practical Python workflows, scientific computing, basic machine learning pipelines, and notebook-based scripting."
  },
  {
    title: "Introduction to Retrieval-Augmented Generation (RAG)",
    provider: "IBM SkillsBuild",
    keySkills: ["RAG Concepts", "AI Pipelines", "Vector Databases", "Information Retrieval", "LLM Fine-tuning Models"],
    description: "Completed comprehensive introduction to modern enterprise LLM architectures, context augmentation frameworks, and cognitive retrieval integration."
  },
  {
    title: "Ethical Considerations for Generative AI",
    provider: "IBM SkillsBuild",
    keySkills: ["AI Ethics", "Bias Mitigation", "Algorithmic Transparency", "Safety Guardrails", "Generative AI Risks"],
    description: "Completed certification examining algorithmic bias, corporate compliance, technical guardrails, and transparency patterns for safety-critical AI products."
  }
];
