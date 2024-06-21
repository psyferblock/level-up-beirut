import "@/styles/globals.css";

// import { GeistSans } from "geist/font/sans";
// import { Rock_Salt } from "next/font/google";
import { Cedarville_Cursive } from "next/font/google";

const envUrl = process.env.BASE_URL!;
export const metadata = {
  title: "Level Up Fitness",
  description:
    "For the dedicated gym rats and fitness enthusiasts come together to push their limits! Our gym combines CrossFit and heavy machinery workouts with comprehensive stretching exercises and athletic mobility training. With over 30 expert personal trainers, we provide personalized guidance to help you reach your fitness goals. Enjoy a strong sense of community at our gym bar, and experience top-notch facilities at any of our three convenient city locations.",

  icons: [{ rel: "icon", url: "/favicon.ico" }],

  generator: "Level Up Gym ",
  applicationName: "Level Up Fitness ",
  referrer: "origin-when-cross-origin",
  keywords: [
    "CrossFit gym",
    "heavy machinery workouts",
    "stretching exercises",
    "athletic mobility",
    "personal trainers",
    "fitness community",
    "city gym locations",
    "CrossFit classes",
    "strength training",
    "flexibility training",
    "functional fitness",
    "gym with personal trainers",
    "mobility exercises",
    "community gym",
    "group fitness classes",
    "high-intensity training",
    "weightlifting",
    "cardio workouts",
    "full-body workouts",
    "personal training sessions",
    "fitness programs",
    "dynamic stretching",
    "sports performance training",
    "gym with multiple locations",
    "athlete training",
    "gym community events",
    "fitness bar",
    "CrossFit for beginners",
    "advanced CrossFit training",
    "weight training",
    "gym membership",
    "fitness bootcamps",
    "high-intensity interval training",
    "strength and conditioning",
    "gym with community",
    "personalized fitness plans",
    "mobility drills",
    "core strength exercises",
    "group training sessions",
    "urban fitness gym",
    "best CrossFit gym near me",
    "heavy machinery fitness training",
    "effective stretching exercises for athletes",
    "improve athletic mobility workouts",
    "experienced personal trainers in city",
    "community-focused fitness gym",
    "multiple gym locations in city",
    "CrossFit classes for all levels",
    "strength training with heavy machinery",
    "flexibility and stretching classes",
    "functional fitness for everyday life",
    "certified personal trainers near me",
    "mobility exercises for athletes",
    "supportive gym community",
    "best group fitness classes in city",
    "high-intensity CrossFit training",
    "weightlifting and strength building",
    "cardio and strength combined workouts",
    "full-body workout routines",
    "one-on-one personal training sessions",
    "customized fitness programs",
    "dynamic stretching for flexibility",
    "sports performance enhancement training",
    "gym with convenient city locations",
    "athletic training for performance",
    "community events at gym",
    "fitness bar and social area",
    "CrossFit for beginners and advanced",
    "advanced strength and conditioning",
    "comprehensive weight training programs",
    "affordable gym membership plans",
    "intense fitness bootcamps",
    "high-intensity interval training (HIIT)",
    "strength and conditioning classes",
    "inclusive gym community",
    "personalized fitness plans and coaching",
    "mobility drills for athletes",
    "core strength and stability exercises",
    "motivating group training sessions",
    "urban fitness gym with modern equipment",
  ],
  authors: [
    // { name: "ghosn" },
    { name: "Tarek", url: envUrl },
  ],
  creator: "Tarek Ghosn",
  publisher: "Tarek Ghosn",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL(envUrl),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },

  openGraph: {
    title: "A Community for the Gym Rats of Lebanon",
    description: "For the dedicated gym rats and fitness enthusiasts.",
    type: "website",
    url: `${envUrl}`,
    siteName: " Level Up Beirut ",
    images: [
      {
        url: "/thumbnail.png",
        width: 1260,
        height: 800,
      },
    ],
  },
};
const cedarvilleCursive = Cedarville_Cursive({
  subsets: ["latin"],
  variable: "--font-cedarville-cursive",
  weight: ["400"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cedarvilleCursive.variable}`}>
      <body>{children}</body>
    </html>
  );
}
