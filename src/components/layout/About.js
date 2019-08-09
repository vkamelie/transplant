import React from "react";
import famPhoto from "../../img/about.jpg";

const About = () => {
  return (
    <section className="container about">
      <h1 className="large text-primary">About</h1>
      <img src={famPhoto} alt="family on a beach" />
      <p>
        The reason I created this place for discussion is based off family. My
        father had a liver transplant, the time before and after was a life
        changing experience for my whole my family. My local transplant support
        group not only save my fathers life but my life as well. With out the
        love and support I was able to experience we would not be here today.
        Being beyond thankful I want to give back by creating a space for people
        who are going through the same thing, to know you are not alone. The
        creator of this site is a Jr developer who is looking for new
        opportunities, please reach out.
      </p>
    </section>
  );
};

export default About;
