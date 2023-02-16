import './App.css';
import Header from './components/Header/Header'
import SezioneOrizzontale from './components/SezioneOrizzontale/SezioneOrizzontale';
function App() {
  return (
    <>
      
      <Header />
      <SezioneOrizzontale section="Chi sono" sectionId="link-chisono" />
    </>
  );
}

export default App;