// Global JavaScript logic for Darshan Industries

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Global Header HTML
    injectHeader();
    
    // 2. Inject Global Quote Request Modal HTML
    injectQuoteModal();
    
    // 3. Inject Mobile Navigation Menu HTML
    injectMobileMenu();
    
    // 4. Inject Global Footer HTML
    injectFooter();
    
    // 5. Highlight Active Navigation Link
    highlightActiveLink();
    
    // 6. Initialize Interactive Listeners
    initInteractions();
    
    // 7. Initialize Scroll Effects & Intersection Observer for animations
    initAnimations();
});

// Function to automatically highlight the active page link
function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
    
    const navLinks = document.querySelectorAll('#global-nav a, #mobile-menu-container nav a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === filename) {
            link.classList.remove('text-on-surface-variant');
            link.classList.add('text-primary', 'font-bold');
            if (window.innerWidth >= 1280 && link.closest('#global-nav')) {
                link.classList.add('border-b-2', 'border-primary', 'pb-1');
            }
        }
    });
}

function injectHeader() {
    const header = document.getElementById('global-header');
    if (!header) return;
    
    header.className = "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#00112c]/10 h-[56px] flex items-center transition-all duration-300";
    header.innerHTML = `
    <nav class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full h-full flex items-center justify-between">
        <!-- Left: Logo -->
        <a href="index.html" class="flex items-center shrink-0">
            <img src="logo_full.png" alt="Darshan Industries Logo" class="h-8 md:h-10 object-contain">
        </a>

        <!-- Center: Links (Desktop) -->
        <div id="global-nav" class="hidden lg:flex items-center gap-8">
            <a class="font-body-md text-sm text-[#434750] hover:text-[#00112c] transition-colors" href="index.html">Home</a>
            <a class="font-body-md text-sm text-[#434750] hover:text-[#00112c] transition-colors" href="products.html">Products</a>
            <a class="font-body-md text-sm text-[#434750] hover:text-[#00112c] transition-colors" href="services.html">Services</a>
            <a class="font-body-md text-sm text-[#434750] hover:text-[#00112c] transition-colors" href="supply-chain.html">Network</a>
            <a class="font-body-md text-sm text-[#434750] hover:text-[#00112c] transition-colors" href="quality.html">Quality</a>
            <a class="font-body-md text-sm text-[#434750] hover:text-[#00112c] transition-colors" href="about.html">About</a>
            <a class="font-body-md text-sm text-[#434750] hover:text-[#00112c] transition-colors" href="contact.html">Contact</a>
        </div>

        <!-- Right: Actions -->
        <div class="flex items-center gap-3">
            <!-- Chat with Us -->
            <a href="https://wa.me/916351583442" target="_blank" class="hidden md:flex items-center gap-2 border border-[#25D366] text-[#25d366] hover:bg-[#25d366] hover:text-white px-4 py-1.5 rounded-full font-label-md text-xs font-semibold uppercase tracking-wider transition-all duration-300">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.448L0 24zm6.59-4.846c1.666.988 3.311 1.485 5.35 1.486 5.568 0 10.1-4.52 10.104-10.082.002-2.694-1.043-5.228-2.946-7.133C17.202 1.52 14.685.474 12.002.474c-5.572 0-10.105 4.52-10.109 10.083-.002 2.057.537 4.061 1.558 5.82L2.43 21.6l5.217-1.368zM17.486 14.4c-.3-.15-1.782-.88-2.05-.98-.268-.1-.463-.15-.658.15-.195.3-.755.95-.926 1.15-.17.2-.34.225-.64.075-.3-.15-1.265-.467-2.41-1.487-.89-.794-1.49-1.775-1.665-2.075-.175-.3-.018-.462.13-.61.137-.135.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C9.9 8.925 9.3 7.46 9.05 6.86c-.243-.586-.497-.58-.68-.59-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 3.75-.275.3-.575.6-.975 1.05-.4.45-.725.925-.925 1.225-.2.3-.225.525-.075.675.15.15.3.35.45.525.15.175.2.3.3.5.1.2.05.375-.025.525-.075-.15-.675-1.615-.925-2.215-.24-.58-.5-.58-.68-.58h-.575c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.22 5.11 4.52.714.31 1.27.495 1.7.63.717.227 1.37.195 1.885.118.57-.085 1.783-.73 2.033-1.433.25-.7.25-1.3.175-1.433-.075-.133-.275-.213-.575-.363z"/>
                </svg>
                Chat with Us
            </a>
            
            <!-- Request Quote Button -->
            <button class="bg-[#00112c] hover:bg-[#002552] text-white px-5 py-2.5 rounded-full font-label-md text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm shrink-0">
                Request Quote
            </button>

            <!-- Hamburger Icon (Mobile) -->
            <button aria-label="Open Mobile Menu" class="lg:hidden flex items-center justify-center text-[#00112c] hover:bg-black/5 w-10 h-10 rounded-full transition-all shrink-0">
                <span class="material-symbols-outlined">menu</span>
            </button>
        </div>
    </nav>
    `;
}

