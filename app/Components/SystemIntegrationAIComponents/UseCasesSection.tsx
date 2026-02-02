export default function UseCasesSection() {
  const useCases = [
    {
      title: "E-Commerce & Inventory",
      description: "Connect your online store, inventory management, and fulfillment systems. AI predicts demand, automates reordering, and syncs stock levels across all channels in real-time.",
      scenario: "Your Shopify store, warehouse system, and accounting software all stay in sync automatically."
    },
    {
      title: "CRM & Marketing Automation",
      description: "Unify customer data from sales, marketing, and support. AI segments audiences, personalizes campaigns, and routes leads based on behavior patterns.",
      scenario: "A lead from your website automatically gets scored, assigned, and receives personalized follow-up—all without manual entry."
    },
    {
      title: "Financial Operations",
      description: "Integrate accounting, invoicing, payment processing, and reporting. AI categorizes transactions, flags anomalies, and generates financial insights.",
      scenario: "Every invoice, payment, and expense flows automatically into your books with AI-powered categorization and reconciliation."
    },
    {
      title: "HR & Operations",
      description: "Connect HRIS, payroll, time tracking, and project management. Automate onboarding, time-off approvals, and resource allocation based on workload.",
      scenario: "New hires get accounts created across all systems, and their schedules sync automatically with project timelines."
    }
  ];

  return (
    <section className="relative w-full bg-white py-20 md:py-32 overflow-hidden">
      <div className="mx-[7.5vw]">
        {/* Main Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            Real-World Applications
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            See how integration and AI solve actual business problems
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-black p-8 md:p-10 hover:shadow-2xl transition-all duration-300"
            >
              {/* Use Case Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#3b155f] mb-4">
                {useCase.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-black mb-6 leading-relaxed">
                {useCase.description}
              </p>

              {/* Scenario Box */}
              <div className="bg-[#f8f4ff] border-l-4 border-[#4B0082] p-4 rounded-r-lg">
                <p className="text-sm md:text-base text-gray-700 italic">
                  <span className="font-semibold text-[#4B0082]">Example: </span>
                  {useCase.scenario}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}











