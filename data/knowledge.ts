// BOOKS
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
// ESSAYS
import aiImage from '../assets/essays/ai.png';
import alexanderImage from '../assets/essays/alexander.png';
import burnoutImage from '../assets/essays/burnout.png';
import cancerImage from '../assets/essays/cancer.png';
import codeImage from '../assets/essays/code.png';
import circleImage from '../assets/essays/circle.png';
import conformImage from '../assets/essays/conform.png';
import disagreeImage from '../assets/essays/disagree.png';
import expectedImage from '../assets/essays/expected.png';
import expertImage from '../assets/essays/expert.png';
import identityImage from '../assets/essays/identity.png';
import keynesImage from '../assets/essays/keynes.png';
import passionImage from '../assets/essays/passion.png';
import seeImage from '../assets/essays/see.png';
import shannonImage from '../assets/essays/shannon.png';
import smartImage from '../assets/essays/smart.png';
import solitudeImage from '../assets/essays/solitude.png';
import stupidImage from '../assets/essays/stupid.png';
import thinkImage from '../assets/essays/think.png';
import tomorrowImage from '../assets/essays/tomorrow.png';
import tyrantImage from '../assets/essays/tyrant.png';
import workImage from '../assets/essays/work.png';
import writerImage from '../assets/essays/writer.png';
import readImage from '../assets/essays/read.png';
// PODCASTS
import aarthiImage from '../assets/podcasts/aarthi.jpg';
import allImage from '../assets/podcasts/all.jpg';
import driveImage from '../assets/podcasts/drive.jpg';
import hamiltonImage from '../assets/podcasts/hamilton.jpg';
import lexImage from '../assets/podcasts/lex.jpg';
import mlstImage from '../assets/podcasts/mlst.jpg';
import moneyImage from '../assets/podcasts/money.jpg';
import networkImage from '../assets/podcasts/network.jpg';
import portalImage from '../assets/podcasts/portal.jpg';
import priosImage from '../assets/podcasts/prios.jpg';
import tylerImage from '../assets/podcasts/tyler.jpg';
import wakingImage from '../assets/podcasts/waking.jpg';

export interface Books {
  title: string;
  href: string;
  image: StaticImageData | string;
  description: string;
  date: string;
  category: string;
  author: string;
}

export interface Essay {
  title: string;
  href: string;
  image: StaticImageData | string;
  description: string;
  date: string;
  category: string;
  author: string;
}

export interface Podcast {
  title: string;
  href: string;
  image: StaticImageData | string;
  description: string;
  category: string;
  author: string;
}

