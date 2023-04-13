import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Carrusel from "./components/Carrusel";
import Marcas from "./components/Marcas";

function App() {
  const zapas = [
    {
      name: "ZAPATILLAS DE RUNNING ADIDAS ADIZERO SL",
      price: "54.999,00",
      category: "Hombre Running",
      colors: [
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/877f87fbcbf34e299720aef600eff064_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Negro_HQ1349_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96fa7303d14249b7af33af9c00a79c5c_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Naranja_GX9775_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/47c4f74efd14441ea551aef600ef8e74_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Azul_HQ1345_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/626aefae60f647a496e6aef900bab3bf_9366/Zapatillas_De_Running_Adidas_Adizero_SL_Blanco_GV9095_01_standard.jpg",
      ],
    },
    {
      name: "ZAPATILLAS DE RUNNING ADIDAS ADIZERO SL",
      price: "54.999,00",
      category: "Hombre Running",
      colors: [
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96fa7303d14249b7af33af9c00a79c5c_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Naranja_GX9775_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/47c4f74efd14441ea551aef600ef8e74_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Azul_HQ1345_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/626aefae60f647a496e6aef900bab3bf_9366/Zapatillas_De_Running_Adidas_Adizero_SL_Blanco_GV9095_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/877f87fbcbf34e299720aef600eff064_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Negro_HQ1349_01_standard.jpg",
      ],
    },
    {
      name: "ZAPATILLAS DE RUNNING ADIDAS ADIZERO SL",
      price: "54.999,00",
      category: "Hombre Running",
      colors: [
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/47c4f74efd14441ea551aef600ef8e74_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Azul_HQ1345_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/626aefae60f647a496e6aef900bab3bf_9366/Zapatillas_De_Running_Adidas_Adizero_SL_Blanco_GV9095_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/877f87fbcbf34e299720aef600eff064_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Negro_HQ1349_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96fa7303d14249b7af33af9c00a79c5c_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Naranja_GX9775_01_standard.jpg",
      ],
    },
    {
      name: "ZAPATILLAS DE RUNNING ADIDAS ADIZERO SL",
      price: "54.999,00",
      category: "Hombre Running",
      colors: [
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/626aefae60f647a496e6aef900bab3bf_9366/Zapatillas_De_Running_Adidas_Adizero_SL_Blanco_GV9095_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/877f87fbcbf34e299720aef600eff064_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Negro_HQ1349_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96fa7303d14249b7af33af9c00a79c5c_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Naranja_GX9775_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/47c4f74efd14441ea551aef600ef8e74_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Azul_HQ1345_01_standard.jpg",
      ],
    },
    {
      name: "ZAPATILLAS DE RUNNING ADIDAS ADIZERO SL",
      price: "54.999,00",
      category: "Hombre Running",
      colors: [
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/877f87fbcbf34e299720aef600eff064_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Negro_HQ1349_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96fa7303d14249b7af33af9c00a79c5c_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Naranja_GX9775_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/47c4f74efd14441ea551aef600ef8e74_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Azul_HQ1345_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/626aefae60f647a496e6aef900bab3bf_9366/Zapatillas_De_Running_Adidas_Adizero_SL_Blanco_GV9095_01_standard.jpg",
      ],
    },
    {
      name: "ZAPATILLAS DE RUNNING ADIDAS ADIZERO SL",
      price: "54.999,00",
      category: "Hombre Running",
      colors: [
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96fa7303d14249b7af33af9c00a79c5c_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Naranja_GX9775_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/47c4f74efd14441ea551aef600ef8e74_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Azul_HQ1345_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/626aefae60f647a496e6aef900bab3bf_9366/Zapatillas_De_Running_Adidas_Adizero_SL_Blanco_GV9095_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/877f87fbcbf34e299720aef600eff064_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Negro_HQ1349_01_standard.jpg",
      ],
    },
    {
      name: "ZAPATILLAS DE RUNNING ADIDAS ADIZERO SL",
      price: "54.999,00",
      category: "Hombre Running",
      colors: [
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/47c4f74efd14441ea551aef600ef8e74_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Azul_HQ1345_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/626aefae60f647a496e6aef900bab3bf_9366/Zapatillas_De_Running_Adidas_Adizero_SL_Blanco_GV9095_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/877f87fbcbf34e299720aef600eff064_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Negro_HQ1349_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96fa7303d14249b7af33af9c00a79c5c_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Naranja_GX9775_01_standard.jpg",
      ],
    },
    {
      name: "ZAPATILLAS DE RUNNING ADIDAS ADIZERO SL",
      price: "54.999,00",
      category: "Hombre Running",
      colors: [
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/626aefae60f647a496e6aef900bab3bf_9366/Zapatillas_De_Running_Adidas_Adizero_SL_Blanco_GV9095_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/877f87fbcbf34e299720aef600eff064_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Negro_HQ1349_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96fa7303d14249b7af33af9c00a79c5c_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Naranja_GX9775_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/47c4f74efd14441ea551aef600ef8e74_9366/ZAPATILLAS_DE_RUNNING_ADIDAS_ADIZERO_SL_Azul_HQ1345_01_standard.jpg",
      ],
    },
  ];
  const buzos = [
    {
      name: "TRIPPLE C ANORAK",
      price: "19.990,00",
      category: "Camperas",
      colors: [
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/898/906/products/ch123505-30-31-aeaa2e7be7d3d9290116341429117281-640-0.webp",
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/898/906/products/ch123505-10-41-425555b0194c05c02316341429119462-640-0.webp",
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/898/906/products/ch123505-30-41-7bc2a6bfb63b811adc16341429117577-640-0.webp",
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/898/906/products/ch123505-10-21-8e618fee7b576c025216341429117716-640-0.webp",
      ],
    },
    {
      name: "TRIPPLE C ANORAK",
      price: "19.990,00",
      category: "Camperas",
      colors: [
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/898/906/products/ch123505-10-41-425555b0194c05c02316341429119462-640-0.webp",
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/898/906/products/ch123505-30-41-7bc2a6bfb63b811adc16341429117577-640-0.webp",
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/898/906/products/ch123505-10-21-8e618fee7b576c025216341429117716-640-0.webp",
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/898/906/products/ch123505-30-31-aeaa2e7be7d3d9290116341429117281-640-0.webp",
      ],
    },
    {
      name: "TRIPPLE C ANORAK",
      price: "19.990,00",
      category: "Camperas",
      colors: [
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/898/906/products/ch123505-30-41-7bc2a6bfb63b811adc16341429117577-640-0.webp",
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/898/906/products/ch123505-10-21-8e618fee7b576c025216341429117716-640-0.webp",
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/898/906/products/ch123505-30-31-aeaa2e7be7d3d9290116341429117281-640-0.webp",
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/898/906/products/ch123505-10-41-425555b0194c05c02316341429119462-640-0.webp",
      ],
    },
    {
      name: "TRIPPLE C ANORAK",
      price: "19.990,00",
      category: "Camperas",
      colors: [
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/898/906/products/ch123505-10-21-8e618fee7b576c025216341429117716-640-0.webp",
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/898/906/products/ch123505-30-31-aeaa2e7be7d3d9290116341429117281-640-0.webp",
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/898/906/products/ch123505-10-41-425555b0194c05c02316341429119462-640-0.webp",
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/898/906/products/ch123505-30-41-7bc2a6bfb63b811adc16341429117577-640-0.webp",
      ],
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Marcas />
      <Carrusel product={zapas} title="PARA HOMBRES" />
      <Carrusel product={zapas} title="PARA MUJERES" />
    </div>
  );
}

export default App;
