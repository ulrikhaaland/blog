import { PostJVIAS as post } from '../../data/blog';
import BlogPost from '../../components/BlogPost';
import { NextPageWithLayout } from '../_app';

const content = (
  <>
    <p
      style={{
        fontWeight: 'bold',
      }}
    >
      Begrenset.
    </p>
    <br></br>

    <p>Øyebryn. Buet. En bevegelse, en provokasjon, et signal.</p>
    <br></br>

    <p>Rusten kaffekopp. Damp Stiger. Bitter smak på tungen.</p>
    <br></br>

    <p>TV-skjerm. Statisk summing. Et ansikt, forvridd, skriker.</p>
    <br></br>

    <p>Klokke, tikker. Stødig rytme. Livet, glipper unna.</p>
    <br></br>

    <p>Dør knirker. Åpnes. En fremmed, en venn, en elsker.</p>
    <br></br>

    <p>Øyne møtes. Pupiller utvides. Verdener kolliderer.</p>
    <br></br>

    <p>Pusten kjapp. Hjertet flimrer. Tiden stanser.</p>
    <br></br>

    <p>Lepper, skjelvende. Hvisker. &quot;Våkn opp.&quot;</p>
    <br></br>
    <p
      style={{
        fontWeight: 'bold',
      }}
    >
      Våken.
    </p>
    <br></br>
    <p>Tusen lyder. Tusen farger. Symbiotisk eksistens.</p>
    <br></br>

    <p>Fugler synger. Barn ler. Blader rasler.</p>
    <br></br>

    <p>Sollys på huden. Varm, omfavnende. Livet, blomstrende.</p>
    <br></br>
    <p>Forbindelser. Ansikter. Navn. Historier.</p>
    <br></br>
    <p>Ikke lenger bundet. Ikke lenger begresent.</p>
    <br></br>

    <p>Øyne, vidåpne. Hjertet, utvidet. Sinnet, svevende.</p>
    <br></br>

    <p>Uendelige mulighter. Uendelig kjærlighet. Grenseløs oppmerksomhet.</p>
    <br></br>
    <p
      style={{
        fontWeight: 'bold',
      }}
    >
      Bevisst.
    </p>
    <br></br>
    <p>Et skifte. En erkjennelse. Bevisstheten, observerer seg selv.</p>
    <br></br>
    <p>Følelser, tanker, meninger. Bølger. Midlertidige.</p>
    <br></br>

    <p>Egoet, dempet. Selvet, oppløst. Samhold. Harmoni.</p>
    <br></br>

    <p>Våken i oppvåkningen. Bevisst.</p>
    <br></br>
    <p>Ikke lenger kun en observatør. Ikke lenger kun en deltager.</p>
    <br></br>

    <p>Jeg er observatøren og det observerte. Jeg er drømmeren og drømmen.</p>
    <br></br>

    <p>Jeg var ikke alltid slik.</p>
  </>
);

const BlogPostJVIAS: NextPageWithLayout = () => {
  return <BlogPost post={post} content={content}></BlogPost>;
};

BlogPostJVIAS.getLayout = (page) => page;

export default BlogPostJVIAS;
