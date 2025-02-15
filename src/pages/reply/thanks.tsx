import { Submit, Thanks } from "@/2_pages/reply";
import { ColumnContainer, PageWithLayout } from "@/6_shared";

// 설문조사 완료료 화면
const Page: PageWithLayout = () => {
  return <Thanks />;
};

Page.getLayout = (page) => <ColumnContainer>{page}</ColumnContainer>;

export default Page;
