import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ka", "uz", "ru"],

  // Used when no locale matches
  defaultLocale: "ka",
  localeDetection: false,
  localePrefix: "as-needed",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
