import Image from "next/image";
import Navbar from "./component/Navbar";
import Section from "./componentKegiatan/Section";
import KegiatanProvider from "./componentKegiatan/KegiatanContext";

export default function Home() {
  return (
    <KegiatanProvider>
      <main className="min-h-screen">
        <Navbar active={'dashboard'} />
        <Section />
      </main>
    </KegiatanProvider>
  );
}
