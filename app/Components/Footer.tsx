import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#3b155f] text-white px-4 sm:px-6 md:px-10 py-12 md:py-16">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start justify-center">
          <div className="flex justify-center sm:justify-start items-end gap-2">
            <div className="relative w-[70px] h-[45px] sm:w-[85px] sm:h-[55px]">
              <Image
                src="/images/nexzologo.png"
                alt="Nexzo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h4 className="text-xl sm:text-2xl font-bold">NEXZO</h4>
              <h4 className="font-thin -mt-1 text-sm sm:text-base">SOLUTIONS</h4>
            </div>
          </div>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-center sm:text-left font-medium leading-snug opacity-95 mt-3">
            Where Innovation Meets Automation
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-lg sm:text-xl mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/90">
            {[
              "Custom Software Development",
              "System Integration & Automation",
              "Digital Marketing & Growth",
              "Cloud Infrastructure",
              "API Development",
              "Legacy System Modernization",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-lg sm:text-xl mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-white/90">
            {[
              "About Us",
              "Case Studies",
              "Our Process",
              "Careers",
              "Solutions",
              "Contact",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white transition cursor-pointer underline underline-offset-4"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-semibold text-lg sm:text-xl mb-4">Connect</h4>
          
          <h4 className="font-medium text-sm sm:text-[15px] mb-4">Get in touch</h4>

          <p className="text-xs sm:text-[13px] mb-4 text-white/90 underline underline-offset-4 wrap-break-word">
            info@nexzoltd.com
          </p>
          <h4 className="font-medium text-sm sm:text-[15px] mb-4">Follow Us</h4>

          <div className="flex gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 border border-white/40 rounded-md flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#3b155f] transition">
              in
            </div>
            <div className="w-8 h-8 sm:w-9 sm:h-9 border border-white/40 rounded-md flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#3b155f] transition">
              ◎
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-10 md:mt-14 pt-6 border-t border-white/15 flex flex-col sm:flex-row justify-between items-center text-xs text-white/80 gap-3 sm:gap-4 px-4 sm:px-0">
        <span className="text-xs sm:text-[14px] text-center sm:text-left">© 2026 Nexzo Solutions. All rights reserved.</span>
        <span className="text-xs sm:text-[14px] hover:text-white cursor-pointer transition text-center sm:text-left">
          Privacy Policy • Terms of Service
        </span>
      </div>

    </footer>
  );
}
