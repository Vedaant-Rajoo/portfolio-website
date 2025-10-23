import { NavigationHeader } from "@/components/layout";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavigationHeader />
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to my Portfolio</h1>
          <p className="text-lg text-gray-600">Theme toggle is now in the navigation header</p>
        </div>
      </main>
    </div>
  );
}
