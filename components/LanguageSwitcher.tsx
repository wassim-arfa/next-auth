import { useTranslation } from "next-i18next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

function LanguageSwitcher() {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <Link
        href={router.pathname}
        locale={router.locale === "en" ? "ar" : "en"}
      >
        <button className="btn btn-secondary">{t("change-locale")}</button>
      </Link>
    </>
  );
}

export default LanguageSwitcher;
