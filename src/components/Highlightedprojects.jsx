import React from "react";

const HighlightedProjects = () => (
  <section
    className="resume-section p-5 text-start"
    id="highlighted-projects"
  >
    <div className="resume-section-content">
      <header>
        <h3 className="mb-5 fw-medium">Highlighted Projects</h3>
      </header>

      {/* Project 1 */}
      <div className="mb-5">
        <h5 className="fw-semibold text-dark">#1 Glamdeva Admin</h5>

        <p className="mb-2">
          Built an <span className="fw-semibold">admin dashboard platform</span> for
          Glamdeva, enabling management of mobile hair and makeup bookings
          across the UK marketplace.
        </p>

        <ul className="ms-4 mb-2">
          <li>
            Developed <span className="fw-semibold">booking management dashboards</span>
            enabling admins to track and manage real-time and historical bookings.
          </li>

          <li>
            Implemented <span className="fw-semibold">search, filtering, and record updates</span>
            improving operational efficiency for large booking datasets.
          </li>

          <li>
            Built <span className="fw-semibold">responsive admin interfaces</span>
            supporting both mobile and desktop workflows.
          </li>

          <li>
            Integrated <span className="fw-semibold">Google Maps API</span> and
            <span className="fw-semibold"> Typesense search</span> to enable fast
            location tracking and data retrieval.
          </li>
        </ul>

        <p className="mb-1 fw-semibold">Tech Stack</p>
        <p className="ms-3">
          React.js, Next.js, HTML5, CSS3, JavaScript, Bootstrap 5,
          Core PHP, Laravel, Typesense, Google Maps API
        </p>
      </div>

      {/* Project 2 */}
      <div className="mb-5">
        <h5 className="fw-semibold text-dark">#2 RentX.online</h5>

        <p className="mb-2">
          Developed scalable <span className="fw-semibold">admin dashboards</span>
          for RentX platforms to manage luxury transportation bookings and vendors.
        </p>

        <ul className="ms-4 mb-2">
          <li>
            Built booking dashboards enabling admins to manage
            <span className="fw-semibold"> real-time ride reservations</span>.
          </li>

          <li>
            Implemented <span className="fw-semibold">data filtering and record management</span>
            to streamline booking and vendor operations.
          </li>

          <li>
            Designed <span className="fw-semibold">responsive UI dashboards</span>
            improving usability across desktop and mobile devices.
          </li>

          <li>
            Integrated <span className="fw-semibold">Google Maps API</span> and
            <span className="fw-semibold"> Typesense search</span>
            to enhance location tracking and search speed.
          </li>
        </ul>

        <p className="mb-1 fw-semibold">Tech Stack</p>
        <p className="ms-3">
          HTML5, CSS3, JavaScript, jQuery, Bootstrap 5,
          Core PHP, Laravel, Typesense, Google Maps API
        </p>
      </div>

      {/* Project 3 */}
      <div className="mb-5">
        <h5 className="fw-semibold text-dark">#3 Partycentral</h5>

        <p className="mb-2">
          Developed a UK-based <span className="fw-semibold">event services marketplace</span>
          enabling users to discover and book venues, catering, décor, and
          entertainment vendors.
        </p>

        <ul className="ms-4 mb-2">
          <li>
            Built vendor discovery features allowing users to
            <span className="fw-semibold"> filter services by category, location, and event type</span>.
          </li>

          <li>
            Implemented <span className="fw-semibold">vendor comparison tools</span>
            enabling users to evaluate pricing and services side-by-side.
          </li>

          <li>
            Developed <span className="fw-semibold">quote request and booking workflows</span>
            improving vendor-customer communication.
          </li>

          <li>
            Designed <span className="fw-semibold">mobile-responsive UI</span>
            ensuring smooth browsing across devices.
          </li>
        </ul>

        <p className="mb-1 fw-semibold">Tech Stack</p>
        <p className="ms-3">
          HTML5, CSS3, JavaScript, jQuery, Bootstrap 5,
          Laravel, Typesense
        </p>
      </div>

      {/* Project 4 */}
      <div className="mb-5">
        <h5 className="fw-semibold text-dark">#4 Add to Cart</h5>

        <p className="mb-2">
          Built a <span className="fw-semibold">multi-vendor e-commerce marketplace</span>
          aggregating independent seller stores into a unified shopping platform.
        </p>

        <ul className="ms-4 mb-2">
          <li>
            Developed <span className="fw-semibold">product listing and browsing interfaces</span>
            improving marketplace navigation.
          </li>

          <li>
            Implemented <span className="fw-semibold">secure checkout flows</span>
            enabling safe online transactions.
          </li>

          <li>
            Built <span className="fw-semibold">search and filtering features</span>
            improving product discovery.
          </li>

          <li>
            Optimized <span className="fw-semibold">responsive storefront layouts</span>
            for consistent cross-device experiences.
          </li>
        </ul>

        <p className="mb-1 fw-semibold">Tech Stack</p>
        <p className="ms-3">
          HTML5, CSS3, JavaScript, jQuery, Bootstrap 5,
          Laravel, Typesense
        </p>
      </div>

      {/* Project 5 */}
      <div>
        <h5 className="fw-semibold text-dark">#5 Bookingcentral & Afh.cloud</h5>

        <p className="mb-2">
          Developed <span className="fw-semibold">enterprise admin dashboards</span>
          providing analytics, user management, and operational insights.
        </p>

        <ul className="ms-4 mb-2">
          <li>
            Built <span className="fw-semibold">data visualization dashboards</span>
            enabling real-time analytics and reporting.
          </li>

          <li>
            Implemented <span className="fw-semibold">role-based access control</span>
            improving platform security and user management.
          </li>

          <li>
            Developed customizable dashboard widgets enabling
            <span className="fw-semibold"> personalized admin workflows</span>.
          </li>

          <li>
            Integrated <span className="fw-semibold">Google Maps API</span>
            for location-based partner management.
          </li>
        </ul>

        <p className="mb-1 fw-semibold">Tech Stack</p>
        <p className="ms-3">
          HTML5, CSS3, JavaScript, jQuery, Bootstrap 5,
          Core PHP, Laravel, Typesense, Google Maps API
        </p>
      </div>
    </div>
  </section>
);

export default HighlightedProjects;