export default function HomeFeatures() {
  return (
    <section className="py-16 px-4 sm:px-8 bg-pregapink/10">
      <h2 className="text-3xl font-bold text-center text-pregapurple mb-10">
        Why Choose PregaCoach?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <svg
            className="w-12 h-12 text-pregapurple mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 4v16m8-8H4" />
          </svg>
          <h3 className="text-xl font-semibold text-pregapurple">
            Personalized Guidance
          </h3>
          <p className="text-pregapurple/80 mt-2">
            Expert doctors and specialists for every stage of your journey.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <svg
            className="w-12 h-12 text-pregapink mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
          </svg>
          <h3 className="text-xl font-semibold text-pregapurple">
            Comprehensive Support
          </h3>
          <p className="text-pregapurple/80 mt-2">
            From preconception to postpartum, we’re with you every step.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <svg
            className="w-12 h-12 text-pregablue mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 4v16m8-8H4" />
          </svg>
          <h3 className="text-xl font-semibold text-pregapurple">
            Virtual & In-Person
          </h3>
          <p className="text-pregapurple/80 mt-2">
            Consult from anywhere, anytime, with flexible options.
          </p>
        </div>
      </div>
    </section>
  );
} 