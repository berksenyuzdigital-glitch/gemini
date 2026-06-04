import React, { useState } from 'react';
import { 
  Search, ShoppingBag, Heart, Menu, X, ArrowRight, 
  ShieldCheck, Truck, RefreshCw, MapPin, Instagram, Facebook 
} from 'lucide-react';

// --- Data Types & Mock Assets ---
interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
}

const CATEGORIES = [
  { name: 'Watches', img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80' },
  { name: 'Silver Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80' },
  { name: 'Silver Bracelets', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80' },
  { name: 'Silver Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80' },
  { name: 'Stainless Steel', img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80' }
];

const FEATURED_PRODUCTS: Product[] = [
  { id: '1', name: 'Chronograph Classic Onyx', price: '₺14,500', category: 'Watches', image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=500&q=80' },
  { id: '2', name: '925 Sterling Venetian Chain', price: '₺3,200', category: 'Silver Necklaces', image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=500&q=80' },
  { id: '3', name: 'Minimalist Cuff Polished Steel', price: '₺1,850', category: 'Stainless Steel', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=500&q=80' },
  { id: '4', name: 'Signature Signet Diamond Accent', price: '₺4,900', category: 'Silver Rings', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=500&q=80' }
];

const INSTAGRAM_GALLERY = [
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1509941943102-10c232535736?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=400&q=80'
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-luxury-dark selection:text-luxury-white">
      
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-50 bg-luxury-white/80 backdrop-blur-lg border-b border-luxury-silver/30 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            
            {/* Action Trigger: Mobile Menu */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-luxury-dark hover:text-luxury-gray"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Premium Branding */}
            <div className="flex-1 md:flex-none text-center md:text-left">
              <a href="#" className="inline-block">
                <h1 className="font-serif text-xl sm:text-2xl tracking-extra uppercase font-semibold text-luxury-black">
                  Şenyüz <span className="text-luxury-gray font-light text-base sm:text-lg tracking-widest block sm:inline sm:ml-1">Saat & Gümüş</span>
                </h1>
              </a>
            </div>

            {/* Desktop Center Navigation Links */}
            <nav className="hidden md:flex space-x-10">
              {['Home', 'Watches', 'Silver Jewelry', 'Stainless Steel Collection', 'About Us'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase().replace(/ /g, '-')}`} 
                  className="text-xs font-medium tracking-widest uppercase text-luxury-dark hover:text-luxury-gray transition-colors duration-300"
                >
                  {link.split(' ')[0]}
                </a>
              ))}
            </nav>

            {/* Utility Interaction Icons */}
            <div className="flex items-center space-x-5 sm:space-x-6">
              <Search className="w-4.5 h-4.5 cursor-pointer text-luxury-dark hover:text-luxury-gray transition-colors" />
              <Heart className="w-4.5 h-4.5 cursor-pointer text-luxury-dark hover:text-luxury-gray transition-colors hidden sm:block" />
              <div className="relative cursor-pointer group">
                <ShoppingBag className="w-4.5 h-4.5 text-luxury-dark group-hover:text-luxury-gray transition-colors" />
                <span className="absolute -top-1.5 -right-1.5 bg-luxury-dark text-luxury-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide-out Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-luxury-white border-b border-luxury-silver/50 px-6 py-8 space-y-4 absolute w-full left-0 transition-all ease-in-out duration-300">
            {['Home', 'Watches', 'Silver Jewelry', 'Stainless Steel Collection', 'About Us', 'Contact'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm tracking-widest uppercase font-medium text-luxury-dark py-2 border-b border-luxury-light"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 2. Hero Presentation Section */}
      <section className="relative h-[85vh] bg-luxury-dark overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1495856458690-a5c452775790?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Showcase Asset" 
            className="w-full h-full object-cover opacity-45 transform scale-105 animate-[subtle-zoom_20s_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/80 via-luxury-black/30 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-luxury-white mb-6 leading-tight font-normal tracking-wide">
              Timeless Elegance <br /><span className="italic font-light text-luxury-silver">Redefined</span>
            </h2>
            <p className="text-luxury-gray text-base sm:text-lg max-w-lg mb-10 font-light tracking-wide leading-relaxed">
              Discover premium watches, sterling silver jewelry, and stainless steel accessories crafted for modern sophistication.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-luxury-white text-luxury-black px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-luxury-light transition-all duration-300 transform active:scale-95">
                Explore Collection
              </button>
              <button className="border border-luxury-white/40 text-luxury-white px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-luxury-white hover:text-luxury-black hover:border-luxury-white transition-all duration-300 transform active:scale-95">
                New Arrivals
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Categories Segment */}
      <section className="py-24 bg-luxury-white border-b border-luxury-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {CATEGORIES.map((cat, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col items-center">
                <div className="w-full aspect-[4/5] bg-luxury-light overflow-hidden mb-4 relative">
                  <img 
                    src={cat.img} 
                    alt={cat.name} 
                    className="w-full h-full object-cover filter grayscale contrast-115 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-luxury-black/5 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                </div>
                <span className="text-xs uppercase tracking-widest text-luxury-dark font-medium border-b border-transparent group-hover:border-luxury-dark pb-1 transition-all duration-300">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Premium Products Section */}
      <section className="py-24 bg-luxury-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[10px] uppercase tracking-extra font-bold text-luxury-gray block mb-2">Curated Selection</span>
              <h3 className="font-serif text-3xl sm:text-4xl text-luxury-dark font-normal">Featured Artifacts</h3>
            </div>
            <a href="#collections" className="hidden sm:flex items-center text-xs uppercase tracking-widest font-semibold hover:text-luxury-gray transition-colors border-b border-luxury-dark/20 pb-1">
              View All Masterpieces <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_PRODUCTS.map((product) => (
              <div key={product.id} className="group relative bg-luxury-white flex flex-col justify-between h-full border border-transparent hover:border-luxury-silver/20 transition-all duration-300">
                <div className="relative aspect-[3/4] overflow-hidden bg-luxury-white">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center group-hover:opacity-90 transition-opacity duration-500" 
                  />
                  
                  {/* Subtle Action Tray on Hover */}
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex space-x-2 z-20">
                    <button className="flex-1 bg-luxury-black text-luxury-white py-3.5 text-[10px] uppercase tracking-widest font-semibold hover:bg-luxury-dark transition-colors">
                      Add To Cart
                    </button>
                    <button className="bg-luxury-white border border-luxury-silver text-luxury-dark p-3.5 hover:bg-luxury-light transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6 text-center mt-auto">
                  <p className="text-[9px] text-luxury-gray uppercase tracking-widest mb-2 font-medium">{product.category}</p>
                  <h4 className="text-sm font-normal text-luxury-dark mb-2 tracking-wide line-clamp-1">{product.name}</h4>
                  <p className="text-sm font-light text-luxury-black tracking-wider">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Premium Collection Statement Block */}
      <section className="py-32 relative overflow-hidden bg-luxury-black text-center text-luxury-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#8C8C8C_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="text-[10px] uppercase tracking-extra font-bold text-luxury-gold mb-4 block">Exclusively Handcrafted</span>
          <h3 className="font-serif text-3xl sm:text-5xl mb-6 tracking-wide font-normal">
            Şenyüz Signature Collection
          </h3>
          <p className="text-luxury-gray text-base font-light tracking-wide mb-12 max-w-xl mx-auto leading-relaxed">
            A curated selection of timeless pieces designed for everyday elegance and special moments. Crafted with absolute precision, worn with unmistakable prestige.
          </p>
          <button className="border-b-2 border-luxury-white pb-1.5 uppercase tracking-widest text-xs font-semibold hover:text-luxury-gold hover:border-luxury-gold transition-colors duration-300">
            Discover the Masterpieces
          </button>
        </div>
      </section>

      {/* 6. Brand Core Trust Metrics */}
      <section className="py-20 bg-luxury-white border-b border-luxury-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center max-w-sm mx-auto">
              <Truck className="w-7 h-7 text-luxury-dark mb-5" strokeWidth={1.2} />
              <h5 className="uppercase tracking-widest text-xs mb-3 font-semibold">Free Insured Delivery</h5>
              <p className="text-xs text-luxury-gray font-light leading-relaxed">Complimentary global door-to-door fully insured courier service.</p>
            </div>
            <div className="flex flex-col items-center max-w-sm mx-auto">
              <ShieldCheck className="w-7 h-7 text-luxury-dark mb-5" strokeWidth={1.2} />
              <h5 className="uppercase tracking-widest text-xs mb-3 font-semibold">Authenticity Guarantee</h5>
              <p className="text-xs text-luxury-gray font-light leading-relaxed">Every purchase is verified and includes an official certificate of execution.</p>
            </div>
            <div className="flex flex-col items-center max-w-sm mx-auto">
              <RefreshCw className="w-7 h-7 text-luxury-dark mb-5" strokeWidth={1.2} />
              <h5 className="uppercase tracking-widest text-xs mb-3 font-semibold">Elegant Exchanges</h5>
              <p className="text-xs text-luxury-gray font-light leading-relaxed">A seamless, private 30-day return framework for absolute security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. About Brand Presentation narrative */}
      <section id="about-us" className="py-28 bg-luxury-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-[10px] uppercase tracking-extra font-bold text-luxury-gray mb-4 block">Our Heritage</span>
          <h3 className="font-serif text-3xl sm:text-4xl text-luxury-dark mb-8 font-normal tracking-wide">Elegance, Quality & Absolute Trust</h3>
          <p className="text-luxury-dark/80 text-base sm:text-lg font-light leading-loose tracking-wide max-w-3xl mx-auto italic font-serif">
            "Şenyüz Saat & Gümüş combines timeless sophistication, exquisite quality materials, and foundational client trust to deliver a highly refined personal narrative within the luxury world of precision watches and sterling silver artistry."
          </p>
        </div>
      </section>

      {/* 8. Modern Lifestyle Imagery Space */}
      <section className="bg-luxury-light grid grid-cols-2 md:grid-cols-4 gap-0">
        {INSTAGRAM_GALLERY.map((imgUrl, itemIdx) => (
          <div key={itemIdx} className="aspect-square relative overflow-hidden group cursor-pointer">
            <img 
              src={imgUrl} 
              alt="Lifestyle Media Object" 
              className="w-full h-full object-cover filter contrast-105 brightness-95 group-hover:scale-105 transition-all duration-700 ease-out" 
            />
            <div className="absolute inset-0 bg-luxury-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="w-5 h-5 text-luxury-white" />
            </div>
          </div>
        ))}
      </section>

      {/* 9. Comprehensive Global Footer */}
      <footer className="bg-luxury-black text-luxury-white pt-24 pb-12 border-t border-luxury-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-luxury-dark">
            
            <div className="md:col-span-2 space-y-6">
              <h4 className="font-serif text-xl tracking-extra uppercase font-medium">ŞENYÜZ</h4>
              <p className="text-luxury-gray text-xs font-light max-w-sm leading-relaxed">
                Elevating spaces, characters, and milestones since inception. Bringing precise execution across dynamic curated luxury goods markets.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="p-2 bg-luxury-dark text-luxury-gray hover:text-luxury-white transition-colors rounded-sm"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="p-2 bg-luxury-dark text-luxury-gray hover:text-luxury-white transition-colors rounded-sm"><Facebook className="w-4 h-4" /></a>
              </div>
            </div>

            <div className="space-y-5">
              <h5 className="text-[11px] uppercase tracking-widest text-luxury-silver font-bold">Client Support</h5>
              <ul className="space-y-3 text-xs font-light text-luxury-gray">
                <li><a href="#" className="hover:text-luxury-white transition-colors flex items-center"><MapPin className="w-3 h-3 mr-2" /> Store Locations</a></li>
                <li><a href="#" className="hover:text-luxury-white transition-colors">Private Consultations</a></li>
                <li><a href="#" className="hover:text-luxury-white transition-colors">Shipping & Bespoke Care</a></li>
                <li><a href="#" className="hover:text-luxury-white transition-colors">Track Luxury Order</a></li>
              </ul>
            </div>

            <div className="space-y-5">
              <h5 className="text-[11px] uppercase tracking-widest text-luxury-silver font-bold">Bespoke Updates</h5>
              <p className="text-xs font-light text-luxury-gray leading-relaxed">Subscribe to experience exclusive drop announcements and deep heritage narratives.</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex border-b border-luxury-gray/40 pb-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent border-none outline-none text-xs w-full text-luxury-white placeholder-luxury-gray/60"
                  required
                />
                <button type="submit" className="text-[10px] uppercase tracking-widest font-bold hover:text-luxury-gold transition-colors ml-2">Join</button>
              </form>
            </div>

          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-light text-luxury-gray tracking-wide space-y-4 md:space-y-0">
            <p>&copy; {new Date().getFullYear()} Şenyüz Saat & Gümüş. Crafted to Perfection.</p>
            <div className="space-x-6">
              <a href="#" className="hover:text-luxury-white transition-colors">Privacy Governance</a>
              <a href="#" className="hover:text-luxury-white transition-colors">Terms of Operations</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}