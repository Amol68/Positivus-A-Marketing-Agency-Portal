import logo1 from '../logo/amazon.png'
import logo2 from '../logo/dribble.png'
import logo3 from '../logo/hubspot.png'
import logo4 from '../logo/netflix.png'
import logo5 from '../logo/notion.png'
import logo6 from '../logo/zoom.png'

const LogoCarousel = () => {
  return (
    <div className='pt-24 overflow-hidden'>
       <div className='flex space-x-8 justify-between items-center animate-marquee'  >
         <img src={logo1} alt="" className='h-12'/>
         <img src={logo2} alt="" className='h-12'/>
         <img src={logo3} alt="" className='h-12'/>
         <img src={logo4} alt="" className='h-12'/>
         <img src={logo5} alt="" className='h-12'/>
         <img src={logo6} alt="" className='h-12'/>
       
       </div>
        </div>
  )
}

export default LogoCarousel;
