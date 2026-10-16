import Reveal from '../common/Reveal';
const values = [
  ['A personal starting point', 'Your routines, priorities and the character of your space guide the design conversation.'],
  ['Decisions that connect', 'Layouts, light, materials and furniture are considered together, rather than one detail at a time.'],
  ['A clear way forward', 'Discuss the scope, finish choices and next steps together before moving into the making.'],
];
export default function WhyChooseUs() {
  return <section className="studio-section studio-values"><div className="studio-container"><Reveal className="studio-section-heading"><div><p className="studio-kicker">Our point of view</p><h2>Good design starts<br /><span>with listening.</span></h2></div><p>A home is a personal thing.<br />The process should feel personal, too.</p></Reveal><div className="studio-values-grid">{values.map(([title,description],i)=><Reveal key={title} delay={i*0.1}><span className="studio-value-number">0{i+1}</span><h3>{title}</h3><p>{description}</p></Reveal>)}</div></div></section>;
}
