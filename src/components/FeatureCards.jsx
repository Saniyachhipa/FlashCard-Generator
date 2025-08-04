import { motion } from 'framer-motion';

const features = [
  {
    title: 'Flashcard Generator',
    desc: 'Turn any content into smart, AI-powered flashcards instantly.',
  },
  {
    title: 'Summarizer',
    desc: 'Summarize long text or topics with a single click.',
  },
  {
    title: 'Quiz Creator',
    desc: 'Create quizzes to test your understanding automatically.',
  },
];

function FeatureCards() {
  return (
    <section className="bg-white text-gray-800 py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">What You Can Do</h2>
        <p className="text-gray-600">Your AI productivity trio</p>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {features.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FeatureCards;
