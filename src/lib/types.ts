export type ID = string;

export interface Agent {
  id: ID;
  name: string;
  phone?: string;
  email?: string;
  company?: string;
  city?: string;
  avatarUrl?: string;
  // future: list of listing IDs this agent owns
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
  // future: developer portfolio or project IDs
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
}
