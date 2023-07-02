import { ReactElement } from 'react';
import SectionTools from '../../components/Sections/Tools';
import { NextPageWithLayout } from '../_app';

const ToolsPage: NextPageWithLayout = () => {
  return (
    <>
      <SectionTools homePage={false} />
    </>
  );
};

ToolsPage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default ToolsPage;
