import "./buy.scss";

export default function BuyPage() {
  return (
    <div className="buy-page">
      <div className="page-header">
        <h1>Buy Properties</h1>
        <p>
          Find your dream home from our curated selection of premium properties
        </p>
      </div>

      <div className="coming-soon">
        <div className="icon">🏠</div>
        <h2>Property Listings Coming Soon</h2>
        <p>
          We&apos;re working hard to bring you the best real estate listings in
          the market
        </p>

        <div className="feature-list">
          <div className="feature">
            <h3>Premium Listings</h3>
            <p>Carefully selected properties with verified details</p>
          </div>
          <div className="feature">
            <h3>Expert Agents</h3>
            <p>Professional guidance throughout your buying journey</p>
          </div>
          <div className="feature">
            <h3>Virtual Tours</h3>
            <p>Explore properties from the comfort of your home</p>
          </div>
        </div>
      </div>
    </div>
  );
}
