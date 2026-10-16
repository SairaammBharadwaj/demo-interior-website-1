import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Keyboard } from 'swiper/modules';
import Reveal from '../common/Reveal';
import { studioImage } from '../../data/studio';
import 'swiper/css';
import 'swiper/css/pagination';
const notes=[
  {number:'01',category:'Light',title:'Let the light set the mood.',description:'Layers of ambient, task and accent light give a room different lives, from a bright morning to a quiet evening.',image:'editorial/bedroom-blue',alt:'Bedroom inspiration with soft window light and relaxed linen'},
  {number:'02',category:'Texture',title:'A room should feel good, too.',description:'The grain of timber. The softness of linen. A little contrast between materials brings a simple palette to life.',image:'editorial/living-evening',alt:'Living room inspiration with walnut furniture and textured linen'},
  {number:'03',category:'Everyday',title:'Make the practical beautiful.',description:'Storage where you need it, space to move and surfaces that suit your routines. Good design makes daily life easier.',image:'editorial/kitchen-taupe',alt:'Practical kitchen inspiration with taupe cabinets and ceramic tiles'},
];
export default function Testimonials(){
  return <section id="notes" className="studio-section studio-notes"><div className="studio-container"><Reveal className="studio-section-heading"><div><p className="studio-kicker">Notes from the studio</p><h2>The details make<br /><span>the difference.</span></h2></div><p>A few ideas to bring into<br />your next design conversation.</p></Reveal><Swiper modules={[Pagination,A11y,Keyboard]} slidesPerView={1.12} spaceBetween={22} breakpoints={{640:{slidesPerView:2,spaceBetween:24},1024:{slidesPerView:3,spaceBetween:30}}} pagination={{clickable:true}} keyboard={{enabled:true,onlyInViewport:true}} className="studio-notes-slider">{notes.map(note=><SwiperSlide key={note.number}><article className="studio-note"><div className="studio-note-image"><img src={studioImage(note.image).replace('.webp','-768.webp')} alt={note.alt} width="768" height="512" loading="lazy" /></div><p className="studio-kicker">{note.number} / {note.category}</p><h3>{note.title}</h3><p>{note.description}</p></article></SwiperSlide>)}</Swiper><p className="studio-disclosure">Illustrated with AI-generated interior inspiration.</p></div></section>;
}
