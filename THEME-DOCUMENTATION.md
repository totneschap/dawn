# Sienna Theme — Complete Documentation

**Theme:** Sienna (based on Shopify Dawn)
**Store:** r8pc0e-z1.myshopify.com
**Live theme ID:** #193503822206
**Last updated:** June 2026

---

## Table of Contents

1. [Overview](#1-overview)
2. [Getting Started](#2-getting-started)
3. [Global Theme Settings](#3-global-theme-settings)
4. [Header & Navigation](#4-header--navigation)
5. [Footer](#5-footer)
6. [Collection Pages](#6-collection-pages)
7. [Product Pages — Standard Blocks](#7-product-pages--standard-blocks)
8. [Product Pages — Custom Blocks](#8-product-pages--custom-blocks)
9. [Sections Library](#9-sections-library)
10. [FAQ Page](#10-faq-page)
11. [Contact Page](#11-contact-page)
12. [Store Policies & Admin Settings](#12-store-policies--admin-settings)
13. [Performance & SEO](#13-performance--seo)

---

## 1. Overview

Sienna is a custom-built Shopify theme based on the official Dawn framework. It includes all standard Dawn features plus a suite of bespoke enhancements developed specifically for this store.

### Custom features added to Sienna

| Feature | Location |
|---|---|
| Mega menu with promo images | Header section |
| Product badges (sale, new, custom tag) | All product cards |
| Countdown timer section | Any page |
| Editorial lookbook section | Any page |
| FAQ accordion page | `/pages/faq` |
| Enhanced contact form | Contact page |
| Infinite scroll / load more | Collection pages |
| Back to top button | Global (footer setting) |
| Size chart modal | Product page block |
| Ingredients & nutrition | Product page block |
| Product tabs | Product page block |
| Shipping info & dispatch notice | Product page block |
| How to use (numbered steps) | Product page block |
| Trust & payment badges | Product page block |

---

## 2. Getting Started

### Accessing the theme editor

1. Log in to **Shopify Admin**
2. Go to **Online Store → Themes**
3. Next to **Sienna**, click **Customise**

The theme editor opens with a live preview on the right and settings panels on the left. Changes are saved automatically and go live when you click **Save**.

### Editing pages

- **Home page** — click the home icon or select it from the page dropdown at the top of the editor
- **Collection pages** — select a collection from the dropdown
- **Product pages** — select a product from the dropdown
- **Other pages** — use the dropdown to navigate to contact, FAQ, etc.

### Publishing a new version

If you ever want to revert to a previous version, go to **Online Store → Themes → ... → Theme history** to restore an earlier save.

---

## 3. Global Theme Settings

Access via the theme editor: **Theme settings** (paint palette icon at the bottom left).

### Colours

The theme uses five colour schemes (Scheme 1–5). Each scheme defines:
- Background colour
- Text colour
- Button colour and label colour
- Shadow colour

Sections across the site can each be set to any of the five schemes, giving you flexibility to create visual contrast between sections.

**Current colour schemes:**
| Scheme | Background | Text | Use |
|---|---|---|---|
| Scheme 1 | #FFFFFF | #121212 | Default / clean white |
| Scheme 2 | #F3F3F3 | #121212 | Subtle grey panels |
| Scheme 3 | #242833 | #FFFFFF | Dark navy |
| Scheme 4 | #121212 | #FFFFFF | Black |
| Scheme 5 | #334FB4 | #FFFFFF | Blue (badges/accents) |

### Typography

- **Heading font:** Assistant (weight 400)
- **Body font:** Assistant (weight 400)
- **Heading scale:** 100% — adjust to make all headings larger or smaller globally
- **Body scale:** 100%

### Layout

- **Page width:** 1200px — the maximum content width
- **Section spacing:** 0px — gap between page sections
- **Grid spacing:** 8px horizontal, 8px vertical — gap between product cards

### Buttons & inputs

Global styling for all buttons, inputs, and form fields:
- **Button border radius:** 0 (square corners)
- **Variant pills border radius:** 40px (fully rounded size/colour selectors)

### Product cards

- **Card style:** Standard (image + text below)
- **Card colour scheme:** Scheme 2 (light grey)
- **Text alignment:** Left

### Badges

- **Badge position:** Bottom left of product image
- **Badge corner radius:** 40px (pill shape)
- **Sale badge:** Scheme 5 (blue)
- **Sold out badge:** Scheme 3 (dark navy)
- **Sale badge style:** Choose between label ("Sale"), percentage ("-25%"), or savings ("Save £10")
- **New badge days:** Products created within this many days show a "New" badge (e.g. 30 days)

### Cart

- **Cart type:** Drawer (slides in from right)
- **Show cart note:** Toggle a note field in the cart

### Search

- **Predictive search:** Enabled — shows results as you type
- **Show vendor in search:** Off
- **Show price in search:** Off

---

## 4. Header & Navigation

### Logo

In the theme editor, go to **Header**:
- **Logo image** — upload your logo (SVG or PNG recommended)
- **Logo width** — controls the displayed size (default: 90px)
- If no logo is uploaded, the **store name** is shown as text

### Navigation menu

The header uses the **Main menu** navigation, set up in **Shopify Admin → Online Store → Navigation → Main menu**.

Add links, dropdowns, and nested items there. The theme supports:
- **Top-level links** — shown in the header bar
- **Dropdown menus** — appear on hover for links with sub-items
- **Mega menus** — automatically activated when a top-level link has enough sub-links (see below)

### Mega menu with promo images

The header supports promotional image panels inside the mega menu dropdown.

**To add a promo image to a mega menu:**

1. In the theme editor, go to **Header**
2. Click **Add block → Mega menu promo**
3. Set **Menu item** to the exact handle of the top-level nav link (e.g. if the link is "Collections", the handle is `collections`)
4. Upload an **Image** (portrait ratio works best — approx 4:5)
5. Fill in **Badge text**, **Heading**, **Description**, and a **Button label + URL**

The promo panel appears on the right side of the dropdown for that menu item. Up to 10 promo blocks can be added across the navigation.

**Finding a link handle:** The handle is the URL slug of the link text. "New Arrivals" → `new-arrivals`. "Sale" → `sale`.

### Header settings

| Setting | Description |
|---|---|
| Logo position | Left or centre |
| Menu position | Left, centre, or drawer |
| Show line separator | Dividing line under header |
| Enable sticky header | Header sticks to top on scroll |
| Show country/region selector | Currency and language switcher |
| Show search icon | Toggle header search |
| Colour scheme | Background colour of the header bar |

---

## 5. Footer

Access via the theme editor: **Footer** section.

### Footer blocks

Add and arrange blocks in the footer:
- **Link list** — a column of navigation links (set the menu in Admin → Navigation)
- **Brand information** — logo, tagline, social icons, payment icons
- **Email signup** — newsletter subscription form (connects to Shopify Email / Klaviyo)
- **Text** — freeform richtext content

### Social media links

Set social links in **Theme settings → Social media**. Links appear in the brand information block and can also appear in the header.

### Back to top button

**Setting:** Footer → **Show back to top button** (checkbox, default: on)

When enabled, a circular button with an up-arrow appears fixed in the bottom-right corner of the screen. It becomes visible after the user scrolls 400px down, and smoothly scrolls back to the top when clicked.

---

## 6. Collection Pages

### Layout settings

In the theme editor, navigate to a collection page and click the **Product grid** section.

| Setting | Options | Description |
|---|---|---|
| Products per page | 8–48 | How many products load at once |
| Columns on desktop | 2–6 | Grid columns |
| Columns on mobile | 1–2 | Mobile grid columns |
| Image ratio | Adapt, square, portrait, landscape | Crop ratio for all product images |
| Show second image | Checkbox | Shows alternate image on hover |
| Show vendor | Checkbox | Shows brand name on card |
| Show quick add | Checkbox | Adds a quick add button to cards |

### Pagination type

| Option | Behaviour |
|---|---|
| **Paginate** | Traditional numbered pages |
| **Load more** | A "Load more" button appends the next page |
| **Infinite scroll** | New products load automatically as you scroll |

To change: Product grid section → **Pagination type**

For load more / infinite scroll, you can also customise the button label (e.g. "Show more products").

### Filtering & sorting

The collection page includes Shopify's native **faceted filtering** system.

**To enable/configure filters:**
1. Go to **Shopify Admin → Apps → Search & Discovery**
2. Click **Filters**
3. Add filters for the attributes you want (Colour, Size, Brand, Price, Availability, etc.)

Filters are pulled automatically from your product data (variants, tags, vendor, metafields).

**Filter layout options** (set in the theme editor):
- **Horizontal** — filter bar above the product grid
- **Vertical** — sidebar on the left
- **Drawer** — slides in from the side

**Sorting** can be enabled/disabled independently of filtering. Sort options include: Featured, Price (low–high), Price (high–low), A–Z, Z–A, Date (new–old), Best selling.

---

## 7. Product Pages — Standard Blocks

In the theme editor, navigate to a product page and click on the product section. Blocks are shown in the left panel and can be dragged to reorder.

### Title

Displays the product title. No configurable settings.

### Price

Shows the current price, compare-at price (shown as struck-through when on sale), and tax/duty information. Pulls from the product's Shopify pricing automatically.

### Variant picker

Renders size, colour, and other variant selectors. Style is controlled by theme settings (currently: pill style for variant options).

| Setting | Description |
|---|---|
| Picker type | Dropdown or pills |
| Show variant image | Swaps main image when colour is selected |

### Quantity selector

Shows a +/– quantity input field. Can be hidden if you don't want customers to adjust quantity before adding to cart.

### Buy buttons

Renders the **Add to cart** button and **Buy it now** button (Shopify Pay / accelerated checkout).

| Setting | Description |
|---|---|
| Show dynamic checkout button | Show/hide the Buy it now button |
| Show gift card recipient form | For gift card products |

### Description

Renders the product's main description (set in Admin → Products → Description). Supports full rich text including images, bullet points, links, and tables.

### Collapsible row

A click-to-expand accordion row. Use for supplementary content like materials, care instructions, sizing notes, or returns information.

| Setting | Description |
|---|---|
| Heading | The accordion title |
| Icon | Small icon shown left of the heading |
| Content | Richtext content inside the accordion |
| Or link to a page | Use a Shopify page as the content source |

Add as many collapsible rows as needed.

### Popup

A text link that opens a modal containing a Shopify page. Good for size guides linked to a shared page, or detailed care information.

| Setting | Description |
|---|---|
| Link text | The clickable text |
| Page | The Shopify page to display in the modal |

### Share

Social sharing buttons (Facebook, Twitter, Pinterest, email).

### Rating

Displays the product's review rating (requires a reviews app that writes to `product.metafields.reviews.rating`).

### Icon with text

A row of up to 3 icon + text pairs (e.g. "Free returns · Secure checkout · Made in the UK").

---

## 8. Product Pages — Custom Blocks

These blocks were built specifically for Sienna and are not part of standard Dawn.

---

### Size chart

Opens a styled modal with a measurement table and cm/inches toggle.

**To add:** Product information → Add block → **Size chart**

| Setting | Description |
|---|---|
| Link text | Text of the trigger link (default: "Size guide") |
| Modal heading | Heading inside the modal |
| Introduction | Optional richtext note above the table |
| Show cm/inches toggle | Toggle button to switch measurement units |
| Note | Small footnote below the table |
| Column 1–4 labels | Column headings (default: Chest, Waist, Hips, Length) |
| Row 1–8 size | Size label for each row (e.g. XS, S, M…) |
| Row 1–8 Col 1–4 | Measurement values in cm (auto-converts to inches) |

**Tips:**
- Leave a row's size label blank to hide that row
- Leave a column label blank to hide that column entirely
- Values must be plain numbers (e.g. `86`) — the cm/in unit is added automatically
- Pre-filled with standard women's measurements (XS–XXL) as a starting point

---

### Ingredients & nutrition

Two collapsible accordions: one for ingredients (with key ingredient highlight cards) and one for a nutrition table.

**To add:** Product information → Add block → **Ingredients & nutrition**

#### Ingredients accordion

| Setting | Description |
|---|---|
| Show ingredients accordion | Toggle on/off |
| Ingredients heading | Default: "Ingredients" |
| Open by default | Whether the accordion starts expanded |
| Full ingredients list | Richtext field for the complete ingredient list |
| Show key ingredients | Toggle the highlight cards |
| Key ingredient 1–4 Icon | Choose from: leaf, drop, sun, star, shield, flower |
| Key ingredient 1–4 Name | e.g. "Hyaluronic Acid" |
| Key ingredient 1–4 Benefit | e.g. "Deep hydration" |

#### Nutrition accordion

| Setting | Description |
|---|---|
| Show nutrition accordion | Toggle on/off |
| Nutrition heading | Default: "Nutritional information" |
| Open by default | Whether the accordion starts expanded |
| Show per-serving column | Adds a second column alongside per 100g |
| Serving size | e.g. "30g", "1 capsule", "250ml" |
| Note | Footnote, e.g. reference intake disclaimer |
| Energy kJ / kcal | Per 100g and per serving values |
| Fat, Saturates, Carbohydrates, Sugars, Fibre, Protein, Salt | Per 100g and per serving values |

**Tip:** Only rows with at least one value filled in are shown. You don't need to fill all rows.

---

### Tabs

A horizontal tab bar with up to 5 tabs, each showing richtext or page content.

**To add:** Product information → Add block → **Tabs**

| Setting | Description |
|---|---|
| Tab 1–5 Label | The tab button text. Leave blank to hide that tab. |
| Tab 1–5 Content | Richtext content for that tab |
| Tab 1–5 Or link to a page | Use a Shopify page as content (renders below richtext if both set) |

**Default tabs:** Description / Details / Shipping & returns (tabs 4 and 5 are blank)

**Tips:**
- The tab bar scrolls horizontally on mobile
- Use a **page** for content that's shared across many products (e.g. your returns policy) so you only need to update it in one place
- Keyboard navigation is fully supported (Arrow keys, Home, End)

---

### Shipping info

Displays shipping options as a styled list with a live dispatch notice.

**To add:** Product information → Add block → **Shipping info**

| Setting | Description |
|---|---|
| Heading | Default: "Delivery & shipping" |
| Cutoff display text | e.g. "2pm" — shown in the dispatch notice |
| Cutoff hour (24h) | e.g. "14" — used to determine if today still counts for dispatch |
| Option 1–4 Icon | Van, lightning bolt, plane, store, or box |
| Option 1–4 Label | e.g. "Standard delivery" |
| Option 1–4 Timeframe | e.g. "3–5 working days" |
| Option 1–4 Price | e.g. "£3.99" or "Free" |
| Option 1–4 Highlight | Bold the option to draw attention (e.g. free shipping) |
| Show shipping policy link | Links to your policy set in Admin → Settings → Policies |

**Dispatch notice behaviour:**
- Before the cutoff time on a weekday: shows "Order before 2pm for dispatch today"
- After the cutoff, or on a weekend: shows "Order now for dispatch [next working day]"
- Leave **Cutoff display text** blank to hide the notice entirely

**Tip:** Leave an option's label blank to hide that row.

---

### How to use

A numbered steps list with a vertical connecting line, ideal for usage instructions, recipes, or assembly guides.

**To add:** Product information → Add block → **How to use**

| Setting | Description |
|---|---|
| Heading | Default: "How to use" |
| Step 1–6 Title | The step heading. Leave blank to hide that step. |
| Step 1–6 Description | Optional richtext description for each step |
| Link text | Optional CTA link below the steps (e.g. "Watch the tutorial") |
| Link URL | The destination for the CTA link |

**Tips:**
- Steps are numbered automatically based on how many have a title filled in
- You can use as few as 2 steps — no need to fill all 6
- The vertical connecting line automatically stops at the last step

---

### Trust badges

A row of icon + text badges showing trust signals, plus payment method icons.

**To add:** Product information → Add block → **Trust badges**

| Setting | Description |
|---|---|
| Badge 1–4 icon | Lock, return arrow, truck, checkmark, star, or shield |
| Badge 1–4 text | e.g. "Secure checkout" |
| Show payment icons | Displays accepted payment method logos |
| Payment label | Label above payment icons (e.g. "We accept") |

Payment icons are pulled automatically from your **Shopify Payments** configuration and show all enabled payment methods.

---

## 9. Sections Library

These sections can be added to any page via **Add section** in the theme editor.

### Countdown timer

A bold countdown clock with days, hours, minutes, and seconds. Useful for flash sales, product launches, or limited-time offers.

| Setting | Description |
|---|---|
| Heading | e.g. "Sale ends in" |
| End date & time | Format: `YYYY-MM-DD HH:MM:SS` (e.g. `2026-07-01 23:59:59`) — uses store's local time |
| Show seconds | Toggle seconds display |
| Expired text | Message shown when the timer reaches zero. Leave blank to hide the section automatically. |
| Colour scheme | Background colour |

**Important:** The section only renders if an end date is set. When the timer expires, it either shows the expired message or hides the entire section.

---

### Editorial lookbook

A full-screen editorial section for showcasing product lines or collections. Supports three layouts per block.

**Layouts:**

| Layout | Description |
|---|---|
| Full width (text overlay) | Full-width image with text overlaid. Position, colour, and overlay opacity are configurable. |
| Image left, text right | 55/45 grid split — image on the left, text panel on the right |
| Text left, image right | Same grid, reversed |

**Block settings (all layouts):**

| Setting | Description |
|---|---|
| Layout | Select from the three options above |
| Image | Upload the editorial image |
| Collection tag | A small pill label shown on the image (links to a URL you set) |
| Title | Large editorial heading |
| Subtitle | Supporting text |
| Button label | CTA button text |
| Button link | CTA destination URL |

**Full-width only settings:**

| Setting | Description |
|---|---|
| Image height | Portrait (3:4), Cinematic (16:7), or Square (1:1) |
| Text position | 9-position grid (top/middle/bottom × left/centre/right) |
| Text colour | Light (white text) or Dark (theme foreground colour) |
| Overlay opacity | 0–70% dark overlay to improve text legibility |

---

### Contact form (enhanced)

The contact page section has been enhanced with two-column layout support and custom form fields.

**Content blocks** (appear in the left column when added):
- **Rich text** — formatted text, ideal for a welcome message
- **Contact detail** — an icon + text row. Icons: location, phone, email, clock, chat
- **Opening hours** — a structured hours block with day ranges and times

**Form field blocks** (add additional fields to the form):
- **Text input** — a single-line or multi-line text field
- **Select (dropdown)** — a dropdown with comma-separated options (e.g. `General enquiry, Order issue, Returns`)
- **Checkbox** — a single tick-box field

**Standard form fields** (always present):
- Name field (can be hidden or made optional/required)
- Phone field (can be shown/hidden, optional/required)
- Email (always required)
- Message (label and placeholder configurable)
- Submit button (label configurable)

The two-column layout activates automatically when at least one content block is added.

---

### FAQ accordion

A collapsible FAQ section. The FAQ page (`/pages/faq`) uses this section with 5 starter questions pre-loaded.

| Setting | Description |
|---|---|
| Title | Section heading |
| Heading size | H1, H2, or H3 |
| Header alignment | Left or centre |
| Open first item | Whether the first FAQ starts expanded |
| Colour scheme | Background colour |

**Each FAQ block:**
- **Question** — the accordion heading
- **Answer** — richtext content, supports formatting, links, and lists

Add as many FAQ blocks as needed. They can be reordered by dragging in the theme editor.

**The FAQ page** is available at `/pages/faq`. If you need to create a link to it, use the URL `/pages/faq`.

---

## 10. FAQ Page

The FAQ page at `/pages/faq` is a dedicated page template using the FAQ accordion section.

**To manage FAQ content:**
1. Go to the theme editor
2. Navigate to the FAQ page (Pages → FAQ)
3. Click the FAQ Accordion section
4. Add, edit, reorder, or remove FAQ blocks

**To add the FAQ to your navigation:**
1. Go to **Admin → Online Store → Navigation**
2. Edit your menu
3. Add a link → Pages → FAQ

---

## 11. Contact Page

The contact page at `/pages/contact` uses the enhanced contact form section.

### Setting up contact details

1. Go to the theme editor → Contact page
2. In the **Contact form** section, add content blocks:
   - Add a **Rich text** block for an intro message
   - Add **Contact detail** blocks for address, phone, email, hours
   - Add an **Opening hours** block for your trading hours

### Receiving form submissions

Contact form submissions are sent to your store's notification email. To change the recipient:
- Go to **Admin → Settings → Notifications → Contact form**

### Customising form fields

Add **form field blocks** to capture additional information:
- **Select dropdown** — useful for enquiry type (e.g. "General / Order / Returns")
- **Text input** — for extra fields like "Order number" or "Company name"
- **Checkbox** — for consent checkboxes or preferences

---

## 12. Store Policies & Admin Settings

Several theme features pull content directly from your Shopify admin settings.

### Shipping policy

The **Shipping info** block on product pages includes a link to your shipping policy.

**To set your policy:** Admin → Settings → Policies → Shipping policy

### Payment icons

The **Trust badges** block shows payment method icons from your active payment providers.

**To configure payments:** Admin → Settings → Payments

### Cookie consent / privacy

Shopify handles cookie consent banners natively. Configure in: Admin → Settings → Customer privacy

### Product media (video)

To add video to a product page:
1. Admin → Products → [product] → Media
2. Click **Add media**
3. Upload an MP4 file, or paste a YouTube/Vimeo URL

Video appears automatically in the product gallery alongside images.

### Filters

To add collection filters (colour, size, brand etc.):
1. Admin → Apps → Search & Discovery
2. Click **Filters**
3. Add the attributes you want customers to filter by

---

## 13. Performance & SEO

### Image optimisation

The theme uses Shopify's CDN for all images with:
- **Automatic WebP conversion** — modern browsers receive WebP format
- **Responsive `srcset`** — multiple sizes served depending on screen width
- **Lazy loading** — images below the fold load only when needed

**Best practice for uploads:**
- Upload images at 2× the display size (e.g. 2400px wide for a full-width banner)
- Use JPEG for photos, PNG for graphics with transparency
- Keep file sizes under 2MB before upload (Shopify optimises further on delivery)

### SEO

Each page's SEO title and description can be set in the theme editor under **Search engine listing preview** at the bottom of each page's settings, or directly in Admin → Online Store → Preferences (for the home page).

For products and collections, set SEO fields in: Admin → Products / Collections → [item] → Search engine listing preview

### Speed tips

- Keep the number of sections on the home page to 8–12
- Avoid uploading GIF files — use MP4 video instead
- Use the **Countdown timer** section sparingly — remove it when not in use
- Infinite scroll on collections adds a small JS overhead — if speed is critical, switch to **Paginate** mode

---

## Appendix: Custom File Index

All custom files added to Sienna beyond standard Dawn:

### Sections
| File | Feature |
|---|---|
| `sections/countdown-timer.liquid` | Countdown timer section |
| `sections/lookbook.liquid` | Editorial lookbook section |
| `sections/faq-accordion.liquid` | FAQ accordion section |

### Snippets
| File | Feature |
|---|---|
| `snippets/product-badges.liquid` | Sale, new, and custom tag badges |
| `snippets/product-ingredients.liquid` | Ingredients & nutrition block |
| `snippets/product-tabs.liquid` | Product page tabs block |
| `snippets/product-shipping-info.liquid` | Shipping info block |
| `snippets/product-how-to-use.liquid` | How to use steps block |
| `snippets/lookbook-content.liquid` | Shared lookbook text content |
| `snippets/header-mega-menu.liquid` | Mega menu with promo panels |

### Assets (CSS)
| File | Feature |
|---|---|
| `assets/component-countdown-timer.css` | Countdown timer styles |
| `assets/section-lookbook.css` | Lookbook styles |
| `assets/component-mega-menu.css` | Mega menu promo styles |
| `assets/component-trust-badges.css` | Trust & payment badge styles |
| `assets/component-size-chart.css` | Size chart modal styles |
| `assets/component-product-ingredients.css` | Ingredients & nutrition styles |
| `assets/component-product-tabs.css` | Product tabs styles |
| `assets/component-product-shipping-info.css` | Shipping info block styles |
| `assets/component-product-how-to-use.css` | How to use steps styles |
| `assets/collection-infinite-scroll.css` | Infinite scroll styles |
| `assets/section-contact-form.css` | Enhanced contact form styles |

### Assets (JS)
| File | Feature |
|---|---|
| `assets/countdown-timer.js` | Countdown timer logic |
| `assets/collection-infinite-scroll.js` | Infinite scroll / load more logic |

### Templates
| File | Feature |
|---|---|
| `templates/page.faq.json` | FAQ page template |

---

*Documentation covers theme version as of June 2026. For support or further customisation, refer to the git repository at `totneschap/dawn`.*
