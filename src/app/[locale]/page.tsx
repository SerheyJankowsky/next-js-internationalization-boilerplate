import { Link } from "@/shared/components/navigation/navigation";
import LangSwitcher from "@/widgets/lang-switcher/lang-swithcer";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      <p>{t("title")}</p>
      <div className="flex flex-col flex-wrap gap-4 py-4">
        <Link href="/about">About</Link>
      </div>
      <div>
        <LangSwitcher />
      </div>
    </>
  );
}
