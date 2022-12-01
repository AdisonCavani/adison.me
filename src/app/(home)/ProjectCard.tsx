import { isUrlInternal } from "@lib/helpers";
import { mdxToHtml } from "@lib/markdown";
import { urlFor } from "@lib/sanity";
import type { ProjectSchema } from "@lib/types";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";

interface Props extends ProjectSchema {
  priority?: boolean;
}

async function ProjectCard({
  color,
  github,
  image,
  name,
  technology,
  url,
  priority,
}: Props) {
  // const mdxSource = await mdxToHtml(description);

  return (
    <div className="flex flex-col ease-[spring(1 100 10 10)] overflow-hidden rounded-lg border bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="w-full cursor-pointer">
        {isUrlInternal(url) ? (
          <Link href={url}>
            <Image
              width={480}
              height={270}
              src={urlFor(image).url()}
              alt="Project image"
              className="w-full"
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 25vw"
              loading={priority ? "eager" : "lazy"}
            />
          </Link>
        ) : (
          <a href={url} target="_blank" rel="noreferrer">
            <Image
              width={480}
              height={270}
              src={urlFor(image).url()}
              alt="Project image"
              className="w-full"
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 25vw"
              loading={priority ? "eager" : "lazy"}
            />
          </a>
        )}
      </div>
      <div className="px-6 pb-5 flex flex-col flex-grow">
        <div className="mt-4 mb-3 flex flex-row justify-between">
          <p className="font-medium">{name}</p>
          <div>
            <span
              style={{ color: color, backgroundColor: `${color}33` }}
              className="rounded-xl px-2.5 py-0.5 text-[11px] font-bold uppercase"
            >
              {technology}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="text-sm text-neutral-600">
            {/* <MDXRemote {...mdxSource} /> */}
          </div>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="w-full mt-4 rounded-md bg-blue-100 text-blue-700 py-2 text-sm font-semibold"
          >
            <div className="flex justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
              Github
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
