import { BlankLayout, FullLayout, PageWithLayout } from "@/6_shared";

const Page: PageWithLayout = () => {
  return <div>hi</div>;
};

Page.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;

export default Page;
