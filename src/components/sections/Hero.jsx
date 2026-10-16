import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { studioImage } from '../../data/studio';

const initialScenes = [
  { image:'editorial/living-daylight', title:'Living, thoughtfully', category:'Living room', alt:'Living room inspiration with linen upholstery, pale oak furniture and soft daylight' },
  { image:'editorial/bedroom-oak', title:'Room to slow down', category:'Bedroom', alt:'Bedroom inspiration with natural linen, a pale oak bed and a soft neutral palette' },
  { image:'editorial/kitchen-walnut', title:'Made for everyday', category:'Kitchen', alt:'Kitchen inspiration with light cabinetry, timber cupboards and ceramic tiles' },
];

export default function Hero({ ready = true }) {
  const reduced=useReducedMotion();
  const [active,setActive]=useState(0);
  const scene=initialScenes[active];
  const entrance=delay=>({initial:{opacity:0,y:reduced?0:18},animate:{opacity:ready?1:0,y:ready||reduced?0:18},transition:{duration:reduced?0:0.65,delay:reduced?0:delay,ease:[0.22,1,0.36,1]}});
  return <section id="home" className="studio-hero studio-hero-editorial">
    <div className="studio-container editorial-hero-layout">
      <div className="editorial-hero-copy">
        <motion.p className="studio-kicker" {...entrance(0)}>Dream Space Interiors / Hyderabad</motion.p>
        <motion.h1 {...entrance(0.1)}>A little more<br />space. A lot<br /><span>more you.</span></motion.h1>
        <motion.p className="editorial-hero-description" {...entrance(0.2)}>Thoughtful interiors for the way you live. Natural materials, useful details and room to feel at home.</motion.p>
        <motion.div className="editorial-hero-actions" {...entrance(0.3)}><a href="#projects" className="studio-button">Explore our spaces <ArrowUpRight size={17}/></a><a href="#contact" className="studio-text-link">Start a conversation <ArrowUpRight size={16}/></a></motion.div>
      </div>
      <motion.div className="editorial-hero-visual" {...entrance(0.12)}>
        <div className="editorial-hero-photo"><AnimatePresence mode="wait" initial={false}><motion.img key={scene.image} src={studioImage(scene.image)} srcSet={`${studioImage(scene.image).replace('.webp','-768.webp')} 768w, ${studioImage(scene.image)} 1536w`} sizes="(max-width:800px) 100vw, 60vw" width="1536" height="1024" alt={scene.alt} fetchPriority={active===0?'high':'auto'} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reduced?0:0.22}}/></AnimatePresence></div>
        <div className="editorial-photo-caption" aria-live="polite"><span>{scene.title}</span><small>AI-generated inspiration / 0{active+1}</small></div>
        <div className="editorial-scene-selector" role="group" aria-label="Choose an interior to preview">{initialScenes.map((item,index)=><button type="button" key={item.image} aria-pressed={active===index} onClick={()=>setActive(index)}><img src={studioImage(item.image).replace('.webp','-768.webp')} alt="" width="68" height="46"/><span>{item.category}</span><small>0{index+1}</small></button>)}</div>
      </motion.div>
    </div>
    <div className="studio-container editorial-hero-bottom"><a href="#about"><ArrowDown size={16}/> Meet the studio</a><span>Residential interiors <i/> Kitchens <i/> Living spaces</span></div>
  </section>;
}
