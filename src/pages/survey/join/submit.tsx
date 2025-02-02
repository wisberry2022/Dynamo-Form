import { PageLayout, PageWithLayout } from "@/6_shared";

// 설문조사 응답 화면
const Page: PageWithLayout = () => {
  return <div>hi</div>;
};

Page.getLayout = (page) => (
  <PageLayout title="설문조사 참여하기">{page}</PageLayout>
);

export default Page;
