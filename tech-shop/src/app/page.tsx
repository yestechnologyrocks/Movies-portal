import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main >
      Hello World
      {/* Client side navigation */}
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
