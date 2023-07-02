import { StaticImageData } from 'next/image';
import imageBoi from '../assets/books/boi.jpg';
import influenceImage from '../assets/books/influence.jpg';
import outliveImage from '../assets/books/outlive.jpg';
import zeroImage from '../assets/books/zero.jpg';
import deepImage from '../assets/books/deeplearning.jpg';

export interface Books {
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
    description: 'Hvordan overtale hvem som helst',
    date: '2006-12-26',
    category: 'Psychology',
    author: 'Robert Cialdini',
  },
  {
    title: 'Outlive: The Science & Art Of Longevity',
    href: 'https://a.co/d/5VUEegg',
    image: outliveImage,
    description: 'Den ultimate håndboken for et bedre og lengre liv.',
    date: '2018-05-01',
    category: 'Health',
    author: 'Peter Attia',
  },
  {
    title: 'Zero to One',
    href: 'https://a.co/d/h4jldH4',
    image: zeroImage,
    description: 'Konkurranse er for tapere',
    date: '2014-09-16',
    category: 'Business',
    author: 'Peter Thiel',
  },
  {
    title: 'Deep Learning for Coders with fastai and PyTorch',
    href: 'https://a.co/d/j2KMDCH',
    image: deepImage,
    description: 'AI for programmerere',
    date: '2020-10-20',
    category: 'Programming',
    author: 'Jeremy Howard',
  },
  {
    title: 'Build',
    href: 'https://a.co/d/gM1mt8o',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41X6Z1zZQVL._SX331_BO1,204,203,200_.jpg',
    description:
      "En uortodoks guide til å lage ting som er verdt å lage, fra 'faren til iPod og iPhone' og skaperen av Nest",
    date: '2022-05-03',
    category: 'Business',
    author: 'Tony Fadell',
  },
  {
    title: 'The Book of Why: The New Science of Cause and Effect',
    href: 'https://a.co/d/2oQ8Ope',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41X6Z1zZQVL.jpg',
    description:
      'En datavitenskapelig forsker og statistiker som har vunnet Turing-prisen, viser hvordan forståelse av kausalitet har revolusjonert vitenskapen og vil revolusjonere kunstig intelligens.',
    date: '2018-05-15',
    category: 'Science',
    author: 'Judea Pearl',
  },
  {
    title: 'The Way to Love: Meditations for Life',
    href: 'https://a.co/d/5bMqhFx',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41X6Z1zZQVL.jpg',
    description:
      'En av de mest innflytelsesrike åndelige bøkene i det 20. århundre, som tilbyr en måte å bringe kjærlighet og medfølelse inn i hverdagen.',
    date: '2011-08-31',
    category: 'Spirituality',
    author: 'Anthony de Mello',
  },
  {
    title: 'The Science of Enlightenment: How Meditation Works',
    href: 'https://a.co/d/f76u3nc',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41X6Z1zZQVL.jpg',
    description:
      '"Opplysning" - er det en myte eller er det virkelig? I hver åndelig tradisjon har indre oppdagere oppdaget at den frigjorte tilstanden faktisk er en naturlig opplevelse, like virkelig som følelsene du har akkurat nå - og at gjennom undersøkelse av dine egne tanker, følelser og oppfatninger, kan du våkne til klar innsikt og en lykke uavhengig av forholdene.',
    date: '2016-09-01',
    category: 'Spirituality',
    author: 'Shinzen Young',
  },
  {
    title: 'How to Change Your Mind: The New Science of Psychedelics',
    href: 'https://a.co/d/eXjx51P',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41X6Z1zZQVL.jpg',
    description:
      'En banebrytende undersøkelse av psykedeliske stoffer og deres evne til å helbrede mennesker.',
    date: '2018-05-17',
    category: 'Psychology',
    author: 'Michael Pollan',
  },
  {
    title: 'The Selfish Gene',
    href: 'https://a.co/d/9lnBMJw',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41X6Z1zZQVL.jpg',
    description: 'En klassiker innen vitenskapen om evolusjon.',
    date: '2016-06-02',
    category: 'Science',
    author: 'Richard Dawkins',
  },
  {
    title: 'Awareness',
    href: 'https://a.co/d/c1zUBnY',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41X6Z1zZQVL.jpg',
    description:
      'En guide til det universelle mysteriet og en praktisk veiledning til transformasjon.',
    date: '2011-08-31',
    category: 'Spirituality',
    author: 'Anthony de Mello',
  },
  {
    title: 'The Origin of Species',
    href: 'https://a.co/d/avCeEGQ',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41X6Z1zZQVL.jpg',
    description: 'En klassiker innen vitenskapen om evolusjon.',
    date: '1859-11-24',
    category: 'Science',
    author: 'Charles Darwin',
  },
  
];
