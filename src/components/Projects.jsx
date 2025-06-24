import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Мои проекты</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Vite + React сайт */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition group">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <span className="text-xl">🚀</span>
              <strong>Vite + React сайт</strong>
            </div>
            <p className="text-gray-300 mb-4">
              Быстрый, адаптивный сайт на современном стеке.
            </p>
            <a 
              href="https://t.me/maksahbot?start=react-site" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
            >
              💬 Написать в Telegram →
            </a>
          </div>

          {/* Сайт-портфолио */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition group">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <span className="text-xl">🎨</span>
              <strong>Сайт-портфолио</strong>
            </div>
            <p className="text-gray-300 mb-4">
              Персональный сайт для демонстрации навыков и проектов.
            </p>
            <a 
              href="https://t.me/maksahbot?start=portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
            >
              💬 Написать в Telegram →
            </a>
          </div>

          {/* Контактная форма */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition group">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <span className="text-xl">✉️</span>
              <strong>Контактная форма</strong>
            </div>
            <p className="text-gray-300 mb-4">
              Возможность связи напрямую через сайт.
            </p>
            <a 
              href="https://t.me/maksahbot?start=form" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
            >
              💬 Написать в Telegram →
            </a>
          </div>

          {/* CRM-панель */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition group">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <span className="text-xl">📊</span>
              <strong>CRM-панель</strong>
            </div>
            <p className="text-gray-300 mb-4">
              Управление клиентами и заказами.
            </p>
            <a 
              href="https://t.me/maksahbot?start=crm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
            >
              💬 Написать в Telegram →
            </a>
          </div>

          {/* React UI компоненты */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition group">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <span className="text-xl">🧩</span>
              <strong>React UI компоненты</strong>
            </div>
            <p className="text-gray-300 mb-4">
              Переиспользуемые кнопки, модалки, формы.
            </p>
            <a 
              href="https://t.me/maksahbot?start=ui-components" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
            >
              💬 Написать в Telegram →
            </a>
          </div>

          {/* API интеграция */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition group">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <span className="text-xl">🔌</span>
              <strong>API Интеграция</strong>
            </div>
            <p className="text-gray-300 mb-4">
              Работа с внешними API и базами данных.
            </p>
            <a 
              href="https://t.me/maksahbot?start=api-integration" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
            >
              💬 Написать в Telegram →
            </a>
          </div>

          {/* Telegram-бот */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition group">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block w-6 h-6">
                <path d="M22 2L11 13"></path>
                <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
              </svg>
              <strong>Telegram-бот</strong>
            </div>
            <p className="text-gray-300 mb-4">
              Автоматизация связи с клиентами через Telegram.
            </p>
            <a 
              href="https://t.me/maksahbot?start=tg-bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
            >
              💬 Написать в Telegram →
            </a>
          </div>

          {/* ИИ-чатбот */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition group">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <span className="text-xl">🧠</span>
              <strong>ИИ-чатбот</strong>
            </div>
            <p className="text-gray-300 mb-4">
              Чат с ИИ через OpenAI / GigaChat.
            </p>
            <a 
              href="https://t.me/maksahbot?start=ai-chatbot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
            >
              💬 Написать в Telegram →
            </a>
          </div>

          {/* WhatsApp бот */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition group">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <span className="text-xl">💬</span>
              <strong>WhatsApp бот</strong>
            </div>
            <p className="text-gray-300 mb-4">
              Для автоматизации диалогов и ответов.
            </p>
            <a 
              href="https://t.me/maksahbot?start=whatsapp-bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
            >
              💬 Написать в Telegram →
            </a>
          </div>

          {/* Discord бот */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition group">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <span className="text-xl">🎮</span>
              <strong>Discord бот</strong>
            </div>
            <p className="text-gray-300 mb-4">
              Команда модерации серверов и автоматизации.
            </p>
            <a 
              href="https://t.me/maksahbot?start=discord-bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
            >
              💬 Написать в Telegram →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}