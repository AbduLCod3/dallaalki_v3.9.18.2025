import "./agents.scss";

export default function AgentsPage() {
  return (
    <div className="agents-page">
      <div className="page-header">
        <h1>Our Agents</h1>
        <p>Meet our team of experienced real estate professionals</p>
      </div>

      <div className="agent-placeholder">
        <div className="avatar">👤</div>
        <h2>Expert Real Estate Agents</h2>
        <p>
          Our certified agents are ready to help you find the perfect property
        </p>

        <div className="stats">
          <div className="stat">
            <span className="number">50+</span>
            <span className="label">Agents</span>
          </div>
          <div className="stat">
            <span className="number">1000+</span>
            <span className="label">Deals Closed</span>
          </div>
          <div className="stat">
            <span className="number">98%</span>
            <span className="label">Satisfaction</span>
          </div>
        </div>

        <button className="contact-btn">Contact Our Team</button>
      </div>
    </div>
  );
}
