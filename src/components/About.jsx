import React from 'react';

const About = () => (
  <section
    className="resume-section bg-theme-1 text-start p-5"
    id="about"
    aria-labelledby="about-title"
  >
    <div
      className="resume-section-content col-lg-10"
      itemScope
      itemType="https://schema.org/Person"
    >
      <header>
        <h1 className="text-white h3 mb-1 opacity-75" id="about-title" itemProp="name">
          Manikandan Shanmugam
        </h1>
        <h2 className="text-white fs-4 opacity-75" itemProp="jobTitle">
          Senior Front-End Developer | React.js | Next.js | 10+ Years Experience 
        </h2>
      </header>


      <section className="mt-5" aria-labelledby="summary-title">
        <h3 className="text-muted mb-2 h4" id="summary-title">
          Professional Summary
        </h3>

        <p
          className="text-muted fs-5"
          itemProp="description"
          aria-label="Professional Summary"
        >
          Experienced <span className="fw-semibold">Senior Front-End Developer</span> with 
          <span className="fw-semibold"> 10+ years of experience</span> designing and delivering 
          <span className="fw-semibold"> scalable, high-performance web applications</span>. 
          Specialized in <span className="fw-semibold">React.js</span>, 
          <span className="fw-semibold">Next.js</span>, 
          <span className="fw-semibold">Shopify</span>, and modern 
          <span className="fw-semibold"> frontend architectures</span> with strong expertise in 
          <span className="fw-semibold"> UI/UX design</span>, 
          <span className="fw-semibold"> performance optimization</span>, and 
          <span className="fw-semibold"> RESTful API integrations</span>. 
          Proven ability to <span className="fw-semibold"> lead development teams</span>, 
          <span className="fw-semibold"> accelerate project delivery</span>, and improve 
          <span className="fw-semibold"> user engagement</span> through responsive and optimized interfaces.
        </p>
      </section>
 


      <address className="mt-4" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <ul className="list-group">
        
          <li className="list-group-item bg-transparent text-muted ps-0 border-0">
            <i className="bi bi-envelope-fill me-3" aria-hidden="true"></i>
            <a
              href="mailto:iammanikandan90@gmail.com"
              itemProp="email"
              className="text-decoration-none text-muted"
            >
              iammanikandan90@gmail.com
            </a>
          </li>

         <li className="list-group-item bg-transparent text-muted ps-0 border-0">
            <i className="bi bi-telephone-fill me-3" aria-hidden="true"></i>
            <a href="tel:+919942210770" itemProp="telephone" className="text-decoration-none text-muted">
              +91 9942210770
            </a>
          </li>

          <li className="list-group-item bg-transparent text-muted ps-0 border-0">
            <i className="bi bi-linkedin me-3" aria-hidden="true"></i>
            <a
              href="https://www.linkedin.com/in/ms90/"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
              className="text-decoration-none text-muted"
            >
              linkedin.com/in/ms90
            </a>
          </li>
          <li className="list-group-item bg-transparent text-muted ps-0 border-0">
            <i className="bi bi-globe-americas me-3" aria-hidden="true"></i>
            <a
              href=" https://iammanikandandev.github.io/resume/"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="url"
              className="text-decoration-none text-muted"
            >
               iammanikandandev.github.io/resume/
            </a>
          </li>
          <li className="list-group-item bg-transparent text-muted ps-0 border-0">
            <i className="bi bi-github me-3" aria-hidden="true"></i>
            <a
              href="https://github.com/iammanikandandev"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
              className="text-decoration-none text-muted"
            >
              github.com/iammanikandandev
            </a>
          </li>
        </ul>
      </address>
    </div>
  </section>
);

export default About;