export interface PodcastEpisode {
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

export const essayList: Essay[] = [
  {
    title: "What's expected of us",
    href: 'https://www.nature.com/articles/436150a',
    image: expectedImage,
    description:
      'A thought-provoking essay that explores free will and determinism through an experiment that reveals our inability to predict our own choices.',
    date: '2005-07-06',
    category: 'Science',
    author: 'Ted Chiang',
  },
  {
    title: 'Solitude and Leadership',
    href: 'https://theamericanscholar.org/solitude-and-leadership/#.XzLH1igzYuV',
    image: solitudeImage,
    description:
      'If you want others to follow, learn to be alone with your thoughts.',
    date: '2010-03-01',
    category: 'Leadership',
    author: 'William Deresiewicz',
  },
  {
    title: 'The Four Quadrants of Conformism',
    href: 'http://paulgraham.com/conformism.html',
    image: conformImage,
    description:
      'One of the most revealing ways to classify people is by the degree and aggressiveness of their conformism.',
    date: '2020-07-01',
    category: 'Psychology',
    author: 'Paul Graham',
  },
  {
    title: 'The Only Path To Tomorrow',
    href: 'http://fare.tunes.org/liberty/library/toptt.html',
    image: tomorrowImage,
    description:
      'The greatest threat to mankind and civilization is the spread of the totalitarian philosophy. Its best ally is not the devotion of its followers but the confusion of its enemies. To fight it, we must understand it.',
    date: '1944-01-01',
    category: 'Philosophy',
    author: 'Ayn Rand',
  },
  {
    title: 'The Fable of the Dragon-Tyrant',
    href: 'https://nickbostrom.com/fable/dragon',
    image: tyrantImage,
    description:
      'Once upon a time, the planet was tyrannized by a giant dragon.',
    date: '2005-01-01',
    category: 'Philosophy',
    author: 'Nick Bostrom',
  },
  {
    title: 'How to Think for Yourself',
    href: 'http://paulgraham.com/think.html',
    image: thinkImage,
    description:
      "There are some kinds of work that you can't do well without thinking differently from your peers.",
    date: '2020-11-01',
    category: 'Psychology',
    author: 'Paul Graham',
  },
  {
    title: 'Wet code and dry',
    href: 'http://unenumerated.blogspot.com/2006/11/wet-code-and-dry.html',
    image: codeImage,
    description:
      "There's a strong distinction to be made between 'wet code,' interpreted by the brain, and 'dry code,' interpreted by computers.",
    date: '2008-08-01',
    category: 'Computer Science',
    author: 'Nick Szabo',
  },
  {
    title:
      'Understanding your Circle of Competence: How Warren Buffett Avoids Problems',
    href: 'https://fs.blog/circle-of-competence/',
    image: circleImage,
    description:
      "The circle of competence is a simple idea: know what you know and know what you don't know.",
    date: '2013-01-01',
    category: 'Business',
    author: 'Shane Parrish',
  },
  {
    title: 'How Claude Shannon Invented the Future',
    href: 'https://www.quantamagazine.org/how-claude-shannons-information-theory-invented-the-future-20201222/',
    image: shannonImage,
    description:
      'Today’s information age is only possible thanks to the groundbreaking work of a lone genius.',
    date: '2020-12-22',
    category: 'Computer Science',
    author: 'David Tse',
  },
  {
    title: 'Keynes’s ‘Beauty Contest’',
    href: 'https://www.chicagobooth.edu/review/keyness-beauty-contest',
    image: keynesImage,
    description:
      'John Maynard Keynes is remembered for his view that governments should spend money in recessions to regain full employment, an argument made famous in his 1936 book The General Theory of Employment, Interest, and Money. Few, however, realize that Keynes was a true forerunner of behavioral finance.',
    date: '2015-09-02',
    category: 'Economics',
    author: 'Richard Thaler',
  },
  {
    title:
      'Getting unstuck - physically and philosophically - with Alexander Technique',
    href: 'https://expandingawareness.org/blog/getting-unstuck-physically-and-philosophically-with-alexander-technique/',
    image: alexanderImage,
    description:
      '(John) Dewey considered that the Alexander Technique provided a demonstration of the unity of body and mind. With progress as a pupil, he reported an improvement in his vision and in his breathing and in ability to hold a philosophical position calmly with ability to change it if new evidence warranted."',
    date: '2020-12-01',
    category: 'Self-Improvement',
    author: 'Michael Ashcroft',
  },
  {
    title: "I Wouldn't Start From Here — Recovering From Burnout",
    href: 'https://www.michaelashcroft.org/notebook/i-wouldnt-start-from-here-recovering-from-burnout',
    image: burnoutImage,
    description:
      'A traveller stops to ask a farmer the way to a small village. The farmer thinks for a while and then says "If you want to go there I would not start from here."',
    date: '2021-02-19',
    category: 'Self-Improvement',
    author: 'Michael Ashcroft',
  },
  {
    title: 'Keep Your Identity Small',
    href: 'http://paulgraham.com/identity.html',
    image: identityImage,
    description:
      'I finally realized today why politics and religion yield such uniquely useless discussions.',
    date: '2009-02-01',
    category: 'Psychology',
    author: 'Paul Graham',
  },
  {
    title: 'Screw Finding Your Passion',
    href: 'https://markmanson.net/screw-finding-your-passion',
    image: passionImage,
    description: 'Remember back when you were a kid? You would just do things.',
    date: '2010-09-01',
    category: 'Self-Improvement',
    author: 'Mark Manson',
  },
  {
    title: "We'll see...",
    href: 'http://tao-how.blogspot.com/2011/02/well-see.html',
    image: seeImage,
    description: "You'll see...",
    date: '2011-02-01',
    category: 'Psychology',
    author: 'Tao',
  },
  {
    title: 'How to Be an Expert in a Changing World',
    href: 'http://www.paulgraham.com/ecw.html',
    image: expertImage,
    description:
      'If the world were static, we could have monotonically increasing confidence in our beliefs.',
    date: '2014-12-01',
    category: 'Philosophy',
    author: 'Paul Graham',
  },
  {
    title: 'I’ll Tell You The Secret of Cancer',
    href: 'https://www.theatlantic.com/health/archive/2021/08/caitlin-flanagan-secret-of-surviving-cancer/619844/',
    image: cancerImage,
    description:
      'It’s been almost 20 years since my diagnosis, and I’ve learned quite a bit.',
    date: '2021-08-23',
    category: 'Helse',
    author: 'Caitlin Flanagan',
  },
  {
    title: 'Beyond Smart',
    href: 'http://paulgraham.com/smart.html',
    image: smartImage,
    description:
      'If you asked people what was special about Einstein, most would say that he was really smart.',
    date: '2021-10-01',
    category: 'Self-Improvement',
    author: 'Paul Graham',
  },
  {
    title: 'Willingness to look stupid',
    href: 'https://danluu.com/look-stupid/',
    image: stupidImage,
    description:
      "People frequently think that I'm very stupid. I don't find this surprising, since I don't mind if other people think I'm stupid, which means that I don't adjust my behavior to avoid seeming stupid, which results in people thinking that I'm stupid.",
    date: '2021-10-01',
    category: 'Self-Improvement',
    author: 'Dan Luu',
  },
  {
    title: 'How to Disagree',
    href: 'http://www.paulgraham.com/disagree.html',
    image: disagreeImage,
    description:
      'The web is turning writing into a conversation. Twenty years ago, writers wrote and readers read. The web lets readers respond, and increasingly they do—in comment threads, on forums, and in their own blog posts.',
    date: '2008-03-01',
    category: 'Self-Improvement',
    author: 'Paul Graham',
  },
  {
    title: 'The Need to Read',
    href: 'http://paulgraham.com/read.html',
    image: readImage,
    description:
      "In the science fiction books I read as a kid, reading had often been replaced by some more efficient way of acquiring knowledge. Mysterious 'tapes' would load it into one's brain like a program being loaded into a computer.",
    date: '2022-11-01',
    category: 'Self-Improvement',
    author: 'Paul Graham',
  },
  {
    title: 'How to Do Great Work',
    href: 'http://paulgraham.com/greatwork.html',
    image: workImage,
    description:
      'If you collected lists of techniques for doing great work in a lot of different fields, what would the intersection look like? I decided to find out by making it.',
    date: '2023-07-01',
    category: 'Self-Improvement',
    author: 'Paul Graham',
  },
  {
    title: 'The Day You Became A Better Writer',
    href: 'https://dilbertblog.typepad.com/the_dilbert_blog/2007/06/the_day_you_bec.html',
    image: writerImage,
    description:
      'I went from being a bad writer to a good writer after taking a one-day course in “business writing.” I couldn’t believe how simple it was. I’ll tell you the main tricks here so you don’t have to waste a day in class.',
    date: '2007-06-16',
    category: 'Self-Improvement',
    author: 'Scott Adams',
  },
  {
    title: 'Why AI Will Save the World',
    href: 'https://a16z.com/2023/06/06/ai-will-save-the-world/',
    image: aiImage,
    description:
      'The era of Artificial Intelligence is here, and boy are people freaking out.',
    date: '2023-06-06',
    category: 'Technology',
    author: 'Marc Andreessen',
  },
];

export const podcastList: Podcast[] = [
  {
    title: 'The Drive',
    href: 'https://www.youtube.com/@PeterAttiaMD/featured',
    image: driveImage,
    description:
      'The Peter Attia Drive is a weekly, ultra-deep-dive podcast focusing on maximizing health, longevity, critical thinking…and a few other things.',
    category: 'Health',
    author: 'Peter Attia',
  },
  {
    title: 'The Portal',
    href: 'https://www.youtube.com/@EricWeinsteinPhD',
    image: portalImage,
    description:
      'The Portal is an exploration into discovery, including conversations with thought leaders. Host Eric Weinstein, Managing Director of Thiel Capital, brings his unique expertise and diverse roster of guests for a wide range of discussions, including science, culture, business, and capitalism.',
    category: 'Philosophy',
    author: 'Eric Weinstein',
  },
  {
    title: 'Lex Fridman',
    href: 'https://www.youtube.com/@lexfridman',
    image: lexImage,
    description:
      'Conversations about science, technology, history, philosophy and the nature of intelligence, consciousness, love, and power. Formerly called Artificial Intelligence (AI Podcast).',
    category: 'Technology',
    author: 'Lex Fridman',
  },
  {
    title: 'Machine Learning Street Talk',
    href: 'https://www.youtube.com/@MachineLearningStreetTalk',
    image: mlstImage,
    description:
      'MLST is the top AI podcast on Spotify. Subscribe now! Welcome! The team at MLST is inspired by academic research and each week we engage in dynamic discussion with pre-eminent figures in the AI field.',
    category: 'AI',
    author: 'Tim Scarfe',
  },
  {
    title: 'No Priors',
    href: 'https://www.youtube.com/@NoPriorsPodcast/featured',
    image: priosImage,
    description:
      "At this moment of inflection in technology, co-hosts Elad Gil and Sarah Guo talk to the world's leading AI engineers, researchers and founders about the biggest questions: How far away is AGI? What markets are at risk for disruption? How will commerce, culture, and society change? What’s happening in state-of-the-art in research? 'No Priors' is your guide to the AI revolution. ",
    category: 'AI',
    author: 'Elad Gil',
  },
  {
    title: 'Aarthi and Sriram',
    href: 'https://www.youtube.com/@AarthiAndSriram',
    image: aarthiImage,
    description:
      'Aarthi Ramamurthy and Sriram Krishnan host conversations with leading builders, CEOs and reveal what it takes to make it to the inside.',
    category: 'Technology',
    author: 'Aarthi and Sriram',
  },
  {
    title: 'Conversations with Tyler',
    href: 'https://www.youtube.com/@MercatusCenter',
    image: tylerImage,
    description:
      'Conversations with Tyler is a podcast hosted by Tyler Cowen, economist and professor at George Mason University. The show features one-on-one discussions with today’s top thinkers across a wide range of fields. Past guests include Steven Pinker, Nate Silver, Don Boudreaux, Jill Lepore, Ben Sasse, and Margaret Atwood. From economics to culture to politics to investing, the podcast explores a wide array of topics from many points of view. In addition to the podcast, Cowen is also the author of several books including The Complacent Class, Average is Over, and The Great Stagnation. ',
    category: 'Philosophy',
    author: 'Tyler Cowen',
  },
  {
    title: 'What is Money?',
    href: 'https://www.youtube.com/@RobertBreedlove22',
    image: moneyImage,
    description:
      'What is Money? is a podcast hosted by Robert Breedlove, CEO of Parallax Digital, and is dedicated to exploring the questions surrounding money, economics, and bitcoin. The podcast is hosted on the Bitcoin Magazine Podcast Network and is produced by the Let’s Talk Bitcoin Network. ',
    category: 'Bitcoin',
    author: 'Robert Breedlove',
  },
  {
    title: 'The Network State',
    href: 'https://www.youtube.com/@thenetworkstate',
    image: networkImage,
    description:
      "What comes after Google, Facebook, Bitcoin, and Ethereum? Perhaps it's the startup country — the network state. Balaji interviews tech founders and policymakers from around the world on managing billions of dollars and millions of people, as well as what it might take to start a new kind of state.",
    category: 'Technology',
    author: 'Balaji Srinivasan',
  },
  {
    title: 'Waking Up',
    href: 'https://www.youtube.com/@samharrisorg',
    image: wakingImage,
    description:
      'Join neuroscientist, philosopher, and best-selling author Sam Harris as he explores important and controversial questions about the human mind, society, and current events.',
    category: 'Philosophy',
    author: 'Sam Harris',
  },
  {
    title: 'Hamilton Morris',
    href: 'https://www.youtube.com/@HamiltonMorris/featured',
    image: hamiltonImage,
    description:
      "Hamilton Morris is a writer, documentarian, psychonaut and scientific researcher. He is known for his television series Hamilton's Pharmacopeia, which is broadcast on Viceland. He is the author of the book American Drug Chronicles, published by Vice Magazine in 2011. He is the son of Julia Sheehan and the late author Errol Morris.",
    category: 'Kjemi',
    author: 'Hamilton Morris',
  },
  {
    title: 'The All In Podcast',
    href: 'https://www.youtube.com/@allin',
    image: allImage,
    description:
      'The All-In Podcast Show is hosted by four Silicon Valley icons: Chamath Palihapitiya, Jason Calacanis, David Sacks, and David Friedberg. They interview the world’s greatest entrepreneurs, investors, and celebrities. They discuss the tough questions facing our world today, and the impact of technology on our future.',
    category: 'Technology',
    author: 'Chamath Palihapitiya',
  },
];


export const PodcastEpisodeList: PodcastEpisode[] = [
  {
    title: "Joe Rogan Experience #1212 - David Goggins",
    href: "https://www.youtube.com/live/BvWB7B8tXK8?feature=share",
    image: "https://i.ytimg.com/vi/BvWB7B8tXK8/maxresdefault.jpg",
    description: "David Goggins is a retired Navy SEAL and former USAF Tactical Air Control Party member who served in Iraq and Afghanistan. He is an ultramarathon runner, ultra-distance cyclist, triathlete and world record holder for the most pull-ups done in 24 hours.",
    date: "2018-12-05",
    category: "Fitness",
    author: "Joe Rogan",
  },
  {
    title: "Joe Rogan Experience #1136 - Hamilton Morris",
    href: "https://www.youtube.com/live/HM8WDZIhs3M?feature=share",
    image: "https://i.ytimg.com/vi/HM8WDZIhs3M/maxresdefault.jpg",
    description: "Hamilton Morris is a writer, documentarian, psychonaut and scientific researcher. His show \"Hamilton's Pharmacopeia\" is available on VICELAND and iTunes.",
    date: "2018-09-26",
    category: "Kjemi",
    author: "Joe Rogan",
  },
  {
    title: "The Tim Ferris Show - Chuck Palahniuk, Author of Fight Club",
    href: "https://tim.blog/2020/09/02/chuck-palahniuk/",
    image: "https://i.ytimg.com/vi/0X1dP0ZlR7k/maxresdefault.jpg",
    description: "A Masterclass in Creative Living and Dangerous Writing",
    date: "2020-09-02",
    category: "Writing",
    author: "Tim Ferriss",
  },
  {
    title: "Joe Rogan Experience #1309 - Naval Ravikant",
    href: "https://youtu.be/3qHkcs3kG44",
    image: "https://i.ytimg.com/vi/3qHkcs3kG44/maxresdefault.jpg",
    description: "Naval Ravikant is an entrepreneur and angel investor, a co-author of Venture Hacks, and a co-maintainer of AngelList.",
    date: "2019-06-05",
    category: "Philosophy",
    author: "Joe Rogan",
  },
  {
    title: "The Tim Ferris Show - Neil Gaiman",
    href: "https://youtu.be/iHPKTby9z6o",
    image: "https://i.ytimg.com/vi/0X1dP0ZlR7k/maxresdefault.jpg",
    description: '"The Interview I’ve Waited 20 Years To Do"',
    date: "2019-03-28",
    category: "Writing",
    author: "Tim Ferriss",
  },
  {

    title: "Naval Ravikant & Kapil Gupta: Conquering the Mind",
    href: "https://youtu.be/sBtuqpNZwio",
    image: "https://i.ytimg.com/vi/sBtuqpNZwio/maxresdefault.jpg",
    description: '“I can always tell that people who ask for stock tips, aren’t really serious about investing. People who ask for book recommendations aren’t really serious about reading. People who ask ‘What, what business should I build?’ aren’t really serious about entrepreneurship."',
    date: "2021-02-19",
    category: "Philosophy",
    author: "Naval Ravikant",
  },
  {
    title: "David Deutsch on the infinite reach of knowledge",
    href: "https://youtu.be/cEfG1PHNB64",
    image: "https://i.ytimg.com/vi/cEfG1PHNB64/maxresdefault.jpg",
    description: "It can be easy to believe that humans are insignificant. We’re specks of dust on a random planet in a vast universe. Less powerful than elephants. Fewer than ants. But David Deutsch believes that’s all beside the point, because humans possess one unique skill: attaining knowledge.",
    date: "2021-06-30",
    category: "Science",
    author: "Ted",
  },
  {
    title: "The Tim Ferris Show - Dr. Gabor Maté on Trauma, Addiction, Ayahuasca, and More",
    href: "https://youtu.be/H9B5mYfBPlY",
    image: "https://i.ytimg.com/vi/H9B5mYfBPlY/maxresdefault.jpg",
    description: "Tim Ferriss speaks with Dr. Gabor Maté, a physician who specializes in neurology, psychiatry, and psychology. He’s well known for studying and treating addiction.",
    date: "2018-03-07",
    category: "Psychology",
    author: "Tim Ferriss",
  },
  {
    title: "Jordan Peterson - Life at the Bottom | Theodore Dalrymple",
    href: "https://youtu.be/_ET7banSeN0",
    image: "https://i.ytimg.com/vi/_ET7banSeN0/maxresdefault.jpg",
    description: "Theodore Dalrymple is an English writer and retired prison doctor and psychiatrist. He worked in a number of Sub-Saharan African countries as well as in the east end of London. He is also a contributing editor to City Journal and frequent contributor to the Manhattan Institute's publication.",
    date: "2021-05-20",
    category: "Psychology",
    author: "Jordan Peterson",  
  },
  {
    title: "Huberman Lab Podcast - Dr. Karl Deisseroth: Understanding & Healing the Mind ",
    href: "https://youtu.be/w9MXqXBZy9U",
    image: "https://i.ytimg.com/vi/w9MXqXBZy9U/maxresdefault.jpg",
    description: "Dr. Karl Deisseroth is a psychiatrist and neuroscientist at Stanford University. He is known for his groundbreaking work in developing optogenetics, a method of using light to control neurons in the brain.",
    date: "2021-06-28",
    category: "Psychology",
    author: "Andrew Huberman",
  },
  {
    title: "Jordan Peterson - Evolution and the Challenges of Modern Life | Bret Weinstein and Heather Heying",
    href: "https://youtu.be/jKh0ni7HlNw",
    image: "https://i.ytimg.com/vi/jKh0ni7HlNw/maxresdefault.jpg",
    description: "Bret Weinstein and Heather Heying are former professors of Evolutionary Biology at Evergreen State College. Together, they host the DarkHorse Podcast.",
    date: "2021-10-05",
    category: "Biology",
    author: "Jordan Peterson",
  },
  {

    title: "Jordan Peterson - Questioning Sam Harris",
    href: "https://youtu.be/prt9D90BvFI",
    image: "https://i.ytimg.com/vi/prt9D90BvFI/maxresdefault.jpg",
    description: 'Sam Harris is a neuroscientist, philosopher, New York Times best-selling author, host of the Making Sense podcast, and creator of the "Waking up" app. Dr. Harris and I discuss the is/ought problem, dreams, attention, evidence, consciousness, logic, psychedelics, religion, Waking Up, and much more.'
    ,
    date: "2021-11-25",
    category: "Philosophy",
    author: "Jordan Peterson",
  },
  {
    title: "Lex Fridman - Karl Deisseroth: Depression, Schizophrenia, and Psychiatry" ,
    href: "https://youtu.be/OaeYUm06in0",
    image: "https://i.ytimg.com/vi/OaeYUm06in0/maxresdefault.jpg",
    description: "Karl Deisseroth is a professor of bioengineering, psychiatry, and behavioral sciences at Stanford University.",
    date: "2022-04-07",
    category: "Psychology",
    author: "Lex Fridman",
  },
  {
    title: "Lex Fridman - Demis Hassabis: DeepMind - AI, Superintelligence & the Future of Humanity",
    href: "https://youtu.be/Gfr50f6ZBvo",
    image: "https://i.ytimg.com/vi/Gfr50f6ZBvo/maxresdefault.jpg",
    description: "Demis Hassabis is the co-founder and CEO of DeepMind, responsible for the company’s overall strategy and mission to solve intelligence, and one of the world’s leading experts in artificial intelligence.",
    date: "2022-07-01",
    category: "AI",
    author: "Lex Fridman",
  },
  {
    title: "Lex Fridman - Andrej Karpathy: Tesla AI, Self-Driving, Optimus, Aliens, and AGI",
    

