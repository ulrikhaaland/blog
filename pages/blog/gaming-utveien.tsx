import { PostGU as post } from '../../data/blog';
import BlogPost from '../../components/BlogPost';
import { NextPageWithLayout } from '../_app';

const content = (
  <>
    <p>
      Her sitter jeg, stirrende på skjermen. Stemmen i hodet mitt, den sier, "Du
      kaster bort livet ditt." Jeg ignorer den, som jeg alltid har gjort. Jeg
      fortsetter å trykke på tastene, hardere, raskere, for å overdøve. Men jeg
      har fortsatt denne følelesen. Som om jeg synker. Ingen tau å ta tak i.
    </p>
    <br></br>

    <p>
      Solen går ned. Himmelen grå. Så svart. Rommet mitt stinker. Svette og
      tomme energidrikker, sånn har det vært så lenge jeg kan huske. Jeg trykker
      på tastene, trykker etter tilfredstillelse. Men stemmen forsvinner ikke.
    </p>
    <br></br>

    <p>
      En dag trenger jeg luft. Så jeg går ut. Ut i den virkelige verdenen. Der
      ser jeg denne fyren. Kanskje tretti, med en fin bil og en pen jente på
      armen. Jeg tenker, "Det kunne vært meg." Men det er det ikke.
    </p>
    <br></br>

    <p>
      Han ser på meg, øynene forteller meg at han vet. Vet hvordan det er å være
      meg. Han kommer bort. Ordene hans klønete, som om de kjemper for å bli
      hørt. "Jeg var som deg en gang. Fanget i spillet, ute på falske eventyr,
      jaktende etter virtuelt gull. Men så gikk det opp for meg."
    </p>
    <br></br>

    <p>Jeg ser på ham, så på jenta. Jeg lytter.</p>
    <br></br>

    <p>
      "Du venter på at noe skal røske deg ut, men det kommer ikke. Du må gi
      slipp på spillet først. Det ødelegger hjernen din. Belønningskretsene.
      Dopamin, mann. Sterke greier."
    </p>
    <br></br>

    <p>
      Jeg forflytter på vekten, men går ikke. Jeg vil høre ham. Jeg trenger å
      høre ham.
    </p>
    <br></br>

    <p>
      "Dataspill, det overstimulerer hjernen. Det danner et urealistisk grunnlag
      for belønning av innsats. Det fører til at alt annet du foretar deg i den
      virkelige verdenen føles meningsløst."
    </p>
    <br></br>

    <p>Ørene mine vokser.</p>
    <br></br>

    <p>
      "Du må tilbakestille hjernen din. Slutte å sammenligne de gode følelsen du
      får av oppnåelser i den virtuelle verdenen med de du får i den ekte. Du må
      gi slipp på spillet. Aldri se deg tilbake. Det er den eneste utveien."
    </p>
    <br></br>

    <p>Jeg nikker i takt med ordene hans.</p>
    <br></br>

    <p>
      "Hjernen din, den har begrenset med plass. Du må bestemme deg for hva den
      skal fylles med. Du har brukt tiden din til å fylle den med kunnskap om
      hvordan du dreper drager. Overskriv denne kunnskapen. Bruk heller
      hjernekapasiteten til noe som kan føre deg opp og fram."
    </p>
    <br></br>
    <p>
      Ordene hans er enkle, men tunge, som mursteiner på brystet mitt. Jeg
      tenker på rommet mitt, pc'en, de endeløse nettene. Jeg trenger
      forvandling. Jeg trenger det nå.
    </p>
    <br></br>

    <p>
      Jeg slutter med spillene, begynner i det små. Jeg utforsker verdenen
      utenfor piksler. Stemmen i hodet mitt endrer seg. Den forteller meg at jeg
      kan oppnå noe, skape. Den veileder meg, og jeg følger etter. Jeg fyller
      hjernen min med ting som betyr noe, ting som vil føre meg steder.
    </p>
    <br></br>

    <p>
      Det er vanskelig. Spillene, de frister. Men så husker jeg mannen, bilen,
      jenta, og klamrer meg til håpet de tente. Håpet om mer. Håpet om et liv
      utenfor rommets fire vegger.
    </p>
    <br></br>

    <p>
      Tiden går. Uker, måneder. Jeg finner lidenskaper, aktiviteter som
      livnærer. Jeg lærer. Jeg utvikler meg. Og den stemmen i hodet, den som
      fortalte meg at jeg kastet bort livet mitt, den er ikke lenger en fiende,
      men et kompass. Veiviseren for det livet jeg var ment for å leve.
    </p>
  </>
);

const BlogPostGU: NextPageWithLayout = () => {
  return <BlogPost post={post} content={content}></BlogPost>;
};

BlogPostGU.getLayout = (page) => {
  return <>{page}</>;
};

export default BlogPostGU;
