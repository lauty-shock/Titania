import Landing from "./components/Landing";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const zapa = {
    name: "ZAPATILLAS DE RUNNING ADIDAS ADIZERO SL",
    price: "54.999,00",
    category: "Hombre Running",
    colors: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/877f87fbcbf34e299720aef600eff064_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Negro_HQ1349_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96fa7303d14249b7af33af9c00a79c5c_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Naranja_GX9775_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/47c4f74efd14441ea551aef600ef8e74_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Azul_HQ1345_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/626aefae60f647a496e6aef900bab3bf_9366/Zapatillas_De_Running_Adidas_Adizero_SL_Blanco_GV9095_01_standard.jpg",
    ],
  };
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Card product={zapa} />
    </div>
  );
}

export default App;
