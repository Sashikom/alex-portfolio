// src/components/Projects.jsx
export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-white fade-in-up" style={{ animationDelay: '0.5s' }}>
      <div className="max-w-6xl mx-auto px-4">

        {/* Заголовок */}
        <h2 className="text-3xl font-bold mb-6 text-center">Мои проекты</h2>
        <p className="text-center text-gray-400 mb-12">
          Вот некоторые из моих работ в разных категориях
        </p>

        {/* Категория: Веб-сайты */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">🖥 Веб-сайты</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Проект 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2">Vite + React сайт</h4>
              <p className="text-gray-400 mb-4">
                Первый сайт на современном стеке — быстро запускается, адаптивный
              </p>
              <a href="#" className="text-blue-500 hover:underline">Подробнее →</a>
            </div>

            {/* Проект 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2">Сайт-портфолио</h4>
              <p className="text-gray-400 mb-4">
                Персональный сайт для демонстрации навыков и проектов
              </p>
              <a href="#" className="text-blue-500 hover:underline">Подробнее →</a>
            </div>

            {/* Проект 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2">Контактная форма</h4>
              <p className="text-gray-400 mb-4">
                Возможность связи напрямую через сайт
              </p>
              <a href="#" className="text-blue-500 hover:underline">Подробнее →</a>
            </div>

            {/* Проект 4 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2">CRM-панель</h4>
              <p className="text-gray-400 mb-4">
                Управление клиентами и заказами
              </p>
              <a href="#" className="text-blue-500 hover:underline">Подробнее →</a>
            </div>

            {/* Проект 5 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2">React UI компоненты</h4>
              <p className="text-gray-400 mb-4">
                Переиспользуемые кнопки, модалки, формы
              </p>
              <a href="#" className="text-blue-500 hover:underline">Подробнее →</a>
            </div>

            {/* Проект 6 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2">API интеграция</h4>
              <p className="text-gray-400 mb-4">
                Работа с внешними API и базами данных
              </p>
              <a href="#" className="text-blue-500 hover:underline">Подробнее →</a>
            </div>

          </div>
        </div>

        {/* Категория: Боты / ИИ */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-purple-400">🤖 Боты и ИИ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Проект 7 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2">Telegram-бот</h4>
              <p className="text-gray-400 mb-4">
                Автоматизация задач через Telegram
              </p>
              <a href="#" className="text-blue-500 hover:underline">Подробнее →</a>
            </div>

            {/* Проект 8 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2">ИИ-чатбот</h4>
              <p className="text-gray-400 mb-4">
                Чат с ИИ через OpenAI API
              </p>
              <a href="#" className="text-blue-500 hover:underline">Подробнее →</a>
            </div>

            {/* Проект 9 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2">WhatsApp бот</h4>
              <p className="text-gray-400 mb-4">
                Для автоматизации диалогов и ответов
              </p>
              <a href="#" className="text-blue-500 hover:underline">Подробнее →</a>
            </div>

            {/* Проект 10 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2">Discord бот</h4>
              <p className="text-gray-400 mb-4">
                Модерация серверов и автоматизация команд
              </p>
              <a href="#" className="text-blue-500 hover:underline">Подробнее →</a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}