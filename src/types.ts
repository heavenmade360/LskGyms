export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}
