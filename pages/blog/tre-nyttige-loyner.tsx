import { PostTNL as post } from '../../data/blog';
import BlogPost from '../../components/BlogPost';
import { NextPageWithLayout } from '../_app';

const content = (
  <>
    <p>
      La meg fortelle deg en hemmelighet: ting trenger ikke alltid å være sanne
      for å være nyttige. Faktisk har noen av de mest vellykkede og lykkelige
      menneskene omfavnet ting som ikke er sanne. Sprøtt, ikke sant? Hold ut med
      meg, så skal jeg vise deg tre ting som kanskje ikke er 100% sanne, men som
      kan forandre livet ditt.
    </p>
    <br></br>

    <p
      style={{
        fontWeight: 'bold',
      }}
    >
      Du kan endre fortiden
    </p>
    <br></br>

    <p>
      Fortiden er noe som kun eksisterer i hodet ditt. Ved å dekonstruere
      fortiden og se den i et nytt lys kan du sette den sammen igjen på en ny
      måte. Dette kan endre på hvordan du føler og tenker om tidligere
      hendelser, som igjen vil påvirke din nåværende tilstand og fremtidige
      handlinger. Selv om du ikke kan endre på selve hendelsen, kan teknikken
      hjelpe deg å forandre livet ditt ved å endre på måten fortiden påvirker
      deg.
    </p>
    <br></br>

    <p
      style={{
        fontWeight: 'bold',
      }}
    >
      Du kontrollerer din egen skjebne
    </p>
    <br></br>

    <p>
      Vitenskapen forteller oss at gener og miljø spiller en enorm rolle i
      livene våre. Denne overbevisningen oppmuntrer deg til å ta ansvar for
      handlingene og beslutningene dine, i stedet for å skylde på eksterne
      faktorer. Dette er nyttig, og det er det vi er ute etter.
    </p>
    <br></br>

    <p
      style={{
        fontWeight: 'bold',
      }}
    >
      Det er aldri for sent å endre seg
    </p>
    <br></br>

    <p>
      Kan mennesker virkelig forandre seg? Juryen er fortsatt ute. Men å tro at
      det er mulig holder deg åpen for vekst og selvforbedring. Og når du alltid
      søker forbedring er du på rett vei mot å hjelpe deg selv.
    </p>
    <br></br>

    <p>
      Så der har du det: tre ting som kanskje ikke er sanne, men som kan
      transformere livet ditt. Prøv dem, og se hverdagen endre seg til det
      bedre. Og husk, det handler ikke om sannhet; det handler om nytteverdi.
    </p>
  </>
);

const BlogPostTNL: NextPageWithLayout = () => {
  return <BlogPost post={post} content={content}></BlogPost>;
};

BlogPostTNL.getLayout = (page) => page;

export default BlogPostTNL;
