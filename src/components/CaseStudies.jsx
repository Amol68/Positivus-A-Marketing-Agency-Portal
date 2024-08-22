import caseStudies from "../utils/caseStudies"

const CaseStudies = () => {
  return (
    <section className='pt-24 pb-16 bg-white' id='use-cases'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      {/* headline and description*/}
       <div className='flex flec-col md:flex-row gap-4 mb-12'>
         <div className='flex-shrink-0 bg-primary text-black py-8 px-16'>
           <h2 className='text-2xl font-bold'>Case Studies</h2>
         </div>

         <div className='md:w-1/2'>
          <p className='text-secondary md:w-2/3'>
           Explore Real-Life Examples of Our Proven Digital Marketing
           Success through Our Case studies
          </p>
         </div>
       </div>

       
        {/*caseStudy cards*/}
        <div className="bg-black text-white p-8 rounded-md">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-col-3 gap-3">
             {
                caseStudies.map((study,index)=>(
                    <div key={index} className="p-4 border border-grey-700 rounded-md">
                         <h3 className="text-xl fonts-semibols mb-2">{study.title}</h3>
                         <p className="mb-4">{study.description}</p>
            
                    </div>
                ))
             }
          </div>
        </div>
    </div>
  </section>
  )
}

export default CaseStudies
