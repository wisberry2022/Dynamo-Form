import { Button, PageLayout, PageWithLayout } from "@/5_shared";

const Page: PageWithLayout = () => {
  return (
    <div style={{ width: "10%" }}>
      <Button onClick={() => {}}>primary</Button>
      <Button onClick={() => {}} variant="secondary">
        secondary
      </Button>
      <Button onClick={() => {}} variant="brighten">
        brighten
      </Button>
      <Button onClick={() => {}} variant="pink">
        pink
      </Button>
      <Button onClick={() => {}} variant="hazy">
        hazy
      </Button>
    </div>
  );
};

Page.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default Page;
