import { Submit } from "@/2_pages/join";
import { ColumnContainer, PageWithLayout } from "@/6_shared";

// 설문조사 응답 화면
const Page: PageWithLayout = () => {
  return <Submit />;
};

Page.getLayout = (page) => <ColumnContainer>{page}</ColumnContainer>;

export default Page;
