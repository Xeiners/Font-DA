import './App.css';
import logo1 from '../img/Digital/Barb_Orange.png'
import logo2 from '../img/Digital/Barb_Cornflower.png'
import logo3 from '../img/Digital/Barb_Lime.png'
import Home from '../component/home/home';
import LandGrid from '../component/land_grid/land_grid';
import Layout from '../component/layout/layout';



function App() {


  return (
    <div>
      <Home logo={logo1} bg_color={'#dddbcb'} allow={true} pos='sticky' />
      <Home logo={logo2} bg_color={'#5653dc'} allow={false} pos='sticky' text1='Welcome' text2='For short hair do not forget' />
      <Home logo={logo3} bg_color={'#2d6657'} allow={false} pos='relative' text1='Choose' text2='For short hair do not forget' />
      <LandGrid text1='Colors' text2='For the background do not forget' />
      <Layout />
    </div>
  );
}

export default App;
