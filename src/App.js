//import './App.css';
import styles from './App.module.css'
import Header from './components/Header/Header'
import HorizontalSection from './components/HorizontalSection/HorizontalSection';
import Card from './components/Card/Card.js';
import SectionButton from './components/SectionButton/SectionButton';

function App() {
  const chisonoDescription = "Sono molto entusiasta e volenterosa ad apprendere il più possibile su questo immenso regno della programmazione.Caratterialmente sono una persona molto disciplinata, motivata e attenta ai dettagli. Amo molto l'ordine, con perseveranza e studio sono orientata a perseguire gli obiettivi che mi pongo e che mi vengono preposti. Sono molto entusiasta e volenterosa ad apprendere il più possibile su questo immenso regno della programmazione.";

  const cards = [
    {
      icon: './assets/icons/diamond.jpg', 
      alt: 'diamante', 
      title: 'Problem Solving',
      content: 'Analisi di una situazione problematica allo scopo di individuare e mettere in atto la soluzione migliore' },
    {
      icon: './assets/icons/laptop.jpg', 
      alt: 'laptop', 
      title: 'Perseveranza', 
      content: 'Continuità costante nel tempo allo scopo di raggiungere i propri obiettivi' },
    {
      icon: './assets/icons/globe.jpg', 
      alt: 'globo', 
      title: 'Altruismo lavorativo', 
      content: 'In grado di apportare contributi positivi per lo sviluppo e il mantenimento di contesti lavorativi collaborativi e cooperativi' },
    { 
      icon: './assets/icons/heart.jpg', 
      alt: 'cuore', 
      title: 'Intelligenza Emotiva', 
      content: 'Consapevolezza, motivazione, empatia e abilità nelle gestione delle relazioni sociali' }
  ]

  return (
    <>
      <Header />

      <HorizontalSection title="Chi sono" id="link-chisono" className={styles.chisonoSection} >
        <div className={styles.chisonoDescription}>
          <p> {chisonoDescription} </p>
        </div>
        <SectionButton linkHref="#link-skills" title="Altro ancora.." />
      </HorizontalSection>

      <HorizontalSection title="Skills" id="link-skills" className={styles.skillsSection}  >
        <div className={styles.flexRow} >

          {cards.map( (card, index) => 
            <Card 
              key={`card_${index}`} 
              title={card.title} 
              icon={card.icon}
              alt={card.alt}
              content={card.content}
            /> )
          }
        </div>
      </HorizontalSection>
    </>
  );
}
export default App;