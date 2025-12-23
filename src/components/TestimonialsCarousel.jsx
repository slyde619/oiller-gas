import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useTestimonials } from "../hooks/useTestimonials";

const TestimonialsCarousel = () => {
  const { data: testimonials = [], isLoading } = useTestimonials();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  if (isLoading) {
    return (
      <section className="section-padding bg-primary">
        <div className="section-container">
          <div className="animate-pulse flex justify-center">
            <div className="h-64 w-full max-w-2xl bg-primary-light/20 rounded-xl" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-primary overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="heading-section text-primary-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Hear from our partners about their experience working with us.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
                >
                  <div className="bg-primary-light/10 border border-primary-light/20 rounded-xl p-6 lg:p-8 h-full">
                    <Quote className="text-accent mb-4" size={32} />
                    <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-accent-foreground font-semibold">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-primary-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-primary-foreground/60">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8
                     w-12 h-12 rounded-full bg-accent text-accent-foreground
                     flex items-center justify-center shadow-lg
                     hover:scale-110 transition-transform disabled:opacity-50"
            disabled={!canScrollPrev}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8
                     w-12 h-12 rounded-full bg-accent text-accent-foreground
                     flex items-center justify-center shadow-lg
                     hover:scale-110 transition-transform disabled:opacity-50"
            disabled={!canScrollNext}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-accent w-8"
                  : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
