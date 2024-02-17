const fontWeight = {
  "100": "font-thin",
  "200": "font-ultraLight",
  "300": "font-light",
  "400": "font-normal",
  "500": "font-medium",
  "550": "font-demiBold",
  "600": "font-bold",
  "700": "font-extraBold",
  "800": "font-black",
  "900": "font-extraBlack",
  "950": "font-heavy",
};

enum Size {
  XS = "text-xl",
  S = "text-2xl",
  M = "text-mh",
  L = "text-lh",
}

const colors = {
  brand: {
    primary: "text-brand-primary",
    secondary: "text-brand-secondary",
  },
  gray: {
    primary: "text-gray-primary",
    secondary: "text-gray-secondary",
    darker: "text-gray-darker",
  },
  red: {
    primary: "text-red-primary",
    secondary: "text-red-secondary",
  },
  pink: {
    primary: "text-pink-primary",
    secondary: "text-pink-secondary",
  },
  grape: {
    primary: "text-grape-primary",
    secondary: "text-grape-secondary",
  },
  violet: {
    primary: "text-violet-primary",
    secondary: "text-violet-secondary",
  },
  indigo: {
    primary: "text-inigo-primary",
    secondary: "text-inigo-secondary",
  },
  blue: {
    primary: "text-blue-primary",
    secondary: "text-blue-secondary",
  },
  cyan: {
    primary: "text-cyan-primary",
    secondary: "text-cyan-secondary",
  },
  teal: {
    primary: "text-teal-primary",
    secondary: "text-teal-secondary",
  },
  green: {
    primary: "text-green-primary",
    secondary: "text-green-secondary",
  },
  lime: {
    primary: "text-lime-primary",
    secondary: "text-lime-secondary",
  },
  yellow: {
    primary: "text-yellow-primary",
    secondary: "text-yellow-secondary",
  },
  ornage: {
    primary: "text-orange-primary",
    secondary: "text-orange-secondary",
  },
};

export { fontWeight, Size, colors };
