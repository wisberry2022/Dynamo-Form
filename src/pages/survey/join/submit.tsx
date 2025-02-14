import { ColumnContainer, PageWithLayout } from "@/6_shared";

// 설문조사 응답 화면
const Page: PageWithLayout = () => {
  return <div>설문조사 응답화면</div>;
};

Page.getLayout = (page) => <ColumnContainer>{page}</ColumnContainer>;

export default Page;
