import { Button, DropdownTrigger } from "@nextui-org/react";
import { FC } from "react";

type DropdownButtonProps = {
  title: string;
};

const DropdownButton: FC<DropdownButtonProps> = ({ title }) => {
  return (
    <DropdownTrigger>
      <Button variant="bordered">{title}</Button>
    </DropdownTrigger>
  );
};

export default DropdownButton;
