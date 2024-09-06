import Navbar from "@/app/components/admin/Navbar"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <Navbar />

            {children}
        </section>
    )
}