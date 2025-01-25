import {
  Button,
  Checkbox,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  LabelTextiField,
  Radio,
  RadioGroup,
  TextField,
} from "@/6_shared";
import { FC } from "react";
import styles from "./styles/multiple-question.module.css";
import cstyles from "./styles/common-popup.module.css";
import { FaPen, FaRegSave, FaRegTrashAlt } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";

type MultipleQuestionPopupProps = {
  open?: boolean;
  onClose?: () => void;
};

export const MultipleQuestionPopup: FC<MultipleQuestionPopupProps> = (
  props
) => {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogHeader title="선택형 - N지 선다형" onClose={onClose} />
      <DialogBody>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={cstyles.title}>
              <h4>선택지를 추가할 수 있습니다.</h4>
              <p>선택지는 최소 2개부터, 최대 30개까지 추가할 수 있습니다.</p>
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
          <div className={styles.right}>
            <div className={styles.respType}>
              <strong>응답 유형</strong>
              <RadioGroup value="1" onChange={() => {}}>
                <Radio value="1" label="단일 응답" />
                <Radio value="2" label="복수 응답" />
              </RadioGroup>
            </div>
            <div className={styles.respLimit}>
              <strong>응답 가능 개수</strong>
              <TextField
                className={styles.respEdit}
                placeholder="숫자를 입력하세요"
              />
            </div>
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <div>
          <Button variant="primary">취소</Button>
          <Button variant="brighten">저장</Button>
        </div>
      </DialogFooter>
    </Dialog>
  );
};
