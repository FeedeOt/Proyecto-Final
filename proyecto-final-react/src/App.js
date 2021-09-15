import './App.scss';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import MainDos from './components/MainDos/MainDos';
import Contact from './containers/contacts/contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Main />
      <MainDos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
