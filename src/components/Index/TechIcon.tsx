import { urlFor } from "@lib/Queries";
import type { TechItemSchema } from "@lib/Types";

const TechIcon = ({
  name,
  description,
  href,
  image,
  background,
}: TechItemSchema) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      class="ease-[spring(1 100 10 10)] rounded-lg border border-neutral-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-dark-500 dark:bg-dark-600"
    >
      <div class="flex flex-row gap-4">
        <div class="relative overflow-hidden p-2">
          <div
            style={{ "background-color": background }}
            class="absolute inset-0 h-[52px] w-[52px] rounded-md opacity-20"
          />
          <img
            src={urlFor(image).url()}
            alt={`${name} logo`}
            width={36}
            height={36}
            class="h-9 w-9 rounded-md"
          />
        </div>
        <div class="flex flex-col">
          <p class="font-bold">{name}</p>
          <p class="text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default TechIcon;
