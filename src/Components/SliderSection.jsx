import { motion } from "framer-motion";

const SectionTemplate = ({ heading, paragraph, imgSrc, reverse = false }) => {
  return (
    <section className="bg-rgb(237 168 86) ${} h-fit p-3">
      <div
        className={`flex flex-col m-6 md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } overflow-x-hidden`}
      >
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: reverse ? 100 : -100 }}
          transition={{ duration: 1 }}
          className="m-5"
        >
          <h1 className="font-bold text-xs md:text-2xl">{heading}</h1>
          <p className="text-slate-600 font-semibold text-xs w-fit md:w-5/6 md:text-3xl">
            {paragraph}
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: reverse ? -100 : 100 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <img
            src={imgSrc}
            alt={heading}
            className="w-full h-auto object-cover block md:h-fit md:w-11/12 shadow-[0px_2px_50px_2px_pink]"
            style={{ borderRadius: "0.5rem" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTemplate;
