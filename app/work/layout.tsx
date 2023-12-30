// import Sidebar from "@/components/sidebar/sidebar"

export default function WorkLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="min-h-screen flex justify-center w-full">
            <div className="relative w-full">
                {children}
            </div>
        </div>
    );
}