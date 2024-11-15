import { Header } from "./components/Header/index.tsx";
import Footer from "./components/Footer/index.tsx";
import RoadMap from "./components/roadMapsPage/RoadMap.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      {/* active if you want to see the roadmaps page */}
      {/* <RoadMap /> */}

      <Footer />
    </>
  );
}

export default App;
