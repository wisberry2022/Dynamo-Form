import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  PageLayout,
  PageWithLayout,
  PopupTrigger,
  Toast,
} from "@/6_shared";
import { FC, useState } from "react";

type TestPopupProps = {
  open?: boolean;
  onClose?: () => void;
};

const TestPopup: FC<TestPopupProps> = (props) => {
  const { open, onClose } = props;
  return (
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
  );
};

const Page: PageWithLayout = () => {
  return (
    <div>
      <PopupTrigger trigger={<Button>모달</Button>} popup={<TestPopup />} />
    </div>
  );
};

Page.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default Page;
