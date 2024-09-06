import Image from "next/image";
import type { Metadata } from 'next'
import { testDatabaseConnection } from "../actions";
import Link from "next/link";
export const metadata: Metadata = {
  title: 'Admin Panel',
}
export default async function Home() {
  const isConnected = await testDatabaseConnection();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Admin</p>
    </main>
  );
}
