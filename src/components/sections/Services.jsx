import { House, CookingPot, BedDouble, Sofa, Building2, Layers, ArrowUpRight } from 'lucide-react';
import Reveal from '../common/Reveal';
import { studioImage } from '../../data/studio';
const serviceImages = [
  ['living-daylight', 'Light-filled living room with oak furniture'],
  ['kitchen-taupe', 'Modular kitchen with taupe cabinets and clear work surfaces'],
  ['bedroom-blue', 'Quiet bedroom with a blue upholstered headboard'],
  ['living-evening', 'Warm living room with layered evening lighting'],
  ['empty-studio', 'Empty design workspace with a walnut desk and neatly arranged material samples'],
  ['kitchen-walnut', 'Coordinated timber cabinetry and kitchen finishes'],
];
const services = [
  { title: 'Residential interiors', description: 'A connected design for your home, from the overall layout to the corners you use most.', icon: House },
  { title: 'Modular kitchens', description: 'Thoughtful storage, durable surfaces and a layout that makes everyday cooking feel easier.', icon: CookingPot },
  { title: 'Bedroom design', description: 'Calmer palettes, softer lighting and wardrobes that make room for the way you live.', icon: BedDouble },
  { title: 'Living spaces', description: 'Comfortable, inviting rooms with the right balance of personality and practical detail.', icon: Sofa },
  { title: 'Office interiors', description: 'Workspaces planned for focus, conversation and a welcoming first impression.', icon: Building2 },
  { title: 'Turnkey projects', description: 'One considered direction, carried from design planning through coordinated execution.', icon: Layers },
];
export default function Services() {
  return <section id="services" className="studio-section studio-services"><div className="studio-container"><Reveal className="studio-section-heading"><div><p className="studio-kicker">02 / What we do</p><h2>The whole picture.<br /><span>Every little detail.</span></h2></div><p>Start with a single room or a blank floor plan.<br />We’ll help you find a clear direction.</p></Reveal><div className="studio-services-grid">{services.map((service,i)=><Reveal key={service.title} delay={i%3*0.07}><a className="studio-service" href="#contact"><div className="studio-service-photo"><img src={studioImage(`editorial/${serviceImages[i][0]}`).replace('.webp','-768.webp')} alt={serviceImages[i][1]} width="768" height="512" loading="lazy"/></div><div className="studio-service-top"><service.icon size={27} strokeWidth={1.2} /><span>{String(i+1).padStart(2,'0')}</span></div><h3>{service.title}</h3><p>{service.description}</p><span className="studio-service-link">Let’s explore <ArrowUpRight size={16} /></span></a></Reveal>)}</div><p className="studio-disclosure">AI-generated illustrations of spaces, materials and the design process.</p></div></section>;
}
