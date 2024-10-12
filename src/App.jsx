
import Header from './components/Header';
import Image from './components/Image';
import Navigate from './components/Navigate';
import Welcome from './components/Welcome';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Navigate />
      <Welcome />
      <Main />
      <Image />
      <Footer />
    </div>
  );
}