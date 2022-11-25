import './App.css';
import Image from './Image';
import imageCat from './cat-2083492_1280.jpg';

function App() {
  return (
    <Image source={ imageCat } alternativeText={'Cute cat staring'}/>
  );
}

export default App;
