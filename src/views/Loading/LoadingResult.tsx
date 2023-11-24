import {motion} from "framer-motion";

function LoadingResult() {
  const text = "당신의 T 점수는?..".split(" ");

  return (
    <div className="flex gap-2 flex-row items-center justify-center">
      {text.map((el, i) => (
        <motion.span
          className="font-dote text-4xl "
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
            duration: 5,
            delay: i / 10,
          }}
          key={i}>
          {el}
        </motion.span>
      ))}
    </div>
  );
}

export default LoadingResult;
