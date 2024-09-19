import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Cat from "./components/Cat";
import FeatureDairyBreakfast from "./components/FeatureDairyBreakfast";
import FeatureFruitsVegi from "./components/FeatureFruitsVegi";
import Footer from "./components/Footer";
import HeroSec from "./components/HeroSec";
import Info from "./components/Info";
import Nav from "./components/Nav";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <main>
      {" "}
      <Nav />
      <HeroSec />
      <Cat />
      <FeatureFruitsVegi />
      <FeatureDairyBreakfast />
      <Banner />
      <Blog />
      <NewsLetter />
      <Info />
      <Footer />
    </main>
  );
}

export default App;
