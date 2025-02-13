// "use client"

// import Lottie from "lottie-react";

// const AnimationLottie = ({ animationPath, width }) => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationPath,
//     style: {
//       width: '95%',
//     }
//   };

//   return (
//     <Lottie {...defaultOptions} />
//   );
// };

// export default AnimationLottie;

"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import lottie-react to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (animationPath) {
      setAnimationData(animationPath);
    }
  }, [animationPath]);

  if (!animationData) return null; // Prevents rendering if animation data is missing

  return <Lottie animationData={animationData} style={{ width: "95%" }} loop autoplay />;
};

export default AnimationLottie;
