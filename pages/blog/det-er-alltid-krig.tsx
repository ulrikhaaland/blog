import { PostDEAK as post } from '../../data/blog';
import BlogPost from '../../components/BlogPost';
import { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';

const content = (
  <>
    <p>
      En mann. Ung. Knapt et hår på kjakan. Han ser på nyhetene. Krig. Kaos.
      Øyne vidåpne. Hjertet hamrer. Verden utenfor kneler. Han stiger fram.
      Melder seg frivillig. En soldat.
    </p>
    <br></br>

    <p>
      Venner. Borte. Liv i uorden. Folk sulter. Han kjemper. Han blør. Han
      hjelper. Svette i pannen. Musklene verker. Frykt. Mot. De lever side om
      side. Han presser på. Marerittet hvisker. Han hører ikke etter.
    </p>
    <br></br>

    <p>
      I krigssonen finner han sin plass. Liv reddet. Hender stødige. Øyne
      fokuserte. Et formål dukker opp. Den eksterne uroen driver ham. Inni
      finner han ro. En merkelig fred.
    </p>
    <br></br>

    <p>
      Soldater omgir ham. Kamerater. Brødre. Søstre. Krigen forener dem. De er
      avhengige av hverandre. For overlevelse. For håp. Midt i ruinene finner de
      mening. Den indre stormen stilner. Verden utenfor raser.
    </p>
    <br></br>

    <p>
      En mann. Ung. En annen. En verden av komfort. Rikdom. Muligheter. Alt
      servert. Høyere utdanning. Jobbtilbud. Et liv på et sølvfat.
    </p>
    <br></br>

    <p>
      Han beveger seg gjennom livet. Lette steg. Fester. Venner. Suksess. Men
      tomheten gnager. Gnager på sjelen. Han søker. Etter noe annet. Men det er
      ingen kall. Ingen hast. Ingen kamprop.
    </p>
    <br></br>

    <p>
      Han tar på seg roller. Ulike kostymer. En dress. Et slips. Han er ikke
      sulten. Han har aldri måttet kjempe. Den indre krigen starter. Den vokser.
      Ikke noe sted å søke ly.
    </p>
    <br></br>

    <p>
      Den unge mannen. Fortapt. En verden av overflod. Likevel aldri nok.
      Ekstern stillhet. Indre kaos. Ingen hensikt. Bare et tomrom. Han prøver å
      fylle det. Men hullet blir dypere. Fortvilelsen tar rot. Verden utenfor
      blomstrer. Inni visner det.
    </p>
  </>
);

const BlogPostDEAK: NextPageWithLayout = () => {
  return <BlogPost post={post} content={content}></BlogPost>;
};

BlogPostDEAK.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default BlogPostDEAK;
