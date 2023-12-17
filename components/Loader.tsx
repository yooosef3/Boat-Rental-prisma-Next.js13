'use client';

import { PuffLoader } from "react-spinners";

const Loader = () => {
  return ( 
    <div
    className="
      h-screen
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <PuffLoader
        size={100}
        color="#2CA8DD"
      />
    </div>
   );
}
 
export default Loader;