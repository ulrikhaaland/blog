import { ReactElement } from 'react';
import SectionBooks from '../../components/Sections/Books';
import { NextPageWithLayout } from '../_app';

const KnowledgePage: NextPageWithLayout = () => {
  return (
    <>
      <SectionBooks homePage={false} />
    </>
  );
};

KnowledgePage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default KnowledgePage;
