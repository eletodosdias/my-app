//import './App.css';
import Header from './components/Header/Header'
import HorizontalSection from './components/HorizontalSection/HorizontalSection';
import styles from './App.module.css'
import Card from './components/Card/Card.js';

function App() {
  const descr = "Sono molto entusiasta e volenterosa ad apprendere il più possibile su questo immenso regno della programmazione.Caratterialmente sono una persona molto disciplinata, motivata e attenta ai dettagli. Amo molto l'ordine, con perseveranza e studio sono orientata a perseguire gli obiettivi che mi pongo e che mi vengono preposti. Sono molto entusiasta e volenterosa ad apprendere il più possibile su questo immenso regno della programmazione.Caratterialmente sono una persona molto disciplinata, motivata e attenta ai dettagli. Amo molto l'ordine, con perseveranza e studio sono orientata a perseguire gli obiettivi che mi pongo e che mi vengono preposti. Sono molto entusiasta e volenterosa ad apprendere il più possibile su questo immenso regno della programmazione.Caratterialmente sono una persona molto disciplinata, motivata e attenta ai dettagli.";

  const cards = [
    { 
      id: '01', 
      icon: './assets/icons/diamond.jpg', 
      alt: 'diamante', 
      title: 'Problem Solving',
      content: 'Analisi di una situazione problematica allo scopo di individuare e mettere in atto la soluzione migliore' },
    { 
      id: '02', 
      icon: './assets/icons/laptop.jpg', 
      alt: 'laptop', 
      title: 'Perseveranza', 
      content: 'Continuità costante nel tempo allo scopo di raggiungere i propri obiettivi' },
    { 
      id: '03', 
      icon: './assets/icons/globe.jpg', 
      alt: 'globo', 
      title: 'Altruismo lavorativo', 
      content: 'In grado di apportare contributi positivi per lo sviluppo e il mantenimento di contesti lavorativi collaborativi e cooperativi' },
    { 
      id: '04', 
      icon: './assets/icons/heart.jpg', 
      alt: 'cuore', 
      title: 'Intelligenza Emotiva', 
      content: 'Consapevolezza, motivazione, empatia e abilità nelle gestione delle relazioni sociali' }
  ]

  return (
    <>
      <Header />
      <HorizontalSection title="Chi sono" id="link-chisono" className={styles.chisonoSection} >
        <p className={styles.chisonoDescription}> {descr} </p>
      </HorizontalSection>

      <HorizontalSection title="Skills" id="link-skills" className={styles.skillsSection}  >
        <div className={styles.flexRow} >
          <Card cards={cards[0]} />
          <Card cards={cards[1]} />
          <Card cards={cards[2]}/>
          <Card cards={cards[3]}/>
        </div>
      </HorizontalSection>
    </>
  );
}
export default App;