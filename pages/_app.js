import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
    <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </>);
}