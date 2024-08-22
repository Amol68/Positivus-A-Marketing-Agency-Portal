import testimonialsData from "../utils/testimonialsData"
import { BsChatQuote } from "react-icons/bs";

const Testimonials = () => {
  return (
    <section className="pt-24 pb-8 bg-white" id="testimonials">
     <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

     <div className='flex flex-column md:flex-row gap-4 mb-12'>
           <div className='flex-shrink-0 bg-primary text-black rounded-md '>
             <h2 className='text-2xl font-bold'>Testimonials</h2>
           </div>

           <div className='md:w-2/3'>
            <p className='text-secondary md:w-1/1'>
              Hear from Our Satisfied Clients:Read Our Testimonials to Learn 
              More about Our Digital Marketing Services
            </p>
           </div>
         </div>

      {/*testimonials slider*/}
      <div className="relative mb-12">
         <div>
           {
             testimonialsData.slice(0,3).map((testimonial,index)=>(
                <div key={index} className="w-full relative py-5 md:max-w-md px-2">
                   <div>
                   <BsChatQuote className="size-8"/>
                   </div>
                </div>
             ))
           }
         </div>
       </div>


     </div>

    </section>
  )
}

export default Testimonials
