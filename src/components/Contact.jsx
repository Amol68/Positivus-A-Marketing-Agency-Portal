import contactImg from "../assets/contact.png"

const Contact = () => {
  return (
    <section className="pt-24 pb-12 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-shrink-0 bg-primary text-black py-2 px-10">
              <h2 className="text-2xl font-bold">Contact</h2>
            </div>

            
            <div className='md:w-2/3'>
            <p className='text-secondary md:w-2/3'>
               Connect with Us:<br/>
                Discuss Your Digital Marketing Needs
            </p>
           </div>

          </div>
        </div>

        {/*contact form*/}
          <div className="flex flex-col md:flex-row justify-between bg-tartiary rounded-lg  md:p-8 p-4">
              <div className="w-full md:w-1/2 ">
                 <form className="space-y-4 p-4">
                   
                    {/*radio input*/}
                     <div className="flex flex-col md:flex-row md:space-x-4 items-center justify-start">
                        <label className="flex items-center">
                            <input type="radio" name="contact-type" className="mr-2" value="hi"/>
                            Say Hi
                        </label>

                        <label className="flex items-center mt-2 md:mt-0">
                            <input type="radio" name="contact-type" className="mr-2" value="quote"/>
                             Get a Quote
                        </label>
                     </div>

                     {/*Name Input*/}
                     <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                         <input type="text" name="name" id="name" 
                          className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm 
                          focus:outline-none focus:ring focus:ring-primary" placeholder="Jane" />
                     </div>

                     {/*Email Input*/}
                     <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                         <input type="email" name="name" id="name" 
                          className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm 
                          focus:outline-none focus:ring focus:ring-primary" placeholder="jane@gmail.com" />
                     </div>

                     {/*Email Input*/}
                     <div>
                     <label className="block text-sm font-medium text-gray-700">Message</label>
                       
                       <textarea rows="6" name="message " className="mt-2 py-8 px-4 block w-full rounded-md shadow-sm 
                          focus:outline-none focus:ring focus:ring-primary" placeholder="Enter Message Here"></textarea>

                         

            
                     </div>
                     <button type="submit"className=' inline-block mt-4 px-6 py-3 bg-black text-white font-semibold rounded-md transition-all duration-300 hover:bg-primary hover:text-black'>Submit</button>
              
                 </form>
              </div>
              
              {/*image*/}
              <div className="relative md:flex justify-end items-center md:w-1/2 md:-m-8 overflow-hidden">
               <img src={contactImg} alt="" className="md:absolute md:block sm:hidden top-0 bottom-0 -right:8"/>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Contact;
