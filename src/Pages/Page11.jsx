import { useRef } from "react";
import { motion } from "motion/react";
const Page11 = () => {
  const page11Ref = useRef(null);

  return (
    <div
      ref={page11Ref}
      className='relative w-full h-[100vh] bg-[url("/images/bluetxt.png")]'
    >
      <div className="absolute top-30 flex gap-2 font-['font1']">
        <motion.div
          drag
          dragConstraints={page11Ref}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
          className="relative rotate-10"
        >
          <img className="w-80" src="/images/post1.png" alt="" />
          <h3 className="absolute top-72 px-8 py-1  leading-3 text-center text-white text-[15px]">
            Are you a girl who loves technology and creativity?
          </h3>
        </motion.div>
        <motion.div
          drag
          dragConstraints={page11Ref}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
          className="relative -rotate-10"
        >
          <img className="w-60" src="/images/post2.png" alt="" />
          <h3 className="absolute top-50 px-2 py-1  text-black leading-3 text-center text-[15px]">
            So go out there and make something amazing!
          </h3>
        </motion.div>
        <motion.div
          drag
          dragConstraints={page11Ref}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
          className="relative rotate-10"
        >
          <img className="w-84" src="/images/post3.png" alt="" />
          <h3 className="absolute bottom-10  left-20 text-black px-2 mt-4  text-center text-[23px]">
            Take the Quiz
          </h3>
        </motion.div>
        <motion.div
          drag
          dragConstraints={page11Ref}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
          className="relative -rotate-10"
        >
          <img className="w-76" src="/images/post4.png" alt="" />
          <h3 className="absolute top-68 px-2 py-1  leading-3 text-black text-center text-[15px]">
            This will help you make a more informed decision about your future
            career.
          </h3>
        </motion.div>
        <motion.div
          drag
          dragConstraints={page11Ref}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
          className="rotate-10"
        >
          <img className="w-70" src="/images/post5.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Page11;
