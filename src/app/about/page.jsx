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
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Am I?</h1>
          <p className={styles.desc}>
            Welcome to my profile page! I'm a PMP certified Project Manager and
            Certified ScrumMaster (CSM) with a passion for leading teams and
            delivering successful projects. With six years of experience in the
            Biotechnology industry, I have honed my skills in project
            management, particularly in the areas of business process
            development and improvement.
            <br />
            <br />
            As a PMP certified professional, I bring a disciplined approach to
            project management, ensuring effective planning, resource
            allocation, and risk management. I thrive in dynamic environments
            and excel at fostering collaboration, driving teams towards project
            goals, and delivering results that exceed expectations.
            <br />
            <br />
            In addition to my project management expertise, I am also a Full
            Stack Software Developer. I completed a rigorous software
            development bootcamp, specializing in Python and the MERN stack
            (MongoDB, Express.js, React.js, and Node.js). This training has
            equipped me with the skills to develop robust web applications from
            the ground up.
            <br />
            <br />
            I find joy in turning ideas into reality, and I often spend my spare
            time developing web applications that showcase my creativity and
            technical prowess. This allows me to stay up to date with the latest
            technologies and continuously refine my programming skills.
            <br />
            <br />
            Combining my project management acumen with my software development
            expertise, I am uniquely positioned to bridge the gap between
            business objectives and technical implementation. I thrive in
            collaborative environments where I can leverage my multidisciplinary
            background to drive innovation and achieve tangible results.
            <br />
            <br />
            I'm excited to connect with like-minded professionals, collaborate
            on challenging projects, and contribute my skills to create
            impactful solutions. Feel free to explore my profile and reach out
            to discuss potential opportunities!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>About My Work?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            sapiente, ipsa dolore officia pariatur aliquam id nobis odio, minus
            explicabo, dicta dolorem voluptates ducimus illo molestiae molestias
            iste culpa doloremque.
            <br />
            <br /> - Project Management
            <br />
            <br /> - Software Development
            <br />
            <br /> - Product Design
          </p>
          <Button url="/contact" text="Contact"></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