function injectFooter() {
    const footer = document.getElementById('global-footer');
    if (!footer) return;
    
    footer.className = "bg-[#00112c] py-20 border-t border-white/10 mt-auto text-white";
    footer.innerHTML = `
    <div class="max-w-container-max mx-auto px-margin-desktop">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-20">
            <div class="space-y-6 flex flex-col justify-start items-start">
                <div class="flex items-center gap-3">
                    <img src="logo_full.png" alt="Darshan Industries Logo" class="h-16 md:h-20 object-contain brightness-0 invert">
                </div>
                <p class="font-body-md text-body-md text-white/70 text-sm text-left">
                    Precision engineering and global sourcing excellence since 1998. Your trusted partner in specialty chemical trading.
                </p>
            </div>
            <div class="md:pl-12 flex flex-col justify-start items-start">
                <h5 class="font-label-md text-label-md text-white font-bold uppercase tracking-widest mb-6">Explore</h5>
                <ul class="space-y-4 text-left">
                    <li><a class="font-body-md text-body-md text-white/70 hover:text-white transition-colors text-sm" href="products.html">Product Catalog</a></li>
                    <li><a class="font-body-md text-body-md text-white/70 hover:text-white transition-colors text-sm" href="services.html">Services & Capabilities</a></li>
                    <li><a class="font-body-md text-body-md text-white/70 hover:text-white transition-colors text-sm" href="supply-chain.html">Global Network</a></li>
                </ul>
            </div>
            <div class="flex flex-col justify-start items-start">
                <h5 class="font-label-md text-label-md text-white font-bold uppercase tracking-widest mb-6">Quality & Corporate</h5>
                <ul class="space-y-4 text-left">
                    <li><a class="font-body-md text-body-md text-white/70 hover:text-white transition-colors text-sm" href="quality.html">Quality & Compliance</a></li>
                    <li><a class="font-body-md text-body-md text-white/70 hover:text-white transition-colors text-sm" href="about.html">About Us</a></li>
                    <li><a class="font-body-md text-body-md text-white/70 hover:text-white transition-colors text-sm" href="contact.html">Contact Support</a></li>
                </ul>
            </div>
            <div class="flex flex-col justify-start items-start">
                <h5 class="font-label-md text-label-md text-white font-bold uppercase tracking-widest mb-6">Connect</h5>
                <p class="font-body-md text-body-md text-white/70 mb-3 text-sm text-left">Corporate Headquarters: 401, 4th floor, Redcoral hamptons (commercial complex), opp telephone exchange, behind Darshanam Aries, Gotri road, Vadodara-390021.</p>
                <p class="font-body-md text-body-md text-white/70 mb-1 text-sm text-left">Direct Line: +91 63515 83442</p>
                <p class="font-body-md text-body-md text-white/70 mb-1 text-sm text-left">Secondary: +91 77790 49909</p>
                <p class="font-body-md text-body-md text-white/70 mb-6 text-sm text-left">Email: info@darshanindustries.co</p>
                <div class="flex gap-4">
                    <a aria-label="LinkedIn" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#00112c] transition-all" href="https://www.linkedin.com/in/darshan-industries-845427413/" target="_blank">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a aria-label="Twitter" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#00112c] transition-all" href="https://x.com/Darshan090803" target="_blank">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.48.75 2.78 1.89 3.54-.7 0-1.36-.22-1.94-.53v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.54 1.68 2.11 2.9 3.96 2.94-1.44 1.13-3.26 1.81-5.23 1.81-.34 0-.67-.02-1-.06 1.88 1.2 4.11 1.9 6.5 1.9 7.8 0 12.07-6.46 12.07-12.07 0-.18 0-.37-.01-.55.83-.59 1.54-1.33 2.11-2.17z"></path></svg>
                    </a>
                    <a aria-label="Instagram" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#00112c] transition-all" href="https://www.instagram.com/darshanindustries_pvt_ltd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p class="font-body-md text-body-md text-white/50 text-xs">
                © 2026 Darshan Industries Pvt. Ltd. All rights reserved. Precision Sourced. Globally Delivered.
            </p>
            <div class="flex flex-wrap justify-center gap-8 text-xs text-white/50">
                <a class="hover:text-white transition-colors" href="#">Privacy Policy</a>
                <a class="hover:text-white transition-colors" href="#">Terms of Service</a>
                <a class="hover:text-white transition-colors" href="quality.html">Compliance</a>
            </div>
        </div>
    </div>
    `;
}

