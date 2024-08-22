import CtaImage from "../assets/cta-image.png"
const CAT = () => {
  return (
    <section className='relative py-8'>
       <div className='max-w-7xl mx-auto bg-[#F3F3F3] rounded-md sm:pt-24 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8'>

        {/* left side */}
         <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className='text-3xl font-bold text-secondary mb-4'>Navigating the digital landscape for success</h1>
          <p className='text-gray-600 mb-6'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media maarketing, and content creation.</p>
          <button className='inline-block px-6 py-3 bg-black text-white font-semibold rounded-md transition-all duration-300 hover:bg-primary'>Book a consultation</button>
  
         </div>

        {/*right side */}
        <div className="md:w-1/2 flex justify-center items-center relative">
           <img src={CtaImage} className="md:absolute md:-top-52 md:bottom-0" style={{transform:`scale(1.05)`}}/>
       </div>
       </div>
    </section>
  )
}

export default CAT
