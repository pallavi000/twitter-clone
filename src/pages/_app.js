import Layout from "@/components/Layout";
import "@/styles/globals.css";
import axios from "axios";
import { SessionProvider } from "next-auth/react";

axios.defaults.baseURL = "http://localhost:3000/api";
export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}
