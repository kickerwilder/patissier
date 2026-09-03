import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { DessertShowcase } from './components/DessertShowcase';
import { DeliveryPayment } from './components/DeliveryPayment';
import { AboutUs } from './components/AboutUs';
import { Locations } from './components/Locations';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Product, CartItem } from './types';
import { PRODUCTS } from './data/products';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Show temporary toast message
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Add to cart handler
  const handleAddToCart = (product: Product, qty: number = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prevCart, { ...product, qty }];
    });
    showToast(`«${product.name}» добавлен в корзину`);
  };

  // Update quantity in cart
  const handleUpdateCartQty = (id: number, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  // Remove item from cart
  const handleRemoveFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  };

  // Handle URL hashes on initial load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#product-')) {
        const id = parseInt(hash.replace('#product-', ''), 10);
        const product = PRODUCTS.find((p) => p.id === id);
        if (product) setSelectedProduct(product);
      } else if (hash === '#cart') {
        setIsCartOpen(true);
      }
    };

    handleHashChange();
    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-choco-950 text-cream-100 font-sans antialiased selection:bg-gold-500 selection:text-choco-950">
      
      {/* Sticky Top Navbar with Centered Logo */}
      <Navbar
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateToSection={scrollToSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onSelectCake={() => scrollToSection('catalog')} />

        {/* 2. Philosophy Block (3 Rectangles, Vertical 9:16 Video, 2-column mobile) */}
        <Philosophy onSelectCake={() => scrollToSection('catalog')} />

        {/* 3. Dessert Showcase (3D Rotating Carousel + 2-col Mobile Catalog Grid) */}
        <DessertShowcase
          onOpenProductDetail={(product) => setSelectedProduct(product)}
          onAddToCart={(product) => handleAddToCart(product, 1)}
        />

        {/* 4. Payment & Delivery Terms */}
        <DeliveryPayment />

        {/* 5. About Us & Founder */}
        <AboutUs />

        {/* 6. Confectionery Workshop & Store Locations */}
        <Locations />
      </main>

      {/* Footer & Requisites */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveFromCart}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Pre-order Checkout Modal with 152-FZ */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onOrderSuccess={() => setCart([])}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 cut-corner-btn bg-choco-900 border border-gold-400 text-cream-50 px-5 py-3 shadow-2xl flex items-center gap-3 text-xs font-semibold animate-in fade-in slide-in-from-bottom-3 duration-300">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
