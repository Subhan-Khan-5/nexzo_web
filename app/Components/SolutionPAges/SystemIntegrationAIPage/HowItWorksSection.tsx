interface Step {
  icon: string;
  description: string;
}

interface HowItWorksSectionProps {
  title: string;
  highlightedWord: string;
  steps: Step[];
}

// SVG Icon Components
const LightbulbIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const MagnifyingIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ChecklistIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

const MonitorIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>
);

const BugIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const CheckmarkIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function HowItWorksSection({
  title,
  highlightedWord,
  steps,
}: HowItWorksSectionProps) {
  const titleParts = title.split(highlightedWord);

  const iconMap: { [key: string]: React.ReactNode } = {
    lightbulb: <LightbulbIcon />,
    magnifying: <MagnifyingIcon />,
    checklist: <ChecklistIcon />,
    monitor: <MonitorIcon />,
    bug: <BugIcon />,
    checkmark: <CheckmarkIcon />,
  };

  return (
    <section className="relative py-12 bg-[radial-gradient(circle_at_center,white,#A8BEC6)] mt-[10vh] px-2 min-w-[380px] w-full mx-auto md:px-6">
      <div className="relative z-10 min-w-[350px] mx-auto py-12 md:py-16">
        {/* Title */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[500] text-gray-900">
            {titleParts[0]}
            <span className="text-[#4B0082]">{highlightedWord}</span>
            {titleParts[1]}
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 w-full mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col justify-start items-center text-center">
              {/* Icon Circle */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#4B0082] flex items-center justify-center mb-4 shadow-lg text-white">
                {iconMap[step.icon] || <span className="text-2xl">{step.icon}</span>}
              </div>
              
              {/* Step Label */}
              <div className="mb-2">
                <span className="text-sm md:text-base font-semibold text-gray-600">
                  Step {index + 1}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-gray-800 text-sm md:text-base lg:text-lg font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}















