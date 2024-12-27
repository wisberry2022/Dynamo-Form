import { PageLayout, PageWithLayout } from "@/6_shared";

const Page: PageWithLayout = () => {
  return <div>hi</div>;
};

Page.getLayout = (page) => <PageLayout title="양식 관리">{page}</PageLayout>;

export default Page;
