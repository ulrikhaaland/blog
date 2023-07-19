import { ReactElement } from 'react';
import SectionBlog from '../components/Sections/Blog';
import { NextPageWithLayout } from './_app';
import SectionTools from '@/components/Sections/Tools';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      {/* <SectionTools homePage={true} /> */}
      <SectionBlog homePage={true} />
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default HomePage;
