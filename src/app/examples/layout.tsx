import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Signature Examples for Every Profession | NeatStamp",
  description:
    "See real email signature examples for marketers, developers, CEOs, real estate agents, freelancers & students. Get inspired and create yours free in 60 seconds.",
  alternates: { canonical: "https://neatstamp.com/examples" },
};

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
