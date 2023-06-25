export const metadata = {
  title: "Hello, World!",
  description: '"Hello, World!" app with Next.js and Tailwind CSS',
};

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center">
      <h1 className="text-center text-4xl font-bold text-blue-600">
        Hello, World!
      </h1>
    </main>
  );
}
