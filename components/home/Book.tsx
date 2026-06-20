import StarRating from "../books/StarRating";

export default function Hero() {
  return (
    <section className="py-12 px-4">
      {/* Heading */}
      <div className="text-center">
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#1c1c1c] underline decoration-[#e07856] decoration-4 underline-offset-8">
          Our Book of The Week
        </h1>
      </div>

      {/* Card */}
      <div className="max-w-5xl mx-auto mt-10 bg-[#e3d2bb] rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="shrink-0">
            <img
              className="w- md:w-52 rounded-lg shadow-lg"
              src="/image/feature-book6.jpg"
              alt="Dune Book Cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 w-full">
            {/* Title + Rating */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="font-bold text-2xl text-[#1c1c1c]">
                  Dune
                </h2>
                <p className="text-gray-700">Frank Herbert</p>
              </div>

              <StarRating />
            </div>

            {/* Description */}
            <div className="mt-6">
              <p className="text-gray-700 leading-7">
                Here is the novel that will forever be considered a triumph
                of the imagination, set on the desert planet Arrakis.
                Storytelling is the interactive art of using a narrative to
                convey a message. Far more than mere entertainment, it
                connects raw facts to human emotion, making information
                relatable, memorable, and impactful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}