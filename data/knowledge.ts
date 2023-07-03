import { StaticImageData } from 'next/image';
import imageBoi from '../assets/books/boi.jpg';
import influenceImage from '../assets/books/influence.jpg';
import outliveImage from '../assets/books/outlive.jpg';
import zeroImage from '../assets/books/zero.jpg';
import awarenessImage from '../assets/books/awareness.jpg';
import buildImage from '../assets/books/build.jpg';
import deepImage from '../assets/books/deeplearning.jpg';
import economicsImage from '../assets/books/economics.jpg';
import enlightenmentImage from '../assets/books/enlightenment.jpg';
import historyImage from '../assets/books/history.jpg';
import innovationImage from '../assets/books/innovation.jpg';
import loveImage from '../assets/books/love.jpg';
import originImage from '../assets/books/origin.jpg';
import prisonerImage from '../assets/books/prisoner.jpg';
import psychdelicsImage from '../assets/books/psychedelics.jpg';
import selfishImage from '../assets/books/selfish.jpg';
import sixImage from '../assets/books/six.jpg';
import philImage from '../assets/books/thestoryofphilosophy.jpg';
import whyImage from '../assets/books/why.jpg';
import wisdomImage from '../assets/books/wisdom.jpg';

export interface Books {
  title: string;
  href: string;
  image: StaticImageData | string;
  description: string;
  date: string;
  category: string;
  author: string;
}

export interface Essays {
  title: string;
  href: string;
  image: StaticImageData | string;
  description: string;
  date: string;
  category: string;
  author: string;
}

