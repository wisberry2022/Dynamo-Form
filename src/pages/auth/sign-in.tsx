import { SignIn } from "@/2_pages/auth";
import { BlankLayout, PageWithLayout } from "@/6_shared";

const Page: PageWithLayout = () => {
  return <SignIn />;
};

Page.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;

export default Page;