// Function to dynamically inject Quote Modal
function injectQuoteModal() {
    if (document.getElementById('quote-modal-overlay')) return;
    
    const modalHTML = `
    <div id="quote-modal-overlay" class="modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-[#00112c]/40 backdrop-blur-md px-4 pointer-events-none">
      <div class="modal-container bg-white rounded-[2rem] p-8 md:p-10 max-w-lg w-full shadow-2xl relative border border-white/60">
        <button id="close-quote-modal" class="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#f4f3f7] hover:bg-[#eeedf2] flex items-center justify-center text-[#1a1b1f] transition-colors">
          <span class="material-symbols-outlined">close</span>
        </button>
        
        <div id="modal-form-content">
          <h2 class="font-headline-lg text-[28px] font-bold text-[#00112c] mb-2">Request a Quote</h2>
          <p class="font-body-md text-[#434750] mb-6 text-sm">Submit your raw material requirements and our procurement team will contact you.</p>
          
          <form id="quote-request-form" class="space-y-4">
            <div>
              <label class="block text-xs font-semibold text-[#434750] uppercase tracking-wider mb-1">Full Name *</label>
              <input required class="w-full bg-[#f4f3f7] border border-[#c4c6d0]/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00112c] focus:bg-white transition-all text-sm" type="text" placeholder="John Doe" id="quote-name">
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-[#434750] uppercase tracking-wider mb-1">Company *</label>
                <input required class="w-full bg-[#f4f3f7] border border-[#c4c6d0]/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00112c] focus:bg-white transition-all text-sm" type="text" placeholder="Enterprise Inc." id="quote-company">
              </div>
              <div>
                <label class="block text-xs font-semibold text-[#434750] uppercase tracking-wider mb-1">Email Address *</label>
                <input required class="w-full bg-[#f4f3f7] border border-[#c4c6d0]/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00112c] focus:bg-white transition-all text-sm" type="email" placeholder="john@company.com" id="quote-email">
              </div>
            </div>
            
            <div>
              <label class="block text-xs font-semibold text-[#434750] uppercase tracking-wider mb-1">Product Category *</label>
              <select required class="w-full bg-[#f4f3f7] border border-[#c4c6d0]/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00112c] focus:bg-white transition-all text-sm text-[#1a1b1f]" id="quote-category">
                <option>Specialty Chemicals</option>
                <option>Solvents & Acids</option>
                <option>Pharma Intermediates</option>
                <option>Metallic Salts</option>
                <option>Custom Sourcing</option>
              </select>
            </div>
            
            <div>
              <label class="block text-xs font-semibold text-[#434750] uppercase tracking-wider mb-1">Message Details *</label>
              <textarea required rows="3" class="w-full bg-[#f4f3f7] border border-[#c4c6d0]/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00112c] focus:bg-white transition-all text-sm resize-none" placeholder="Volume requirements, destination port..." id="quote-message"></textarea>
            </div>
            
            <button type="submit" class="w-full py-4 rounded-full bg-[#00112c] text-white text-sm font-semibold uppercase tracking-widest hover:bg-[#002552] transition-colors shadow-lg flex items-center justify-center gap-2">
              Submit Inquiry <span class="material-symbols-outlined text-[18px]">send</span>
            </button>
          </form>
        </div>
        
        <div id="modal-success-content" class="hidden text-center py-10 space-y-6">
          <div class="w-20 h-20 rounded-full bg-[#e6f4ea] flex items-center justify-center mx-auto text-[#137333]">
            <span class="material-symbols-outlined text-5xl" style="font-variation-settings: 'FILL' 1;">check_circle</span>
          </div>
          <h2 class="font-headline-lg text-[24px] font-bold text-[#00112c]">Inquiry Submitted!</h2>
          <p class="font-body-md text-[#434750] max-w-xs mx-auto text-sm">Thank you for contacting Darshan Industries. Our procurement technical desk will respond within 4 business hours.</p>
          <button id="success-close-btn" class="bg-[#00112c] text-white px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-[#002552] transition-colors">
            Done
          </button>
        </div>
      </div>
    </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Function to dynamically inject Mobile Nav Menu Drawer
function injectMobileMenu() {
    if (document.getElementById('mobile-menu-overlay')) return;
    
    const menuHTML = `
    <div id="mobile-menu-overlay" class="fixed inset-0 z-[90] bg-[#00112c]/40 backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300">
      <div class="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl flex flex-col justify-between p-8 transform translate-x-full transition-transform duration-300" id="mobile-menu-container">
        <div>
          <div class="flex justify-between items-center mb-10">
            <div class="flex items-center gap-2">
              <img src="logo_icon.png" alt="Darshan Industries Logo Icon" class="h-7 object-contain">
              <span class="font-bold text-[#00112c] tracking-tight text-base font-headline-lg">Darshan Industries</span>
            </div>
            <button id="close-mobile-menu" class="w-10 h-10 rounded-full bg-[#f4f3f7] hover:bg-[#eeedf2] flex items-center justify-center text-[#1a1b1f]">
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <nav class="flex flex-col gap-6">
            <a class="text-lg font-semibold text-[#1a1b1f] hover:text-[#00112c] transition-colors border-b border-gray-100 pb-2" href="index.html">Home</a>
            <a class="text-lg font-semibold text-[#1a1b1f] hover:text-[#00112c] transition-colors border-b border-gray-100 pb-2" href="products.html">Product Catalog</a>
            <a class="text-lg font-semibold text-[#1a1b1f] hover:text-[#00112c] transition-colors border-b border-gray-100 pb-2" href="services.html">Services & Capabilities</a>
            <a class="text-lg font-semibold text-[#1a1b1f] hover:text-[#00112c] transition-colors border-b border-gray-100 pb-2" href="supply-chain.html">Supply Chain Network</a>
            <a class="text-lg font-semibold text-[#1a1b1f] hover:text-[#00112c] transition-colors border-b border-gray-100 pb-2" href="quality.html">Quality & Compliance</a>
            <a class="text-lg font-semibold text-[#1a1b1f] hover:text-[#00112c] transition-colors border-b border-gray-100 pb-2" href="about.html">About Us</a>
            <a class="text-lg font-semibold text-[#1a1b1f] hover:text-[#00112c] transition-colors border-b border-gray-100 pb-2" href="contact.html">Contact Us</a>
          </nav>
        </div>
        <div class="mt-8 space-y-3">
          <a href="https://wa.me/916351583442" target="_blank" class="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-4 rounded-full font-semibold uppercase tracking-widest transition-colors text-sm shadow-md flex items-center justify-center gap-2">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.448L0 24zm6.59-4.846c1.666.988 3.311 1.485 5.35 1.486 5.568 0 10.1-4.52 10.104-10.082.002-2.694-1.043-5.228-2.946-7.133C17.202 1.52 14.685.474 12.002.474c-5.572 0-10.105 4.52-10.109 10.083-.002 2.057.537 4.061 1.558 5.82L2.43 21.6l5.217-1.368zM17.486 14.4c-.3-.15-1.782-.88-2.05-.98-.268-.1-.463-.15-.658.15-.195.3-.755.95-.926 1.15-.17.2-.34.225-.64.075-.3-.15-1.265-.467-2.41-1.487-.89-.794-1.49-1.775-1.665-2.075-.175-.3-.018-.462.13-.61.137-.135.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C9.9 8.925 9.3 7.46 9.05 6.86c-.243-.586-.497-.58-.68-.59-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 3.75-.275.3-.575.6-.975 1.05-.4.45-.725.925-.925 1.225-.2.3-.225.525-.075.675.15.15.3.35.45.525.15.175.2.3.3.5.1.2.05.375-.025.525-.075-.15-.675-1.615-.925-2.215-.24-.58-.5-.58-.68-.58h-.575c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.22 5.11 4.52.714.31 1.27.495 1.7.63.717.227 1.37.195 1.885.118.57-.085 1.783-.73 2.033-1.433.25-.7.25-1.3.175-1.433-.075-.133-.275-.213-.575-.363z"/></svg>
            Chat with Us
          </a>
          <button id="mobile-quote-btn" class="w-full bg-[#00112c] text-white py-4 rounded-full font-semibold uppercase tracking-widest hover:bg-[#002552] transition-colors text-sm shadow-md">
            Request Quote
          </button>
        </div>
      </div>
    </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', menuHTML);
}

