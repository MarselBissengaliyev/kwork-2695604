import { getMessages } from "next-intl/server";

import "swiper/css";
import "swiper/css/pagination";
import "react-accessible-accordion/dist/fancy-example.css";

import "@/app/styles/bootstrap.css";
import "@/app/styles/flaticon.css";
import "@/app/styles/remixicon.css";
import "@/app/styles/dark-mode.css";
import "@/app/styles/style.css";
import "@/app/styles/responsive.css";

import { getCurrentUser } from "@/actions/users";
import { getRegionConfiguration } from "@/actions/region-configurations";

import TosterProvider from "@/providers/TosterProvider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMakes } from "@/actions/makes";

export const generateMetadata = async ({ params }) => {
  const { country } = params?.country;

  let metadata = {
    title: "",
    description: ""
  }

  const config = await getRegionConfiguration({ country }).catch(() => null);

  if (config) {
    metadata.title = config.seo_title;
    metadata.description = config.seo_description;
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
};

const RootLayout = async ({ params, children }) => {
  const { country } = params || {};

  const messages = await getMessages();

  const makes = await getMakes(true);
  console.log("makes=", makes)

  const regionConfiguration = await getRegionConfiguration({
    country,
  }).catch(() => null);
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          {regionConfiguration && (
            <div className="tw-fixed tw-z-50 tw-bottom-0 tw-inset-x-0 tw-flex tw-justify-center tw-items-center tw-w-full tw-h-[20px] tw-bg-gray-600 tw-text-white tw-text-xs tw-font-medium">
              <span>
                {JSON.stringify({
                  region: regionConfiguration?.country_code,
                  locale: regionConfiguration?.locale,
                })}
              </span>
            </div>
          )}
          <TosterProvider />
          <Navbar domain={regionConfiguration?.domain} currentUser={currentUser} makes={makes.data} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
