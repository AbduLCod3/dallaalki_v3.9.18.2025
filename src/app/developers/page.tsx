import "./developers.scss";

export default function DevelopersPage() {
  return (
    <div className="developers-page">
      <div className="page-header">
        <h1>Developers</h1>
        <p>Partner with leading real estate developers for premium projects</p>
      </div>

      <div className="developers-showcase">
        <div className="developer-card">
          <div className="logo">DVL</div>
          <h2>Developer Partners</h2>
          <p className="description">
            We collaborate with trusted developers to bring you quality
            construction and innovative designs
          </p>

          <div className="projects">
            <span className="project-badge">Residential</span>
            <span className="project-badge">Commercial</span>
            <span className="project-badge">Luxury</span>
          </div>

          <div className="contact-info">
            <p>
              <strong>Specialization:</strong> Mixed-use Developments
            </p>
            <p>
              <strong>Projects:</strong> 25+ Completed
            </p>
          </div>
        </div>
      </div>

      <div className="partnership-cta">
        <h2>Become a Partner Developer</h2>
        <p>
          Join our network of premium developers and showcase your projects to
          thousands of potential buyers and investors
        </p>
        <button className="cta-button">Apply for Partnership</button>
      </div>
    </div>
  );
}
