


    
import  { useState } from 'react';

const Faq = () => {
    const [faq, setFaq] = useState([
        {
            question: 'How long we deliver your first blog post?',
            answer: 'It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .',
            open: false
        },
        {
            question: 'How long we deliver your first blog post?',
            answer: 'It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .',
            open: false
        },
        {
            question: 'How long we deliver your first blog post?',
            answer: 'It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ..',
            open: false
        },
        {
            question: 'How long we deliver your first blog post?',
            answer: 'It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .',
            open: false
        },
        {
            question: 'How long we deliver your first blog post?',
            answer: 'It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .',
            open: false
        },
        {
            question: 'How long we deliver your first blog post?',
            answer: 'It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .',
            open: false
        }
    ]);

    const toggleFaq = (index) => {
        setFaq(faq.map((item, i) => {
            if (i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }

            return item;
        }));
    }

    return (
        <section className="  py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                <span className='text-2xl text-blue-500'>FAQ</span>
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Any Questions? Look Here</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                </div>

                <div className=" container flex  flex-wrap w-full gap-4 items-center justify-center  mx-auto mt-8 space-y-4  md:mt-16">
                    {faq.map((item, index) => (
                        <div key={index} className="transition-all duration-200 w-[37rem] bg-white border rounded border-gray-200 cursor-pointer hover:bg-gray-50">
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleFaq(index)}>
                            <svg className={`w-6 h-6 text-gray-400 ${item.open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                                
                                
                                <span className="flex text-lg font-semibold text-black"> {item.question} </span>

                                
                            </button>

                            <div className={`${item.open ? 'block' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6`}>
                                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                            </div>
                        </div>
                    ))}
                </div>
<div className=' flex flex-col lg:flex-row justify-between   text-white bg-blue-500 p-16 mt-60 '>
    <div className='  '>
        <span className='text-lg  '>Find Your Next Dream App</span>
        <h1 className='font-bold  lg:w-80'>Get started with
        our free trial</h1>
    </div>
    <div className='  py-5  '>
        <a href="#"><button className=' bg-white text-blue-500 w-36 p-2 rounded mr-3 '>Get Pro Version</button></a>
        <a href="#"><button className=' bg-green-500 text-white  w-36 p-2 rounded '>Get Pro Version</button></a>
    </div>
</div>
                
            </div>
        </section>
    );
}

export default Faq;

