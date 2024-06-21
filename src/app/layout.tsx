import "@/styles/globals.css";

// import { GeistSans } from "geist/font/sans";
// import { Rock_Salt } from "next/font/google";
import { Cedarville_Cursive } from "next/font/google";

export const metadata = {
  title: "Level Up Fitness",
  description: "",
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
  ],
  authors: [
    // { name: "ghosn" },
    { name: "Tarek", url: "envUrl" },
  ],
  creator: "Diala Turk",
  publisher: "Tarek Ghosn",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL("envUrl"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },

  openGraph: {
    title: "Career and University Counseling Services in Lebanon & Middle East",
    description:
      "    Career orientation, counseling and services from Lebanon and Gulf for USA, Canada, Europe and More, We provide expert and unbiased assistance in finding the major, the country and the college that match the unique attributes of each specific student.",

    type: "website",
    url: `${"envUrl"}`,
    siteName: " UniEdge counseling Inc",
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
