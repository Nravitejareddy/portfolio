const config = {
  title: "Ravi Teja Reddy | Computer Science Graduate",
  description: {
    long: "Explore the portfolio of Ravi Teja Reddy, a Computer Science graduate passionate about software development, problem-solving, and building practical applications. Discover projects spanning full-stack development, Android development, artificial intelligence, machine learning, and cybersecurity.",
    short:
      "Portfolio of Ravi Teja Reddy, a Computer Science graduate showcasing software development, full-stack, Android, machine learning, and AI projects.",
  },
  keywords: [
    "Ravi Teja Reddy",
    "portfolio",
    "computer science graduate",
    "software development",
    "Java",
    "Python",
    "JavaScript",
    "React",
    "Flask",
    "Kotlin",
    "Android development",
    "MySQL",
    "machine learning",
    "artificial intelligence",
    "Spline",
    "Framer Motion",
  ],
  author: "Ravi Teja Reddy",
  email: "ravitejareddy1866@gmail.com",
  site: "http://localhost:3000",

  // for github stars button
  githubUsername: "Nravitejareddy",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/raviteja-reddy-nagella-283724301/",
    instagram: "",
    facebook: "",
    github: "https://github.com/Nravitejareddy",
  },
};
export { config };
