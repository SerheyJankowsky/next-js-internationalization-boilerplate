import createMiddleware from "next-intl/middleware";
import { locales } from "./../configs/i18n";
import { localePrefix } from "./shared/components/navigation/navigation";

export default createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|ua)/:path*"],
};
