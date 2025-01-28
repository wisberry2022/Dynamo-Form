import { SurveyCreate } from "@/2_pages/survey";
import { PageLayout, PageWithLayout } from "@/6_shared";

const Page: PageWithLayout = () => {
  return <SurveyCreate />;
};

Page.getLayout = (page) => (
  <PageLayout title="설문조사 생성">{page}</PageLayout>
);

export default Page;
