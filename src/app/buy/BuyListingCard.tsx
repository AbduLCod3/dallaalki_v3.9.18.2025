"use client";

import styles from "./BuyListingCard.module.scss";
import type { BuyListing } from "@/app/buy/BuyPage";

export default function BuyListingCard({ listing }: { listing: BuyListing }) {
  const showBuiltMeta = listing.built;

  return (
    <div className={styles["buy-listing-card"]}>
      <img src={listing.image} alt={`${listing.location} property`} />

      <h3>{listing.location}</h3>
      <p>
        <strong>District:</strong> {listing.district} — {listing.subdistrict}
      </p>

      {/* Conditional meta: built => rooms/baths, land => size */}
      <p className={styles.meta}>
        {showBuiltMeta ? (
          <>
            <strong>Rooms:</strong> {listing.rooms ?? "-"} &nbsp;•&nbsp;{" "}
            <strong>Baths:</strong> {listing.bathrooms ?? "-"}
          </>
        ) : (
          <>
            <strong>Size:</strong> {listing.size ?? "-"}
          </>
        )}
      </p>

      <div className={styles["price"]}>${listing.price.toLocaleString()}</div>

      <div className={styles.contact}>
        <p>
          <strong>Agent ID:</strong> {listing.agentId}
        </p>
        <p>
          <a href={`tel:${listing.phone}`}>Call</a> &nbsp;|&nbsp;{" "}
          <a href={`mailto:${listing.email}`}>Email</a>
        </p>
      </div>

      {/* Optional: keep as a link for now (no external nav if opened new tab) */}
      <p className={styles.video}>
        <a href={listing.video} target="_blank" rel="noopener noreferrer">
          Watch TikTok video
        </a>
      </p>
    </div>
  );
}
