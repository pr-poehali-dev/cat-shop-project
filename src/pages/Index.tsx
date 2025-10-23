import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Cat {
  id: number;
  name: string;
  breed: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
}

const cats: Cat[] = [
  {
    id: 1,
    name: 'Рыжик',
    breed: 'Рыжий табби',
    price: 16000,
    originalPrice: 19000,
    image: 'https://cdn.poehali.dev/projects/6a88ec37-916c-4585-8f41-f93ce1cdff7f/files/1ebb6ac3-5056-4538-828e-c8af177412a1.jpg',
    description: 'Игривый и ласковый котик с зелеными глазами'
  },
  {
    id: 2,
    name: 'Дымка',
    breed: 'Британская короткошерстная',
    price: 25000,
    image: 'https://cdn.poehali.dev/projects/6a88ec37-916c-4585-8f41-f93ce1cdff7f/files/9cfa7211-c5e5-40b4-b456-5c96d48252d9.jpg',
    description: 'Элегантная красавица с королевской осанкой'
  },
  {
    id: 3,
    name: 'Сапфир',
    breed: 'Сиамская',
    price: 22000,
    image: 'https://cdn.poehali.dev/projects/6a88ec37-916c-4585-8f41-f93ce1cdff7f/files/23aa051c-574e-47d3-9324-e39b5a9a3058.jpg',
    description: 'Грациозная кошечка с потрясающими голубыми глазами'
  },
  {
    id: 4,
    name: 'Пушок',
    breed: 'Мейн-кун',
    price: 35000,
    originalPrice: 40000,
    image: 'https://cdn.poehali.dev/projects/6a88ec37-916c-4585-8f41-f93ce1cdff7f/files/1ebb6ac3-5056-4538-828e-c8af177412a1.jpg',
    description: 'Крупный пушистый красавец с дружелюбным характером'
  },
  {
    id: 5,
    name: 'Луна',
    breed: 'Шотландская вислоухая',
    price: 28000,
    image: 'https://cdn.poehali.dev/projects/6a88ec37-916c-4585-8f41-f93ce1cdff7f/files/9cfa7211-c5e5-40b4-b456-5c96d48252d9.jpg',
    description: 'Милая плюшевая кошечка с очаровательными ушками'
  },
  {
    id: 6,
    name: 'Тигр',
    breed: 'Бенгальская',
    price: 45000,
    image: 'https://cdn.poehali.dev/projects/6a88ec37-916c-4585-8f41-f93ce1cdff7f/files/1ebb6ac3-5056-4538-828e-c8af177412a1.jpg',
    description: 'Энергичный котик с экзотическим окрасом'
  }
];

export default function Index() {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (catId: number) => {
    setCart([...cart, catId]);
  };

  const removeFromCart = (catId: number) => {
    const index = cart.indexOf(catId);
    if (index > -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const isInCart = (catId: number) => cart.includes(catId);
  const cartCount = cart.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-purple-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-pink-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl animate-float">🐱</div>
            <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CAT SHOP
            </h1>
          </div>
          
          <Button 
            size="lg" 
            className="relative group hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <Icon name="ShoppingCart" size={20} className="mr-2" />
            <span className="font-semibold">Корзина</span>
            {cartCount > 0 && (
              <Badge 
                className="absolute -top-2 -right-2 bg-secondary text-white border-2 border-white min-w-6 h-6 flex items-center justify-center animate-scale-in"
              >
                {cartCount}
              </Badge>
            )}
          </Button>
        </div>
      </header>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Найди своего котика! 😻
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Самые милые и пушистые друзья ждут тебя
          </p>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cats.map((cat, index) => (
              <Card 
                key={cat.id}
                className="group overflow-hidden border-2 border-pink-100 hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden aspect-square">
                    <img 
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {cat.originalPrice && (
                      <Badge className="absolute top-4 right-4 bg-secondary text-white font-bold text-sm shadow-lg">
                        -15% СКИДКА
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {cat.name}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {cat.breed}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-primary">
                        <Icon name="Heart" size={20} className="fill-primary" />
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {cat.description}
                    </p>
                    
                    <div className="flex items-end justify-between mb-4">
                      <div>
                        <div className="text-3xl font-black text-foreground">
                          {cat.price.toLocaleString('ru-RU')} ₽
                        </div>
                        {cat.originalPrice && (
                          <div className="text-sm text-muted-foreground line-through font-medium">
                            {cat.originalPrice.toLocaleString('ru-RU')} ₽
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {isInCart(cat.id) ? (
                      <Button
                        onClick={() => removeFromCart(cat.id)}
                        variant="outline"
                        size="lg"
                        className="w-full font-bold border-2 hover:bg-destructive hover:text-white hover:border-destructive transition-all duration-300"
                      >
                        <Icon name="Trash2" size={18} className="mr-2" />
                        Убрать из корзины
                      </Button>
                    ) : (
                      <Button
                        onClick={() => addToCart(cat.id)}
                        size="lg"
                        className="w-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      >
                        <Icon name="ShoppingBag" size={18} className="mr-2" />
                        Добавить в корзину
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary to-secondary py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-white">
          <p className="text-lg font-semibold mb-2">
            🐾 CAT SHOP — Твой идеальный котик уже здесь! 🐾
          </p>
          <p className="text-sm opacity-90">
            © 2024 Все котики счастливы и любимы
          </p>
        </div>
      </footer>
    </div>
  );
}
