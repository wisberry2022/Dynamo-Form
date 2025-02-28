import { SurveyDetail } from "@/2_pages/survey/ui/detail/SurveyDetail";
import { PageLayout, PageWithLayout, useGetQuery } from "@/6_shared";

const Page: PageWithLayout = () => {
  const surveyId = useGetQuery<number>("id");
  return <SurveyDetail surveyId={surveyId} />;
};

Page.getLayout = (page) => (
  <PageLayout title="설문조사 수정" navigate signOut>
    {page}
  </PageLayout>
);

export default Page;
