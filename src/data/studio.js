export const studio = {
  name: 'Dream Space Interiors',
  phone: '+91 99897 12208',
  telephone: 'tel:+919989712208',
  email: 'dreamspaceinteriors22@gmail.com',
  whatsapp: 'https://wa.me/919989712208',
  instagram: 'https://www.instagram.com/dreamspaceinteriors22/',
  youtube: 'https://www.youtube.com/@dsinteriors_hyd',
  address: ['H. No. 5-100, Road Number 6', 'Budha Nagar, Buddha Nagar Colony', 'Mallikarjuna Nagar, Boduppal', 'Hyderabad, Telangana 500092'],
  map: 'https://www.google.com/maps/search/?api=1&query=DS+INTERIORS%2C+H+5-100%2C+Road+Number+6%2C+Budha+Nagar%2C+Buddha+Nagar+Colony%2C+Mallikarjuna+Nagar%2C+Boduppal%2C+Hyderabad%2C+Telangana+500092',
};

// AI-generated photographic inspiration; never represented as completed client work.
export const projects = [
  { id: 1, title: 'Everyday Ease', category: 'Living Room', image: 'editorial/living-daylight', gallery: ['editorial/living-daylight', 'editorial/natural-living', 'editorial/living-evening'], alt: 'Living room inspiration with linen seating, pale oak furniture and natural daylight', description: 'Three ways to make a living room feel like home. Explore light oak, warm walnut and a softer evening mood.', materials: 'Natural linen / Oak and walnut / Layered light' },
  { id: 2, title: 'A Quieter Morning', category: 'Bedroom', image: 'editorial/natural-bedroom', gallery: ['editorial/natural-bedroom', 'editorial/bedroom-oak', 'editorial/bedroom-blue'], alt: 'Photorealistic bedroom concept with rumpled flax linen, a walnut bed and an olive throw', description: 'Relaxed linen, gentle texture and quieter colours. Three bedroom directions, from warm walnut to pale oak and a soft blue headboard.', materials: 'Flax linen / Natural timber / Calm colours' },
  { id: 3, title: 'Made for Everyday', category: 'Kitchen', image: 'editorial/natural-kitchen', gallery: ['editorial/natural-kitchen', 'editorial/kitchen-taupe', 'editorial/kitchen-walnut'], alt: 'Photorealistic kitchen concept with sage cabinetry, oak cupboards and handmade white tiles', description: 'Useful storage, clear work surfaces and a little warmth. Explore sage, soft taupe and timber kitchen palettes made for everyday living.', materials: 'Sage and taupe / Natural timber / Ceramic tile' },
];

const roomScenes = {
  'editorial/living-daylight': ['Everyday Ease', 'Cream linen seating, pale oak furniture and soft daylight in a living room'],
  'editorial/natural-living': ['Walnut & Linen', 'A comfortable living room with walnut furniture and relaxed linen seating'],
  'editorial/living-evening': ['The Evening Edit', 'A warm living room with layered evening light and a rust armchair'],
  'editorial/natural-bedroom': ['A Quieter Morning', 'A bedroom with natural flax linen, walnut furniture and an olive throw'],
  'editorial/bedroom-oak': ['Soft Oak Retreat', 'A quiet bedroom with pale oak cabinetry and soft cream bedding'],
  'editorial/bedroom-blue': ['A Touch of Blue', 'A bedroom with a muted blue upholstered bed and warm timber details'],
  'editorial/natural-kitchen': ['Made for Everyday', 'A kitchen with sage cabinetry, oak cupboards and handmade white tile'],
  'editorial/kitchen-taupe': ['Warm Minimalism', 'A practical taupe kitchen with cream tiles and clear work surfaces'],
  'editorial/kitchen-walnut': ['Timber & Stone', 'A kitchen with warm timber cabinetry, a stone counter and woven stools'],
};

// Every room has its own visible card; opening it starts at that exact photograph.
export const inspirationImages = projects.flatMap(project => project.gallery.map((image, index) => ({
  ...project,
  sceneId: `${project.id}-${index}`,
  image,
  title: roomScenes[image][0],
  alt: roomScenes[image][1],
  initialSlide: index,
}))).map((scene, index) => ({ ...scene, number: index + 1 }));

export function studioImage(name) { return `/assets/${name}.webp`; }
