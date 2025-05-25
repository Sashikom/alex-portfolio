// src/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-900 fade-in-up" style={{ animationDelay: '0.7s' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Связаться со мной</h2>
        <p className="text-gray-400 mb-8">
          alex@example.com • Telegram: @alex_dev • GitHub: github.com/alex-dev
        </p>

        <form className="space-y-4 max-w-md mx-auto">
          <input type="text" placeholder="Ваше имя" className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none" />
          <textarea placeholder="Сообщение" rows="4" className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"></textarea>
          <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded transition">
            Отправить сообщение
          </button>
        </form>
      </div>
    </section>
  );
}