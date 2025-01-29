import { PageLayout, PageWithLayout } from "@/6_shared";

const Page: PageWithLayout = () => {
  return <div>hi</div>;
};

Page.getLayout = (page) => (
  <PageLayout title="설문조사 수정">{page}</PageLayout>
);

export default Page;