// Function to handle interactions (modal toggle, mobile menu toggle, form submit)
function initInteractions() {
    const modalOverlay = document.getElementById('quote-modal-overlay');
    const closeBtn = document.getElementById('close-quote-modal');
    const successCloseBtn = document.getElementById('success-close-btn');
    const formContent = document.getElementById('modal-form-content');
    const successContent = document.getElementById('modal-success-content');
    const form = document.getElementById('quote-request-form');
    
    // Open Modal function
    function openModal() {
        modalOverlay.classList.add('active');
        formContent.classList.remove('hidden');
        successContent.classList.add('hidden');
        form.reset();
    }
    
    // Close Modal function
    function closeModal() {
        modalOverlay.classList.remove('active');
    }
    
    // Wire up all "Request Quote", "Get Quote", "Get in Touch", "Submit Inquiry", or "Consultation" buttons
    document.body.addEventListener('click', (e) => {
        const target = e.target.closest('button, a');
        if (!target) return;
        
        const text = target.textContent.trim().toLowerCase();
        if (
            text.includes('request quote') || 
            text.includes('get quote') || 
            text.includes('get in touch') || 
            text.includes('submit inquiry') || 
            text.includes('request consultation') || 
            text.includes('schedule a consultation') || 
            target.id === 'mobile-quote-btn'
        ) {
            e.preventDefault();
            // Close mobile menu if open
            closeMobileMenu();
            openModal();
        }
    });
    
    // Modal Close actions
    closeBtn.addEventListener('click', closeModal);
    successCloseBtn.addEventListener('click', closeModal);
    
    // Click outside modal container to close
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Handle Form Submit
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show submitting state on button
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Submitting...';
        
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            
            // Switch to success view
            formContent.classList.add('hidden');
            successContent.classList.remove('hidden');
        }, 1200);
    });
    
    // Mobile menu toggle logic
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuContainer = document.getElementById('mobile-menu-container');
    const closeMobileBtn = document.getElementById('close-mobile-menu');
    
    function openMobileMenu() {
        mobileMenuOverlay.classList.remove('pointer-events-none');
        mobileMenuOverlay.classList.add('opacity-100');
        mobileMenuContainer.classList.remove('translate-x-full');
    }
    
    function closeMobileMenu() {
        mobileMenuOverlay.classList.add('pointer-events-none');
        mobileMenuOverlay.classList.remove('opacity-100');
        mobileMenuContainer.classList.add('translate-x-full');
    }
    
    // Listen for mobile hamburger click
    document.body.addEventListener('click', (e) => {
        const hamburger = e.target.closest('button');
        if (!hamburger) return;
        
        const iconSpan = hamburger.querySelector('.material-symbols-outlined');
        if (iconSpan && iconSpan.textContent.trim() === 'menu') {
            e.preventDefault();
            openMobileMenu();
        }
    });
    
    closeMobileBtn.addEventListener('click', closeMobileMenu);
    mobileMenuOverlay.addEventListener('click', (e) => {
        if (e.target === mobileMenuOverlay) {
            closeMobileMenu();
        }
    });
}

// Function to initialize scroll reveals and animations
function initAnimations() {
    // Scroll reveal effects
    const revealElements = document.querySelectorAll('.glass-card, .glass-panel, .grid > div, section p, section h2');
    
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-6', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(el => {
        // Only apply if it doesn't already have transition classes to prevent clashing
        if (!el.classList.contains('carousel-slide')) {
            el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-6');
            revealObserver.observe(el);
        }
    });
    
    // Navbar scroll effect
    const nav = document.querySelector('nav, header');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                nav.classList.add('shadow-md', 'bg-white/95');
                nav.classList.remove('bg-transparent', 'bg-glass-bg');
            } else {
                nav.classList.remove('shadow-md', 'bg-white/95');
                nav.classList.add('bg-glass-bg');
            }
        });
    }
}
