// import Sidebar from "@/components/sidebar/sidebar"

export default function WorkLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="min-h-screen">
            {/* <Sidebar /> */}
            {children}
        </div>
    );
}