# Dream Space Interiors — current working site

Working folder: demo-interior-website-1. Preview: http://127.0.0.1:5173/.

The Dream Space → DS → CAD logo → header opening remains intact. Typography uses locally hosted open-source Jost and Barlow, inspired by the client's reference. Licences are in public/assets/fonts.

## Latest changes

- Replaced the dark full-background hero with a cream split layout: text beside a complete, uncropped room photograph. Three thumbnail selectors switch between living, bedroom and kitchen inspiration.
- Established a clearer font hierarchy: Jost at regular weight for headings, Barlow for readable body copy, consistent navigation, buttons and labels.
- Expanded each room category to three images, nine in total. The collection shows image counts, and each dialog includes thumbnails, keyboard navigation, arrows and a current-image counter.
- Added six service images, a three-image studio collage and a three-image process strip. Studio notes use a wider variety of scenes.
- Six additional plant-free photographic concepts were generated with the built-in image tool. All ten editorial scenes are illustrative AI-generated inspiration, never presented as completed client work or actual staff photographs.
- Kept the prominent footer actions for WhatsApp, call, email and directions. Instagram and YouTube now link to the studio profiles supplied by the client.
- Original supplied photographs and renders remain in their original asset folders.

## Image files and prompts

- public/assets/editorial/: ten full-size WebP images and ten smaller variants.
- design-assets/editorial/: ten PNG masters, prompts-and-provenance.json for the original four scenes, and expanded-gallery-prompts.json for the six additional images.
- Encoding and resizing preserve the image composition; full photographs remain available in galleries.

## Recovery

Before-expanded-galleries-and-hero-layout.zip in the parent folder preserves the source before this update. Earlier named backups preserve previous content and animation stages.

## Checks

Production build and lint passed. All nine room images and their smaller variants were verified. Desktop and 390px mobile layouts, hero selectors, gallery thumbnails and arrows were checked in the browser. No messages sent; no public deployment performed.

## Cream palette update

Light surfaces, navigation, hero and scrollbar now use warm cream and sand shades. The opening animation has a champagne cream gradient with a fine inset frame, charcoal lettering and a bronze CAD logo. Its timing and logo handoff are unchanged. Browser theme colour matches the cream palette. Production build passed; opening and settled homepage visually verified. Screenshots: cream-opening-preview.png and cream-theme-preview.png. Recovery: ../Before-cream-theme-and-intro-background.zip.


## Visible inspiration and people-free imagery

Interior inspiration now displays nine individual room cards (three per category), with filters and galleries opening at the selected photograph. Removed the image containing people from the studio introduction, office service and process strip. Replaced it with an empty workspace generated with the built-in image tool. Its PNG master, WebP variants and prompt are in design-assets/editorial/empty-studio-provenance.json. Previous people-image WebPs were moved out of public assets to design-assets/editorial/retired for recovery. Backup: ../Before-visible-inspiration-and-no-people.zip.


## Icon-only contact links

Footer contact cards are now four standalone icons for WhatsApp, phone, email and directions. In the contact section only each icon links to its destination; adjacent details are plain text. WhatsApp uses a recognisable phone-in-chat glyph, including the floating shortcut. Icon links retain accessible names, keyboard focus outlines, hover titles and transparent touch targets. Build and lint passed. Contact and footer appearance checked in the browser; no external contact actions were triggered. Screenshot: icon-only-contact-preview.png. Backup: ../Before-icon-only-contact-links.zip.

## Updated contact profiles

Phone and WhatsApp: +91 99897 12208. Email: dreamspaceinteriors22@gmail.com. Instagram: https://www.instagram.com/dreamspaceinteriors22/. YouTube: https://www.youtube.com/@dsinteriors_hyd. Social links use standalone icons in the footer, with Instagram and YouTube also available in the contact section. Contact destinations have accessible names and external links open in a separate tab.

## WhatsApp placement

Removed the fixed bottom-right WhatsApp shortcut. WhatsApp remains beside Instagram, YouTube and the other contact icons in the footer, with the existing contact-section conversation link preserved. Additional suggested changes were declined and have not been implemented. Real project stories will be supplied later.

## Confirmed studio address

Updated from the client's DS INTERIORS Google Maps screenshot: H. No. 5-100, Road Number 6, Budha Nagar, Buddha Nagar Colony, Mallikarjuna Nagar, Boduppal, Hyderabad, Telangana 500092. The contact address and both map icons share this corrected destination.
