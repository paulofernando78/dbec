import type {
  FC,
  ReactNode,
} from "react";

import styles from "./Dialogue.module.css";

type ChildrenProps = {
  children: ReactNode;
};

type DialogueComponent = FC<ChildrenProps> & {
  Line: FC<ChildrenProps>;
  Speaker: FC<ChildrenProps>;
};

export const Dialogue: DialogueComponent = ({
  children,
}) => {
  return (
    <div className="line-break">
      {children}
    </div>
  );
};

Dialogue.Speaker = function DialogueSpeaker({
  children,
}) {
  return <strong>{children}: </strong>;
};

Dialogue.Line = function DialogueLine({
  children,
}) {
  return (
    <p className={styles.lines}>
      {children}
    </p>
  );
};


