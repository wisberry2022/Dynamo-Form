import { FormListMain } from "@/2_pages/form";
import { PageLayout, PageWithLayout } from "@/6_shared";

const Page: PageWithLayout = () => {
  return <FormListMain />;
};

Page.getLayout = (page) => (
  <PageLayout title="" navigate signOut>
    {page}
  </PageLayout>
);

export default Page;
