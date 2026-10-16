import Reveal from '../common/Reveal';
import { studioImage } from '../../data/studio';
const scenes=[['empty-studio','Ideas and material samples'],['bedroom-oak','Finishes that work together'],['living-daylight','A space to make your own']];
const steps=[
 ['The conversation','Your space, routines, priorities and what you have in mind.'],
 ['The direction','Layouts and material ideas that connect your brief to a clear concept.'],
 ['The details','Refine the finishes, scope and practical decisions together.'],
 ['The making','Carry the agreed design through coordinated site work.'],
 ['The first day','Walk through your space and review the finishing touches.'],
];
export default function WorkProcess(){
  return <section id="process" className="studio-section studio-process"><div className="studio-container"><Reveal className="studio-section-heading"><div><p className="studio-kicker">04 / How it comes together</p><h2>From first thought<br /><span>to feeling at home.</span></h2></div><p>A clear path through the creative process,<br />with your input along the way.</p></Reveal><ol className="studio-process-grid">{steps.map(([title,description],i)=><li key={title}><Reveal delay={i*0.07}><span className="studio-step-number">0{i+1}</span><h3>{title}</h3><p>{description}</p></Reveal></li>)}</ol><Reveal className="studio-process-scenes">{scenes.map(([image,caption])=><figure key={image}><img src={studioImage(`editorial/${image}`).replace('.webp','-768.webp')} alt={caption} width="768" height="512" loading="lazy"/><figcaption>{caption}</figcaption></figure>)}</Reveal><p className="studio-disclosure">Creative process illustrated with AI-generated imagery.</p></div></section>;
}
