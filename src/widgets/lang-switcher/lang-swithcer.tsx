"use client";

import DropdownComponent from "@/shared/components/dropdown/dropdown-component";
import { DropdownItem } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { Key } from "react";
import { locales } from "../../../configs/i18n";
import {
  usePathname,
  useRouter,
} from "../../shared/components/navigation/navigation";

const LangSwitcher = () => {
  const t = useTranslations("LangSwitcher");
  const router = useRouter();
  const path = usePathname();

  const handleLangChange = (locale: Key) => {
    router.push(path, { locale: locale.toString() });
  };

  return (
    <DropdownComponent title={t("title")} onAction={handleLangChange}>
      {locales.map((locale) => (
        <DropdownItem key={locale} className="uppercase-item">
          {locale}
        </DropdownItem>
      ))}
    </DropdownComponent>
  );
};

export default LangSwitcher;
