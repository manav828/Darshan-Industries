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
            <a class="font-body-md text-sm text-[#434750] hover:text-[#00112c] transition-colors" href="about.html">About</a>
            <a class="font-body-md text-sm text-[#434750] hover:text-[#00112c] transition-colors" href="products.html">Products</a>
            <a class="font-body-md text-sm text-[#434750] hover:text-[#00112c] transition-colors" href="services.html">Services</a>
            <!-- <a class="font-body-md text-sm text-[#434750] hover:text-[#00112c] transition-colors" href="industries.html">Industries</a> -->
            <a class="font-body-md text-sm text-[#434750] hover:text-[#00112c] transition-colors" href="supply-chain.html">Network</a>
            <a class="font-body-md text-sm text-[#434750] hover:text-[#00112c] transition-colors" href="quality.html">Quality</a>
            <a class="font-body-md text-sm text-[#434750] hover:text-[#00112c] transition-colors" href="contact.html">Contact</a>
        </div>

        <!-- Right: Actions -->
        <div class="flex items-center gap-3">
            <!-- Chat with Us -->
            <a href="https://wa.me/916351583442" target="_blank" class="hidden md:flex items-center gap-2 border border-[#25D366] text-[#25d366] hover:bg-[#25d366] hover:text-white px-4 py-1.5 rounded-full font-label-md text-xs font-semibold uppercase tracking-wider transition-all duration-300">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 2c-5.514 0-9.969 4.456-9.969 9.971 0 1.761.459 3.479 1.332 5.008L2 22l5.176-1.332a9.89 9.89 0 004.855 1.27c5.514 0 9.969-4.456 9.969-9.971C22 6.456 17.545 2 12.031 2zm6.262 14.382c-.272.766-1.584 1.393-2.176 1.488-.512.082-1.182.148-3.328-.718-2.748-1.11-4.516-3.896-4.654-4.082-.137-.187-1.118-1.487-1.118-2.839 0-1.352.709-2.014.96-2.28.251-.266.551-.333.734-.333.183 0 .366.002.522.01.161.008.38.006.59.508.22.527.751 1.83.817 1.963.066.133.11.288.022.464-.088.176-.132.288-.264.443-.132.155-.275.347-.393.466-.132.133-.27.279-.116.544.154.266.685 1.13 1.472 1.83.844.751 1.554.983 1.78.983.226 0 .43-.221.583-.398.188-.22.428-.482.68-.838.196-.272.404-.22.684-.117.28.102 1.776.837 2.084.992.308.156.514.23.59.356.076.127.076.732-.196 1.498z"/>
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
                    <a aria-label="X" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#00112c] transition-all" href="https://x.com/Darshan090803" target="_blank">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
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
              <label for="quote-name" class="block text-xs font-semibold text-[#434750] uppercase tracking-wider mb-1">Full Name *</label>
              <input required name="name" class="w-full bg-[#f4f3f7] border border-[#c4c6d0]/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00112c] focus:bg-white transition-all text-sm" type="text" placeholder="John Doe" id="quote-name">
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="quote-company" class="block text-xs font-semibold text-[#434750] uppercase tracking-wider mb-1">Company *</label>
                <input required name="company" class="w-full bg-[#f4f3f7] border border-[#c4c6d0]/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00112c] focus:bg-white transition-all text-sm" type="text" placeholder="Enterprise Inc." id="quote-company">
              </div>
              <div>
                <label for="quote-email" class="block text-xs font-semibold text-[#434750] uppercase tracking-wider mb-1">Email Address *</label>
                <input required name="email" class="w-full bg-[#f4f3f7] border border-[#c4c6d0]/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00112c] focus:bg-white transition-all text-sm" type="email" placeholder="john@company.com" id="quote-email">
              </div>
            </div>
            
            <div>
              <label for="quote-category" class="block text-xs font-semibold text-[#434750] uppercase tracking-wider mb-1">Product Category *</label>
              <select required name="category" class="w-full bg-[#f4f3f7] border border-[#c4c6d0]/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00112c] focus:bg-white transition-all text-sm text-[#1a1b1f]" id="quote-category">
                <option>Specialty Chemicals</option>
                <option>Solvents & Acids</option>
                <option>Pharma Intermediates</option>
                <option>Metallic Salts</option>
                <option>Custom Sourcing</option>
              </select>
            </div>
            
            <div>
              <label for="quote-message" class="block text-xs font-semibold text-[#434750] uppercase tracking-wider mb-1">Message Details *</label>
              <textarea required name="message" rows="3" class="w-full bg-[#f4f3f7] border border-[#c4c6d0]/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00112c] focus:bg-white transition-all text-sm resize-none" placeholder="Volume requirements, destination port..." id="quote-message"></textarea>
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
            <a class="text-lg font-semibold text-[#1a1b1f] hover:text-[#00112c] transition-colors border-b border-gray-100 pb-2" href="about.html">About Us</a>
            <a class="text-lg font-semibold text-[#1a1b1f] hover:text-[#00112c] transition-colors border-b border-gray-100 pb-2" href="products.html">Product Catalog</a>
            <a class="text-lg font-semibold text-[#1a1b1f] hover:text-[#00112c] transition-colors border-b border-gray-100 pb-2" href="services.html">Services & Capabilities</a>
            <!-- <a class="text-lg font-semibold text-[#1a1b1f] hover:text-[#00112c] transition-colors border-b border-gray-100 pb-2" href="industries.html">Industries We Serve</a> -->
            <a class="text-lg font-semibold text-[#1a1b1f] hover:text-[#00112c] transition-colors border-b border-gray-100 pb-2" href="supply-chain.html">Supply Chain Network</a>
            <a class="text-lg font-semibold text-[#1a1b1f] hover:text-[#00112c] transition-colors border-b border-gray-100 pb-2" href="quality.html">Quality & Compliance</a>
            <a class="text-lg font-semibold text-[#1a1b1f] hover:text-[#00112c] transition-colors border-b border-gray-100 pb-2" href="contact.html">Contact Us</a>
          </nav>
        </div>
        <div class="mt-8 space-y-3">
          <a href="https://wa.me/916351583442" target="_blank" class="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-4 rounded-full font-semibold uppercase tracking-widest transition-colors text-sm shadow-md flex items-center justify-center gap-2">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 2c-5.514 0-9.969 4.456-9.969 9.971 0 1.761.459 3.479 1.332 5.008L2 22l5.176-1.332a9.89 9.89 0 004.855 1.27c5.514 0 9.969-4.456 9.969-9.971C22 6.456 17.545 2 12.031 2zm6.262 14.382c-.272.766-1.584 1.393-2.176 1.488-.512.082-1.182.148-3.328-.718-2.748-1.11-4.516-3.896-4.654-4.082-.137-.187-1.118-1.487-1.118-2.839 0-1.352.709-2.014.96-2.28.251-.266.551-.333.734-.333.183 0 .366.002.522.01.161.008.38.006.59.508.22.527.751 1.83.817 1.963.066.133.11.288.022.464-.088.176-.132.288-.264.443-.132.155-.275.347-.393.466-.132.133-.27.279-.116.544.154.266.685 1.13 1.472 1.83.844.751 1.554.983 1.78.983.226 0 .43-.221.583-.398.188-.22.428-.482.68-.838.196-.272.404-.22.684-.117.28.102 1.776.837 2.084.992.308.156.514.23.59.356.076.127.076.732-.196 1.498z"/></svg>
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
    
    // Wire up all "Request Quote", "Get Quote", "Get in Touch", "Submit Inquiry" buttons (ignoring consultation / contact links)
    document.body.addEventListener('click', (e) => {
        const target = e.target.closest('button, a');
        if (!target) return;
        
        // If it's a link to contact page or a phone link, let it handle natively
        if (target.tagName === 'A') {
            const href = target.getAttribute('href') || '';
            if (href.includes('contact.html') || href.startsWith('tel:') || href.startsWith('mailto:')) {
                return;
            }
        }
        
        const text = target.textContent.trim().toLowerCase();
        // Ignore any text with the word "consultation" or containing dial instructions
        if (text.includes('consultation') || text.includes('procurement team')) {
            return;
        }
        
        if (
            text.includes('request quote') || 
            text.includes('get quote') || 
            text.includes('get in touch') || 
            target.id === 'mobile-quote-btn'
        ) {
            e.preventDefault();
            closeMobileMenu();
            window.location.href = 'contact.html';
            return;
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

        const formData = new FormData(form);
        const payload = Object.fromEntries(formData);
        
        fetch('/api/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(async (response) => {
            if (response.status === 404) {
                throw new Error('Endpoint not found (404)');
            }
            const data = await response.json();
            if (response.ok && data.success) {
                // Production success
                formContent.classList.add('hidden');
                successContent.classList.remove('hidden');
                form.reset();
            } else {
                alert(data.message || 'Failed to submit quote request. Please try again.');
            }
        })
        .catch((error) => {
            console.warn('Backend API not detected. Falling back to Demo Mode Simulation.', error);
            // Run Demo simulation fallback
            setTimeout(() => {
                const descParagraph = successContent.querySelector('p');
                if (descParagraph && !descParagraph.innerHTML.includes('[Demo Mode]')) {
                    descParagraph.innerHTML = '<strong>[Demo Mode]</strong> ' + descParagraph.innerHTML;
                }
                formContent.classList.add('hidden');
                successContent.classList.remove('hidden');
                form.reset();
            }, 1200);
        })
        .then(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        });
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
    // Filter out elements in the hero / first section of the page to prevent LCP/FCP delays
    const revealElements = Array.from(document.querySelectorAll('.glass-card, .glass-panel, .grid > div, section p, section h2'))
        .filter(el => {
            const section = el.closest('section');
            if (!section) return true;
            
            // Skip first section in main
            const main = document.querySelector('main');
            if (main) {
                const firstSection = main.querySelector('section');
                if (firstSection === section) {
                    return false;
                }
            }
            
            // Skip sections with h1 (heroes)
            if (section.querySelector('h1')) {
                return false;
            }
            
            return true;
        });
    
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
