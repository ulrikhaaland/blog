/* eslint-disable react/no-unescaped-entities */
import { PostHOVSH as post } from '../../data/blog';
import BlogPost from '../../components/BlogPost';
import { NextPageWithLayout } from '../_app';

const content = (
  <>
    <p>
      Har du noen gang lurt på hvordan noen personer klarer å overtale hvem som
      helst? Nøkkelen ligger i å trigge tankeløse responser.
    </p>
    <br></br>
    <p>
      I dagens travle verden er vi avhengige av snarveier for å håndtere en
      overveldende mengde av informasjon. Enkle tommel-regler hjelper oss med å
      kategorisere situasjoner basert på begrenset nøkkelinformasjon. Dette gjør
      at vi kan ta raske avgjørelser uten å overanalysere hver eneste detalj.
      Selv om denne automatiske atferden ikke alltid er optimal, aksepterer vi
      dens mangler, fordi den er helt avgjørende for å navigere vår komplekse
      verden.
    </p>
    <br></br>
    <p>
      Disse tankeløse snarveiene kan imidlertid utnyttes av de som forstår
      hvordan snarveiene fungerer. Ved å utnytte disse automatiske responsene
      kan man effektivt manipulere andres handlinger for egen vinning.
    </p>
    <br></br>
    <p>
      I dag skal vi utforske seks effektive prinsipper for overtalelse, som
      skissert av Robert Cialdini i boken{' '}
      <a
        style={{
          color: '(internal value)',
          textDecoration: 'underline',
        }}
        href='https://www.amazon.com/Influence-Psychology-Persuasion-Robert-Cialdini/dp/006124189X?ref=hjertesmerte.no'
        target='_blank'
        rel='noreferrer'
      >
        "Influence: The Psychology of Persuasion."
      </a>
    </p>
    <br></br>
    <p
      style={{
        fontWeight: 'bold',
      }}
    >
      Prinsipp 1: Gjensidighet – Klør du min rygg, klør jeg din
    </p>
    <br></br>
    <p>
      Idéen bak gjensidighet er enkel: når du gjør noe hyggelig for meg, vil jeg
      føle meg forpliktet til å gjengjelde tjenesten. Dette prinsippet kan være
      så enkelt som å tilby en gratis prøve eller så subtilt som å gi verdifulle
      innsikter. Husk, litt generøsitet kan ta deg langt i overtalelse.
    </p>
    <br></br>
    <p
      style={{
        fontWeight: 'bold',
      }}
    >
      Prinsipp 2: Forpliktelse – Dominoeffekten
    </p>
    <br></br>
    <p>
      Når vi først har forpliktet oss til noe, ønsker vi å ikke virke
      selvmotsigende. Begynn med en liten forespørsel som er lett å være enig i,
      og se hvordan den sprer seg til aksept av større forpliktelser. Denne
      dominoeffekten kan tippe vektskålen i din favør.
    </p>
    <br></br>
    <p
      style={{
        fontWeight: 'bold',
      }}
    >
      Prinsipp 3: Sosialt bevis – Ape ser, ape gjør
    </p>
    <br></br>
    <p>
      Vi er sosiale skapninger som ser til hverandre for hint om hvordan vi skal
      oppføre oss: "Hvis alle gjør det, må det være riktig, ikke sant?" Ved å
      vise til andre menneskers gode resultater eller anbefalinger vil flokken
      følge etter.
    </p>
    <br></br>
    <p
      style={{
        fontWeight: 'bold',
      }}
    >
      Prinsipp 4: Autoritet – Lytt til ekspertene
    </p>
    <br></br>
    <p>
      Utnytt troverdigheten til eksperter for å styrke argumentet ditt. Hvis du
      promoterer en ny diettplan, vis frem en anbefaling fra en anerkjent
      ernæringsfysiolog som støtter planen. Folk vil være mer tilbøyelige til å
      stole på planen når de ser en autoritetsfigur som støtter den.
    </p>
    <br></br>
    <p
      style={{
        fontWeight: 'bold',
      }}
    >
      Prinsipp 5: Attraktivitet – Vanskelig å motstå et vennlig ansikt
    </p>
    <br></br>
    <p>
      Vi har mer sannsynlighet for å bli påvirket av mennesker vi liker eller
      finner attraktive. For å maksimere dette prinsippet, etabler felles
      grunnverdier og vær genuint likandes. Et smil og noen vennlig ord kan være
      nok.
    </p>
    <br></br>
    <p
      style={{
        fontWeight: 'bold',
      }}
    >
      Prinsipp 6: Knapphet – FOMO: En ekte greie
    </p>
    <br></br>
    <p>
      Når noe er knapt, oppfattes det som mer verdifullt. Skap en følelse av
      hastverk eller eksklusivitet rundt det du promoterer. Hvis folk tror de
      kanskje går glipp av noe, er det mer sannsynlig at de reagerer.
    </p>
    <br></br>
    <p>
      Ved å tilegne deg innsikt i, og anvende disse seks prinsippene for
      overtalelse, vil du finne deg selv bedre rustet til å møte hverdagens
      utfordringer. Så grip muligheten og utnytt prinsippenes potensiale,
      samtidig som du sørger for at de ikke utnytter deg.
    </p>
  </>
);

const BlogPostHOHSH: NextPageWithLayout = () => {
  return <BlogPost post={post} content={content}></BlogPost>;
};

BlogPostHOHSH.getLayout = (page) => page;

export default BlogPostHOHSH;
