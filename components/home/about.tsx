import Image from "next/image";

const About = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl w-full">
        {/* Left Side - Image with Overlay Text */}
        <div className="relative">
          <Image
            src="/your-image.jpg" // Replace with actual image path
            alt="Cycling Road"
            width={600}
            height={400}
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4 bg-black/30 rounded-lg">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              <span className="text-[#A67C52]">PRESERVING</span>{" "}
              <span className="text-white">MOMENTS</span> <br />
              <span className="text-[#A67C52]">VOLUME THROUGH</span>{" "}
              <span className="text-white">EVERY PHOTOGRAPH</span>
            </h1>
          </div>
        </div>

        {/* Right Side - Description and CTA */}
        <div className="space-y-6">
          <p className="text-lg">
            It’s my passion and my art form. Each image I capture is a story
            waiting to be told, a moment frozen in time, and an emotion
            expressed through light and shadow.
          </p>
          <a
            href="/about"
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold transition hover:bg-gray-300"
          >
            ABOUT ME ↗
          </a>
          <div className="border-t border-gray-700 pt-4 flex justify-between text-sm text-gray-400">
            <p>I love spending time to create masterpieces that are timeless</p>
            <a href="/contact" className="underline hover:text-white">
              CONTACT ME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
