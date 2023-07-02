import { ReactElement } from 'react';
import SectionKnowledge from '../../components/Sections/Knowledge';
import { NextPageWithLayout } from '../_app';

const KnowledgePage: NextPageWithLayout = () => {
  return (
    <>
      <SectionKnowledge homePage={false} />
    </>
  );
};

KnowledgePage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default KnowledgePage;
