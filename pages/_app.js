import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap")
  // }, [])
  return <Component {...pageProps} />;
}
