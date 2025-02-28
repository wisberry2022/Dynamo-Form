import { SurveyListMain } from "@/2_pages/survey";
import { PageLayout, PageWithLayout } from "@/6_shared";

const Page: PageWithLayout = () => {
  return <SurveyListMain />;
};

Page.getLayout = (page) => (
  <PageLayout title="" navigate signOut>
    {page}
  </PageLayout>
);

export default Page;