export const bookList: Books[] = [
  {
    title: 'The Beginning of Infinity',
    href: 'https://a.co/d/a1jnrJN',
    image: imageBoi,
    description:
      'Bibelen: En dristig og altomfavnende utforskning av kunnskapens natur og fremgang fra en av dagens store tenkere.',
    date: '2011-03-31',
    category: 'Science',
    author: 'David Deutsch',
  },
  {
    title: 'Influence: The Psychology of Persuasion',
    href: 'https://a.co/d/fhL5HdQ',
    image: influenceImage,
    description:
      'En banebrytende dykk inn i kunsten å overtale, som dissekerer de psykologiske utløserne som fører til påvirkning og kontroll.',
    date: '2006-12-26',
    category: 'Psychology',
    author: 'Robert Cialdini',
  },
  {
    title: 'Outlive: The Science & Art Of Longevity',
    href: 'https://a.co/d/5VUEegg',
    image: outliveImage,
    description: 'En ultimat manual for et sunnere og lengre liv.',
    date: '2018-05-01',
    category: 'Health',
    author: 'Peter Attia',
  },
  {
    title: 'Zero to One',
    href: 'https://a.co/d/h4jldH4',
    image: zeroImage,
    description:
      "En skarp kritikk av konkurranse og en guide til å oppnå monopol ved å skape noe nytt og verdifullt - gå fra 'null til en'.",
    date: '2014-09-16',
    category: 'Business',
    author: 'Peter Thiel',
  },
  {
    title: 'Deep Learning for Coders with fastai and PyTorch',
    href: 'https://a.co/d/j2KMDCH',
    image: deepImage,
    description:
      'En omfattende ressurs som avmystifiserer kunstig intelligens, og tilbyr kodere et inngangspunkt til verdenen av dyp læring.',
    date: '2020-10-20',
    category: 'Programming',
    author: 'Jeremy Howard',
  },
  {
    title: 'Build',
    href: 'https://a.co/d/gM1mt8o',
    image: buildImage,
    description:
      'En ukonvensjonell guide til å skape ting verdt å lage, fra faren til iPod og iPhone og skaperen av Nest.',
    date: '2022-05-03',
    category: 'Business',
    author: 'Tony Fadell',
  },
  {
    title: 'The Book of Why: The New Science of Cause and Effect',
    href: 'https://a.co/d/2oQ8Ope',
    image: whyImage,
    description:
      'Et paradigmeskiftende arbeid av en Turing-pris-vinnende dataforsker som revolusjonerer vår forståelse av årsakssammenheng og dens innflytelse på AI.',
    date: '2018-05-15',
    category: 'Science',
    author: 'Judea Pearl',
  },
  {
    title: 'The Way to Love: Meditations for Life',
    href: 'https://a.co/d/5bMqhFx',
    image: loveImage,
    description:
      'En transformerende åndelig klassiker som tilbyr veiledning for å bringe kjærlighet og medfølelse inn i hverdagen.',
    date: '2011-08-31',
    category: 'Spirituality',
    author: 'Anthony de Mello',
  },
  {
    title: 'The Science of Enlightenment: How Meditation Works',
    href: 'https://a.co/d/f76u3nc',
    image: enlightenmentImage,
    description:
      "En overbevisende undersøkelse av virkeligheten til 'enlightenment' og dens oppnåelse gjennom mindfulness og meditasjon.",
    date: '2016-09-01',
    category: 'Spirituality',
    author: 'Shinzen Young',
  },
  {
    title: 'How to Change Your Mind: The New Science of Psychedelics',
    href: 'https://a.co/d/eXjx51P',
    image: psychdelicsImage,
    description:
      'En banebrytende utforskning av psykedeliske stoffer og deres kraftige evne til å helbrede og transformere det menneskelige sinn.',
    date: '2018-05-17',
    category: 'Psychology',
    author: 'Michael Pollan',
  },
  {
    title: 'The Selfish Gene',
    href: 'https://a.co/d/9lnBMJw',
    image: selfishImage,
    description:
      'Et landemerke innen evolusjonsvitenskap som ser livet gjennom linsen til en gen-sentrert evolusjon.',
    date: '2016-06-02',
    category: 'Science',
    author: 'Richard Dawkins',
  },
  {
    title: 'Awareness',
    href: 'https://a.co/d/c1zUBnY',
    image: awarenessImage,
    description:
      'En åndelig guidebok som avdekker det universelle mysteriet og gir en praktisk vei til transformasjon.',
    date: '2011-08-31',
    category: 'Spirituality',
    author: 'Anthony de Mello',
  },
  {
    title: 'The Origin of Species',
    href: 'https://a.co/d/avCeEGQ',
    image: originImage,
    description:
      'En tidløs klassiker innen vitenskapen om evolusjon som forandret vår forståelse av naturen og vår plass i den.',
    date: '1859-11-24',
    category: 'Science',
    author: 'Charles Darwin',
  },
  {
    title: 'The Story of Philosophy',
    href: 'https://a.co/d/iFvX0Il',
    image: philImage,
    description:
      'En omfattende introduksjon til de største tenkerne og deres ideer, fra Plato til Popper, som utforsker filosofiens rike historie.',
    date: '1926-01-01',
    category: 'Philosophy',
    author: 'Will Durant',
  },
  {
    title: "Prisoner's Dilemma",
    href: 'https://a.co/d/9ZdbWrG',
    image: prisonerImage,
    description:
      ' En dyptgående utforskning av spillteori gjennom studiet av fengselsdilemmaet, en av de mest berømte paradoksene i moderne vitenskap.',
    date: '1991-01-01',
    category: 'Science',

    author: 'William Poundstone',
  },
  {
    title: 'How Innovation Works: And Why It Flourishes in Freedom',
    href: 'https://a.co/d/bhsJler',
    image: innovationImage,
    description:
      'En grundig guide til innovasjon, som viser hvordan frihet er avgjørende for å skape og opprettholde innovasjon.',
    date: '2020-05-14',
    category: 'Business',

    author: 'Matt Ridley',
  },
  // {
  //   title: 'How to Fail at Almost Everything and Still Win Big',
  //   href: 'https://a.co/d/1Z2ZQ8U',
  //   image: 'https://images-na.ssl-images-amazon.com/images/I/41X6Z1zZQVL.jpg',
  //   description:
  //     'En morsom, rørende og inspirerende bok som lærer deg hvordan du kan lykkes i livet ved å mislykkes.',
  //   date: '2013-10-22',
  //   category: 'Business',
  //   author: 'Scott Adams',
  // },
  {
    title:
      'Six Easy Pieces: Essentials of Physics Explained by Its Most Brilliant Teacher',
    href: 'https://a.co/d/22mHajd',
    image: sixImage,
    description:
      'En mesterlig introduksjon til fysikkens grunnleggende prinsipper fra en av dens største lærere, som forenkler komplekse konsepter med bemerkelsesverdig klarhet.',
    date: '1994-04-01',
    category: 'Science',
    author: 'Richard P. Feynman',
  },
  {
    title:
      'Economics in One Lesson: The Shortest and Surest Way to Understand Basic Economics',
    href: 'https://a.co/d/84grwe0',
    image: economicsImage,
    description:
      'En kort, men dyptgripende guide til økonomiens prinsipper, som fjerner vanlige misoppfatninger for å avsløre økonomiske sannheter.',
    date: '1946-01-01',
    category: 'Business',
    author: 'Henry Hazlitt',
  },
  {
    title: 'The Wisdom of Life',
    href: 'https://a.co/d/5P4qEJR',
    image: wisdomImage,
    description:
      'En grunnleggende tekst som introduserer leserne for filosofi gjennom utforskningen av livets kompleksiteter og jakten på forståelse.',
    date: '1890-01-01',
    category: 'Philosophy',
    author: 'Arthur Schopenhauer',
  },
  {
    title: 'The Lessons of History',
    href: 'https://a.co/d/0rWChIn',
    image: historyImage,
    description:
      'En innsiktsfull titt på historiens sykluser, som avslører varige mønstre og uvurderlige leksjoner for nåtiden og fremtiden.',
    date: '1968-01-01',
    category: 'History',
    author: 'Will Durant',
  },
];
