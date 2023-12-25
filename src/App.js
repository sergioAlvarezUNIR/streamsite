
import './App.css';


import GlobalRouter from "./routes/GlobalRouter";
import {Footer} from './components/Footer';
import { Header } from './components/Header';
import { Menu } from './components/Menu';

 function App() {


    return (
        <>
            <Header></Header>
            <Menu></Menu>
            <GlobalRouter></GlobalRouter>
            <Footer></Footer>
        </>
       
    );
}

export default App;


 /**  
  <h3>Duración: {streams[1].duracion} </h3>
   */
