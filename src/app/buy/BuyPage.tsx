"use client";

import { useEffect, useState } from "react";
import styles from "./BuyPage.module.scss";
import BuyListingCard from "../../components/BuyListingCard";

export interface BuyListing {
  id: string;
  type: "buy";
  price: number;
  location: string;
  district: string;
  subdistrict: string;
  built: boolean;
  size: string | null | "—";
  rooms: number | null;
  bathrooms: number | null;
  agentId: string;
  image: string;
  video: string;
  phone: string;
  email: string;
  latitude: number;
  longitude: number;
}

export default function BuyPage() {
  const [listings, setListings] = useState<BuyListing[]>([]);

  useEffect(() => {
    fetch("/mockData/buyListings.json")
      .then((r) => r.json())
      .then((data: BuyListing[]) => {
        // defensive: only accept type === 'buy'
        setListings(data.filter((l) => l.type === "buy"));
      })
      .catch((e) => console.error("Error loading buy listings:", e));
  }, []);

  return (
    <div className={styles["buy-page"]}>
      <h2>Properties for Sale</h2>
      <p>Curated buy listings in Mogadishu — land and built homes.</p>
      <div className={styles["buy-listing-grid"]}>
        {listings.map((listing) => (
          <BuyListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
