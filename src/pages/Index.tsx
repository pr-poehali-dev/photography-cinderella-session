import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      url: 'https://cdn.poehali.dev/files/907d0cd0-b3ac-4a97-87e2-fe45f1b0e5d5.jpg',
      title: 'Королевский стиль',
      description: 'Элегантность и грация'
    },
    {
      id: 2,
      url: 'https://cdn.poehali.dev/projects/16e904e5-3832-49cc-9ae7-ac402e95c699/files/8361510d-0366-4ea0-abad-d7c0ebda6c8c.jpg',
      title: 'Бальное платье',
      description: 'Волшебство сказки'
    },
    {
      id: 3,
      url: 'https://cdn.poehali.dev/projects/16e904e5-3832-49cc-9ae7-ac402e95c699/files/1f73d3fd-07b1-4467-935c-4386ec64357c.jpg',
      title: 'Превращение',
      description: 'Магия момента'
    },
    {
      id: 4,
      url: 'https://cdn.poehali.dev/projects/16e904e5-3832-49cc-9ae7-ac402e95c699/files/566e19d3-b4b7-4b76-8bef-7f8dd0a14c9c.jpg',
      title: 'Королевский бал',
      description: 'Танец до полуночи'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="relative z-10">
        <header className="text-center py-16 px-4">
          <div className="inline-block animate-fade-in">
            <h1 className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
              Золушка
            </h1>
            <div className="flex items-center justify-center gap-3 text-lg text-gray-600">
              <Icon name="Sparkles" size={20} className="text-yellow-400 sparkle" />
              <p>Волшебная фотосессия</p>
              <Icon name="Sparkles" size={20} className="text-yellow-400 sparkle" />
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 pb-20">
          <section className="max-w-4xl mx-auto mb-20 animate-fade-in">
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-10 md:p-16 shadow-xl border border-purple-100">
              <div className="flex items-center justify-center mb-8">
                <Icon name="Crown" size={40} className="text-yellow-400 sparkle" />
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                О фотосессии
              </h2>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p className="text-center text-xl font-light">
                  Окунитесь в мир классической сказки, где каждый кадр наполнен волшебством и элегантностью
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-shadow duration-300">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                      <Icon name="Wand2" size={28} className="text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-gray-800">Превращение</h3>
                    <p className="text-gray-600">
                      Магический момент, когда мечта становится реальностью
                    </p>
                  </div>
                  
                  <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow duration-300">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                      <Icon name="Sparkles" size={28} className="text-purple-500" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-gray-800">Роскошь</h3>
                    <p className="text-gray-600">
                      Королевские наряды и изысканные детали образа
                    </p>
                  </div>
                  
                  <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-yellow-50 hover:shadow-lg transition-shadow duration-300">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                      <Icon name="Star" size={28} className="text-pink-500" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-gray-800">Сказка</h3>
                    <p className="text-gray-600">
                      Атмосфера волшебства в каждом мгновении
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-6xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 animate-fade-in">
              Галерея
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedImage(photo.id)}
                >
                  <div className="aspect-[3/4] relative">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-3xl font-bold text-white mb-2">{photo.title}</h3>
                      <p className="text-blue-200 text-lg">{photo.description}</p>
                    </div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-white/20 backdrop-blur-md rounded-full p-3">
                        <Icon name="Search" size={24} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
              <Icon name="Camera" size={24} className="text-purple-500" />
              <p className="text-gray-700 text-lg">
                Фотосессия в стиле классической сказки
              </p>
              <Icon name="Heart" size={24} className="text-pink-500" />
            </div>
          </div>
        </main>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:text-purple-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={40} />
          </button>
          
          <div className="max-w-5xl max-h-[90vh] animate-scale-in">
            <img
              src={photos.find(p => p.id === selectedImage)?.url}
              alt="Full size"
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;