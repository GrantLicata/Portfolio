import DuoChat from "./images/duochat.png";
import CookBook from "./images/cookbook.jpg";
import Contact from "./images/contact-manager.png";
import Storynote from "./images/storynote.png";

export const items = {
  applications: [
    {
      id: 1,
      title: "DuoChat",
      desc: "DuoChat is a cloud-enabled, mobile-ready, real-time chat application, built to help bring people together. It makes use of the following technologies: React, Firebase, JavaScript, and SASS. Some of the features included are the ability to search for contacts, image sharing, real-time chat, timestamps, audible notifications, mobile friendly, and multi sign-in methods.",
      image: DuoChat,
      url: "https://duochat.app/login",
      gitHub: "https://github.com/GrantLicata/DuoChat",
      live: true,
    },
    {
      id: 2,
      title: "CookBook",
      desc: "Group project working collaboratively with a team of developers at the Coding Dojo. The CookBook project was an opportunity for our team to explore the MERN stack of technologies, which includes MongoDB, Express, React, and Node among others.",
      image: CookBook,
      url: "https://cookbookapp.net/",
      gitHub: "https://github.com/CookBook-Group-Project/CookBook",
      live: true,
    },
    {
      id: 3,
      title: "Contact Manager",
      desc: "Contact Manager was built as a testing ground for learning serverless design with MongoDB and Next.js's latest API management features. It allows any user to enter their name, email, and a message to a list. Each item in that list can then be edited or deleted.",
      image: Contact,
      url: "https://contact-manager-gold.vercel.app/",
      gitHub: "https://github.com/GrantLicata/Contacts",
      live: true,
    },
    {
      id: 4,
      title: "Storynote",
      desc: "An application built for the student and business professional who needs an open canvas approach to note taking. Users no longer have to separate notes into closed files and folders. All notes are available as an ongoing script to be added to, edited, and deleted as needed.",
      image: Storynote,
      url: "https://storynote.vercel.app/",
      gitHub: "https://github.com/GrantLicata/Storynote",
      live: false,
    },
  ],
};
