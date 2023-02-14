import { GetFooterData } from "@lib/queries";
import { isUrlInternal } from "@lib/helpers";
import { Fragment } from "react";
import Link from "next/link";
import { SITE_AUTHOR } from "config";

async function Footer() {
  const data = await GetFooterData();

  return (
    <footer className="max-w-container mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="border-slate-900/15 border-t py-10">
        <p className="text-center text-sm leading-6 text-slate-600">
          © {new Date().getUTCFullYear()} {SITE_AUTHOR}. All rights reserved.
        </p>
        <div className="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          {data.map(({ name, url }, index) => (
            <Fragment key={index}>
              {isUrlInternal(url) &&
              url !== "/rss.xml" &&
              url !== "/atom.xml" ? (
                <>
                  <Link href={url}>{name}</Link>
                  {index !== data.length - 1 && (
                    <hr className="h-4 w-px bg-neutral-300" />
                  )}
                </>
              ) : (
                <>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {name}
                  </a>
                  {index !== data.length - 1 && (
                    <hr className="h-4 w-px bg-neutral-300" />
                  )}
                </>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
