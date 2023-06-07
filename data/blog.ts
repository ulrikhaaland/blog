import alltidKrigImage from "../assets/posts/alltidkrig.png";
import msfImage from "../assets/posts/msf.jpg";
import forklaringImage from "../assets/posts/forklaring.png";
import futureImage from "../assets/posts/future.png";
import videogamesImage from "../assets/posts/videogames.png";
import tnlImage from "../assets/posts/tnl.png";
import lykkeImage from "../assets/posts/lykke.png";
import overtaleImage from "../assets/posts/overtale.png";
import jegvarikkeImage from "../assets/posts/jegvarikke.png";
import { StaticImageData } from "next/image";

export interface Blogpost {
  title: string;
  href: string;
  image: StaticImageData | string;
  date: string;
  category: string;
  description: string;
  readingTime: number;
}

export const PostMSF: Blogpost = {
  title: "Min Største Forbrytelse",
  href: "blog/min-storste-forbrytelse",
  image: msfImage,
  date: "2021-08-01",
  category: "Fortelling",
  description:
    "Jeg får øye på fyren like etter at jeg har passert fotoboksen. Han står mellom kjørefeltet og innkjørselen til veilommen. Han vinker. I det jeg passerer sperrelinjen legger jeg merke til utkledningen. Politi.",
  readingTime: 20,
};

export const PostLH: Blogpost = {
  title: "Lykkehierarkiet",
  href: "blog/lykke-hierarkiet",
  image: lykkeImage,
  date: "2021-08-01",
  category: "Fortelling",
  description:
    "Fortapt. Synkende. Der har du meg. Verken penger eller damer. Drukner i samfunnets forventninger.\n \n",
  readingTime: 3,
};
export const PostDEAK: Blogpost = {
  title: "Det Er Alltid Krig",
  href: "blog/det-er-alltid-krig",
  image: alltidKrigImage,
  date: "2021-08-01",
  category: "Fortelling",
  description:
    "En mann. Ung. Knapt et hår på kjakan. Han ser på nyhetene. Krig. Kaos. Øyne vidåpne. Hjertet hamrer. Verden utenfor kneler. Han stiger fram. Melder seg frivillig. En soldat.",
  readingTime: 1,
};
export const PostGU: Blogpost = {
  title: "Gaming: Utveien",
  href: "blog/gaming-utveien",
  image: videogamesImage,
  date: "2021-08-01",
  category: "Historier",
  description: `Her sitter jeg, stirrende på skjermen. Stemmen i hodet mitt, den sier, "Du kaster bort livet ditt."`,
  readingTime: 2,
};
export const PostTNL: Blogpost = {
  title: "Tre Nyttige Løyner",
  href: "blog/tre-nyttige-loyner",
  image: tnlImage,
  date: "2021-08-01",
  category: "Psykologi",
  description:
    "La meg fortelle deg en hemmelighet: ting trenger ikke alltid å være sanne for å være nyttige.",
  readingTime: 2,
};
export const PostHOVSH: Blogpost = {
  title: "Hvordan Overtale Hvem Som Helst",
  href: "blog/hvordan-overtale-hvem-som-helst",
  image: overtaleImage,
  date: "2021-08-01",
  category: "Psykologi",
  description: "Seks enkle prinsipper for overtalelse.\n \n",
  readingTime: 2,
};
export const PostJVIAS: Blogpost = {
  title: "Jeg Var Ikke Alltid Slik",
  href: "blog/jeg-var-ikke-alltid-slik",
  image: jegvarikkeImage,
  date: "2021-08-01",
  category: "Fortelling",
  description: "Begrenset. Våken. Bevisst.\n \n \n",
  readingTime: 1,
};
export const PostF: Blogpost = {
  title: "Fremtiden",
  href: "blog/fremtiden",
  image: futureImage,
  date: "2021-08-01",
  category: "Fortelling",
  description:
    "Jeg står på kanten av taket, verden strekker seg ut under meg, elektriske maskiner summer.\n \n",
  readingTime: 1,
};
export const PostGF: Blogpost = {
  title: "Forklaringer: Hvordan skille de gode fra de dårlige",
  href: "blog/gode-forklaringer",
  image: forklaringImage,
  date: "2021-08-01",
  category: "Utdanning",
  description:
    "Har du noen gang følt deg forvirret fordi noen ga deg en forklaring som etterlot deg med flere spørsmål enn svar?",
  readingTime: 6,
};

export const blogpostList = [
  PostMSF,
  PostLH,
  PostDEAK,
  PostGU,
  PostTNL,
  PostHOVSH,
  PostJVIAS,
  PostF,
  PostGF,
];
