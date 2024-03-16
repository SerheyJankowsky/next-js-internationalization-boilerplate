import { Dropdown } from "@nextui-org/react";
import { FC, Key, ReactNode } from "react";
import DropdownBody from "./_components/dropdown-body";
import DropdownButton from "./_components/dropdown-button";

type DropdownComponentProps = {
  title: string;
  children: ReactNode[];
  onAction?: (key: Key) => void;
};

const DropdownComponent: FC<DropdownComponentProps> = ({
  title,
  children,
  onAction,
}) => {
  return (
    <Dropdown>
      <DropdownButton title={title} />
      <DropdownBody onAction={onAction}>{children}</DropdownBody>
    </Dropdown>
  );
};

export default DropdownComponent;
