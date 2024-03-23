import NavBar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";
import Service from "./components/service/servise";
import Adapter from "./components/hero/adapter";
import About from "./components/about/about";
import SecondSection from "./components/second-section/second-section";
import Inquiry from "./components/inquiry/inquiry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'sakazuki',
  description: '学修歴や学位を還元し、学生のキャリア形成支援を加速する。',
  openGraph: {
    title: 'sakazuki',
    description: '学修歴や学位を還元し、学生のキャリア形成支援を加速する',
    url: "sakazuki.vercel.app",
    siteName: 'sakazuki',
    images: [
      {
        width: '1200',
        height: '675',
        url: 'https://sakazuki.vercel.app/images/ogp/ogp.png'
      }
    ],
    locale: 'jp',
    type: 'website',
  }
}

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Adapter />
      <About />
      <SecondSection />
      <Service />
      <Inquiry />
      <Footer />
    </div>
  );
}
