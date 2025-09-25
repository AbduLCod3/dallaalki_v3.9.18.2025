"use client";

import Image from "next/image";
import "./BuyListingCard.scss";
import { Listing } from "../lib/types"; // Import from centralized types

interface BuyListingCardProps {
  listing: Listing;
}

export default function BuyListingCard({ listing }: BuyListingCardProps) {
  // Handle image errors with a fallback
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = "/images/placeholder-property.jpg"; // Add a placeholder image
  };

  return (
    <article
      className="buy-listing-card"
      role="article"
      aria-label={`Property listing in ${listing.location}`}
    >
      {/* Property Image with error handling */}
      <div className="image-container">
        <Image
          src={listing.image || "/images/placeholder-property.jpg"}
          alt={`Property in ${listing.location}`}
          width={300}
          height={200}
          style={{ objectFit: "cover" }}
          onError={handleImageError}
          placeholder="blur"
          blurDataURL="/images/placeholder-blur.jpg"
        />
      </div>

      {/* Property Details */}
      <div className="listing-details">
        <h3 className="location">{listing.location}</h3>

        <p className="specs">
          {listing.size} | {listing.rooms} room{listing.rooms !== 1 ? "s" : ""}{" "}
          | {listing.bathrooms} bathroom{listing.bathrooms !== 1 ? "s" : ""}
        </p>

        <div className="price">${listing.price.toLocaleString()}</div>

        {/* Contact Information */}
        <div className="contact-info">
          <p className="agent">
            <strong>Agent ID:</strong> {listing.agentId}
          </p>
          <div className="contact-links">
            <a
              href={`tel:${listing.phone}`}
              aria-label={`Call agent ${listing.agentId}`}
            >
              Call
            </a>
            <span aria-hidden="true"> | </span>
            <a
              href={`mailto:${listing.email}`}
              aria-label={`Email agent ${listing.agentId}`}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
