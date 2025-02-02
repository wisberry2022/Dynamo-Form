import { PageLayout, PageWithLayout } from "@/6_shared";

//
const Page: PageWithLayout = () => {
  return <div>응답자 정보 입력 화면</div>;
};

Page.getLayout = (page) => (
  <PageLayout title="설문조사 참여하기">{page}</PageLayout>
);

export default Page;
