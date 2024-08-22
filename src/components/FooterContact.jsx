
const FooterContact = () => {
  return (
    <div>
        <>
         <div className="flex flex-col md:flex-row py-8 lg:px-8 sm:px-6 gap-8">
             <div className="flex-1 space-y-4">
                <button className="bg-primary text-black px-6 pyy-2 rounded-md"> Contact Us</button>
                
                <div className="text-white space-x-2">
                    <p><strong>Email:</strong>contact@positivus.com </p>
                    <p><strong>Phone:</strong>+91 923 896 4643 </p>
                
                </div>

             </div>

             <div className="flex-1 bg-[#292A32] justify-center items-center p-8 rounded-md">
               <form className="flex flex-col justify-center items-center h-20 md:flex-row gap-4">
                  <input type="email" placeholder="abc@gmail.com" className="flex-1 px-4 py-2 border
                   border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"/>
                   <button className="bg-primary text-black px-4 py-2 rounded-md"> Contact Us</button>
                
               </form>
             </div>

    
         </div>         
        </>
    </div>
  )
}

export default FooterContact
