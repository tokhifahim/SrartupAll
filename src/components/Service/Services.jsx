import { ServiceCard } from './Service'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
  return (
    
    <section className='py-16'>
        <div className='w-full flex flex-col py-16 items-center '>
                <div className='w-[18rem] lg:w-[36rem]  text-center  '>
                    <span className='text-2xl font-bold text-blue-500'>What we Serve</span>
                    <h2 className='font-bold'>Our Best Services</h2>
                    <p className=' text-xl text-gray-400'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                </div>
        </div>
        <div className="flex gap-2 flex-wrap lg:flex-nowrap w-full justify-center">

{ServiceCard.map((Service)=>(
    <div className=' items-center text-center w-[90%] md:w-[400px] border h-72 rounded-xl'  key={Service.ojecid}>
<span >
    <FontAwesomeIcon  className='h-9 py-5' icon={faArrowCircleDown} />
</span>
<h2 className='w-auto'>{Service.title}</h2>
<p className='w-auto py-3 text-gray-400'>{Service.descrit}</p>
    </div>
))}
    </div>
{/* makking world part */}
    
    </section>
  )
}

export default Services