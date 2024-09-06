import Image from "next/image";
import type { Metadata } from 'next'

import Link from "next/link";
import Navbar from "./components/web/navbar/Navbar";
import HomeNavbar from "./components/web/home-navbar/HomeNavbar";
export const metadata: Metadata = {
  title: 'Web Home',
}
export default async function Home() {

  return (
    <>
      <HomeNavbar />

    </>
  );
}
