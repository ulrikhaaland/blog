import { PostLH as post } from '../../data/blog';
import BlogPost from '../../components/BlogPost';
import { NextPageWithLayout } from '../_app';

const content = (
  <>
    <p>
      Fortapt. Synkende. Der har du meg. Verken penger eller damer. Drukner i
      samfunnets forventninger.
    </p>
    <br></br>

    <p>
      Folk jeg går forbi, deres øyne møter aldri mine. De hvisker og fniser. Jeg
      er punchlinen til en vits jeg aldri har hørt. Skoene mine skraper mot
      fortauet, hvert skritt en påminnelse om grøften jeg befinner meg i.
    </p>
    <br></br>

    <p>
      Regnet falt kaldt og hardt i Oslo den dagen, en monoton tromming mot
      fortauet. Jeg krøllet meg inn i frakken, mens jeg prøvde å unnslippe de
      iskalde dråpene. Midt i dette grå kaoset, la jeg merke til en mann som sto
      rolig og upåvirket. Holdningen hans var avslappet. Blikket stødig, mens
      regnet sprutet på ansiktet hans. Et smil risset på leppene.
    </p>
    <br></br>

    <p>
      Nysgjerrigheten pirret, jeg gikk bort til ham og ignorerte kulden som
      trengte inn i kroppen min. "Hvordan kan du være så rolig i dette været?"
      spurte jeg, ordene mine knapt tolkbare over regnets jevne rytme.
    </p>
    <br></br>

    <p>
      Øynene hans glitret, og tonen var myk. "Lykkehierarkiet," sa han, stemmen
      hans bar varmen fra en peis. "Det er en måte å måle egenverdi gjennom
      lykke, i stedet for de vanlige markørene som rikdom eller utseende."
    </p>
    <br></br>

    <p>
      "Du skjønner, det handler om å akseptere hva som er og fokusere på vår
      indre lykke. Flesteparten av oss går i gjennom livet ved å definere
      istedenfor å akseptere. Vi gjør oss klare til kamp hver gang det er en sky
      på himmelen, uten å være klar over at vi kjemper en krig vi aldri kan
      vinne."
    </p>
    <br></br>

    <p>
      "Det er to ulike måter å leve livet på. Vi kan bruke tiden vår på å streve
      for å endre ting, eller vi kan slappe av og akseptere ting som de er."
    </p>
    <br></br>

    <p>"Du ser forvirret ut. La meg utdype."</p>
    <br></br>

    <p>
      "Som med regnet, er det mange ting i verden du ikke liker. Disse tingene
      gjentar seg. Hvis du alltid skal fikse det du ikke liker vil du aldri få
      fred. Med mindre du fikser det ved roten. Og roten er deg selv, den ligger
      i hodet ditt, det eneste stedet problemer oppstår."
    </p>
    <br></br>

    <p>
      "For et problem er en konflikt mellom tanker. Noe er på én måte, samtidig
      som du ønsker at det skulle vært på en annen. Hvis du slutter å ønske at
      det skulle vært annerledes, finnes det ikke lenger en konflikt, og ikke
      lenger et problem. Og på en problemfri himmel kan lykken skinne."
    </p>
    <br></br>

    <p>
      Jeg funderte på ordene hans, og kjente at kulden trengte dypere inn i
      kroppen min. Så, nølende, senket jeg skuldrene og løftet ansiktet mot
      regnet. Kulden stakk i kinnene mine, men jeg følte en plutselig frihet, en
      tilknytning til verden som overskred ubehaget.
    </p>
    <br></br>

    <p>
      Tennene mine klirret i kulden, men jeg kunne ikke la være å smile. Jeg
      visste at livet mitt hadde endret seg. Lykkehierarkiet, tenkte jeg, en
      endring i perspektiv som åpner døren til større tilfredshet.
    </p>
    <br></br>
    <p>
      Fra den dagen av omfavnet jeg Lykkehierarkiet, og fokuserte på indre
      velvære og kvittet meg med samfunnets begrendsede forventninger. Mens jeg
      gikk gjennom livet og følte regn, sol og vind mot huden min, fant jeg fred
      i kunnskapen om at lykken var min egen å skape. Og som regnet, kjempet jeg
      ikke lenger mot verden, men fløt heller med den, og fant glede i de
      enkleste øyeblikk.
    </p>
  </>
);

const BlogPostLH: NextPageWithLayout = () => {
  return <BlogPost post={post} content={content}></BlogPost>;
};

BlogPostLH.getLayout = (page) => page;

export default BlogPostLH;
