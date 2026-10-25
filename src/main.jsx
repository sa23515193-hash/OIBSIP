
import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Pizza,
  Search,
  Heart,
  ShoppingBag,
  Menu as MenuIcon,
  X,
  Plus,
  Minus,
  ArrowRight,
  Star,
  Clock,
  MapPin,
  Instagram,
  Facebook,
  ChevronDown,
  Flame,
  Leaf,
  Truck,
  CheckCircle2,
  CreditCard,
  Trash2,
} from 'lucide-react';

import './styles.css';

// ==========================================
// PRODUCT DATA
// ==========================================

const products = [
  {
    id: 1,
    name: 'Crown Crust',
    category: 'Signature',
    price: 1370,
    desc: 'A golden crown edge filled with creamy cheese, chicken and a bold house sauce.',
    tag: 'Fan favourite',
    img: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 2,
    name: 'Cheesy Mughlai',
    category: 'Signature',
    price: 1370,
    desc: 'Creamy Mughlai sauce, tender chicken, peppers and a generous cheese pull.',
    tag: 'Best seller',
    img: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 3,
    name: 'Classic Pepperoni',
    category: 'Classic',
    price: 1150,
    desc: 'Rich tomato sauce, mozzarella and pepperoni baked until beautifully crisp.',
    tag: 'Classic',
    img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 4,
    name: 'The Corn Lover',
    category: 'Vegetarian',
    price: 1150,
    desc: 'Sweet corn, capsicum, onion and mozzarella on a savoury tomato base.',
    tag: 'Veggie pick',
    img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 5,
    name: 'Chicken Arabian',
    category: 'Signature',
    price: 1250,
    desc: 'Spiced chicken, olives, onions and creamy garlic sauce with a little kick.',
    tag: 'House special',
    img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 6,
    name: 'Very Veggie',
    category: 'Vegetarian',
    price: 1100,
    desc: 'A colourful mix of peppers, mushrooms, olives and fresh herbs.',
    tag: 'Fresh & vibrant',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 7,
    name: 'Cheese Lover',
    category: 'Classic',
    price: 1200,
    desc: 'Mozzarella, cheddar and a creamy cheese blend over slow-cooked tomato sauce.',
    tag: 'Extra cheesy',
    img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 8,
    name: 'Garlic Bread',
    category: 'Sides',
    price: 350,
    desc: 'Toasted herb and garlic bread, perfect for sharing.',
    tag: 'Sidekick',
    img: 'https://images.unsplash.com/photo-1619531040576-f9416740661b?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 9,
    name: 'Loaded Fries',
    category: 'Sides',
    price: 450,
    desc: 'Golden fries finished with house seasoning and a creamy drizzle.',
    tag: 'Snack time',
    img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 10,
    name: 'Chocolate Brownie',
    category: 'Desserts',
    price: 300,
    desc: 'A rich chocolate brownie for a sweet finish.',
    tag: 'Sweet finish',
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 11,
    name: 'Chilled Cola',
    category: 'Drinks',
    price: 180,
    desc: 'A cold fizzy drink to go with your favourite slice.',
    tag: 'Cool down',
    img: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 12,
    name: 'Family Feast',
    category: 'Deals',
    price: 2899,
    desc: 'Two crowd-pleasing pizzas, a side and drinks for the whole table.',
    tag: 'Great value',
    img: 'https://images.unsplash.com/photo-1542282811-943ef1a977c3?auto=format&fit=crop&w=900&q=85',
  },
];

const categories = [
  'All',
  'Signature',
  'Classic',
  'Vegetarian',
  'Sides',
  'Desserts',
  'Drinks',
  'Deals',
];

const heroSlides = [
  {
    top: 'MADE WITH A LITTLE EXTRA LOVE',
    line1: 'Good pizza.',
    line2: 'Great',
    line3: 'company.',
    desc: 'Hand-stretched dough, feel-good toppings and golden, melty cheese. Your next favourite slice is just a few clicks away.',
    img: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1200&q=90',
  },
  {
    top: 'BIG FLAVOURS. ZERO SHORTCUTS.',
    line1: 'Meet your new',
    line2: 'cheesy',
    line3: 'obsession.',
    desc: 'From signature favourites to extra-cheesy classics, there is a little something for every craving.',
    img: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=1200&q=90',
  },
  {
    top: 'GOOD FOOD. BETTER COMPANY.',
    line1: 'Bring everyone',
    line2: 'to the',
    line3: 'table.',
    desc: 'Make ordinary evenings delicious with shareable favourites, golden sides and feel-good deals.',
    img: 'https://images.unsplash.com/photo-1542282811-943ef1a977c3?auto=format&fit=crop&w=1200&q=90',
  },
];

const money = (n) => 'Rs. ' + Number(n).toLocaleString('en-PK');

// ==========================================
// MAIN APP
// ==========================================

