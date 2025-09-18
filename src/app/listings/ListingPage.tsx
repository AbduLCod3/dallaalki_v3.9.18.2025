"use client"; // Ensure this is treated as a Client Component

import { useEffect, useState } from "react";
import styles from "./listingLayout.module.scss"; // Import the SCSS for Listing Layout styling
import ListingCard from "../../components/ListingCard"; // Import ListingCard component

export default function ListingPage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("/mockData/listings.json")
      .then((response) => response.json())
      .then((data) => setListings(data))
      .catch((err) => console.error("Error fetching listings:", err));
  }, []);

  return (
    <div>
      <h2>Properties</h2>
      <p>
        Browse listings for properties and land available for purchase or rent.
      </p>
      <div className={styles["listing-grid"]}>
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
