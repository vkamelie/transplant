import React from "react";

const Resources = () => {
  return (
    <div>
      <section className="container">
        <h1 className="large text-primary">Resources</h1>
        <div className="resources">
          <ul>
            <li>
              <a
                href="https://suicidepreventionlifeline.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                National Suicide Prevention Lifeline
              </a>
              1-800-273-8255
            </li>
            <li>
              <a
                href="https://transplantliving.org/community/support-groups/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Local Support Groups
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resources;
