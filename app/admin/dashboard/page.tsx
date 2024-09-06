import { Metadata } from "next"

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export const metadata: Metadata = {
    title: 'Dashboard',
}
export default function Page() {
    return <h1>Hello, Dashboard Page!</h1>
}