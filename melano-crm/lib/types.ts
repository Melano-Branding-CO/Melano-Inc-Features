export type DashboardSection =
  | "contacts"
  | "properties"
  | "pipeline"
  | "activities"
  | "automations"
  | "whatsapp"
  | "settings";

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: string;
  stage: "new" | "qualified" | "visit" | "offer" | "closed";
}

export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  status: "available" | "reserved" | "sold";
  bedrooms: number;
  bathrooms: number;
}

export interface PipelineDeal {
  id: string;
  contactName: string;
  propertyTitle: string;
  value: number;
  stage: Contact["stage"];
  nextAction: string;
}

export interface Activity {
  id: string;
  title: string;
  dueDate: string;
  owner: string;
  type: "call" | "email" | "visit" | "task";
}

export interface Automation {
  id: string;
  name: string;
  trigger: string;
  status: "active" | "draft";
}
