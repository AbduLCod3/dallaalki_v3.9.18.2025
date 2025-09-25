import "./rent.scss";

export default function RentPage() {
  return (
    <div className="rent-page">
      <div className="page-header">
        <h1>Rent Properties</h1>
        <p>
          Discover perfect rental homes tailored to your lifestyle and budget
        </p>
      </div>

      <div className="rental-features">
        <div className="feature-card">
          <div className="icon">🏢</div>
          <h3>Apartments</h3>
          <p>Modern apartments with amenities in prime locations</p>
        </div>
        <div className="feature-card">
          <div className="icon">🏡</div>
          <h3>Houses</h3>
          <p>Spacious family homes with gardens and parking</p>
        </div>
        <div className="feature-card">
          <div className="icon">🏘️</div>
          <h3>Villas</h3>
          <p>Luxury villas with premium features and security</p>
        </div>
      </div>

      <div className="coming-soon">
        <h2>Rental Platform Launching Soon</h2>
        <p>
          We&apos;re building an advanced rental platform to simplify your
          search
        </p>

        <div className="timeline">
          <div className="step">
            <span className="number">1</span>
            <span>Property Verification</span>
          </div>
          <div className="step">
            <span className="number">2</span>
            <span>Digital Contracts</span>
          </div>
          <div className="step">
            <span className="number">3</span>
            <span>Virtual Tours</span>
          </div>
        </div>
      </div>
    </div>
  );
}
