/* ===================================================================
   PORTFOLIO DATA — SINGLE SOURCE OF TRUTH
   -------------------------------------------------------------------
   Edit THIS file whenever you need to update the website's content.
   You should never need to touch the HTML or CSS for content changes.
   Each section below is rendered automatically by /js/main.js.
=================================================================== */

const portfolioData = {
  /* -----------------------------------------------------------------
     1. PERSONAL INFO  (used in nav, hero, footer, contact)
  ----------------------------------------------------------------- */
  personal: {
    name: "Ankan Saha",
    firstName: "Ankan",
    lastName: "Saha",
    title: "Lecturer · Researcher · Engineer",
    tagline: "Computer Science & Engineering",
    institution: "Bangladesh University of Business and Technology",
    location: "Narayanganj, Dhaka, Bangladesh",
    email: "ankansaha314159@gmail.com",
    phone: "+8801537564558",
    photo: "assets/profile.jpg",
    cv: "assets/CV.pdf",

    // Short welcome paragraphs for the hero / about
    welcome: "Welcome — I'm glad you're here.",
    intro:
      "I'm a Lecturer in Computer Science & Engineering and a Master's researcher at BUET, working at the intersection of deep learning, medical image segmentation, and blockchain systems. I build, teach, and publish — and this site is a record of that work.",
    about: [
      "I currently serve as a Lecturer at the Bangladesh University of Business and Technology (BUBT) while pursuing my M.Sc. in Computer Science & Engineering at the Bangladesh University of Engineering & Technology (BUET).",
      "My research focuses on hybrid transformer–CNN architectures for multi-organ medical image segmentation. Alongside this, I work on blockchain systems — most recently a dual-chain UAV pharmaceutical delivery framework — and have published peer-reviewed work in IEEE conferences on summarization, blockchain optimization, IoT identity, and explainable medical AI.",
      "Outside research, I teach undergraduate CSE courses, mentor students on theses and career development, and enjoy competitive programming on Codeforces, LeetCode, and CodeChef.",
    ],
  },

  /* -----------------------------------------------------------------
     2. SOCIAL / PROFILE LINKS
  ----------------------------------------------------------------- */
  socials: {
    email: "mailto:ankansaha314159@gmail.com",
    linkedin: "https://www.linkedin.com/in/ankan-saha18/",
    github: "https://github.com/AnkanSaha18",
    scholar: "https://scholar.google.com/citations?user=vQKU92kAAAAJ&hl=en",
    codeforces: "https://codeforces.com/profile/Ankan_Saha",
    leetcode: "https://leetcode.com/ankansaha314159/",
    codechef: "https://www.codechef.com/users/ankan_saha00",
  },

  /* -----------------------------------------------------------------
     3. QUICK STATS  (shown on the hero band)
  ----------------------------------------------------------------- */
  stats: [
    { value: "5", label: "Peer-Reviewed Publications" },
    { value: "12+", label: "Major Projects" },
    { value: "800+", label: "Competitive Problems Solved" },
    { value: "2", label: "Dean's Awards" },
  ],

  /* -----------------------------------------------------------------
     4. EDUCATION
  ----------------------------------------------------------------- */
  education: [
    {
      degree: "M.Sc. in Computer Science & Engineering",
      institution: "Bangladesh University of Engineering & Technology (BUET)",
      period: "2024 — Present",
      grade: "CGPA: 3.57 / 4.00",
      note: "10-Point Absolute Grading Scale; 90% = A+",
      url: "https://cse.buet.ac.bd/",
    },
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Khulna University of Engineering & Technology (KUET)",
      period: "2019 — 2024",
      grade: "CGPA: 3.73 / 4.00",
      note: "Two-time Dean's Award recipient",
      url: "https://www.kuet.ac.bd/cse/",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dr. Mahbubur Rahman Mollah College, Dhaka",
      period: "2016 — 2018",
      grade: "GPA: 5.00 / 5.00",
      note: "Science group",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Narayanganj High School and College, Narayanganj",
      period: "2011 — 2016",
      grade: "GPA: 4.89 / 5.00",
      note: "Science group",
    },
  ],

  /* -----------------------------------------------------------------
     5. PROFESSIONAL EXPERIENCE
  ----------------------------------------------------------------- */
  experience: [
    {
      role: "Lecturer",
      organization: "Bangladesh University of Business and Technology (BUBT)",
      period: "July 2025 — Present",
      url: "https://www.bubt.edu.bd/",
      points: [
        "Teach core CSE courses including Microprocessors & Microcontrollers (CSE 325) and Digital Logic Design (CSE 205) with hands-on lab sessions.",
        "Design lab content, problem sets, and assessment rubrics; mentor students on theses and projects.",
      ],
    },
    {
      role: "Lecturer",
      organization: "Hamdard University Bangladesh (HUB)",
      period: "May 2024 — July 2025",
      url: "https://www.hamdarduniversity.edu.bd/",
      points: [
        "Delivered lectures and lab sessions for Digital Logic Design, Computer Architecture, Microprocessor & Microcontroller, and Discrete Mathematics.",
        "Monitored student performance, offered personalised feedback, and mentored on academic progress and career development.",
      ],
    },
  ],

  /* -----------------------------------------------------------------
     6. PUBLICATIONS
     ----------------
     scholarUrl is used as the verifiable link. If you later get a DOI
     or IEEE Xplore link for an individual paper, replace the "url"
     field for that specific entry.
  ----------------------------------------------------------------- */
  publications: [
    {
      title:
        "Segmentation-Driven Deep Learning for Explainable and Automated Vocal Fold Disorder Classification",
      venue: "IEEE ICECTE 2026",
      year: "2026",
      type: "Conference",
      authors: ["Fahima Hossain", "Ananna Datta", "Ankan Saha"],
      url: "https://scholar.google.com/citations?user=vQKU92kAAAAJ&hl=en",
    },
    {
      title:
        "Blockchain-Driven Identity Management for IoT: Enhancing Security and Scalability with Multi-Factor Authentication",
      venue: "IEEE QPAIN 2025",
      year: "2025",
      type: "Conference",
      authors: [
        "Ankan Saha",
        "Md Rashadul Haque Shuvo",
        "Sourav Majumder",
        "Fahima Hossain",
      ],
      url: "https://scholar.google.com/citations?user=vQKU92kAAAAJ&hl=en",
    },
    {
      title: "TruthShield: A Machine Learning Approach to Fake News Detection",
      venue: "IEEE QPAIN 2025",
      year: "2025",
      type: "Conference",
      authors: [
        "Palash Saha",
        "Fahima Hossain",
        "Rashadul Haque Shuvo",
        "Niaz Hossain",
        "Md Asif",
        "Ankan Saha",
      ],
      url: "https://scholar.google.com/citations?user=vQKU92kAAAAJ&hl=en",
    },
    {
      title:
        "Enhancing Hyperledger Fabric: A Scalable Framework for Optimized Blockchain Performance",
      venue: "IEEE ICCIT 2024",
      year: "2024",
      type: "Conference",
      authors: [
        "Ankan Saha",
        "Sourav Majumder",
        "Md. Motaleb Hossen Manik",
        "M.M.A. Hashem",
      ],
      url: "https://scholar.google.com/citations?user=vQKU92kAAAAJ&hl=en",
    },
    {
      title: "Unravel News: An Efficient Summarization Approach",
      venue: "IEEE COMPAS 2024",
      year: "2024",
      type: "Conference",
      authors: ["Ankan Saha", "Abdullah Al Shafi"],
      url: "https://scholar.google.com/citations?user=vQKU92kAAAAJ&hl=en",
    },
  ],

  /* -----------------------------------------------------------------
     7. THESIS WORK
  ----------------------------------------------------------------- */
  thesis: [
    {
      level: "B.Sc. Thesis",
      title:
        "Optimizing Hyperledger Framework for High Transaction Throughput in Private Blockchain",
      summary:
        "Developed an innovative approach to optimize transaction throughput in Hyperledger private blockchain networks, achieving significant improvements in speed and efficiency through enhanced network architecture, advanced chaincode functionality, and seamless Node.js integration.",
      supervisor: "Prof. Dr. M.M.A. Hashem",
      institution: "KUET",
      url: "https://github.com/AnkanSaha18/CSE-4000",
    },
    // {
    //   level: "M.Sc. Thesis (Ongoing)",
    //   title:
    //     "Hybrid Transformer–CNN Architectures for Multi-Organ Medical Image Segmentation",
    //   summary:
    //     "Designing HybridWABHABSERLABUNet — a hybrid encoder combining Twins-SVT and RegionViT blocks with a UNet decoder featuring adaptive fusion and channel cross-attention — for multi-organ segmentation across Synapse, ACDC, SegThor, and LCTSC datasets.",
    //   institution: "BUET",
    //   url: "",
    // },
  ],

  /* -----------------------------------------------------------------
     8. PROJECTS
     -----------
     Each project has a `category` used by the filter chips.
     Categories: AI/ML, Web, Systems, Mobile, Game, Embedded
  ----------------------------------------------------------------- */
  projects: [
    {
      title: "Nail Disease Prediction",
      category: "AI/ML",
      description:
        "A deep-learning system that detects nail diseases from images using transfer learning to classify multiple nail conditions for automated medical diagnosis assistance.",
      tech: ["Python", "PyTorch", "Transfer Learning"],
      url: "https://www.kaggle.com/lailabinta10",
    },
    {
      title: "Bangla–Banglish Sentiment Analysis",
      category: "AI/ML",
      description:
        "A hybrid approach combining BanglaBERT and BanglishBERT for multiclass emotion classification across Bangla and Banglish (romanised Bangla) texts.",
      tech: ["Python", "Scikit-learn", "NLTK", "BERT"],
      url: "https://www.kaggle.com/code/sybuetacc/bangla-banglish-nb",
    },
    {
      title: "News Summary",
      category: "AI/ML",
      description:
        "A Flask web application that summarises news articles from various sources using extractive and abstractive summarisation techniques powered by an NLP T5 transformer.",
      tech: ["Python", "Flask", "T5", "Bootstrap"],
      url: "https://github.com/AnkanSaha18/News-Summary",
    },
    {
      title: "Medi-Sol",
      category: "Web",
      description:
        "A web platform that provides users with easy access to nearby medical facilities, ambulance services, pharmacies, and doctor contact information.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      url: "https://github.com/AnkanSaha18/Medi_Sol",
    },
    {
      title: "Basketball-Ground",
      category: "Game",
      description:
        "An OpenGL-based virtual basketball game where a player can simulate basketball gameplay in a 3D virtual world.",
      tech: ["C/C++", "OpenGL 3.3"],
      url: "https://github.com/AnkanSaha18/Basketball-Ground",
    },
    {
      title: "Len-Choa",
      category: "Game",
      description:
        "A classical board game implemented with a game-theory-based AI opponent and an interactive graphical interface built in Pygame for challenging gameplay.",
      tech: ["Python", "Pygame", "Game Theory"],
      url: "https://github.com/AnkanSaha18/Len-Choa",
    },
    {
      title: "Cardiac Recorder",
      category: "Mobile",
      description:
        "An Android application that tracks the cardiac and general health information of users, with full unit testing and UI testing to validate correctness.",
      tech: ["Java", "SQLite", "Git", "Unit & UI Testing"],
      url: "https://github.com/1807054-1807060/Cardiac-Recorder",
    },
    {
      title: "Coaching Management System",
      category: "Systems",
      description:
        "A coaching-centre management application built around database manipulation and external API integration including the OpenWeatherMap API.",
      tech: ["Java", "JavaFX", "SQL", "OpenWeatherMap API"],
      url: "https://github.com/AnkanSaha18/JavaMainProject01",
    },
    {
      title: "Cook-Book",
      category: "Mobile",
      description:
        "An iOS application that stores recipes for different dishes; users can insert new recipes into the database and delete existing ones.",
      tech: ["Swift", "MySQL"],
      url: "https://github.com/AnkanSaha18/cook_book",
    },
    {
      title: "Line Follower Robot",
      category: "Embedded",
      description:
        "A built-from-scratch 3-wheeler robot that autonomously follows lines and successfully navigates complex node intersections.",
      tech: ["C/C++", "Arduino"],
      url: "https://github.com/AnkanSaha18/Line-Follower-Robot",
    },
    {
      title: "Compiler Project",
      category: "Systems",
      description:
        "A custom-built compiler implementing lexical analysis and semantic analysis stages from scratch.",
      tech: ["Flex", "Bison", "Objective-C"],
      url: "https://github.com/AnkanSaha18/Compiler_Project",
    },
    
  ],

  /* -----------------------------------------------------------------
     9. CERTIFICATIONS
  ----------------------------------------------------------------- */
  certifications: [
    {
      title: "Attention in Transformers: Concepts and Code in PyTorch",
      issuer: "DeepLearning.AI",
      skills: ["Deep Learning", "Embeddings", "GenAI", "NLP", "Transformers"],
      url: "https://learn.deeplearning.ai/accomplishments/dc481516-c89c-47e6-af2a-294900e96d90?usp=sharing",
    },
    {
      title: "Number Theory and Cryptography",
      issuer: "Coursera · UC San Diego",
      skills: ["Number Theory", "Cryptography", "Modular Exponentiation"],
      url: "https://coursera.org/share/f3134e6e5b6e0d377f1b4b3d388b8f5c",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera · DeepLearning.AI",
      skills: [
        "Linear Regression",
        "Logistic Regression",
        "Regularization",
        "Gradient Descent",
      ],
      url: "https://coursera.org/share/1742a5fd4bb1d2e5555d0679f2d497f0",
    },
    {
      title: "Advanced Learning Algorithms",
      issuer: "Coursera · DeepLearning.AI",
      skills: ["TensorFlow", "Neural Networks", "XGBoost", "Tree Ensembles"],
      url: "https://www.coursera.org/account/accomplishments/verify/B6YJ4ZRXSWLX",
    },
    {
      title: "Blockchain Basics",
      issuer: "Coursera · University at Buffalo",
      skills: ["Ethereum", "Cryptography", "Blockchains", "Bitcoin"],
      url: "https://coursera.org/share/b356b1e99ea915bb7725eac4fd2c5f46",
    },
    {
      title: "Build an App in Android Studio using Read-Write",
      issuer: "Coursera",
      skills: ["Android Studio", "Java", "Mobile Development"],
      url: "https://coursera.org/share/38c2caf3082079337c9bb9b718c45e27",
    },
  ],

  /* -----------------------------------------------------------------
     10. ACHIEVEMENTS
  ----------------------------------------------------------------- */
  achievements: [
    {
      title: "Dean's Award",
      year: "2021",
      issuer: "Faculty of Electrical & Electronic Engineering, KUET",
      description:
        "Awarded by the Honourable Dean for outstanding academic performance during the 2020–21 session.",
    },
    {
      title: "Dean's Award",
      year: "2020",
      issuer: "Faculty of Electrical & Electronic Engineering, KUET",
      description:
        "Awarded by the Honourable Dean for outstanding academic performance during the 2019–20 session.",
    },
    {
      title: "1st Runner-up · Inter-School Math Olympiad",
      year: "2015",
      issuer: "Narayanganj Ideal School",
      description:
        "Secured the 1st runner-up position in the Inter-School Math Olympiad held at Narayanganj Ideal School.",
    },
  ],

  /* -----------------------------------------------------------------
     11. SKILLS  (grouped, with simple level indicators 0–100)
  ----------------------------------------------------------------- */
  skills: {
    "Programming Languages": [
      { name: "Python", level: 92 },
      { name: "C / C++", level: 88 },
      { name: "Java", level: 82 },
      { name: "Swift", level: 65 },
    ],
    "AI / ML & Data": [
      { name: "PyTorch", level: 88 },
      { name: "TensorFlow", level: 78 },
      { name: "NumPy / Pandas", level: 90 },
      { name: "Matplotlib", level: 85 },
    ],
    "Web & Frameworks": [
      { name: "HTML / CSS / JS", level: 85 },
      { name: "Flask", level: 78 },
      { name: "Bootstrap", level: 80 },
      { name: "PHP", level: 65 },
    ],
    "Systems & Tools": [
      { name: "Git", level: 88 },
      { name: "LaTeX", level: 92 },
      { name: "Linux", level: 85 },
      { name: "Hyperledger Fabric", level: 80 },
    ],
    Databases: [
      { name: "Oracle SQL", level: 78 },
      { name: "MySQL", level: 82 },
      { name: "SQLite", level: 80 },
    ],
    "Other Frameworks / SDKs": [
      { name: "iOS / Android", level: 70 },
      { name: "OpenGL", level: 75 },
      { name: "Pygame", level: 80 },
    ],
  },

  /* -----------------------------------------------------------------
     12. COMPETITIVE PROGRAMMING
  ----------------------------------------------------------------- */
  competitive: [
    {
      platform: "Codeforces",
      handle: "Ankan_Saha",
      stat: "500+ problems solved",
      url: "https://codeforces.com/profile/Ankan_Saha",
      icon: "CF",
    },
    {
      platform: "LeetCode",
      handle: "ankansaha314159",
      stat: "300+ problems solved",
      url: "https://leetcode.com/ankansaha314159/",
      icon: "LC",
    },
    {
      platform: "CodeChef",
      handle: "ankan_saha00",
      stat: "3-Star · Max rating 1612",
      url: "https://www.codechef.com/users/ankan_saha00",
      icon: "CC",
    },
  ],

  /* -----------------------------------------------------------------
     13. REFERENCES
  ----------------------------------------------------------------- */
  references: [
    {
      name: "Dr. M.M.A. Hashem",
      title: "Professor",
      department: "Department of Computer Science and Engineering",
      institution: "Khulna University of Engineering & Technology",
      email: "hashem@cse.kuet.ac.bd",
      phone: "+880 1714-003949",
      profileUrl: "https://www.kuet.ac.bd/cse/hashem/",
    },
    {
      name: "Dr. A.K.M. Ashikur Rahman",
      title: "Professor",
      department: "Department of Computer Science and Engineering",
      institution: "Bangladesh University of Engineering and Technology",
      email: "ashikur@cse.buet.ac.bd",
      phone: "+880 1556-329138",
      profileUrl: "https://cse.buet.ac.bd/faculty/faculty_detail/ashikurrahman",
    },
    {
      name: "Dr. Sadia Sharmin",
      title: "Associate Professor",
      department: "Department of Computer Science and Engineering",
      institution: "Bangladesh University of Engineering and Technology",
      email: "sadiasharmin@cse.buet.ac.bd",
      phone: "+880 1817-108555",
      profileUrl: "https://cse.buet.ac.bd/faculty/faculty_detail/sadia",
    },
  ],
};
