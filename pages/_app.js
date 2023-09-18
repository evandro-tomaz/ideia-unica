import '../styles/global.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function MainApp({ Component, pageProps }) {
    return (
        <div>
            <Navbar />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}

export default MainApp;