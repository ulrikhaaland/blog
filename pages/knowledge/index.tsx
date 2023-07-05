import { ReactElement, useState } from 'react';
import SectionBooks from '../../components/Sections/Books';
import { NextPageWithLayout } from '../_app';
import SectionEssays from '@/components/Sections/Essays';
import { Box } from '@mui/material';
import SectionPodcasts from '@/components/Sections/Podcasts';

enum FocusType {
  BOOKS = 'BOOKS',
  ESSAYS = 'ESSAYS',
  PODCASTS = 'PODCASTS',
  FOLLOW = 'FOLLOW',
}

const KnowledgePage: NextPageWithLayout = () => {
  const [focus, setFocus] = useState<FocusType | undefined>(undefined);

  return (
    <>
      <Box className=' w-full mx-auto max-w-7xl lg:pt-12 px-6 lg:px-8'>
        <h2 className='lg:text-3xl text-2xl font-bold tracking-tight text-gray-900 sm:text-1xl'>
          Kunnskap
        </h2>
        <Box className='justify-between w-56 pt-1'>
          <p className='text-lg cursor-pointer font-semibold leading-6 text-gray-600 hover:text-black'>
            Bøker
          </p>
          <p className='text-lg cursor-pointer font-semibold leading-6 text-gray-600 hover:text-black'>
            Essays
          </p>
          <p className='text-lg cursor-pointer font-semibold leading-6 text-gray-600 hover:text-black'>
            Podcasts
          </p>
          <p className='text-lg cursor-pointer font-semibold leading-6 text-gray-600 hover:text-black'>
            Folk å følge
          </p>
        </Box>
      </Box>
      <SectionBooks />
      <SectionEssays />
      <SectionPodcasts />
    </>
  );
};

KnowledgePage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default KnowledgePage;
