import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About E-Book</h2>
            <p className='fs-17'>Welcome to E-Book – your ultimate destination for everything books! Founded in 2024, E-Book was born out of a deep love for literature and a desire to share that passion with the world. Our mission is to ignite a love for reading and provide a platform where book enthusiasts can discover, explore, and discuss their favorite reads. We are a team of avid readers, writers, and literary critics with diverse backgrounds and a shared love for the written word. At E-Book, we offer more than just book reviews; our site features curated reading lists, in-depth author interviews, community forums, and exclusive discounts. We invite you to join our growing community of book lovers by signing up for our newsletter and following us on social media. We love hearing from our readers, so feel free to reach out with questions, feedback, or book recommendations. Happy reading!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
