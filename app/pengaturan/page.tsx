import Image from "next/image";
import Navbar from "../component/Navbar";
import Section from "../componentKegiatan/Section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar active={'pengaturan'} />
      {/* <Section /> */}
    </main>
  );
}
