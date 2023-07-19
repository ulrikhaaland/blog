import { ReactElement, useRef, useState } from 'react';
import SectionBooks from '../../components/Sections/Books';
import { NextPageWithLayout } from '../_app';
import SectionEssays from '@/components/Sections/Essays';
import { Box } from '@mui/material';
import SectionPodcasts from '@/components/Sections/Podcasts';
import SectionInfluencers from '@/components/Sections/Influencers';
import SectionTraining from '@/components/Sections/Training';

const KnowledgePage: NextPageWithLayout = () => {
  const booksRef = useRef(null);
  const essaysRef = useRef(null);
  const podcastsRef = useRef(null);
  const influencersRef = useRef(null);

  // This function scrolls to a given ref
  const scrollToRef = (ref: any) => {
    if (ref && ref.current) {
      window.scrollTo(0, ref.current.offsetTop);
    }
  };

  return (
    <Box className='pb-32'>
      <Box className=' w-full mx-auto max-w-7xl lg:pt-12 px-6 lg:px-8'>
        <h2 className='lg:text-3xl text-2xl font-bold tracking-tight text-gray-900 sm:text-1xl'>
          Kunnskap
        </h2>
        <Box className='justify-between w-56 pt-1'>
          {/* <p
            className='text-lg cursor-pointer font-semibold leading-6 text-gray-600 hover:text-black'
            onClick={() => scrollToRef(booksRef)}
          >
            Trening
          </p> */}
          <p
            className='text-lg cursor-pointer font-semibold leading-6 text-gray-600 hover:text-black'
            onClick={() => scrollToRef(booksRef)}
          >
            Bøker
          </p>
          <p
            className='text-lg cursor-pointer font-semibold leading-6 text-gray-600 hover:text-black'
            onClick={() => scrollToRef(essaysRef)}
          >
            Essays
          </p>
          <p
            className='text-lg cursor-pointer font-semibold leading-6 text-gray-600 hover:text-black'
            onClick={() => scrollToRef(podcastsRef)}
          >
            Podcasts
          </p>
          <p
            className='text-lg cursor-pointer font-semibold leading-6 text-gray-600 hover:text-black'
            onClick={() => scrollToRef(influencersRef)}
          >
            Folk å følge
          </p>
        </Box>
      </Box>
      {/* <div ref={booksRef}>
        <SectionTraining />
      </div> */}
      <div ref={booksRef}>
        <SectionBooks />
      </div>
      <div ref={essaysRef}>
        <SectionEssays />
      </div>
      <div ref={podcastsRef}>
        <SectionPodcasts />
      </div>
      <div ref={influencersRef}>
        <SectionInfluencers />
      </div>
    </Box>
  );
};

KnowledgePage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default KnowledgePage;
