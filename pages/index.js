import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>"Hello, World!" app with Next.js and Tailwind CSS</title>
        <meta
          name="description"
          content='"Hello, World!" app with Next.js and Tailwind CSS'
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-4xl font-bold text-blue-600 ">Hello, World!</h1>
      </main>
    </>
  );
}
