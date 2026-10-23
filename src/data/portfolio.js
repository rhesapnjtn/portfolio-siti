export const portfolioData = {
  personal: {
    name: "Siti Nuraini Tambunan",
    displayName: "Siti Nuraini",
    role: "Information Systems Graduate · Procurement & IT",
    badge: "Procurement & IT",
    tagline: "Turning Data into Operational Clarity",
    bio: "Information Systems graduate from Universitas Advent Indonesia with a strong interest in Procurement and Information Technology. Experienced in procurement administration, data processing, and document management—detail-oriented, adaptable, and ready to contribute to smoother operations.",
    avatar: "/person.png",
    heroFull: "/portfolio-hero.png",
    status: {
      text: "Open to Procurement & IT Opportunities",
      isAvailable: true
    },
    location: "Matraman, Jakarta, Indonesia",
    degree: "Bachelor of Information Systems — Universitas Advent Indonesia",
    gpa: "3.66 / 4.00",
    educationPeriod: "August 2022 — June 2026",
    email: "tambunansiti260@gmail.com",
    phone: "+62 852-1620-4204",
    linkedin: "https://www.linkedin.com/in/sititambunan",
    whatsapp: "https://wa.me/6285216204204",
    cvFile: "/CV-Siti-Nuraini-Tambunan.pdf",
    cvUrl: "/CV-Siti-Nuraini-Tambunan.pdf"
  },

  heroTechPills: [
    { name: "Excel", bg: "bg-[#FEF08A]", text: "text-[#121316]", border: "border-transparent" },
    { name: "SAP (Basic)", bg: "bg-[#8B5CF6]/15", text: "text-[#6B21A8]", border: "border-[#8B5CF6]/30" },
    { name: "Inventory IT", bg: "bg-white", text: "text-[#121316]", border: "border-[#121316]/10" },
    { name: "Data Processing", bg: "bg-white", text: "text-[#121316]", border: "border-[#121316]/10" }
  ],

  quickNav: [
    { id: "projects", label: "Procurement Work", icon: "Briefcase", target: "#projects", color: "bg-[#8B5CF6]" },
    { id: "experience", label: "Organizations", icon: "Users2", target: "#experience", color: "bg-[#8B5CF6]" },
    { id: "about", label: "Education", icon: "GraduationCap", target: "#about", color: "bg-[#8B5CF6]" },
    { id: "contact", label: "Contact", icon: "Mail", target: "#contact", color: "bg-[#8B5CF6]" }
  ],

  specSheet: [
    { label: "DEGREE", value: "Bachelor of Information Systems" },
    { label: "UNIVERSITY", value: "Universitas Advent Indonesia" },
    { label: "GPA", value: "3.66 / 4.00" },
    { label: "STUDY PERIOD", value: "August 2022 — June 2026" },
    { label: "CURRENT STATUS", value: "Open to opportunities", highlight: true },
    { label: "PRIMARY FOCUS", value: "Procurement Administration & IT Support" },
    { label: "TOOLS", value: "Excel · Word · PowerPoint · SAP (Basic) · Inventory IT" },
    { label: "LOCATION", value: "Matraman, Jakarta" },
    { label: "LANGUAGES", value: "Indonesian · English (TOEFL 470)" }
  ],

  projects: [
    {
      id: "01",
      title: "IT Procurement Administration",
      subtitle: "PTPN IV Regional III · IT Procurement Internship",
      role: "IT Procurement Intern",
      year: "2025",
      category: "Procurement",
      featured: true,
      description: "Supported the administrative side of IT procurement at PTPN IV Regional III—preparing and archiving purchase requisitions, vendor quotations, minutes, and supporting documents while keeping procurement records easy to retrieve.",
      problem: "IT procurement needed a consistent, documented administrative flow so requests, quotations, and supporting records could be tracked, reviewed, and handed over cleanly.",
      solution: "Prepared and archived procurement documents, coordinated with internal teams and relevant units, and compiled procurement data summaries to support monitoring and evaluation.",
      tags: ["Purchase Requisitions", "Vendor Quotations", "Minutes & Records", "Data Reporting", "Document Management"],
      metrics: [
        { label: "Period", value: "May–Jul" },
        { label: "Year", value: "2025" },
        { label: "Focus", value: "IT Procurement" }
      ],
      colorAccent: "#1D4ED8"
    },
    {
      id: "02",
      title: "Public Relations & Event Communication",
      subtitle: "Faculty of IT Student Association · Public Relations",
      role: "Public Relations Division",
      year: "2023–2024",
      category: "Organization",
      featured: true,
      description: "Worked with the Public Relations Division to keep students, campus organizations, and external partners informed—coordinating publicity, event communication, and participant engagement.",
      problem: "Campus activities needed clear communication across divisions and a reliable liaison between committees, speakers, sponsors, and participants.",
      solution: "Coordinated with all divisions on publicity, served as the committee-to-participant liaison, and supported each program from planning through evaluation.",
      tags: ["Event Communication", "Publicity", "Stakeholder Liaison", "Student Engagement"],
      metrics: [
        { label: "Period", value: "2023–24" },
        { label: "Role", value: "Public Relations" },
        { label: "Team", value: "Faculty of IT" }
      ],
      colorAccent: "#8B5CF6"
    },
    {
      id: "03",
      title: "Event Refreshments Coordination",
      subtitle: "Women's Dormitory Organization Body · Refreshments",
      role: "Refreshments Division",
      year: "2024–2025",
      category: "Event Operations",
      featured: true,
      description: "Planned catering requirements and budgets for organizational activities, aligning vendors and committees with participant counts and event schedules.",
      problem: "Each event had different participant counts, schedules, and budget constraints—catering had to be planned accurately without waste.",
      solution: "Compiled catering needs, calculated budgets, and coordinated with committees and vendors so refreshments arrived on schedule.",
      tags: ["Event Planning", "Budget Calculation", "Vendor Coordination", "Catering Logistics"],
      metrics: [
        { label: "Period", value: "2024–25" },
        { label: "Role", value: "Refreshments" },
        { label: "Scope", value: "Dormitory" }
      ],
      colorAccent: "#1D4ED8"
    },
    {
      id: "04",
      title: "Social & Cultural Program Planning",
      subtitle: "Student Executive Board · Social & Cultural Division",
      role: "Social & Cultural Division",
      year: "2025–2026",
      category: "Organization",
      featured: true,
      description: "Designed event concepts, schedules, rundowns, and committee assignments for the Social and Cultural Division while managing proposals, permits, and accountability reports.",
      problem: "Social and cultural programs required coordinated planning, clear task ownership, and complete administrative records from proposal to final report.",
      solution: "Built timelines and rundowns, assigned committee tasks, coordinated with the executive board and partners, and prepared proposals, permits, and accountability reports.",
      tags: ["Program Planning", "Event Rundowns", "Committee Coordination", "Proposals & Permits", "Accountability Reports"],
      metrics: [
        { label: "Period", value: "2025–26" },
        { label: "Role", value: "Social & Cultural" },
        { label: "Team", value: "BEM" }
      ],
      colorAccent: "#8B5CF6"
    }
  ],

  experiences: [
    {
      period: "May 2025 — July 2025",
      role: "IT Procurement Intern",
      company: "PTPN IV Regional III",
      type: "Internship",
      location: "Regional III",
      description: "Supported the administrative process for Information Technology procurement in a systematic and documented manner.",
      highlights: [
        "Prepared, archived, and managed procurement documents including purchase requisitions, vendor quotations, minutes, and supporting records.",
        "Coordinated with internal teams and relevant units to keep the procurement administration process aligned with procedures and schedules.",
        "Compiled and summarized procurement data reports to support monitoring and evaluation.",
        "Maintained organized documentation so all procurement records were easily retrievable and compliant with administrative standards."
      ],
      statusPill: "Internship"
    },
    {
      period: "September 2023 — September 2024",
      role: "Public Relations Division",
      company: "Faculty of Information Technology Student Association",
      type: "Organizational Experience",
      location: "Universitas Advent Indonesia",
      description: "Maintained effective communication with students, internal campus organizations, and external parties to support organizational activities.",
      highlights: [
        "Coordinated with all divisions to publicize activities and boost student participation.",
        "Served as a liaison between the event committee and participants, speakers, sponsors, and partners.",
        "Participated in every stage of work programs—from planning and preparation to execution and evaluation."
      ],
      statusPill: "Organization"
    },
    {
      period: "September 2024 — September 2025",
      role: "Refreshments Division",
      company: "Women's Dormitory Organization Body",
      type: "Organizational Experience",
      location: "Universitas Advent Indonesia",
      description: "Planned catering requirements and budgets for organizational activities based on participant counts and event type.",
      highlights: [
        "Compiled a list of catering needs and calculated the budget efficiently.",
        "Coordinated with the organizing committee, vendors, and relevant parties to ensure catering matched the event schedule."
      ],
      statusPill: "Organization"
    },
    {
      period: "September 2025 — May 2026",
      role: "Social & Cultural Division",
      company: "Student Executive Board (BEM)",
      type: "Organizational Experience",
      location: "Universitas Advent Indonesia",
      description: "Designed concepts, schedules, and administrative support for the Social and Cultural Division's programs.",
      highlights: [
        "Developed timelines, event rundowns, and committee task assignments to keep activities on plan.",
        "Coordinated with the BEM executive board, event committees, and relevant parties throughout preparation and implementation.",
        "Managed event administration, including proposals, correspondence, permits, and accountability reports."
      ],
      statusPill: "Organization"
    }
  ],

  skillCategories: [
    {
      name: "Tools & Systems",
      icon: "Monitor",
      description: "Practical office, enterprise, and inventory tools used for day-to-day administration.",
      skills: [
        { name: "Microsoft Excel", tag: "Data & Reporting" },
        { name: "Microsoft Word", tag: "Documentation" },
        { name: "Microsoft PowerPoint", tag: "Presentations" },
        { name: "SAP (Basic)", tag: "Basic" },
        { name: "Inventory IT", tag: "Working Knowledge" }
      ]
    },
    {
      name: "Data & Administration",
      icon: "Database",
      description: "Organizing information so records stay accurate, retrievable, and useful.",
      skills: [
        { name: "Data Processing", tag: "Working Knowledge" },
        { name: "Procurement Administration", tag: "Internship Experience" },
        { name: "Document Management", tag: "Working Knowledge" },
        { name: "Reporting & Summaries", tag: "Working Knowledge" },
        { name: "Database Fundamentals", tag: "Certified" }
      ]
    },
    {
      name: "People & Execution",
      icon: "Users",
      description: "Coordinating across teams and keeping activities on schedule.",
      skills: [
        { name: "Communication", tag: "Core" },
        { name: "Collaboration", tag: "Core" },
        { name: "Teamwork", tag: "Core" },
        { name: "Problem Solving", tag: "Core" },
        { name: "Thoroughness", tag: "Core" }
      ]
    },
    {
      name: "Languages & Certifications",
      icon: "Award",
      description: "Formal learning that supports technology, data, and systems work.",
      skills: [
        { name: "Indonesian", tag: "Native" },
        { name: "English", tag: "TOEFL 470" },
        { name: "Alibaba Cloud Associate", tag: "Apr 2024" },
        { name: "IT Specialist — Database", tag: "Nov 2025" },
        { name: "Cloud & Database Concepts", tag: "Certified" }
      ]
    }
  ]
};
