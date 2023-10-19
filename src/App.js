import logo from "./logo.svg";
import "./App.css";
// import Xyz from "./componentes/Xyz";
// import Helloworld from "./componentes/Helloworld";
// import ImageCat from "./componentes/ImageCat";
// import HelloProp from "./componentes/HelloProp";
// import ButtonProp from "./componentes/ButtonProp";
// import Digimon from "./componentes/Digimon";
// import Medabot from "./componentes/Medabot";
// import List from "./componentes/List";
import Counter from "./componentes/Counter";
import Gallery from "./componentes/Gallery";


import Todo from "./componentes/Todo";
import Tareas from "./componentes/Tareas";
// import Card from "./componentes/Card";

// const medabot = {
//   nombre: "Metabee",
//   tipo: "KBT",
//   propietario: "Abel",
// };

// const digimon = {
//   nombre: "Agumon",
//   nivel: "Rookie",
//   tipo: "Dinosaurio",
//   atributo: "Fuego",
//   evoluciones: [
//     {
//       nombre: "Greymon",
//       nivel: "Campeón",
//     },
//     {
//       nombre: "MetalGreymon",
//       nivel: "Definitivo",
//     },
//     {
//       nombre: "WarGreymon",
//       nivel: "Mega",
//     },
//   ],
//   habilidades: [
//     {
//       nombre: "Garra de Fuego",
//       descripcion: "Agumon ataca al enemigo con garras de fuego.",
//     },
//     {
//       nombre: "Burbuja Bebé",
//       descripcion: "Crea una burbuja de aire para protegerse a sí mismo.",
//     },
//   ],
// };

// const personas = [
//   { nombre: "Juan", edad: 25 },
//   { nombre: "María", edad: 30 },
//   { nombre: "Carlos", edad: 22 },
//   { nombre: "Luisa", edad: 28 },
// ];
const animes = [
  {
    nombre: "Naruto",
    imagen: "https://es.web.img2.acsta.net/pictures/13/12/13/08/50/378271.jpg",
  },
  {
    nombre: "One Piece",
    imagen:
      "https://pics.filmaffinity.com/One_Piece_Serie_de_TV-647985949-large.jpg",
  },
  {
    nombre: "Attack on Titan",
    imagen:
      "https://elcomercio.pe/resizer/s9FNsNUn4aCZWwzJ8E4CiI3nfAU=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/7GIIGO2GA5FJBMKXN5XT4KA3NU.jpg",
  },
  {
    nombre: "Code Geass",
    imagen:
      "https://pics.filmaffinity.com/Code_Geass_Lelouch_of_the_Rebellion_Serie_de_TV-546636789-large.jpg",
  },
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Tareas/>
        <Todo />
       
        <Gallery array={animes} />
        {/* <Card /> */}
        <Counter />
       

        {/* <List info={personas}/>
        <Medabot info={medabot} />
        <Digimon digimon={digimon} />
        <Helloworld />
        <HelloProp text="Hola holita" />
        <Xyz />
        <ImageCat />
        <ButtonProp /> */}

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
