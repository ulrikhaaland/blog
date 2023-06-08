import { StaticImageData } from 'next/image';
import forklaringImage from '../assets/posts/forklaring.png';
import overtaleImage from '../assets/posts/overtale.png';

export interface Tool {
  title: string;
  href: string;
  image: StaticImageData | string;
  description: string;
}

export const ToolExplanation: Tool = {
  title: 'Evaluering Av Forklaringer',
  href: '/verktoy/forklaring',
  image: forklaringImage,
  description: 'Finn ut om en forklaring er god eller dårlig.\n\n',
};

export const ToolPersuasion: Tool = {
  title: 'Få hjelp med å overtale noen',
  href: '/verktoy/overtale',
  image: overtaleImage,
  description: 'Et verktøy som gir deg tips om hvordan du kan overtale noen.',
};

export const toolList = [ToolExplanation, ToolPersuasion];
