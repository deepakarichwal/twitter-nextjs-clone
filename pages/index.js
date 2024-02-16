import Head from "next/head";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta
          name="description"
          content="Twitter Clone using Next JS and Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex max-w-7xl min-h-screen mx-auto">
        {/* SideBar */}
        <SideBar />

        {/* Timeline */}

        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  );
}
