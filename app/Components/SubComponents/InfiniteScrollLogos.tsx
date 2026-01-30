"use client";

import Image from "next/image";

interface Company {
  name: string;
  logo: string;
}

interface InfiniteScrollLogosProps {
  companies: Company[];
  animationDuration?: number; // in seconds
}

export default function InfiniteScrollLogos({
  companies,
  animationDuration = 30,
}: InfiniteScrollLogosProps) {
  // Duplicate for seamless loop (2 sets for perfect loop)
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="flex w-full overflow-hidden mask-gradient">
      <div
        className="flex gap-8 sm:gap-12 md:gap-16 work_animation"
        style={{ animationDuration: `${animationDuration}s` }}
      >
        {duplicatedCompanies.map((company, index) => (
          <div
            key={`first-${index}`}
            className="shrink-0 grow-0 flex items-center justify-center min-w-[120px] sm:min-w-[150px] md:min-w-[200px] lg:min-w-[250px] h-16 sm:h-20 md:h-24"
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={200}
              height={80}
              className="object-contain opacity-80 hover:opacity-100 transition-opacity max-h-full w-auto h-auto"
            />
          </div>
        ))}
      </div>
      <div
        className="flex gap-8 sm:gap-12 md:gap-16 work_animation"
        style={{ animationDuration: `${animationDuration}s` }}
      >
        {duplicatedCompanies.map((company, index) => (
          <div
            key={`second-${index}`}
            className="shrink-0 grow-0 flex items-center justify-center min-w-[120px] sm:min-w-[150px] md:min-w-[200px] lg:min-w-[250px] h-16 sm:h-20 md:h-24"
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={200}
              height={80}
              className="object-contain opacity-80 hover:opacity-100 transition-opacity max-h-full w-auto h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

