import './App.css';
import Heading from './components/Heading.jsx';
import IngredientsList from './components/IngredientsList';
import Steps from './components/Steps.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return <div className="App">
        <Heading />
        <IngredientsList />
        <Steps />
        <Footer />

 </div>;
}

export default App;
