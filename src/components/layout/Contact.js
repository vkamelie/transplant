import React from "react";

const Contact = () => {
  return (
    <section className="container">
      <h1 className="large text-primary">Contact</h1>
      <p>Please reach out with any concerns or suggestions.</p>
      <a
        href="mailto:support@transplant-support.com?Subject=Hello Transplant Support"
        target="_top"
      >
        Send Mail
      </a>
    </section>
  );
};

export default Contact;
