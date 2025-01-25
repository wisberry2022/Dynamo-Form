import {
  Button,
  Checkbox,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  TextField,
} from "@/6_shared";
import styles from "./styles/dropdown-question.module.css";
import cstyles from "./styles/common-popup.module.css";
import { FC } from "react";
import { FaPen, FaRegSave, FaRegTrashAlt } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";

type DropdownQuestoinPopupProps = {
  open?: boolean;
  onClose?: () => void;
};

export const DropdownQuestionPopup: FC<DropdownQuestoinPopupProps> = (
  props
) => {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} size="small">
      <DialogHeader title="선택형 - 드롭다운형" onClose={onClose} />
      <DialogBody>
        <div className={styles.content}>
          <div className={cstyles.title}>
            <h4>드롭다운 리스트를 추가할 수 있습니다.</h4>
            <p>
              리스트는 최소 2개부터, 최대 15개까지 추가할 수 있습니다. <br />
              드롭다운은 단수응답만 지원합니다.
            </p>
          </div>
          <div className={cstyles.list}>
            <div className={cstyles.dataArea}>
              <ul>
                <li>
                  <Checkbox value="1" onChecked={() => {}} label="테스트1" />
                  <FaPen />
                </li>
                <li>
                  <Checkbox value="1" onChecked={() => {}} label="테스트1" />
                  <FaPen />
                </li>
                <li>
                  <Checkbox value="1" onChecked={() => {}} label="테스트1" />
                  <FaPen />
                </li>
                <li>
                  <Checkbox value="1" onChecked={() => {}} label="테스트1" />
                  <FaPen />
                </li>
                <li>
                  <Checkbox value="1" onChecked={() => {}} label="테스트1" />
                  <FaPen />
                </li>
                <li>
                  <Checkbox value="1" onChecked={() => {}} label="테스트1" />
                  <FaPen />
                </li>
                <li>
                  <Checkbox value="1" onChecked={() => {}} label="테스트1" />
                  <div className={cstyles.listRight}>
                    <TextField
                      className={cstyles.edit}
                      placeholder="응답을 입력하세요"
                    />
                    <div className={cstyles.iconBox}>
                      <FaRegSave />
                      <FaRegTrashAlt />
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className={cstyles.controller}>
              <div className={cstyles.row}>
                <MdAddCircleOutline />
                <span>응답 추가하기</span>
              </div>
              <div className={`${cstyles.row} ${cstyles.delete}`}>
                <FaRegTrashAlt />
                <span>응답 삭제하기</span>
              </div>
            </div>
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <div className={cstyles.btnBox}>
          <Button variant="primary">취소</Button>
          <Button variant="brighten">저장</Button>
        </div>
      </DialogFooter>
    </Dialog>
  );
};
