import { Button, PageLayout, PageWithLayout, Toast } from "@/5_shared";

const Page: PageWithLayout = () => {
  return (
    <div style={{ width: "10%" }}>
      <Toast type="success" message="SUCCESS TOAST" />
      <Toast type="warning" message="WARNING TOAST" />
      <Toast type="error" message="ERROR TOAST" />
    </div>
  );
};

Page.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default Page;
