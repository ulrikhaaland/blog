import { PostGF as post } from '../../data/blog';
import BlogPost from '../../components/BlogPost';
import { NextPageWithLayout } from '../_app';

const content = (
  <>
    <p>
      Har du noen gang følt deg forvirret fordi noen ga deg en forklaring som
      etterlot deg med flere spørsmål enn svar? Hva om du enkelt kunne skille
      mellom en god og dårlig forklaring, og dermed skille mellom sannhet og
      løgn? Hemmeligheten ligger i å forstå forskjellen på gode og dårlige
      forklaringer.
    </p>
    <br></br>
    <p
      style={{
        fontWeight: 'bold',
      }}
    >
      1. Vanskelig å variere
    </p>
    <br></br>

    <p>
      En god forklaring er vanskelig å variere: Du kan ikke enkelt endre dens
      innhold uten å ødelegge det den påstår å forklare.
    </p>
    <br></br>

    <p>
      <strong>Eksempel:</strong> Hvorfor vokser planter mot solen?
    </p>
    <br></br>

    <p>
      <strong>God Forklaring:</strong> Grunnen til at planter vokser mot solen
      skyldes en prosess kalt fototropisme, der planteceller på siden bort fra
      lyset forlenges. Dette gjør det enklere for planten å kapre lys, som
      sammen med karbondioksid og vann driver en prosess kalt fotosyntese:
      dannelsen av glukose (plantemat) og oksygen (både et biprodukt av
      fotosyntese og en nødvending komponent for cellulær respirasjon i
      planter).
    </p>
    <br></br>

    <p>
      En god forklaring gjør det vanskeligere for deg å lure deg selv. For om du
      prøver å variere dens innhold, f.eks. ved å si at lys ikke er en nødvendig
      del av fotosyntese, så vil hele forklaring kollapse. Da redegjør den ikke
      lenger for hvorfor planter vokser mot lys.
    </p>
    <br></br>

    <p>
      Et av kjennetegnene på en god forklaring er den intime koblingen mellom
      detaljene den inneholder og det den påstår å forklare. En god forklaring
      er som et korthus, forsiktig stablet, enhver endring i struktur fører til
      kollaps.
    </p>
    <br></br>

    <p>
      <strong>Dårlig Forklaring:</strong> Planter vokser mot sollys fordi de
      elsker solen og vil være nærmere den.
    </p>
    <br></br>

    <p>
      Dette forklarer ingenting. Det er foreløpig ikke mulig å finne ut om
      planter faktisk elsker solen. For å elske er en følelse, og en følelse er
      en{' '}
      <a
        style={{
          color: '(internal value)',
          textDecoration: 'underline',
        }}
        target='_blank'
        href='https://snl.no/kvalia?'
        rel='noreferrer'
      >
        kvale:
      </a>{' '}
      den subjektive delen av en opplevelse. Og for dette har vi ingen gode
      forklaringer.
    </p>
    <br></br>

    <p>
      Men vi trenger ingen teori om den subjektive delen av en opplevelse for å
      dømme denne forklaringen dårlig. Fordi den er lett å variere. Som betyr at
      vi enkelt kan endre innholdet uten å ødelegge forklaringen. Vi kunne like
      gjerne sagt at planter vokser mot lyset fordi det gir dem gode følelser,
      eller fordi det er gøy.
    </p>
    <br></br>

    <p>
      En forklaring er dårlig når det ikke finnes noe bindeledd mellom innholdet
      i forklaringen og det den prøver å forklare.
    </p>
    <br></br>

    <p
      style={{
        fontWeight: 'bold',
      }}
    >
      2. Testbar
    </p>
    <br></br>

    <p>
      En god forklaring skal være testbar. Noe som betyr at den kan granskes,
      evalueres og bli falsifisert (motbevist) gjennom observasjoner i den
      virkelige verden.
    </p>
    <br></br>

    <p>
      <strong>Eksempel:</strong> Hvorfor er trening sunt?
    </p>

    <br></br>

    <p>
      <strong>God Forklaring:</strong> Trening hjelper til med å forbedre
      hjerte- og karsystemets helse ved å øke hjertefrekvensen, noe som igjen
      hjelper til med å styrke hjertemuskelen og forbedre blodstrømmen.
    </p>
    <br></br>

    <p>
      Dette kan testes. Du kan snøre på deg løpeskoene å sjekke om
      hjertefrekvensen øker. Og hvis den ikke øker, så blir ikke hjertet
      belastet. Og hvis hjertet ikke blir belastet så har det ingen grunn til å
      vokse seg sterkere i etterkant — for å tåle mer belastning.
    </p>
    <br></br>

    <p>
      Detaljene i en god forklaring henger så tett sammen at hvis én av
      påstandene viser seg å ikke stemme så ødelegges hele forklaringen.
    </p>
    <br></br>

    <p>
      <strong>Dårlig forklaring:</strong> Trening forbedrer hjerte- og
      karsystemets helse fordi det får deg til å føle deg bra, og å føle seg bra
      er alltid sunt.
    </p>
    <br></br>
    <p>
      En god forklaring må være testbar, men det betyr ikke at en forklaring er
      god bare fordi den kan testes. Vi tester ikke forklaringer bare fordi vi
      kan; vi gjør det fordi de allerede kvalifiserer som gode forklaringer —
      fordi de er vanskelig å variere. Og denne er ikke det.
    </p>
    <br></br>
    <p>
      For denne kan vi variere til hva enn vi måtte ønske: "Trening forbedrer
      hjerte- og karsystemets helse fordi det får deg til å føle deg X, og å
      føle seg X er alltid sunt."
    </p>
    <br></br>
    <p>
      Når et bredt utvalg av alternative forklaringer kan redegjøre for samme
      fenomen er det irrasjonelt å foretrekke én av dem fremfor de andre. Vi
      lever i en verden hvor det er tusen måter å ta feil for hver måte å ha
      rett. Hvor det er mye vanskeligere å bygge opp enn å rive ned. Dette
      fremhever viktigheten ved å kunne skille mellom rett og galt; å kunne
      skille mellom en god og dårlig forklaring.
    </p>
    <br></br>
    <p>
      <strong>3. Forutsigbarhet</strong>
    </p>
    <br></br>

    <p>
      En god forklaring gir forutsigbarhetskraft. Den gjør det mulig for oss å
      lage nøyaktige forutsigelser om fremtidige hendelser basert på dens
      innhold.
    </p>
    <br></br>
    <p>
      Som eksempel, la oss igjen vurdere den gode forklaringen om hvorfor
      planter vokser mot solen: Det er fordi lys er en nødvendig del av
      fotosyntese og sørger for at planten får energien som trengs for vekst.
    </p>
    <br></br>
    <p>
      For denne kan vi variere til hva enn vi måtte ønske: "Trening forbedrer
      hjerte- og karsystemets helse fordi det får deg til å føle deg X, og å
      føle seg X er alltid sunt."
    </p>
    <br></br>
    <p>
      Denne forklaringen gir deg makt over fremtiden. Kanskje du har en plante
      som er i ferd med å vokse seg for stor. Du vet at lys er en vital del av
      vekstprosessen. Du bestemmer deg for å la planten stå i skyggen.
    </p>
    <br></br>
    <p>
      Gode forklaringer gir oss innsikt i fremtidige hendelser uten å eksplisitt
      nevne dem.
    </p>
    <br></br>

    <p>
      <strong>Ekstra</strong> — ikke avgjørende, men viktig å forstå.
    </p>
    <br></br>
    <p>
      <strong>4. Sparsomellig</strong>
    </p>
    <br></br>
    <p>
      Gode forklaringer skal være så enkle som mulig uten å ofre
      forklaringskraft. Dette prinsippet, også kjent som Occams barberblad,
      antyder at når det er flere forklaringer tilgjengelig for et fenomen, er
      den enkleste ofte det beste. Dette skyldes at enklere forklaringer
      inneholder færre antagelser, og for hver antagelse øker feilmarginen.
    </p>
    <br></br>
    <p>
      <strong>Eksempel: </strong>Hvorfor skjelver vi når vi fryser?{' '}
    </p>
    <br></br>
    <p>
      <strong>God Forklaring: </strong>Når vi fryser skjelver vi fordi kroppen
      vår prøver å generere varme for å opprettholde sin normale temperatur.
    </p>
    <br></br>
    <p>
      <strong>Unødvendig Komplisert Forklaring:</strong> Når vi fryser, skjelver
      vi fordi kroppen vår prøver å generere varme for å opprettholde sin
      normale temperatur, og denne skjelvingen er også en måte for kroppen vår å
      kommunisere til andre rundt oss at vi er kalde.
    </p>
    <br></br>
    <p>
      Tilføyelsen av kommunikasjon og signalisering til andre er unødvendig for
      å forklare hvorfor vi skjelver når vi fryser. Det tilfører kompleksitet og
      flere antagelser uten å bidra til den sentrale forklaringen om kroppens
      forsøk på å generere varme. Her antyder Occams barberblad at den enklere
      forklaringen er å foretrekke.
    </p>
    <br></br>
    <p>
      <strong>5. Korrespondanse</strong>{' '}
    </p>
    <br></br>
    <p>
      Når vi søker en forklaring, er det fordi vi har et problem: en konflikt
      mellom idéer. Vi kan se at noe foregår, men vi vet ikke hvorfor, så vi
      søker et svar. Men vi har ikke lyst på hvilket som helst svar, vi har lyst
      på en forklaring som samsvarer med spørsmålet vi stiller. Når vi lurer på
      hva det er til middag, så vil vi ikke at svaret skal være molekyler.
    </p>
    <br></br>
    <p>Her er to eksempler på forklaringer med god og dårlig korrespondanse.</p>
    <br></br>
    <p>
      <strong>Eksempel 1:</strong> Hvordan skaffer man venner?{' '}
    </p>
    <br></br>
    <p>
      <strong>God korrespondanse:</strong> For å få venner kan du finne felles
      interesser, være åpen og imøtekommende, lytte aktivt til andre, og vise
      vennlighet og empati.
    </p>
    <br></br>
    <p>
      Dette svaret fokuserer på spesifikke handlinger som kan føre til vennskap.
    </p>
    <br></br>
    <p>
      <strong>Dårlig korrespondanse: </strong>For å finne venner samhandler du
      med andre mennesker ved å utveksle ord og ikke-verbale signaler. Du tolker
      ansiktsuttrykk og kroppsspråk, og reagerer på følelser og ideer.
    </p>
    <br></br>
    <p>
      Selvom svaret er sant, så korresponderer det ikke med spørsmålet som blir
      stilt. Det fokuserer heller på de lave nivåene av menneskelig interaksjon.
    </p>
    <br></br>
    <p>
      <strong>Eksempel 2:</strong> Hvorfor gikk selskapets salg ned forrige
      kvartal?
    </p>
    <br></br>
    <p>
      <strong>God korrespondanse: </strong>Selskapets salg gikk ned forrige
      kvartal på grunn av økt konkurranse, redusert etterspørsel og mangel på
      effektive markedsføringsstrategier.
    </p>
    <br></br>
    <p>
      <strong>Dårlig korrespondanse: </strong>Selskapet presterte ikke bra, og
      markedsforholdene var ikke gunstige.
    </p>
    <br></br>
    <p>
      Det er mulig å svare sant uten å forklare noe som helst. Det kalles
      politikk.
    </p>
    <br></br>
    <p>
      Så der har du det. En god forklaring er{' '}
      <strong>vanskelig å variere</strong> (uten å ødelegge det den påstår å
      forklare). Den er <strong>testbar</strong> (kan granskes gjennom
      observasjoner i den virkelige verden). Og den gir{' '}
      <strong>forutsigbarhet</strong> (sier noe om fremtiden uten å nevne
      fremtiden). En god forklaring burde være <strong>sparsommelig</strong> (så
      enkel som mulig uten å ofre forklaringskraft). Og ha{' '}
      <strong>korrespondanse</strong> (møte spørsmålet på samme nivå).
    </p>
  </>
);

const BlogPostGF: NextPageWithLayout = () => {
  return <BlogPost post={post} content={content}></BlogPost>;
};

BlogPostGF.getLayout = (page) => page;

export default BlogPostGF;
