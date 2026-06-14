import type { Metadata } from "next";
import "../globals.css";
import RootRedirect from "./RootRedirect";

export const metadata: Metadata = {
  title: "Mohamed Marwen Maalawi — Senior Full-Stack Engineer",
  description:
    "Senior Full-Stack Software Engineer specialized in NestJS, Next.js, React Native and Spring Boot.",
  robots: { index: false, follow: false },
};

export default function RootPage() {
  return <RootRedirect />;
}
