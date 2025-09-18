"use client"; // Ensure this is treated as a Client Component

import "./BuyListingCard.scss"; // Import the SCSS for Buy Listing styling

export default function BuyListingCard({ listing }: { listing: any }) {
  return (
    <div className="buy-listing-card">
      {/* Property Image */}
      <img src={listing.image} alt="Property" />

      {/* Property Title */}
      <h3>{listing.location}</h3>

      {/* Property Description */}
      <p>
        {listing.size} | {listing.rooms} rooms | {listing.bathrooms} bathrooms
      </p>

      {/* Price */}
      <div className="price">${listing.price.toLocaleString()}</div>

      {/* Contact Information */}
      <div>
        <p>
          <strong>Agent:</strong> {listing.agentId}
        </p>
        <a href={`tel:${listing.phone}`}>Call</a> |{" "}
        <a href={`mailto:${listing.email}`}>Email</a>
      </div>
    </div>
  );
}
