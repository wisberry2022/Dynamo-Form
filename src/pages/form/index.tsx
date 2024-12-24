import { FormList } from "@/2_pages/form";
import { PageLayout, PageWithLayout } from "@/6_shared";

const Page: PageWithLayout = () => {
  return <FormList />;
};

Page.getLayout = (page) => <PageLayout title="양식 관리">{page}</PageLayout>;

export default Page;
