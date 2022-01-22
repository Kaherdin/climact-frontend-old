import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/index.css";

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap")
  // }, [])
  return <Component {...pageProps} />;
}
