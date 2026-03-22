import { Link } from "react-scroll";

const Navbar = () => (
  <nav
    className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
    id="sideNav"
  >
    <a className="navbar-brand js-scroll-trigger" href="#page-top">
      <span className="d-block d-lg-none">Manikandan Shanmugam</span>

      <span className="d-none d-lg-block">
        <img
          className="img-fluid img-profile rounded-circle mx-auto mb-2"
          src="assets/img/profile-3.webp"
          alt="Manikandan Shanmugam Profile"
          title="Manikandan Shanmugam"
        />
      </span>
    </a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav">

        {[
          { label: "About", href: "about" },
          { label: "Experience", href: "experience" },
          { label: "Technical Expertise", href: "technical-skills" },
          { label: "Highlighted Projects", href: "highlighted-projects" },
          { label: "Education", href: "education" },
          {
            label: "Download CV",
            isExternal: true,
            url:"./assets/files/manikandanshanmugam_cv.pdf"
          },
        ].map((item) => (
          <li className="nav-item SMN_effect-15" key={item.label}>

            {item.isExternal ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link fw-medium text-uppercase"
              >
                {item.label}
              </a>
            ) : (
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active"
                className="nav-link fw-medium text-uppercase cursor-pointer"
              >
                {item.label}
              </Link>
            )}

          </li>
        ))}

      </ul>
    </div>
  </nav>
);

export default Navbar;