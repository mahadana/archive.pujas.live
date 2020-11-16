import withApollo from "../lib/apollo";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withApollo({ ssr: true })(MyApp);
