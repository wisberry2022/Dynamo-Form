import { SurveyReport } from "@/2_pages/report";
import { PageLayout, PageWithLayout, useGetQuery } from "@/6_shared";

const Page: PageWithLayout = () => {
  const surveyId = useGetQuery<number>("id");
  return <SurveyReport surveyId={surveyId} />;
};

Page.getLayout = (page) => (
  <PageLayout title="설문 조사 상세 현황" navigate signOut>
    {page}
  </PageLayout>
);

export default Page;
