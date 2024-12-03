import img1 from './TeamImg/Team-01 (1).jpg';
import img2 from './TeamImg/Team-02 (2).jpg';
import img3 from './TeamImg/Team-03 (2).jpg';
import img4 from './TeamImg/Team-04 (2).jpg';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Team = () => {
    const TeamMembers = [
        {
          ObjectId: 1,
          image: img1,
          Name: "Melissa Tatcher",
          Rol: "MARKETING OPERATIONS",
          social: ["facebook", "twitter", "instagram"],
        },
        {
          ObjectId: 2,
          image: img2,
          Name: "Stuard Ferrel",
          Rol: "DIGITAL MARKETER",
          social: ["facebook", "twitter", "instagram"],
        },
        {
          ObjectId: 3,
          image: img3,
          Name: "Eva Hudson",
          Rol: "UI/UX DESIGNER",
          social: ["facebook", "twitter", "instagram"],
        },
        {
          ObjectId: 4,
          image: img4,
          Name: "Martin Ethariam",
          Rol: "GRAPHIC DESIGNER",
          social: ["facebook", "twitter", "instagram"],
        },
        // Add more team members if needed
    ];

  return (
    <div className='bg-gray-300 w-full flex flex-col items-center py-16 justify-center'>
        <div className='flex flex-col justify-center items-center mb-12'>
            <span className='text-2xl text-blue-500'>Our Team</span>
            <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl mt-4'>Our Team Members</h1>
            <p className='  sm:w-[20rem] md:w-[25rem] lg:w-[29rem] text-center text-gray-600 mt-4'>
                There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
            </p>
        </div>

        {/* Flexbox container for team members */}
        <div className='  lg:w-[65rem]  p-5   flex flex-wrap   rounded  bg-white justify-center items-center gap-10 '>
            {TeamMembers.map((teamMember) => (
                <div 
                    className='flex flex-col  items-center rounded-lg  py-4  w-full sm:w-[300px] md:w-[16rem] lg:w-[12rem]'
                    key={teamMember.ObjectId}
                >
                    <img className='rounded w-35 h-45 object-cover mb-4' src={teamMember.image} alt={teamMember.Name} />
                    <h5 className='text-xl font-semibold text-gray-800 mb-2'>{teamMember.Name}</h5>
                    <p className='text-sm text-gray-500 mb-4'>{teamMember.Rol}</p>
                    
                    <div className='flex gap-3'>
                        {teamMember.social.includes("facebook") && (
                            <a className='text-gray-500 hover:text-blue-500' href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={20} />
                            </a>
                        )}
                        {teamMember.social.includes("twitter") && (
                            <a className='text-gray-500 hover:text-blue-500' href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={20} />
                            </a>
                        )}
                        {teamMember.social.includes("instagram") && (
                            <a className='text-gray-500 hover:text-pink-500' href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={20} />
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Team;




// import img1 from './TeamImg/Team-01 (1).jpg';
// import img2 from './TeamImg/Team-02 (2).jpg';
// import img3 from './TeamImg/Team-03 (2).jpg';
// import img4 from './TeamImg/Team-04 (2).jpg';
// import { FaFacebook } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";

// const Team = () => {
//     const TeamMembers = [
//         {
//           ObjectId: 1,
//           image: img1,
//           Name: "Melissa Tatcher",
//           Rol: "MARKETING OPERATIONS",
//           social: ["facebook", "twitter", "instagram"],
//         },
//         {
//           ObjectId: 2,
//           image: img2,
//           Name: "Stuard Ferrel",
//           Rol: "DIGITAL MARKETER",
//           social: ["facebook", "twitter", "instagram"],
//         },
//         {
//           ObjectId: 3,
//           image: img3,
//           Name: "Eva Hudson",
//           Rol: "UI/UX DESIGNER",
//           social: ["facebook", "twitter", "instagram"],
//         },
//         {
//           ObjectId: 4,
//           image: img4,
//           Name: "Martin Ethariam",
//           Rol: "GRAPHIC DESIGNER",
//           social: ["facebook", "twitter", "instagram"],
//         },
//         // Add more team members if needed
//     ];

//   return (
//     <div className='bg-gray-200 w-full py-16'>
//         <div className='flex flex-col justify-center items-center mb-12'>
//             <span className='text-2xl text-blue-500'>Our Team</span>
//             <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl mt-4'>Our Team Members</h1>
//             <p className='lg:w-[29rem] text-center text-gray-600 mt-4'>
//                 There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
//             </p>
//         </div>

//         {/* Flexbox container for team members */}
//         <div className='container flex flex-wrap justify-center items-center gap-5  bg-white '>
//             {TeamMembers.map((teamMember) => (
//                 <div className=' items-center  rounded-lg shadow-lg py-4 px-5 sm:w-[300px] md:w-[19rem] lg:w-[12rem] ' 
//                     key={teamMember.ObjectId}
//                 >
//                     <img className='rounded w-35 h-45 object-cover mb-4' src={teamMember.image} alt={teamMember.Name} />
//                     <h5 className='text-xl font-semibold text-gray-800 mb-2'>{teamMember.Name}</h5>
//                     <p className='text-sm text-gray-500 mb-4'>{teamMember.Rol}</p>
                    
//                     <div className='flex gap-3'>
//                         {teamMember.social.includes("facebook") && (
//                             <a className='text-gray-500 hover:text-blue-500' href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                                 <FaFacebook size={20} />
//                             </a>
//                         )}
//                         {teamMember.social.includes("twitter") && (
//                             <a className='text-gray-500 hover:text-blue-500' href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//                                 <FaTwitter size={20} />
//                             </a>
//                         )}
//                         {teamMember.social.includes("instagram") && (
//                             <a className='text-gray-500 hover:text-pink-500' href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                                 <FaInstagram size={20} />
//                             </a>
//                         )}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
//   );
// };

// export default Team;


// import img1 from './TeamImg/Team-01 (1).jpg';
// import img2 from './TeamImg/Team-02 (2).jpg';
// import img3 from './TeamImg/Team-03 (2).jpg';
// import img4 from './TeamImg/Team-04 (2).jpg';
// import { FaFacebook } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";

// const Team = () => {
//     const TeamMembers = [
//         {
//           ObjectId: 1,
//           image: img1,
//           Name: "Melissa Tatcher",
//           Rol: " MARKETING OPERATIONS",
//           social: [""],
//         },
//         {
//           ObjectId: 2,
//           image: img2,
//           Name: "Stuard Ferrel",
//           Rol: "DIGITAL MARKETER",
//           social: [""],
//         },
//         {
//           ObjectId: 4,
//           image: img3,
//           Name: "Eva Hudson",
//           Rol: "UI/UX DESIGNER",
//           social: [""],
//         },
//         {
//           ObjectId: 4,
//           image:img4,
//           Name: "Martin Ethariam",
//           Rol: "GRAPHIC DESIGNER",
//           social: [""],
//         },
//       ];
      
//   return (
//     <div className='bg-gray-400 w-full '>
//         <div className='flex flex-col justify-center items-center' >
//             <span className='text-2xl text-blue-500'>Our Team</span>
       
//            <h1 className='font-bold'>Our Team Members</h1>
//             <p className='lg:w-[29rem] text-center'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>

        
//         </div>
//         <div className=' container flex  lg:flex-row justify-center items-center py-16 '>
           
//             <div className='w-3/4 flex flex-col lg:flex-row justify-center items-center text-center  gap-3 bg-white rounded-lg'>
//             {TeamMembers.map((TeamMember,index)=>(
//                 <div className='px-1 py-5'  key={index}>
//                     <img className='rounded-lg' src={TeamMember.image} alt="TeamMember.image" />
//                     <h5>{TeamMember.Name}</h5>
//                     <p>{TeamMember.Rol}</p>
//                     {TeamMember.social.map((icon,iconIndex)=>(
//                         <div className='flex justify-evenly' key={iconIndex}>
//                             <a className=' text-gray-300 hover:text-blue-500' href="facebook.com">{icon}<FaFacebook /></a>
//                             <a className=' text-gray-300  hover:text-blue-500' href="twitter.com">{icon}<FaTwitter/></a>
//                             <a className=' text-gray-300  hover:text-blue-500' href="instagram.com">{icon}<FaInstagram /></a>
                            
//                         </div>
//                     ))}
//                 </div>

                
//             ))}
//             </div>
            
//         </div>
//     </div>
//   )
// }

// export default Team