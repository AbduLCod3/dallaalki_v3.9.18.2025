export type ID = string;

export interface Agent {
  id: ID;
  name: string;
  phone?: string;
  email?: string;
  company?: string;
  city?: string;
  avatarUrl?: string;
  listingIds?: ID[];
}

export interface Developer {
  id: ID;
  name: string;
  phone?: string;
  email?: string;
  company?: string;
  city?: string;
  logoUrl?: string;
  projectIds?: ID[];
}

export interface Listing {
  id: string;
  type: "buy" | "rent";
  price: number;
  location: string;
  district: string;
  subdistrict: string;
  size: string;
  rooms: number;
  bathrooms: number;
  agentId: string;
  image: string;
  video: string;
  phone: string;
  email: string;
  // Consider adding these optional fields for better UX
  featured?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

// You could also create a more specific type for Buy listings if needed
export type BuyListing = Listing & {
  type: "buy";
  // Add buy-specific fields here if any
};
