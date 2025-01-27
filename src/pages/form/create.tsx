import { FormCreate } from "@/2_pages/form";
import { FormCreateProvider } from "@/5_entities/form/context/FormCreateProvider";
import { PageLayout, PageWithLayout } from "@/6_shared";

const Page: PageWithLayout = () => {
  return (
    <FormCreateProvider>
      <FormCreate />
    </FormCreateProvider>
  );
};

Page.getLayout = (page) => <PageLayout title="양식 생성">{page}</PageLayout>;

export default Page;
