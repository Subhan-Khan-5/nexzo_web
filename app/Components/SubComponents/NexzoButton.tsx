export default function NexzoButton(){
    return (
      <button className="relative group rounded-full bg-[#3b155f] 
      px-6 py-3 sm:px-8 sm:py-4
      text-sm sm:text-base font-semibold text-white
      shadow-[0_10px_30px_rgba(59,21,95,0.35)]
      hover:shadow-[0_15px_40px_rgba(59,21,95,0.45)]
      overflow-hidden
      transition-all duration-300 transform hover:scale-105">
  
      
      <span className="absolute left-0 bottom-[-100%] w-full h-full bg-[#8232cc] rounded-full 
          transition-all duration-400 ease-in-out group-hover:bottom-0 group-hover:rounded-none"></span>
  
      <span className="relative z-10">Get Your Free Auditdds</span>
  </button>
  
      
    )
}