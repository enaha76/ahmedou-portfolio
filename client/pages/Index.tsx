import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  MapPin,
  Calendar,
  Award,
  Users,
  Code,
  Database,
  Server,
  Globe,
  Palette,
  ChevronDown,
  Sparkles,
  Zap,
  Target,
} from "lucide-react";

// Custom hook for intersection observer
const useInView = (threshold = 0.1) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, inView] as const;
};

// Static companies data
const companies = [
  {
    name: "Bridgestone",
    logo: "/logos/bridgestone-logo.png",
    description: "Global tire and rubber manufacturer",
    industry: "Manufacturing"
  },
  {
    name: "Chanel",
    logo: "/logos/chanel-logo.png",
    description: "Luxury fashion and beauty brand",
    industry: "Fashion & Beauty"
  },
  {
    name: "Biomerieux",
    logo: "/logos/biomerieux-logo.png",
    description: "In-vitro diagnostics and medical technology",
    industry: "Healthcare"
  },
  {
    name: "Michelin",
    logo: "/logos/michelin-logo.png",
    description: "Tire manufacturing and mobility solutions",
    industry: "Manufacturing"
  },
  {
    name: "EU Deforestation Regulation (EUDR)",
    logo: "/logos/eudr-logo.png",
    description: "European Union environmental compliance",
    industry: "Regulatory"
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Refs for animated sections
  const [heroRef, heroInView] = useInView(0.3);
  const [aboutRef, aboutInView] = useInView(0.2);
  const [skillsRef, skillsInView] = useInView(0.2);
  const [projectsRef, projectsInView] = useInView(0.1);
  const [companiesRef, companiesInView] = useInView(0.2);
  const [experienceRef, experienceInView] = useInView(0.2);
  const [languagesRef, languagesInView] = useInView(0.2);
  const [accomplishmentsRef, accomplishmentsInView] = useInView(0.2);
  const [contactRef, contactInView] = useInView(0.2);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = {
    "Data & Machine Learning": [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Jupyter",
    ],
    "Data Engineering": [
      "Apache Airflow",
      "Prefect",
      "DBT",
      "OCR",
      "ETL/ELT",
      "Data Pipelines",
      "Data Warehousing",
      "Apache Spark",
    ],
    "Backend & Cloud": [
      "Spring Boot",
      "Spring Cloud",
      "Kafka",
      "Express.js",
      "Django",
      "Kubernetes",
      "Docker",
      "PostgreSQL",
      "Liquibase",
      "ElasticSearch",
    ],
    "Frontend & UI": [
      "Angular",
      "React",
      "Next.js",
      "TypeScript",
      "NgRx",
      "Storybook",
      "Ag-Grid",
      "NG Prime",
      "Webpack",
      "GraphQL",
    ],
    Languages: ["Python", "Java", "JavaScript/TypeScript", "SQL"],
    "Tools & Platforms": ["Odoo", "Git", "Auth0", "Quicklock"],
    Professional: [
      "Project Management",
      "Leadership",
      "System Design",
      "Agile Methodologies",
    ],
  };

  const projects = [
    // Add these projects to your existing projects array:

{
  title: "MyTower Trade Compliance - EUDR Solution",
  role: "Full Stack Developer",
  description:
    "Developed a comprehensive compliance management system for the European Union Deforestation Regulation (EUDR). The platform enables companies to ensure their supply chains comply with strict EU requirements by providing end-to-end traceability, automated reporting, and seamless collaboration between supply chain stakeholders.",
  contributions: [
    "Architected full-stack solution using Spring Boot microservices and Angular frontend.",
    "Integrated ElasticSearch for advanced document search and audit trail capabilities.",
    "Built GraphQL and REST APIs for efficient data exchange with EU compliance platforms.",
    "Implemented automated DDS (Due Diligence Statements) generation and submission workflows.",
    "Developed supplier collaboration features enabling seamless data collection and verification.",
    "Created comprehensive unit tests and Storybook component library for maintainability.",
  ],
  technologies: [
    "Spring Boot",
    "Spring Security",
    "Angular",
    "ElasticSearch",
    "PostgreSQL",
    "Liquibase",
    "GraphQL",
    "REST API",
    "Storybook",
    "JUnit",
  ],
  icon: <Database className="w-8 h-8" />,
  gradient: "from-green-600 to-emerald-700",
},
{
  title: "GTM Classification Module",
  role: "Full Stack Developer",
  description:
    "Developed a sophisticated product classification system as part of the Global Trade Management (GTM) solution. The module automatically categorizes trade goods according to international standards (HS codes, ECCN) using AI-assisted classification and regulatory compliance checking.",
  contributions: [
    "Designed microservices architecture for scalable classification processing.",
    "Built intelligent classification algorithms with machine learning integration.",
    "Implemented real-time regulatory compliance validation across multiple jurisdictions.",
    "Created user-friendly Angular interface for manual classification review and approval.",
    "Developed comprehensive API documentation and testing frameworks.",
  ],
  technologies: [
    "Spring Boot",
    "Spring Cloud",
    "Angular",
    "ElasticSearch",
    "PostgreSQL",
    "Liquibase",
    "GraphQL",
    "REST API",
    "Docker",
    "Kubernetes",
  ],
  icon: <Server className="w-8 h-8" />,
  gradient: "from-indigo-500 to-blue-600",
},
{
  title: "GTM Origin Calculation Engine",
  role: "Full Stack Developer", 
  description:
    "Built an advanced origin calculation system that determines the country of origin for manufactured goods based on complex international trade rules. The system supports multiple origin determination methods including substantial transformation, value-added calculations, and preferential trade agreements.",
  contributions: [
    "Developed complex algorithms for origin determination using international trade regulations.",
    "Implemented support for preferential trade agreements and FTA rules of origin.",
    "Created flexible rule engine allowing custom origin calculation methodologies.",
    "Built comprehensive reporting dashboards for origin analysis and compliance tracking.",
    "Integrated with external trade databases and regulatory updates.",
  ],
  technologies: [
    "Spring Boot",
    "Spring Cloud",
    "Angular",
    "ElasticSearch", 
    "PostgreSQL",
    "Liquibase",
    "GraphQL",
    "REST API",
    "Docker",
    "Kubernetes",
  ],
  icon: <Globe className="w-8 h-8" />,
  gradient: "from-orange-500 to-red-600",
},
{
  title: "GTM Collaboration Platform",
  role: "Full Stack Developer",
  description:
    "Engineered a comprehensive collaboration platform enabling seamless communication and data sharing between trading partners, customs brokers, and compliance teams. The system facilitates document exchange, approval workflows, and real-time status tracking across the global trade ecosystem.",
  contributions: [
    "Built secure multi-tenant architecture supporting diverse organizational structures.",
    "Implemented role-based access control and document sharing workflows.",
    "Created real-time messaging and notification systems for trade event updates.",
    "Developed automated approval workflows with configurable business rules.",
    "Integrated with external systems through standardized APIs and data formats.",
  ],
  technologies: [
    "Spring Boot",
    "Spring Cloud", 
    "Angular",
    "ElasticSearch",
    "PostgreSQL", 
    "Liquibase",
    "GraphQL",
    "REST API",
    "Docker",
    "Kubernetes",
  ],
  icon: <Server className="w-8 h-8" />,
  gradient: "from-cyan-500 to-teal-600",
},
{
  title: "AWS Cloud Automation & Notification System",
  role: "Cloud Developer",
  description:
    "Designed and implemented a comprehensive cloud automation solution for file storage management and intelligent notification systems. The platform automatically processes, stores, and manages files while providing real-time notifications and monitoring across distributed systems using AWS serverless architecture.",
  contributions: [
    "Architected serverless automation workflows using AWS Lambda and Step Functions.",
    "Implemented secure file storage and management system with S3 and lifecycle policies.",
    "Built intelligent notification system using SNS and SQS for reliable message delivery.",
    "Developed comprehensive monitoring and alerting with CloudWatch and CloudTrail.",
    "Implemented encryption and key management using AWS KMS for data security.",
    "Created DynamoDB-based metadata storage for efficient file tracking and analytics.",
  ],
  technologies: [
    "AWS Lambda",
    "AWS S3", 
    "AWS SNS",
    "AWS SQS",
    "AWS KMS",
    "DynamoDB",
    "CloudWatch",
    "CloudTrail",
    "Python",
    "Boto3",
  ],
  icon: <Database className="w-8 h-8" />,
  gradient: "from-yellow-500 to-orange-600",
},
{
  title: "Mauripay API Testing Framework",
  role: "Full Stack Developer",
  description:
    "Developed a comprehensive unit testing application for the Mauripay payment system APIs. The solution provides automated testing capabilities, API endpoint validation, and detailed reporting to ensure payment processing reliability and compliance with financial regulations.",
  contributions: [
    "Built full-stack testing framework using Node.js backend and React frontend.",
    "Implemented comprehensive REST API testing with automated test case generation.",
    "Created detailed test reporting and analytics dashboard for API performance monitoring.",
    "Developed mock payment scenarios and edge case testing for financial transactions.",
    "Integrated with CI/CD pipelines for automated regression testing.",
  ],
  technologies: [
    "Node.js",
    "React", 
    "PostgreSQL",
    "Jest",
    "Supertest",
    "Express.js",
    "REST API",
    "TypeScript",
    "Docker",
  ],
  icon: <Server className="w-8 h-8" />,
  gradient: "from-rose-500 to-pink-600",
},
{
  title: "Custom Odoo HR Management Module", 
  role: "ERP Developer",
  description:
    "Developed a specialized Human Resources management module extending Odoo's core functionality. The custom solution addresses specific organizational requirements including advanced leave management, performance tracking, and employee lifecycle management with seamless integration to existing business processes.",
  contributions: [
    "Designed custom HR workflows and approval processes tailored to organizational needs.",
    "Implemented advanced employee performance tracking and evaluation systems.",
    "Built comprehensive leave management with complex approval hierarchies and policies.",
    "Created custom reports and analytics for HR decision-making and compliance.",
    "Integrated with payroll systems and external HR tools through custom APIs.",
  ],
  technologies: [
    "Python",
    "Odoo Framework", 
    "PostgreSQL",
    "XML",
    "JavaScript", 
    "CSS3",
    "ORM",
    "PostgreSQL",
  ],
  icon: <Database className="w-8 h-8" />,
  gradient: "from-violet-500 to-purple-600",
},
{
  title: "AI Content Detection System",
  role: "AI/ML Engineer",
  description:
    "Engineered an advanced AI content detection system capable of identifying artificially generated images and text content. The solution combines multiple state-of-the-art models and techniques to provide accurate classification and confidence scoring for content authenticity verification.",
  contributions: [
    "Developed multi-modal AI detection system for both text and image content analysis.",
    "Integrated multiple LLMs including Mistral and Llama for comprehensive text analysis.",
    "Implemented computer vision models for AI-generated image detection and manipulation identification.",
    "Built scalable API architecture using FastAPI for real-time content processing.",
    "Created intuitive Next.js frontend for content upload, analysis, and results visualization.",
    "Fine-tuned models using custom datasets for improved accuracy across content types.",
  ],
  technologies: [
    "Next.js",
    "FastAPI", 
    "Python",
    "Mistral AI",
    "Llama",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "Transformers",
    "PostgreSQL",
  ],
  icon: <Globe className="w-8 h-8" />,
  gradient: "from-fuchsia-500 to-purple-600",
},
{
  title: "Intelligent Web ETL & Data Pipeline",
  role: "Data Engineer",
  description:
    "Built a comprehensive ETL (Extract, Transform, Load) system that automatically discovers, scrapes, and processes web content at scale. The platform intelligently crawls websites, extracts structured data, applies transformations, and loads processed information into analytical databases for business intelligence.",
  contributions: [
    "Designed scalable web scraping architecture using Python and distributed processing.",
    "Implemented Apache Airflow workflows for automated data pipeline orchestration.",
    "Built intelligent URL discovery and content extraction algorithms.",
    "Developed robust data transformation and cleaning processes for diverse web formats.",
    "Created monitoring and alerting systems for pipeline health and data quality assurance.",
    "Implemented rate limiting and ethical scraping practices with respect to robots.txt and website policies.",
  ],
  technologies: [
    "Python",
    "Apache Airflow",
    "BeautifulSoup", 
    "Scrapy",
    "Pandas",
    "PostgreSQL",
    "Redis",
    "Celery",
    "Docker",
    "Kubernetes",
  ],
  icon: <Database className="w-8 h-8" />,
  gradient: "from-emerald-500 to-green-600",
},
{
  title: "Telegram Bot Management Platform",
  role: "Full Stack Developer", 
  description:
    "Developed a comprehensive management platform for Telegram bots, providing centralized control, analytics, and automation capabilities. The system enables efficient bot deployment, user interaction tracking, and intelligent response management across multiple Telegram channels and groups.",
  contributions: [
    "Built scalable bot management architecture using Next.js and FastAPI microservices.",
    "Implemented real-time message processing and automated response systems.",
    "Created comprehensive analytics dashboard for bot performance and user engagement tracking.",
    "Developed multi-bot deployment and configuration management system.",
    "Built webhook management and secure API integration with Telegram Bot API.",
    "Implemented user permission systems and role-based access control for bot administration.",
  ],
  technologies: [
    "Next.js",
    "FastAPI",
    "Python", 
    "PostgreSQL",
    "Redis",
    "Telegram Bot API",
    "WebSockets",
    "Docker",
    "TypeScript",
  ],
  icon: <Globe className="w-8 h-8" />,
  gradient: "from-sky-500 to-blue-600",
}
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Adias Mauritanie",
      period: "2024 - Present",
      type: "work",
      description:
        "Leading development of enterprise-scale applications with modern tech stack",
    },
    {
      title: "Frontend Developer Intern",
      company: "Adias Mauritanie",
      period: "2024 - 2024",
      type: "work",
      description:
        "Specialized in Angular applications and component library development",
    },
    {
      title: "ERP Application Developer Intern",
      company: "Advanced Biz Consulting",
      period: "2023",
      type: "work",
      description: "Developed custom ERP solutions and data analytics features",
    },
  ];

  const education = [
    {
      title: "Master of Science in Data Engineering & Machine Learning",
      institution: "University",
      period: "2023 - Present",
      type: "education",
      description:
        "Specializing in probability, linear algebra, and ML applications",
    },
    {
      title: "Bachelor of Science in Computer Science Engineering",
      institution: "University",
      period: "2021 - 2024",
      type: "education",
      description: "Strong foundation in software engineering and mathematics",
    },
  ];

  const languages = [
    {
      name: "Arabic",
      level: "Native",
      proficiency: 100,
      description:
        "Mother tongue with full fluency in speaking, reading, and writing",
      flag: "🇲🇷",
    },
    {
      name: "French",
      level: "Fluent",
      proficiency: 70,
      description:
        "Professional proficiency in business and technical contexts",
      flag: "🇫🇷",
    },
    {
      name: "English",
      level: "Advanced",
      proficiency: 85,
      description: "Strong communication skills in international environments",
      flag: "🇺🇸",
    },
    {
      name: "Turkish",
      level: "Intermediate",
      proficiency: 40,
      description: "Acquired during university studies in Istanbul",
      flag: "🇹🇷",
    },
  ];

  const accomplishments = [
    {
      title: "Huawei Seeds for the Future (2024)",
      description: "Country Representative for Mauritania",
      icon: <Award className="w-6 h-6" />,
      color: "text-yellow-500",
    },
    {
      title: "Nuit de l'Info (2024)",
      description: 'Team Leader for "Team LetsCode"',
      icon: <Users className="w-6 h-6" />,
      color: "text-blue-500",
    },
    {
      title: "Mauritanian Engineering Community (2022)",
      description: "Organizer",
      icon: <Users className="w-6 h-6" />,
      color: "text-green-500",
    },
    {
      title: "1st Place in YOS Exam (2020)",
      description: "Istanbul University",
      icon: <Award className="w-6 h-6" />,
      color: "text-purple-500",
    },
    {
      title: "Second Place of Hedera Hackathon",
      description: "Blockchain Development Competition",
      icon: <Award className="w-6 h-6" />,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-primary animate-fade-in">
              Cheikh Ahmedou Enaha
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Projects",
                "Skills",
                "Languages",
                "Contact",
              ].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-all duration-300 hover:text-primary hover:scale-105 ${
                    activeSection === item.toLowerCase()
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-20 pb-16 px-4 min-h-screen flex items-center"
      >
        <div className="container mx-auto relative z-10" ref={heroRef}>
          <div className="max-w-4xl mx-auto text-center">
            {/* Floating Icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Sparkles
                className="absolute top-20 left-20 text-primary/20 w-6 h-6 animate-pulse"
                style={{
                  transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                }}
              />
              <Zap
                className="absolute top-40 right-32 text-purple-500/20 w-8 h-8 animate-bounce"
                style={{
                  transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * 0.3}px)`,
                  animationDelay: "1s",
                }}
              />
              <Target
                className="absolute bottom-32 left-32 text-pink-500/20 w-7 h-7 animate-spin"
                style={{
                  transform: `translate(${mousePosition.x * 0.7}px, ${mousePosition.y * -0.4}px)`,
                  animationDuration: "8s",
                }}
              />
            </div>

            <div
              className={`mb-8 transition-all duration-1000 ${
                heroInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Profile Photo */}
              <div className="mb-8 flex justify-center">
                <div className="relative group">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-primary via-purple-600 to-pink-600 p-1 transition-all duration-300 group-hover:scale-105">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                      {/* Placeholder for photo - replace with actual image */}
                      <div className="w-full h-full bg-gradient-to-br from-muted/30 to-muted/60 flex items-center justify-center text-4xl text-muted-foreground">
                        👤
                      </div>
                      {/* Uncomment and replace with actual photo:
                      <img
                        src="/path-to-your-photo.jpg"
                        alt="Cheikh Ahmedou Enaha"
                        className="w-full h-full object-cover"
                      />
                      */}
                    </div>
                  </div>
                  {/* Decorative ring animation */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping"></div>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Engineering Intelligence
              </h1>
              <h2
                className="text-2xl md:text-3xl font-semibold mb-4 text-foreground"
                style={{ animationDelay: "200ms" }}
              >
                Building Scalable Systems, Engineering Intelligent Solutions
              </h2>
              <p
                className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                style={{ animationDelay: "400ms" }}
              >
                A software developer with a passion for mathematics and logic,
                currently specializing in Data Engineering and Machine Learning
                to build the next generation of data-driven applications.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-500 ${
                heroInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="text-lg px-8 py-3 group transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                View My Projects
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-lg px-8 py-3 group transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Get In Touch
                <Mail className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>

            <div
              className={`animate-bounce transition-all duration-1000 delay-700 ${
                heroInView ? "opacity-100" : "opacity-0"
              }`}
            >
              <ChevronDown className="w-8 h-8 mx-auto text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 bg-gradient-to-br from-muted/20 to-muted/40 relative"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div
          className="container mx-auto max-w-4xl relative z-10"
          ref={aboutRef}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-1000 ${
              aboutInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            About Me
          </h2>
          <div
            className={`prose prose-lg max-w-none text-muted-foreground transition-all duration-1000 delay-300 ${
              aboutInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Code className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  Programming Passion
                </h3>
                <p className="text-sm">
                  Deep fascination for mathematics and logic, naturally leading
                  to programming excellence.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Database className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  Data Engineering
                </h3>
                <p className="text-sm">
                  Specializing in ML and data engineering to build intelligent,
                  data-driven systems.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Award className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  Global Recognition
                </h3>
                <p className="text-sm">
                  Represented Mauritania in prestigious international programs
                  and competitions.
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              My journey in technology began with a deep fascination for
              mathematics and logic, which naturally led me to programming. With
              a solid foundation built through my Bachelor's degree in Computer
              Science Engineering, I've developed expertise in creating robust,
              scalable software solutions.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Currently pursuing my Master's degree in Data Engineering and
              Machine Learning, I'm excited to apply concepts from probability,
              linear algebra, and analysis to solve real-world problems. My goal
              is to bridge the gap between traditional software engineering and
              intelligent, data-driven systems.
            </p>
            <p className="text-lg leading-relaxed">
              One of my proudest achievements was representing Mauritania in the
              "Huawei Seeds for the Future" program, which reinforced my
              commitment to innovation and continuous learning. I'm passionate
              about building the future of technology, one intelligent system at
              a time.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl" ref={skillsRef}>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-16 text-center transition-all duration-1000 ${
              skillsInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div
                key={category}
                className={`bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-primary/30 ${
                  skillsInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                  {category === "Data & Machine Learning" && (
                    <Database className="w-5 h-5 mr-2" />
                  )}
                  {category === "Data Engineering" && (
                    <Server className="w-5 h-5 mr-2" />
                  )}
                  {category === "Backend & Cloud" && (
                    <Server className="w-5 h-5 mr-2" />
                  )}
                  {category === "Frontend & UI" && (
                    <Palette className="w-5 h-5 mr-2" />
                  )}
                  {category === "Languages" && (
                    <Code className="w-5 h-5 mr-2" />
                  )}
                  {category === "Tools & Platforms" && (
                    <Database className="w-5 h-5 mr-2" />
                  )}
                  {category === "Professional" && (
                    <Users className="w-5 h-5 mr-2" />
                  )}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`text-sm transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground cursor-default ${
                        skillsInView ? "animate-fade-in" : "opacity-0"
                      }`}
                      style={{
                        animationDelay: `${index * 150 + skillIndex * 50}ms`,
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-32 px-6 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden"
      >
        {/* Enhanced background decoration */}
        <div className="absolute inset-0 bg-dot-pattern opacity-3"></div>
        <div className="absolute top-10 left-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/2 to-purple-500/2 rounded-full blur-3xl"></div>
        
        <div
          className="container mx-auto max-w-7xl relative z-10"
          ref={projectsRef}
        >
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Portfolio</span>
            </div>
            <h2
              className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
                projectsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Featured Projects
            </h2>
            <p
              className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
                projectsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Explore my latest work showcasing innovative solutions across various technologies and industries
            </p>
          </div>

          {/* Projects Grid with better spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group transition-all duration-1000 ${
                  projectsInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-primary/40 h-full flex flex-col group-hover:bg-card/90">
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Project content with better spacing */}
                  <div className="relative p-7 flex flex-col h-full">
                    {/* Enhanced header */}
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 flex-shrink-0`}
                      >
                        {project.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 leading-tight line-clamp-2">
                          {project.title}
                        </h3>
                        <Badge 
                          variant="secondary" 
                          className="text-xs px-3 py-1 bg-primary/10 text-primary border-primary/20"
                        >
                          {project.role}
                        </Badge>
                      </div>
                    </div>

                    {/* Description with better typography */}
                    <div className="mb-5 flex-grow">
                      <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300">
                        {project.description}
                      </p>
                    </div>

                    {/* Key highlights with better styling */}
                    <div className="mb-5">
                      <h4 className="font-semibold mb-3 text-sm text-foreground flex items-center gap-2">
                        <div className="p-1 rounded-md bg-primary/10">
                          <Zap className="w-3 h-3 text-primary" />
                        </div>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {project.contributions.slice(0, 2).map((contribution, idx) => (
                          <li
                            key={idx}
                            className="text-muted-foreground text-sm flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="line-clamp-2 leading-relaxed">
                              {contribution}
                            </span>
                          </li>
                        ))}
                        {project.contributions.length > 2 && (
                          <li className="text-primary text-sm font-medium ml-5 hover:text-primary/80 transition-colors duration-200 cursor-pointer">
                            +{project.contributions.length - 2} more achievements
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Technologies with better layout */}
                    <div className="mt-auto">
                      <h4 className="font-semibold mb-3 text-sm text-foreground flex items-center gap-2">
                        <div className="p-1 rounded-md bg-primary/10">
                          <Code className="w-3 h-3 text-primary" />
                        </div>
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 6).map((tech, techIndex) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs px-3 py-1 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 border-border/50 hover:border-primary/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 6 && (
                          <Badge
                            variant="secondary"
                            className="text-xs px-3 py-1 bg-muted/50 hover:bg-muted transition-colors duration-200"
                          >
                            +{project.technologies.length - 6} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Enhanced action button */}
                    <div className="mt-6 pt-4 border-t border-border/30">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced call to action */}
          <div
            className={`text-center transition-all duration-1000 delay-700 ${
              projectsInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex flex-col items-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-3"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </Button>
              <p className="text-sm text-muted-foreground">
                Discover more of my work and contributions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Using My Work Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl" ref={companiesRef}>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-8 text-center transition-all duration-1000 ${
              companiesInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Companies Using My Work
          </h2>
          <p
            className={`text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              companiesInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            My code and solutions are currently powering applications and systems across leading organizations worldwide
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className={`group bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:shadow-xl hover:scale-105 transition-all duration-500 hover:border-primary/30 text-center ${
                  companiesInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    className="h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to company name if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling!.textContent = company.name.charAt(0);
                    }}
                  />
                  <div className="text-4xl font-bold text-muted-foreground group-hover:text-primary transition-colors hidden">
                    {company.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {company.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {company.description}
                </p>
                <div className="mb-3">
                  <Badge variant="outline" className="text-xs">
                    {company.industry}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-12 text-center transition-all duration-1000 delay-700 ${
              companiesInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-muted-foreground italic">
              "Delivering excellence across Fortune 500 companies and emerging
              tech leaders"
            </p>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section
        id="languages"
        className="py-20 px-4 bg-gradient-to-br from-muted/20 to-muted/40 relative"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto max-w-4xl" ref={languagesRef}>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-16 text-center transition-all duration-1000 ${
              languagesInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Languages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {languages.map((language, index) => (
              <div
                key={language.name}
                className={`group bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:shadow-xl hover:scale-105 transition-all duration-500 hover:border-primary/30 ${
                  languagesInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{language.flag}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {language.name}
                    </h3>
                    <p className="text-primary font-medium">{language.level}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {language.proficiency}%
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: languagesInView
                          ? `${language.proficiency}%`
                          : "0%",
                        transitionDelay: `${index * 150 + 300}ms`,
                      }}
                    ></div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {language.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-muted/20 to-muted/40 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div
          className="container mx-auto max-w-6xl relative z-10"
          ref={experienceRef}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-16 text-center transition-all duration-1000 ${
              experienceInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Experience & Education
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                experienceInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center">
                <Server className="w-6 h-6 mr-3" />
                Work Experience
              </h3>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-purple-600"></div>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="relative pl-16 group"
                      style={{
                        animationDelay: `${index * 200}ms`,
                      }}
                    >
                      <div className="absolute left-4 w-4 h-4 bg-primary rounded-full border-4 border-background group-hover:scale-125 transition-transform duration-300"></div>
                      <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:shadow-lg hover:scale-105 transition-all duration-300 hover:border-primary/30">
                        <h4 className="font-semibold text-lg mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-primary font-medium mb-2">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center mb-3">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                experienceInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center">
                <Award className="w-6 h-6 mr-3" />
                Education
              </h3>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-blue-600"></div>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="relative pl-16 group"
                      style={{
                        animationDelay: `${index * 200}ms`,
                      }}
                    >
                      <div className="absolute left-4 w-4 h-4 bg-green-500 rounded-full border-4 border-background group-hover:scale-125 transition-transform duration-300"></div>
                      <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:shadow-lg hover:scale-105 transition-all duration-300 hover:border-green-500/30">
                        <h4 className="font-semibold text-lg mb-1">
                          {edu.title}
                        </h4>
                        <p className="text-green-600 font-medium mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center mb-3">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-muted/20 to-muted/40 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div
          className="container mx-auto max-w-6xl relative z-10"
          ref={accomplishmentsRef}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-16 text-center transition-all duration-1000 ${
              accomplishmentsInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Accomplishments & Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accomplishments.map((achievement, index) => (
              <div
                key={index}
                className={`group bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:shadow-xl hover:scale-105 transition-all duration-500 hover:border-primary/30 ${
                  accomplishmentsInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`${achievement.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl" ref={contactRef}>
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              contactInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of an ambitious team. Feel free to reach
              out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${
                contactInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:ahmedou.enaha@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ahmedou.enaha@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                  <Phone className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+22238133949"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +222 38 13 39 49
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/cheikh-ahmedou-enaha-85470723b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-blue-500 transition-colors"
                  >
                    Cheikh Ahmedou Enaha
                  </a>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/cheikh-ahmedou-enaha-85470723b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 hover:border-gray-700 hover:text-gray-700 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:shadow-xl transition-all duration-1000 delay-500 ${
                contactInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <form 
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name') as string;
                  const email = formData.get('email') as string;
                  const message = formData.get('message') as string;
                  
                  if (!name || !email || !message) {
                    alert('Please fill in all fields');
                    return;
                  }
                  
                  const subject = `Portfolio Contact from ${name}`;
                  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
                  const mailtoLink = `mailto:ahmedou.enaha@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  
                  window.open(mailtoLink, '_blank');
                  
                  // Clear the form
                  e.currentTarget.reset();
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full group hover:scale-105 transition-all duration-300"
                >
                  Send Message
                  <Mail className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground">
            © 2024 Cheikh Ahmedou Enaha. Engineering Intelligence, One Solution
            at a Time.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        .bg-grid-pattern {
          background-image: radial-gradient(
            circle at 1px 1px,
            rgba(255, 255, 255, 0.15) 1px,
            transparent 0
          );
          background-size: 20px 20px;
        }

        .bg-dot-pattern {
          background-image: radial-gradient(
            circle at 2px 2px,
            rgba(255, 255, 255, 0.1) 1px,
            transparent 0
          );
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}
