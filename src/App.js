//import './App.css';
import Header from './components/Header/Header'
import HorizontalSection from './components/HorizontalSection/HorizontalSection';
import styles from './App.module.css'
import Card from './components/Card/Card.js';

function App() {
  const descr = "Sono molto entusiasta e volenterosa ad apprendere il più possibile su questo immenso regno della programmazione.Caratterialmente sono una persona molto disciplinata, motivata e attenta ai dettagli. Amo molto l'ordine, con perseveranza e studio sono orientata a perseguire gli obiettivi che mi pongo e che mi vengono preposti. Sono molto entusiasta e volenterosa ad apprendere il più possibile su questo immenso regno della programmazione.Caratterialmente sono una persona molto disciplinata, motivata e attenta ai dettagli. Amo molto l'ordine, con perseveranza e studio sono orientata a perseguire gli obiettivi che mi pongo e che mi vengono preposti. Sono molto entusiasta e volenterosa ad apprendere il più possibile su questo immenso regno della programmazione.Caratterialmente sono una persona molto disciplinata, motivata e attenta ai dettagli."
  const cardsArray = [
    { id: 0, icon: '', titolo: '', contenuto: '' },
    { id: 0, icon: '', titolo: '', contenuto: '' },
    { id: 0, icon: '', titolo: '', contenuto: '' },
    { id: 0, icon: '', titolo: '', contenuto: '' },
  ]

  return (
    <>
      <Header />
      <HorizontalSection title="Chi sono" id="link-chisono" className={styles.chisonoSection} >
        <p className={styles.chisonoDescription}> {descr} </p>
      {/*devo capire come colorare gli hr in modo diverso, forse operatore ternario */} 
      </HorizontalSection>

      <HorizontalSection title="Skills" id="link-skills" className={styles.skillsSection}  >
        <div className={styles.flexRow} >
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </HorizontalSection>
    </>
  );
}
export default App;