import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col p-8">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-5xl mx-auto py-20">
        <h1 className="font-heading text-5xl lg:text-7xl">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="font-body py-12">
          This is an eample project created by{" "}
          <a
            href="https://github.com/ZhymonNorman"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-500 font-bold"
          >
            Simon Norman
          </a>{" "}
          using{" "}
          <code className="text-white bg-slate-500 p-1">create-next-app</code>{" "}
          to showcase various Git tools. You can read the blog post{" "}
          <a
            href="https://director.swrm.link"
            rel="noopener noreferrer"
            className="text-blue-500 font-bold"
            target="_blank"
          >
            here.
          </a>
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
          <a href="https://nextjs.org/docs">
            <h2 className="font-secondary p-2 mb-2 bg-bitterLemon w-fit">
              Documentation &rarr;
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn">
            <h2 className="font-secondary p-2 mb-2 bg-bitterLemon w-fit">
              Learn &rarr;
            </h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/canary/examples">
            <h2 className="font-secondary p-2 mb-2 bg-bitterLemon w-fit">
              Examples &rarr;
            </h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h2 className="font-secondary p-2 mb-2 bg-bitterLemon w-fit">
              Deploy &rarr;
            </h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto py-12">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
