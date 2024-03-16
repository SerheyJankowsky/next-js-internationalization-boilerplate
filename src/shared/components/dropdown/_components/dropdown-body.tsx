"use client";

import { DropdownMenu } from "@nextui-org/react";
import { FC, Key } from "react";

type DropdownBodyProps = {
  children: any;
  onAction?: (key: Key) => void;
};

const DropdownBody: FC<DropdownBodyProps> = ({ children, onAction }) => {
  return (
    <DropdownMenu aria-label="Static Actions" onAction={onAction}>
      {children}
    </DropdownMenu>
  );
};

export default DropdownBody;
