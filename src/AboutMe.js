import React from 'react';
import 'bulma/css/bulma.css';

const AboutMe = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero is-info is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              Meet Yulia - Your Expert in Natural Rejuvenation
            </h1>
            <h2 className="subtitle">
              Certified cosmetologist and yoga instructor
            </h2>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-4">
              <figure className="image">
                <img src="./images/photoYulie.jpg" alt="Yulia" />
              </figure>
            </div>
            <div className="column is-8">
              <div className="content">
                <p>Learning throughout life - that's about me. I started studying rejuvenation techniques very early, long before I needed them. In 2002, I started practicing yoga and have stuck with it ever since.</p>
                <p>In 2004, my mother had an unfortunate experience with Dysport injections, which led to a lengthy rehabilitation and facial recovery, and for me, it was the beginning of meeting amazing cosmetologists who specialize in facial restoration.</p>
                <p>One day, my mother's doctor told me that I 'speak with my face' and began changing my facial expressions. I got into facial gymnastics through her efforts, to relax my face and eliminate asymmetry. My natural aging type is muscular, with pronounced hyperpigmentation, asymmetry, early folds and creases, and spasmed muscles.</p>
                <p>In 2008, I took courses in cosmetology and natural facial restoration, not intending to teach. In 2011, I began training in yoga teacher courses - two week-long apnea yoga courses, a year-long course in Ayurveda, 160 hours at the international academy FISAF + specialization, and also started teaching.</p>
                <p>Areas of expertise include Hatha Yoga, breathing practices, yoga therapy, asana alignment techniques, and therapeutic physical exercises for a healthy back and feet. Later, I added facial gymnastics to my teaching repertoire.</p>
                <p>In 2016, I was forced to undergo training in rehabilitation methods for lymphedema patients, including lymph taping, gymnastics, manual and device lymphatic drainage.</p>
                <p>When author's methods first gained popularity, I was eager to learn and enrolled in both in-person and online classes, often ending up disappointed in the quality of information. I will definitely write about this in detail.</p>
                <p>Last year, I received a Czech state certificate in cosmetology and have been conducting courses and seminars for women on natural facial rejuvenation methods.</p>
                <p>This last year, I've been teaching massage techniques to professionals and also lecturing on theory and practice in professional cosmetologist training courses.</p>
                <p>I am not a follower of author's methods, a collector of YouTube exercises, and grandmother's recipes for food-based masks. I choose only professional proven methods! What about you?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
