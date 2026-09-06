import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const host = headerStore.get("x-forwarded-host") ?? headerStore.get("host");
  const forwardedProtocol = headerStore.get("x-forwarded-proto")?.split(",")[0];
  const protocol = forwardedProtocol ?? (host?.startsWith("localhost") ? "http" : "https");
  const origin = host
    ? `${protocol}://${host}`
    : "https://soumia-prestige-portfolio.losajohanpermanac6ui.chatgpt.site";
  const title = "هتل سومیا اهواز | Soumia Hotel";
  const description =
    "هتل سومیا در کیانپارس اهواز؛ ۲۴ اتاق مدرن، یک سوئیت اختصاصی، رستوران، کافه لابی، سالن جلسات و رزرو مستقیم.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "fa_IR",
      siteName: "Soumia Hotel",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1200,
          height: 630,
          alt: "Soumia Hotel Ahvaz",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
