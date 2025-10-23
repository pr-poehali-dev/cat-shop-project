-- Таблица котиков (каталог товаров)
CREATE TABLE IF NOT EXISTS cats (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    breed VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL,
    original_price INTEGER,
    image_url TEXT NOT NULL,
    description TEXT,
    is_available BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица заказов
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(200) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(50) NOT NULL,
    total_amount INTEGER NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица товаров в заказе
CREATE TABLE IF NOT EXISTS order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL REFERENCES orders(id),
    cat_id INTEGER NOT NULL REFERENCES cats(id),
    price INTEGER NOT NULL,
    quantity INTEGER DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица корзины (сессионная)
CREATE TABLE IF NOT EXISTS cart_items (
    id SERIAL PRIMARY KEY,
    session_id VARCHAR(255) NOT NULL,
    cat_id INTEGER NOT NULL REFERENCES cats(id),
    quantity INTEGER DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Индексы для быстрого поиска
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_cart_items_session_id ON cart_items(session_id);

-- Вставка начальных данных котиков
INSERT INTO cats (name, breed, price, original_price, image_url, description) VALUES
('Рыжик', 'Рыжий табби', 16000, 19000, 'https://cdn.poehali.dev/projects/6a88ec37-916c-4585-8f41-f93ce1cdff7f/files/1ebb6ac3-5056-4538-828e-c8af177412a1.jpg', 'Игривый и ласковый котик с зелеными глазами'),
('Дымка', 'Британская короткошерстная', 25000, NULL, 'https://cdn.poehali.dev/projects/6a88ec37-916c-4585-8f41-f93ce1cdff7f/files/9cfa7211-c5e5-40b4-b456-5c96d48252d9.jpg', 'Элегантная красавица с королевской осанкой'),
('Сапфир', 'Сиамская', 22000, NULL, 'https://cdn.poehali.dev/projects/6a88ec37-916c-4585-8f41-f93ce1cdff7f/files/23aa051c-574e-47d3-9324-e39b5a9a3058.jpg', 'Грациозная кошечка с потрясающими голубыми глазами'),
('Пушок', 'Мейн-кун', 35000, 40000, 'https://cdn.poehali.dev/projects/6a88ec37-916c-4585-8f41-f93ce1cdff7f/files/1ebb6ac3-5056-4538-828e-c8af177412a1.jpg', 'Крупный пушистый красавец с дружелюбным характером'),
('Луна', 'Шотландская вислоухая', 28000, NULL, 'https://cdn.poehali.dev/projects/6a88ec37-916c-4585-8f41-f93ce1cdff7f/files/9cfa7211-c5e5-40b4-b456-5c96d48252d9.jpg', 'Милая плюшевая кошечка с очаровательными ушками'),
('Тигр', 'Бенгальская', 45000, NULL, 'https://cdn.poehali.dev/projects/6a88ec37-916c-4585-8f41-f93ce1cdff7f/files/1ebb6ac3-5056-4538-828e-c8af177412a1.jpg', 'Энергичный котик с экзотическим окрасом');
