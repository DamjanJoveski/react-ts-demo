import {Navbar} from "./components/Navbar.tsx";
import {Footer} from "./components/Footer.tsx";
import {Home} from "./views/home/Home.tsx";
import {Route, Routes} from "react-router-dom";
import {Recipes} from "./views/Recipies/Recipes.tsx";

function App() {
  return (
      <>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/hot-coffee" element={<Recipes type="hot"/>}/>
              <Route path="/iced-coffee" element={<Recipes type="iced"/>}/>
              {/*<Route path="/about" element={<About />}/>*/}
          </Routes>
          <Footer/>
      </>
  )
}
export default App
