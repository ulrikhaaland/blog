import { ReactElement } from 'react';
import SectionBlog from '../../components/Sections/Blog';
import { NextPageWithLayout } from '../_app';

const BlogPage: NextPageWithLayout = () => {
  return (
    <>
      <SectionBlog homePage={false} />
    </>
  );
};

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default BlogPage;
