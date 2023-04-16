import { zapas, buzos } from "./Productos";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Slice from "./components/Slice";
import Marcas from "./components/Marcas";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Landing /> */}
      {/* <Marcas /> */}
      <Slice product={zapas} title="PARA HOMBRES" />
      {/* <Slice product={buzos} title="PARA MUJERES" /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
