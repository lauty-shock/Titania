import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Slice from "./components/Slice";
import Marcas from "./components/Marcas";
import Footer from "./components/Footer";
import CreateProduct from "./components/Modals/CreateProduct";
import { useState } from "react";

function App() {
  const [viewDetail, setViewDetail] = useState(false);
  function ver() {
    setViewDetail(!viewDetail);
  }
  return (
    <div className="App">
      <button onClick={ver}>VER</button>
      {viewDetail && <CreateProduct handleDetail={ver} />}
      {/* <Navbar /> */}
      {/* <Landing /> */}
      {/* <Marcas /> */}
      {/* <Slice product={zapas} title="PARA HOMBRES" /> */}
      {/* <Slice product={buzos} title="PARA MUJERES" /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
