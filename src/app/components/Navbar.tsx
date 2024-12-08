import React from 'react';
import Image from 'next/image';

// export default function Navbar() {
//   return (
//     <div className='w-full bg-white h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6]'>
//       <div className="first flex flex-col md:flex-row items-center gap-4 md:gap-16">
//         <h1 className='text-[#3563e9] text-4xl font-bold'>MORENT</h1>
//         <div className="input relative w-full md:w-auto">
//           <Image src={'/search-normal.png'} alt='' width={24} height={24} className='absolute top-1/2 left-3 transform -translate-y-1/2'/>
//           <input 
//             type="text" 
//             title="search" 
//             placeholder="Say something here" 
//             className='border-2 border-[#e7eef6] w-full md:w-[492px] h-[44px] rounded-full p-2 pl-10 pr-12'
//           />
//           <Image src={'/filter.png'} alt='' width={24} height={24} className='absolute top-1/2 right-3 transform -translate-y-1/2'/>
//         </div>
//       </div>
//       <div className="icons mt-4 md:mt-0">
//         <Image src={'/Profil & Notification.png'} alt='' width={236} height={44} />
//       </div>
//     </div>
//   );
// }






export default function Navbar() {
    return (
        <div className="h-auto w-full flex flex-wrap items-center justify-between px-4 py-4 bg-white">
            {/* Logo */}
            <div className="w-[120px] h-[40px] flex-shrink-0">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain ml-4" />
              
            </div>

            {/* Search */}
            <div className="flex items-center gap-2 w-full max-w-[492px] h-[44px] border rounded-full px-3 mt-4 ml-1 md:mt-0 md:flex-1 md:mr-8">
                <img src="/search-normal.png" alt="Search" className="w-[20px] h-[20px]" />
                <input
                    type="text"
                    placeholder="Search something here"
                    className="flex-1 bg-transparent border-none outline-none text-sm px-2 w-[492px] h-[44px]"
                />
                <img src="/filter.png" alt="Filter" className="w-[20px] h-[20px]" />
            </div>

            {/* Profile Icons */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <a href="#"><img src="/like.png" alt="Like" className="w-[36px] h-[36px]" /></a>
              <a href="#"><img src="/Notification.png" alt="Notification" className="w-[36px] h-[36px]" /></a>
               <a href="#"><img src="/Settings.png" alt="Settings" className="w-[36px] h-[36px]" /></a>
               <a href='#'><img src="/dev-ali.jpg" alt="" className='w-[44px] h-44px' /></a>
            </div>
        </div>
    );
}