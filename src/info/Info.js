import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import meta from "../img/meta.png";
import devhub from "../img/devhub.png";
import singlestone from "../img/singlestone.png";
import cisco from "../img/cisco.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Chris",
  lastName: "Barfield",
  initials: "CB",
  position: "a Computer Science Student",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "📱",
      text: "tech enthusiast",
    },
    {
      emoji: "📚",
      text: "university of virginia",
    },
    {
      emoji: "💻",
      text: "intern at linkedin",
    },
    {
      emoji: "📧",
      text: "cdb8da@virginia.edu",
    },
  ],
  socials: [
    {
      link: "https://twitter.com/bayareabarfield",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    {
      link: "https://drive.google.com/file/d/1Qdjhkecguh2wKutvrrWRQcHtM8nelXXD/view?usp=sharing",
      icon: "fa fa-id-badge",
      label: "resume",
    },
    {
      link: "https://linkedin.com/in/barfieldjr",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://github.com/barfieldjr",
      icon: "fa fa-github",
      label: "github",
    },
  ],
  bio: "Hello! I'm Chris. I'm a computer science student at the University of Virginia. I love learning about new tech! In my free time, along with working on personal projects, I enjoy watching videos about startups and the origin stories of tech companies.",
  skills: {
    proficientWith: ["python", "javascript", "react", "git", "tailwind css"],
    exposedTo: [
      "nodejs",
      "solidity",
      "aws",
      "azure",
      "google cloud platform",
      "machine learning",
      "tensorflow",
      "golang",
    ],
  },
  hobbies: [
    {
      label: "shows",
      emoji: "🎥",
    },
    {
      label: "projects",
      emoji: "💻",
    },
    {
      label: "sports",
      emoji: "🏈",
    },
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Project 1",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Project 2",
      live: "https://paytonpierce.dev",

      image: mock2,
    },
    {
      title: "Project 3",
      live: "https://paytonpierce.dev",

      image: mock3,
    },
    {
      title: "Project 4",
      live: "https://paytonpierce.dev",

      image: mock4,
    },
    {
      title: "Project 5",
      live: "https://paytonpierce.dev",

      image: mock5,
    },
  ],
  experience: [
    {
      companyName: "Meta (Facebook)",
      dates: "June 2022 - August 2022",
      location: "Menlo Park, California",
      title: "Software Engineering Intern",
      image: meta,
      skills:
        "React, Tailwind, ExpressJS, NodeJS, Solidity, Flow, Google Cloud Platform, Git",
    },
    {
      companyName: "UVA Development Hub",
      dates: "January 2022 - May 2022",
      location: "Charlottesville, Virginia",
      title: "ML/A.I. Intern",
      image: devhub,
      skills:
        "Python, TensorFlow, Keras, Pandas, Numpy, AWS Lamba, AWS EC2, AWS S3, Google Colab",
    },
    {
      companyName: "SingleStone Consulting",
      dates: "June 2021 - August 2021",
      location: "Richmond, Virginia",
      title: "Software Engineering Intern",
      image: singlestone,
      skills:
        "Javascript, Microsoft Power Automate, Azure Devops, Azure Functions, Git",
    },
    {
      companyName: "Cisco Systems",
      dates: "May 2021",
      location: "Remote",
      title: "Technical Extern",
      image: cisco,
      skills: "Technical Knowledge, Systems Design",
    },
  ],
};
