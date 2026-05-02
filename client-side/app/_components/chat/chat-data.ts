export type NavItem = {
  id: string;
  label: string;
  active?: boolean;
};

export type Conversation = {
  id: string;
  name: string;
  preview: string;
  time: string;
  active?: boolean;
  isOnline?: boolean;
  initials?: string;
};

export type ChatMessage = {
  id: string;
  sender: "assistant" | "me";
  text: string;
  time: string;
  imageUrl?: string;
  status?: "sending" | "sent" | "received";
};

export const navItems: NavItem[] = [
  { id: "chat", label: "Chat", active: true },
  { id: "friends", label: "Friends" },
  { id: "groups", label: "Groups" },
  { id: "ai", label: "AI" },
  { id: "settings", label: "Settings" },
];

export const conversations: Conversation[] = [
  {
    id: "chatter",
    name: "chatter AI",
    preview: "I've analyzed those architectural sket...",
    time: "3m ago",
    active: true,
    isOnline: true,
  },
  {
    id: "jordan",
    name: "Jordan Smith",
    preview: "The coffee place at 5?",
    time: "2h ago",
    isOnline: true,
  },
  {
    id: "elena",
    name: "Elena Vance",
    preview: "Project files have been uploaded to th...",
    time: "Yesterday",
    isOnline: true,
  },
  {
    id: "design-team",
    name: "Design Team",
    preview: "Jordan: Check the latest UI tokens.",
    time: "Sep 24",
    initials: "DT",
  },
];

export const messages: ChatMessage[] = [
  {
    id: "m1",
    sender: "assistant",
    text: "Hello Alex! I've completed the initial analysis of your sustainable building proposal. The integration of vertical forests looks promising for temperature regulation.",
    time: "10:14 AM",
  },
  {
    id: "m2",
    sender: "me",
    text: "That's great to hear. Did you look into the greywater recycling efficiency for the lower 10 floors?",
    time: "10:16 AM",
    status: "received",
  },
  {
    id: "m3",
    sender: "assistant",
    text: "Yes, I've mapped out the flow. Based on the current architecture, we can achieve 92% efficiency. Here is the revised schematic visualization:",
    time: "10:17 AM",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80",
  },
];