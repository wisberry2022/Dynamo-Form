import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  PageLayout,
  PageWithLayout,
  Toast,
} from "@/6_shared";
import { useState } from "react";

const Page: PageWithLayout = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={onOpen}>모달</Button>
      <Dialog open={open} size="small" onClose={onClose}>
        <DialogHeader title="헤더 제목" />
        <DialogBody>
          <div>hi</div>
        </DialogBody>
        <DialogFooter align="right">
          <div
            style={{
              display: "flex",
              gap: ".5rem",
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={() => {}}>확인</Button>
            <Button onClick={() => {}} variant="brighten">
              취소
            </Button>
          </div>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

Page.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default Page;
