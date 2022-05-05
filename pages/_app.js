import "../styles/globals.css";
import { Header, Footer } from "../components";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Header />
      <motion.main className="main">
        <Component {...pageProps} />
      </motion.main>
      <Footer />
    </div>
  );
}

export default MyApp;
