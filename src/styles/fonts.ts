import { Inter as InterFont, Cormorant_Garamond } from "next/font/google";

export const CormorantGaramondRegular = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const Inter = InterFont({
  subsets: ["latin"],
  variable: "--font-inter",
});
