import { PostF as post } from '../../data/blog';
import BlogPost from '../../components/BlogPost';
import { NextPageWithLayout } from '../_app';

const content = (
  <>
    <p>
      Jeg står på kanten av taket, verden strekker seg ut under meg, elektriske
      maskiner summer. Glidende biler under, en symfoni av stille effektivitet.
      En verden løsrevet fra lenkene til bråkete forbrenning. Jeg lukker øynene
      og puster inn den friske luften, ren for forurensning og fri for støy.
    </p>
    <br></br>

    <p>
      I mine årer bruser en bølge av varme og kjærlighet. Ufarlig MDMA, vår nye
      kaffe, drivstoffet for et samfunn bygget på åpenhet og empati. Et smil om
      munnen mens jeg tenker på den bitre smaken som plaget generasjonene før.
    </p>
    <br></br>

    <p>
      Solen titter gjennom en klynge av kolossale trær, bladene deres omringet
      med mikroroboter, flittig absorberer de CO2. Ikke et eneste blad
      bortkastet.
    </p>
    <br></br>

    <p>
      Maskinene tar seg av de kjedelige oppgavene, deres elektriske lemmer
      stille og effektive. Menneskeheten, nå avlastet, blomstrer i en verden av
      vitenskap og kunst. Og utarbeider teorier så mangfoldige og komplekse at
      de knuser forventningene for hva vi trodde var mulig.
    </p>
    <br></br>

    <p>
      Krypto i min digitale lommebok. Programmerbare penger, det foretrukne
      vekslingsmediet. Bitcoin, desentralisert og ubrytelig, vårt virtuelle
      gull, har utslettet forskjellene mellom folk. De gamle sentralbankene har
      bukket under, deres makt og innflytelse falmet i skyggen av denne nye
      desentraliserte tidsalderen.
    </p>
    <br></br>

    <p>
      Jeg ser oppover og får øye på et nyankommet romskip, et symbol på vår nye
      plass blant stjernene. Vi har overvunnet jordens tyngdekraft, vandret ut i
      universet og erobret den siste grensen.
    </p>
    <br></br>

    <p>
      Hjertet mitt svulmer av takknemlighet, vel vitende om at døden, den gamle
      skyggen, ikke lenger lurer. Evigheten strekker seg foran meg, en
      uendelighet av muligheter, all byrde løftet fra mine skuldre.
    </p>
    <br></br>

    <p>
      Verden har forvandlet seg, og med den meg selv. Begrensningene jeg en gang
      kjente på har nå forsvunnet og blitt erstattet med en ubegrenset
      selvtillit, som om jeg har svelget pillen fra filmklassikeren "Limitless."
      Jeg er gjenfødt i en verden formet av våre egne hender, en verden hvor
      løsninger får mer oppmerksomhet enn problemer. En verden jeg ser frem til
      å våkne opp i.
    </p>
  </>
);

const BlogPostF: NextPageWithLayout = () => {
  return <BlogPost post={post} content={content}></BlogPost>;
};

BlogPostF.getLayout = (page) => page;

export default BlogPostF;
