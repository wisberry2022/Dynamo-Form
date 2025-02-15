import { WriteInfo } from "@/2_pages/reply";
import { ColumnContainer, PageWithLayout } from "@/6_shared";

const Page: PageWithLayout = () => {
  return <WriteInfo />;
};

Page.getLayout = (page) => <ColumnContainer>{page}</ColumnContainer>;

export default Page;
