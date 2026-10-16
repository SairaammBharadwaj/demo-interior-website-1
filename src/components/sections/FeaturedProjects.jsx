import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Keyboard } from 'swiper/modules';
import Reveal from '../common/Reveal';
import { inspirationImages, studioImage, studio } from '../../data/studio';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen'];

export default function FeaturedProjects() {
  const [category,setCategory]=useState('All');
  const [selected,setSelected]=useState(null);
  const dialog=useRef(null);
  const opener=useRef(null);
  const gallerySwiper=useRef(null);
  const [viewIndex,setViewIndex]=useState(0);
  useEffect(()=>{
    if(!selected)return;
    const current=dialog.current;
    const previous=document.body.style.overflow;
    current.showModal(); document.body.style.overflow='hidden';
    return ()=>{ current.close();document.body.style.overflow=previous;opener.current?.focus({preventScroll:true}); };
  },[selected]);
  const filtered=inspirationImages.filter(item=>category==='All'||item.category===category);
  return <section id="projects" className="studio-section studio-projects"><div className="studio-container">
    <Reveal className="studio-section-heading"><div><p className="studio-kicker">03 / Interior inspiration</p><h2>Room for a<br /><span>different perspective.</span></h2></div><p>Living spaces, bedrooms and kitchens.<br />Find a feeling you’d love to come home to.</p></Reveal>
    <div className="studio-project-toolbar"><div className="studio-filters" role="group" aria-label="Filter interior inspiration">{categories.map(item=><button type="button" key={item} aria-pressed={category===item} onClick={()=>setCategory(item)}>{item==='All'?'The collection':item==='Kitchen'?'Kitchens':item==='Bedroom'?'Bedrooms':'Living rooms'}</button>)}</div><span role="status">{filtered.length} images / {new Set(filtered.map(project=>project.category)).size} {category==='All'?'collections':'collection'}</span></div>
    <motion.div layout className="studio-project-grid"><AnimatePresence mode="popLayout">{filtered.map(project=><motion.button layout type="button" key={project.sceneId} className="studio-project-card" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:0.97}} transition={{duration:0.35}} aria-haspopup="dialog" aria-label={`Explore ${project.title}, ${project.gallery.length} design images`} onClick={event=>{opener.current=event.currentTarget;setViewIndex(project.initialSlide);setSelected(project);}}><span className="studio-project-image"><img src={studioImage(project.image)} alt={project.alt} srcSet={`${studioImage(project.image).replace('.webp','-768.webp')} 768w, ${studioImage(project.image)} 1536w`} sizes="(max-width:600px) 100vw, (max-width:1000px) 50vw, 33vw" width="1536" height="1024" loading="lazy" /><span className="studio-project-photo-count">{project.gallery.length} images · Explore</span><span className="studio-project-open"><ArrowUpRight size={21}/></span></span><span className="studio-project-meta"><span><small>{project.category}</small><strong>{project.title}</strong></span><span>{String(project.number).padStart(2,'0')}</span></span></motion.button>)}</AnimatePresence></motion.div>
    <p className="studio-disclosure">AI-generated interior inspiration. These images illustrate design directions and are not photographs of completed client projects.</p>
  </div>
  <dialog ref={dialog} className="studio-project-dialog" aria-labelledby="concept-title" onCancel={()=>setSelected(null)} onClick={event=>{if(event.target===dialog.current){const r=event.currentTarget.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)setSelected(null);}}}>
  {selected&&<><div className="studio-dialog-header"><div><p className="studio-kicker">{selected.category} / Design visualisation</p><h2 id="concept-title">{selected.title}</h2></div><button type="button" className="studio-icon-button" aria-label="Close studio design" onClick={()=>setSelected(null)} autoFocus><X size={22}/></button></div><Swiper key={selected.sceneId} initialSlide={selected.initialSlide} onSwiper={instance=>{gallerySwiper.current=instance;}} modules={[Navigation,Pagination,A11y,Keyboard]} keyboard={{enabled:true,onlyInViewport:true}} navigation={selected.gallery.length>1} pagination={selected.gallery.length>1 ? {clickable:true} : false} onSlideChange={swiper=>setViewIndex(swiper.activeIndex)} className="studio-gallery">{selected.gallery.map((image,index)=><SwiperSlide key={image}><img src={studioImage(image)} alt={`${selected.category} design inspiration — image ${index+1} of ${selected.gallery.length}`} /></SwiperSlide>)}</Swiper><div className="studio-gallery-thumbnails" role="group" aria-label="Choose a gallery image">{selected.gallery.map((image,index)=><button type="button" key={image} aria-label={`View ${selected.category.toLowerCase()} image ${index+1}`} aria-pressed={viewIndex===index} onClick={()=>gallerySwiper.current?.slideTo(index)}><img src={studioImage(image).replace('.webp','-768.webp')} alt="" width="77" height="51" loading="lazy"/></button>)}</div><div className="studio-dialog-description"><div><p>{selected.description}</p><small>{selected.materials}</small></div><a className="studio-button" href={`${studio.whatsapp}?text=${encodeURIComponent(`Hello Dream Space Interiors! I liked your “${selected.title}” design and would love to discuss my space.`)}`} target="_blank" rel="noopener noreferrer">Discuss this direction <ArrowUpRight size={16}/></a></div><p className="studio-dialog-note"><span>AI-generated design inspiration</span><span role="status" aria-live="polite">View {viewIndex+1} / {selected.gallery.length}</span></p></>}
  </dialog></section>;
}
