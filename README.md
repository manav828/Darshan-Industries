# Darshan Industries Pvt. Ltd. - Website Documentation & SEO Summary

This repository contains the static B2B website for **Darshan Industries Pvt. Ltd.** It includes chemical product catalogs, sourcing capability logs, global supply chain network details, and quality compliance frameworks.

---

## 1. Technical Stack
* **Structure**: Static HTML5 pages.
* **Styling**: Tailwind CSS loaded via CDN (including forms and container-query plugins) + shared custom stylesheet ([main.css](file:///D:/Manav/website/kishan/main.css)).
* **Logic**: Vanilla JavaScript ([main.js](file:///D:/Manav/website/kishan/main.js)) manages interactive features, carousel components, modals, and dynamic header/footer injection.
* **Typography**: Google Fonts (Manrope for headings, Hanken Grotesk for body copy).
* **Icons**: Google Material Symbols Outlined.

---

## 2. Page & Template Architecture
The website implements a dynamic layout engine. Main navigation elements (header, mobile drawer, footer, and request modal) are injected on page load by `main.js`:

* **`injectHeader()`**: Injects the global sticky header containing:
  * Brand Logo (`logo_full.png`).
  * Links: Home, Products, Services, Network, Quality, About, Contact.
  * Desktop actions: **"Chat with Us"** (WhatsApp action link pointing to `+91 63515 83442`) and **"Request Quote"** modal trigger.
* **`injectMobileMenu()`**: Injects the slide-out navigation drawer with the **"Chat with Us"** action.
* **`injectFooter()`**: Injects the corporate footer containing address details, explore links, and strictly filtered social links (LinkedIn, X, and Instagram).
* **`injectQuoteModal()`**: Injects the popup B2B request quote form with fields for Full Name, Company, Email, Category, and Details.

---

## 3. SEO & Structured Data Markup
To maximize visibility on search engine results pages (SERPs) and social sharing platforms, the following assets are implemented:

* **Canonical Links**: Each page has a `<link rel="canonical">` referencing `https://www.darshanindustries.com/page.html` to avoid duplicate indexing.
* **Open Graph & Twitter Cards**: Metadata in the `<head>` of all pages ensures clean sharing card previews on LinkedIn, WhatsApp, X, and Instagram.
* **Search Crawl Files**:
  * **[sitemap.xml](file:///D:/Manav/website/kishan/sitemap.xml)**: Indexes the 7 active pages for search engine bots.
  * **[robots.txt](file:///D:/Manav/website/kishan/robots.txt)**: Configures crawl access, allows indexing, disallows the hidden `industries.html` page, and points to the sitemap location.
* **Structured Schemas**:
  * **Organization JSON-LD** ([index.html](file:///D:/Manav/website/kishan/index.html)): Indexes brand profiles, contact points (+91-63515-83442), and social links.
  * **ItemList JSON-LD** ([products.html](file:///D:/Manav/website/kishan/products.html)): Lists specific chemical compounds (PCl3, POCl3, PCl5, P2O5, TPP) so that search queries for these materials rank the product catalog.
  * **LocalBusiness JSON-LD** ([contact.html](file:///D:/Manav/website/kishan/contact.html)): Indexes address details, direct line, and geo-coordinates.

---

## 4. Key Custom Configurations
1. **Hidden "Industries" Page**:
   * The file `industries.html` is kept intact but all navigation menu references are removed to hide it.
   * All inline grid/card links pointing to it in `index.html` and `supply-chain.html` are changed to target `href="#"`.
2. **Contact Hero Banner Redesign**:
   * Removed cheap road backgrounds and watermarked Google image overlays.
   * Replaced with a premium dark-blue gradient background with white contrast typography and abstract glowing circles.
3. **Connect Section (Footer)**:
   * Displays strictly three custom profiles:
     * **LinkedIn**: `https://www.linkedin.com/in/darshan-industries-845427413/`
     * **X (Twitter)**: `https://x.com/Darshan090803`
     * **Instagram**: `https://www.instagram.com/darshanindustries_pvt_ltd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`
