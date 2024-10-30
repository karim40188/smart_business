import { motion, useScroll, useTransform } from "framer-motion";

function Test() {
  let { ref, scrollYProgress } = useScroll();

  let scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <div>
      <motion.div
        ref={ref}
        style={{
          height: "200vh",
          position:'sticky',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "lightblue",
          scale: scale, // استخدام scale هنا
        }}
      >
        <h1>Section 1 - Moving Down</h1>
      </motion.div>
      <motion.div
        ref={ref}
        style={{
          height: "200vh",
          position:'sticky',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "red",
          scale: scale, // استخدام scale هنا
        }}
      >
        <h1>Section 1 - Moving Down</h1>
      </motion.div>
      <motion.div
        ref={ref}
        style={{
          height: "200vh",
          position:'sticky',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "green",
          scale: scale, // استخدام scale هنا
        }}
      >
        <h1>Section 1 - Moving Down</h1>
      </motion.div>
    </div>
  );
}

export default Test;
