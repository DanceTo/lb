import { Montserrat, Raleway } from "next/font/google";
import { ReactNode } from "react";
import "@/app/globals.css";
import type { Locale } from "@/i18n.config";

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const raleway = Raleway({
  subsets: ["cyrillic", "latin"],
  display: "swap",
  variable: "--font-raleway",
});

export type LayoutProps = {
  children: ReactNode;
  params: Promise<{
    lang: Locale; // 'uk' | 'ru'
  }>;
};

export async function generateStaticParams() {
  return [{ lang: "uk" }, { lang: "ru" }];
}

export default async function Layout({ children, params }: LayoutProps) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body
        className={`${montserrat.variable} ${raleway.variable} grid min-h-screen grid-cols-1 grid-rows-[1fr_auto] md:grid-rows-[auto_1fr_auto] smOnly:pt-[119px]`}
      >
        <main>{children}</main>
        <div id="modal" />
      </body>
    </html>
  );
}
