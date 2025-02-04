import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const works = [
  {
    id: 1,
    title: "Classic Jack-o'-lantern",
    description: "Traditional carved pumpkin with a spooky grin",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
  },
  {
    id: 2,
    title: "Portrait Carving",
    description: "Detailed portrait carved into a large pumpkin",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
  },
  {
    id: 3,
    title: "Intricate Pattern",
    description: "Complex geometric pattern with detailed shading",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
  },
];

const Gallery = () => {
  return (
    <section className="py-20 bg-orange-50" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through my collection of carved pumpkins, each telling its own unique story
          </p>
        </motion.div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {works.map((work) => (
              <CarouselItem key={work.id}>
                <div className="p-1">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-semibold text-xl">{work.title}</h3>
                    <p className="text-gray-600 mt-2">{work.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;