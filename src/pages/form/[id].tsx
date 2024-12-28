import { FormDetail } from "@/2_pages/form";
import { PageLayout, PageWithLayout, useGetQuery } from "@/6_shared";

const Page: PageWithLayout = () => {
  const id = useGetQuery<number>("id");
  return <FormDetail formId={id} />;
};

Page.getLayout = (page) => <PageLayout title="양식 관리">{page}</PageLayout>;

export default Page;
