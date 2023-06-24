import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Innovation Engine</h1>
          <h2 className={styles.imgDesc}>
            Transforming ideas into remarkable digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Am I?</h1>
          <p className={styles.desc}>
            Welcome to my profile page! I&apos;m a PMP certified Project Manager
            and Certified ScrumMaster (CSM) with six years of experience in the
            Biotechnology industry. I specialize in project management,
            particularly in business process development and improvement. With a
            disciplined approach to project management, I excel at planning,
            resource allocation, and fostering collaboration to deliver
            exceptional results.
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
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>About My Work?</h1>
          <p className={styles.desc}>This section is in development!</p>
          <Button url="/contact" text="Contact"></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
