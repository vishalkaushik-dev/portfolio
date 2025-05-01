/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Vishal Kaushik",
  logo_name: "VK",
  nickname: "chinu",
  full_name: "Vishal Kaushik",
  subTitle:
    "Full Stack Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1Pts8DBVv2DwhswdMMk51VWkwfowQ0oyJ/view?usp=drive_link",
  mail: "mailto:vish4kaushik@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/vishalkaushik-dev",
  linkedin: "https://www.linkedin.com/in/vishalkaushik-dev/",
  gmail: "vish4kaushik@gmail.com",
  facebook: "https://www.facebook.com/vishal.kaushik.602/",
  twitter: "https://twitter.com/Kaushik__Vish",
  instagram: "https://www.instagram.com/vishal.kaushiik/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web applications",
        "⚡ Building responsive website front end using ReactJS, NextJS and Redux",
        "⚡ Creating application backend in Node, Express and use PostgreSql, MongoDB and DynamoDB database ",
        "⚡ Integration of third party services such as AWS / Firebase/ Digital Ocean"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:tsnode",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    
  ],
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/vishalkaushik-dev/",
    },
    {
      siteName: "GeeksforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2F8D46",
      },
      profileLink: "https://www.geeksforgeeks.org/user/vishal_kaushik/",
    }
  ],
};

const degrees = {
  degrees: [
    {
      title: "YMCA  University of Science & Technology",
      logo_path: "ymca.png",
      alt_name: "YMCA",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, OOPS, Operating System etc.",
        "⚡ I have also completed various online courses for Backend , Web App Development, Machine Learning etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://jcboseust.ac.in/",
    },
    {
      title: "GBN Govt Polytechnic, Nilokheri",
      logo_path: "GBN_LOGO.jpeg",
      alt_name: "GBN Govt,Nilokheri",
      duration: "2015 - 2018",
      descriptions: [
        "⚡ I have studied core subjects like Machine Drawing, SOM, Applied Mechanics etc.",
        "⚡ Practical experience operating and understanding lathe machines, and other workshop tools",
        "⚡ Skilled in machine drawing and CAD software (AutoCAD) ",
        "⚡ Basic knowledge of thermodynamics and boiler systems."
      ],
      website_link: "http://gpnilokheri.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data Structure",
      subtitle: "Coding Ninjas",
      logo_path: "cn.png",
      certificate_link:
        "https://ninjasfiles.s3.amazonaws.com/certificate8905091fa0804baec94d1cec41754a0679426a.pdf",
      alt_name: "Coding Ninjas",
      // color_code: "#2AAFED",
      color_code: "#fffbf3"
      // color_code: "#47A048",
    },
    {
      title: "Machine Learning",
      subtitle: "NPTEL",
      logo_path: "nptel.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1jGaWl7Zp7KzsDbe_LOmESi2u_2zf65dk/view?usp=sharing",
      alt_name: "machine learning",
      // color_code: "#E2405F",
      color_code: "#fffbf3"
    },
    {
      title: "Node JS Advance Concepts",
      subtitle: "Udemy",
      logo_path: "udemy-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1b0zxXrq_vNPSLy2fh3YiO9C2dnSfsHPb/view?usp=sharing",
      alt_name: "Node JS Advance Concepts",
      // color_code: "#E2405F",
      color_code: "#fffbf3"
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Engineer",
          company: "To The New",
          company_url: "https://www.tothenew.com/",
          logo_path: "tothenew.jpeg",
          duration: "Sep 2021 - Present",
          location: "Noida",
          description:
            "As a Full Stack Developer, I led the development of an AWS-based Developer Portal to streamline API management and client onboarding, incorporating rate-limiting and usage plans for efficient resource control. I modernized legacy integrations by implementing a serverless architecture on AWS, improving performance by 40%, and optimized large data exports in a Node.js microservice setup using worker threads for a 30% speed gain. On the frontend, I developed responsive, reusable components and optimized performance to enhance UX and SEO. I ensured high code quality through Jest testing and SonarQube, and designed effective database schemas for faster data access.",
          color: "#0071C5",
        },
        {
          title: "Full Stack Developer (Intern)",
          company: "DuckTale IT Services",
          company_url: "https://ducktaleit.com/",
          logo_path: "DuckTale_logo.png",
          duration: "Jan 2021 - July 2021",
          location: "Mohali",
          description:
            "During Internship, I worked on two projects. ProBacklog project in which every member of your software team can plan, track, and release great software in different corner of the world. Create user stories and issues, plan sprints, and distribute tasks across your software team which helps team track their activities. THe Dog School Project, in which dogs have to be trained and all the dogs details and activities are recorded.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create ReactJS Frontend and NodeJS backend Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "While I don't often write blogs, as I prefer focusing on documentation, here are a few blog posts I’ve written.",
    link: "https://www.tothenew.com/blog/author/vishal-kaushik/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Showtime",
      description: "Developed ShowTime, a full-featured social web application that allows users to share text and media posts, engage with others through likes, dislikes, comments, and reports, and build a network by sending friend requests and exploring user profiles.",
      languages: [
          ],
      url: 'https://github.com/vishalkaushik-dev/ShowTime-Social-Web-Application'
    },
    {
      id: "1",
      name: "E-Commerce web app",
      description: "This project is MERN Stack jwt authenticated web application in which user can buy products. We use Stripe payment gateway for online payment, SendGrid for email verification and messageBird for phone number verification",
      languages: [
            
          ],
      url: ''
    },
    {
      id: "2",
      name: "RabbitWorker",
      description: "Developed a microservice-based application where a producer sends messages to a RabbitMQ queue, and a consumer processes them using Worker Threads for efficient parallel execution, enhancing both scalability and system performance.",
      languages: [
            
          ],
      url: 'https://github.com/vishalkaushik-dev/RabbitWorker'
    },
    {
      id: "3",
      name: "Food ordering app",
      description: "Built a food ordering web application that enables users to browse menus, add items to a cart, and place orders, offering a seamless and user-friendly food ordering experience.",
      languages: [
            
          ],
      url: 'https://github.com/vishalkaushik-dev/Food-Ordering-Application'
    },
    {
      id: "4",
      name: "Sentiment Analysis",
      description:
        "This project aims to analyze the sentiments of tweets based on particular subject, as sentiment analysis is the process of predicting whether a piece of information (i.e. text, most commonly) indicates a positive, negative or neutral sentiment on the topic",
        languages: [
            
        ],
    },
    {
      id: "5",
      name: "News Classifier",
      description:
        "This project aims to analyze the news that it is fake or real by using machine learning algorithms like Naive Bayes, SVM and LSTM",
        languages: [
            
        ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  competitiveSites,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
