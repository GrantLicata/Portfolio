import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          q={80}
          alt="Three people working on their computers"
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Am I?</h1>
          <p className={styles.desc}>
            There are many words that could describe me, but above all, I am a
            perpetual student. Learning is my greatest source of joy and has
            driven me to pursue diverse paths. I hold the roles of Project
            Manager, Scrum Master, and Full Stack Developer, but I am always
            eager to expand my knowledge and skills. My educational journey
            includes a Bachelor of Science in Molecular and Cellular Biology,
            along with the Project Management Professional (PMP) and Scrum
            Master (CSM) certifications. Additionally, I have completed a
            comprehensive six-month Full Stack Software Development bootcamp.
            <br />
            <br />
            Among my various passions, software development holds a special
            place in my heart. Ever since writing my first &apos;Hello
            World&apos; program nearly seven years ago, I have been captivated
            by the intricacies of this dynamic field. Exploring its complexity,
            I have created numerous applications, some of which are showcased on
            my{" "}
            <Link href="/portfolio" className={styles.internalLink}>
              Portfolio site
            </Link>{" "}
            .
            <br />
            <br />
            Beyond my professional pursuits, I find great fulfillment in a range
            of non-professional activities. Reading is one of my favorite
            pastimes, allowing me to immerse myself in diverse worlds and
            broaden my perspective. Baking is another passion that brings me
            joy, as I experiment with flavors, textures, and techniques to
            create delightful treats. Additionally, I enjoy the serenity and
            adventure that comes with hiking, allowing me to connect with nature
            and embrace the beauty of the great outdoors.
            <br />
            <br />
            By embracing my insatiable thirst for knowledge, passion for
            software development, and love for non-professional endeavors, I
            strive to lead a well-rounded and fulfilling life. I invite you to
            explore my personal website, where you can learn more about my
            professional journey, explore my projects, and get a glimpse into
            the things that ignite my curiosity and passion beyond the realm of
            work.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>About My Work</h1>
          <p className={styles.desc}>
            A PMP certified Project Manager and Certified ScrumMaster (CSM) with
            six years of experience in the Biotechnology industry. I specialize
            in project management, particularly in business process development
            and improvement. With a disciplined approach to project management,
            I excel at planning, resource allocation, and fostering
            collaboration to deliver exceptional results.
            <br />
            <br />
            In addition to my project management expertise, I am a Full Stack
            Software Developer. I completed a rigorous software development
            bootcamp, specializing in Python and the MERN stack (MongoDB,
            Express.js, React.js, and Node.js). This enables me to develop
            robust web applications from scratch. I&apos;m passionate about
            turning ideas into reality and continuously refining my programming
            skills by exploring the latest technologies.
            <br />
            <br />
            Combining my project management acumen with my software development
            expertise, I bridge the gap between business objectives and
            technical implementation. I thrive in collaborative environments
            where I can leverage my multidisciplinary background to drive
            innovation and achieve tangible results. I&apos;m eager to connect
            with like-minded professionals, collaborate on challenging projects,
            and contribute my skills to create impactful solutions. Feel free to
            explore my profile and reach out to discuss potential opportunities!
          </p>
          <Button url="/contact" text="Contact Me"></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
