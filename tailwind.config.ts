/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      iranyekan: ["IRANYekan", "sans-serif"],
    },
    fontWeight: {
      thin: "100",
      ultraLight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      demiBold: "550",
      bold: "600",
      extraBold: "700",
      black: "800",
      extraBlack: "900",
      heavy: "950",
    },

    extend: {
      fontSize: {
        lh: ["32px", "46px"], // => Heading L
        mh: ["28px", "34px"], // => Heading M
        /*
         * 2xl => Heading S || Body XL
         * xl => Heading XS || Body L
         * base => Body M
         * sm => Body S
         * xs => Body xs
         */
      },
      colors: {
        gray: {
          primary: "#868E96",
          secondary: "#F1F3F5",
          darker: "#343A40",
          light:"#FFFFFF"
        },
        red: {
          primary: "#FA5252",
          secondary: "#FFE3E3",
        },
        pink: {
          primary: "#E64980",
          secondary: "#FFDEEB",
        },
        grape: {
          primary: "#BE4BDB",
          secondary: "#F3D9FA",
        },
        violet: {
          primary: "#7950F2",
          secondary: "#E5DBFF",
        },
        indigo: {
          primary: "#4C6EF5",
          secondary: "#DBE4FF",
        },
        blue: {
          primary: "#228BE6",
          secondary: "#D0EBFF",
          light: "#E9F9FF",
        },
        cyan: {
          primary: "#15AABF",
          secondary: "#C5F6FA",
        },
        teal: {
          primary: "#12B886",
          secondary: "#C3FAE8",
        },
        brand: {
          primary: "#208D8E",
          secondary: "#C2F7FA",
        },
        green: {
          primary: "#40C057",
          secondary: "#D3F9D8",
          tertiary:"#208D8E",
        },
        lime: {
          primary: "#82C91E",
          secondary: "#E9FAC8",
        },
        yellow: {
          primary: "#FAB005",
          secondary: "#FFF3BF",
        },
        orange: {
          primary: "#FD7E14",
          secondary: "#FFE8CC",
        },
      },
      boxShadow: {
        modal: "0px 12px 32px 0px #00000040",
      },
    },
  },
  plugins: [],
};
