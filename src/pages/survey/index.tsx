import { SurveyListMain } from "@/2_pages/survey";
import { PageLayout, PageWithLayout } from "@/6_shared";

const Page: PageWithLayout = () => {
  return <SurveyListMain />;
};

Page.getLayout = (page) => (
  <PageLayout title="설문조사 목록">{page}</PageLayout>
);

export default Page;
