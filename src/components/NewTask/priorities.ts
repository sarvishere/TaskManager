interface Priority {
  id: string;
  name: string;
  color: string;
}

export const priorities: Priority[] = [
  {
    id: "immediate",
    name: "فوری",
    color: "#FA5252",
  },
  {
    id: "top",
    name: "بالا",
    color: "#FD7E14",
  },
  {
    id: "medium",
    name: "متوسط",
    color: "#15AABF",
  },
  {
    id: "low",
    name: "پائین",
    color: "#40C057",
  },
];
