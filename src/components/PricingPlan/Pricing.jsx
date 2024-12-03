import { Price } from './pricingJS'

const Pricing = () => {
  return (
    <div className='container py-9'>
        <div className='flex flex-col justify-center items-center'>
            <span>Pricing Table</span>
            <h1>Our Pricing Plan</h1>
            <p className='lg:w-[32rem] text-lg'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
        </div>
        <div className=' flex flex-wrap lg:flex-nowrap justify-center gap-3 items-center'>
            {Price.map((pricing)=>( 
                <div className='w-full sm:w-[18rem] sm:py-3 '  key={Pricing.objectId}>
                   <div className=' border p-4 rounded  '>
                   <span>{pricing.name}</span>
                    <h1>{pricing.amount}</h1>
                    <p>{pricing.discript}</p>
                    <hr />
                    <p>{pricing.user}</p>
                    <p>{pricing.component}</p>
                    <p>{pricing.lifeTime}</p>
                    <p>{pricing.update}</p>
                    <p>{pricing.uses}</p>
                    <p>{pricing.suport}</p>
                    <p>{pricing.button}</p>
                   </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Pricing