function App() {
  const [heroSlide, setHeroSlide] = useState(0);

  const [cart, setCart] = useState(() =>
    JSON.parse(localStorage.getItem('crust-cart') || '[]')
  );

  const [likes, setLikes] = useState(() =>
    JSON.parse(localStorage.getItem('crust-likes') || '[]')
  );

  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [page, setPage] = useState('Home');
  const [faqOpen, setFaqOpen] = useState(0);
  const [toast, setToast] = useState('');
  const [checkout, setCheckout] = useState(false);
  const [order, setOrder] = useState(null);

  // Automatically change hero slides.
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((i) => (i + 1) % heroSlides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  // Persist cart and favourites in the browser.
  useEffect(() => {
    localStorage.setItem('crust-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('crust-likes', JSON.stringify(likes));
  }, [likes]);

  // Filter products by category and search query.
  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === 'All' || p.category === category) &&
          `${p.name} ${p.desc} ${p.category}`
            .toLowerCase()
            .includes(search.toLowerCase())
      ),
    [category, search]
  );

  const count = cart.reduce((n, x) => n + x.qty, 0);
  const subtotal = cart.reduce((n, x) => n + x.price * x.qty, 0);
  const delivery = subtotal > 0 && subtotal < 2000 ? 150 : 0;
  const total = subtotal + delivery;

  // Notifications.
  function notify(message) {
    setToast(message);
    setTimeout(() => setToast(''), 2200);
  }

  // Add an item to the shopping cart.
  function add(product) {
    setCart((old) => {
      const found = old.find((x) => x.id === product.id);

      return found
        ? old.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty + 1 } : x
          )
        : [...old, { ...product, qty: 1 }];
    });

    notify(`${product.name} added to your bag`);
  }

  // Update item quantity.
  function changeQty(id, difference) {
    setCart((old) =>
      old
        .map((x) =>
          x.id === id ? { ...x, qty: x.qty + difference } : x
        )
        .filter((x) => x.qty > 0)
    );
  }

  // Add or remove favourites.
  function toggleLike(id) {
    setLikes((old) =>
      old.includes(id)
        ? old.filter((itemId) => itemId !== id)
        : [...old, id]
    );

    notify(
      likes.includes(id)
        ? 'Removed from favourites'
        : 'Saved to favourites'
    );
  }

  // Navigate between pages.
  function go(nextPage) {
    setPage(nextPage);
    setMobileOpen(false);
    setCartOpen(false);
    setCheckout(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  // Submit a demo order.
  async function placeOrder(e) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const newOrder = {
      id: 'CR' + Date.now().toString().slice(-7),
      name: form.get('name'),
      phone: form.get('phone'),
      address: form.get('address'),
      payment: form.get('payment'),
      items: cart,
      total,
      status: 'Order received',
    };

    setOrder(newOrder);

    try {
      await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      });
    } catch {
      // The demo checkout still works if the optional API is offline.
    }

    setCart([]);
    setCheckout(false);
    setCartOpen(false);
    setPage('Order success');

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  // FAQ content.
  const faqs = [
    [
      'How long does delivery take?',
      'Most orders arrive in 30–45 minutes. Delivery time can vary by location and busy periods.',
    ],
    [
      'Can I customise my pizza?',
      'Choose your favourite pizza and add a note at checkout for your preferred toppings. Customisation availability may vary.',
    ],
    [
      'Which payment methods are available?',
      'This demo supports cash on delivery and a simulated card option. No real payment is processed.',
    ],
    [
      'Can I collect my order?',
      'Yes. Add your items to the bag and mention pickup in the delivery address field.',
    ],
    [
      'How can I track my order?',
      'After placing a demo order, you will see an order confirmation with your reference number. Live tracking requires a connected backend.',
    ],
  ];

  // The JSX below renders the header, homepage, menu, cart drawer,
  // checkout, favourites, FAQ, footer and order confirmation.
  //
  // Keep the existing JSX return block here, unchanged, from:
  // return <><div className="announcement">...
  // through:
  // {toast && <div className="toast">...</div>}</>;
  //
  // This block is intentionally not duplicated in this formatted example.
}

// ==========================================
// PRODUCT CARD COMPONENT
// ==========================================

function ProductCard({ p, likes, onLike, onAdd }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={p.img} alt={p.name} loading="lazy" />

        <span className="product-tag">{p.tag}</span>

        <button
          className={likes.includes(p.id) ? 'like-btn liked' : 'like-btn'}
          onClick={() => onLike(p.id)}
          aria-label="Save favourite"
        >
          <Heart
            size={18}
            fill={likes.includes(p.id) ? 'currentColor' : 'none'}
          />
        </button>

        <button className="quick-add" onClick={() => onAdd(p)}>
          <Plus size={17} />
        </button>
      </div>

      <div className="product-info">
        <div className="product-meta">
          <span>{p.category}</span>
          <span className="rating">
            <Star size={12} fill="currentColor" /> 4.9
          </span>
        </div>

        <h3>{p.name}</h3>
        <p>{p.desc}</p>

        <div className="product-bottom">
          <b>{money(p.price)}</b>

          <button onClick={() => onAdd(p)}>
            Add to bag <Plus size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}

// ==========================================
// RENDER THE APP
// ==========================================

createRoot(document.getElementById('root')).render(<App />);

