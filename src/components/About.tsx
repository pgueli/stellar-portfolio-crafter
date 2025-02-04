import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              With over a decade of experience in pumpkin carving, I specialize in creating 
              intricate designs that bring Halloween dreams to life. From traditional jack-o'-lanterns 
              to complex portrait carvings, each piece is crafted with precision and creativity.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My work has been featured in local festivals and private events, bringing joy 
              and amazement to audiences of all ages.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://scontent-lga3-1.cdninstagram.com/v/t51.29350-15/465011173_1604613860472407_4932045930735999911_n.jpg?stp=dst-jpegr_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDExNjkuaGRyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=5gIc_7RHD-EQ7kNvgEaK82D&_nc_gid=02eab2beef4347d8860c683f07daf13a&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ5MTMyODk5MDkxMDk2NDAwNg%3D%3D.3-ccb7-5&oh=00_AYBA1oZlExjjC7HeWjk_jc42kZ1cAHJVfFtFF1HXZk1IxQ&oe=67A8723F&_nc_sid=7a9f4b"
              alt="Pumpkin carving artist at work"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;