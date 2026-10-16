import { ArrowUp, ArrowUpRight } from 'lucide-react';
import BrandMark from '../common/BrandMark';
import SocialLinks from '../common/SocialLinks';
import { studio } from '../../data/studio';

export default function Footer(){
 return <footer className="studio-footer"><div className="studio-container">
  <div className="studio-footer-invitation"><div><p className="studio-kicker">A conversation is a good beginning</p><h2>Your next space<br />starts here.</h2></div><a href={studio.whatsapp} className="studio-text-link" target="_blank" rel="noopener noreferrer">Let’s bring it to life <ArrowUpRight size={19}/></a></div>
  <SocialLinks/>
  <div className="studio-footer-top"><div><a href="#home" aria-label="Dream Space Interiors home" className="studio-footer-brand"><BrandMark/></a><p>Considered interiors.<br />A more personal kind of living.</p></div><nav aria-label="Footer navigation"><a href="#about">The studio</a><a href="#services">Our services</a><a href="#projects">The collection</a><a href="#process">Our process</a><a href="#notes">Studio notes</a><a href="#contact">Contact</a></nav><div className="studio-footer-contact"><small>Hyderabad, India</small><a href={studio.telephone}>{studio.phone}</a><a href={`mailto:${studio.email}`}>{studio.email}</a></div><a href="#home" className="studio-back-top" aria-label="Back to top"><ArrowUp size={21}/></a></div>
  <div className="studio-footer-bottom"><span>© {new Date().getFullYear()} {studio.name}</span><span>Spaces for the way you live.</span></div>
 </div></footer>;
}
