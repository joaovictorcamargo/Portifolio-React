import Intro from './components/intro/intro';
import About from './components/about/About';
import { ThemeContext, ThemeProvider } from './context.js/context';
import Contact from './components/contact/Contact';
import ProductLis from './components/productLis/ProductList';
import Toggle from './components/toggle/Toggle';

const App = () => {

  const theme = useContext(ThemeContext)
  const derkMode = theme.state.darkMode;
  return
  <div style={{
    backgroundColor: darkMode ? "#222" : "white",
    color: darkMode && "white",
  }}>

    <Intro />
    <About />
    <ProductLis />
    <Toggle />
    <Contact />

  </div>;
};

export default App;