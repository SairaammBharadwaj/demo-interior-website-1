import { MapPin, Phone, Mail } from 'lucide-react';
import Reveal from '../common/Reveal';
import WhatsAppIcon from '../common/WhatsAppIcon';
import SocialLinks from '../common/SocialLinks';
import { studio, studioImage } from '../../data/studio';

const brief = encodeURIComponent('Hello Dream Space Interiors! I would like to discuss an interior design project.');

export default function Contact() {
  return <section id="contact" className="studio-section studio-contact">
    <div className="studio-container studio-contact-grid">
      <Reveal>
        <p className="studio-kicker">05 / A new beginning</p>
        <h2>Have a space in mind?<br /><span>Let’s make it yours.</span></h2>
        <p className="studio-contact-intro">A floor plan. A saved image. An idea you’re still finding the words for. Whatever your starting point, we’d love to hear it.</p>
        <div className="studio-contact-action">
          <a href={`${studio.whatsapp}?text=${brief}`} className="studio-contact-icon" target="_blank" rel="noopener noreferrer" aria-label="Start a conversation on WhatsApp" title="WhatsApp"><WhatsAppIcon size={29}/></a>
          <span>Start a conversation</span>
        </div>
        <p className="studio-contact-note">Tap the WhatsApp icon to share your ideas with the studio.</p>
        <div className="studio-contact-details">
          <div className="studio-contact-detail">
            <a className="studio-contact-icon" href={studio.telephone} aria-label={`Call the studio: ${studio.phone}`} title="Call the studio"><Phone size={25} strokeWidth={1.5} aria-hidden="true"/></a>
            <span><small>Call the studio</small>{studio.phone}</span>
          </div>
          <div className="studio-contact-detail">
            <a className="studio-contact-icon" href={`mailto:${studio.email}`} aria-label={`Email the studio: ${studio.email}`} title="Email the studio"><Mail size={25} strokeWidth={1.5} aria-hidden="true"/></a>
            <span><small>Write to us</small>{studio.email}</span>
          </div>
          <div className="studio-contact-detail">
            <a className="studio-contact-icon" href={studio.map} target="_blank" rel="noopener noreferrer" aria-label="Get directions to Dream Space Interiors" title="Get directions"><MapPin size={26} strokeWidth={1.5} aria-hidden="true"/></a>
            <span><small>Find us in Hyderabad</small>{studio.address.map(line => <span className="studio-address-line" key={line}>{line}</span>)}</span>
          </div>
        </div>
        <div className="studio-contact-profiles"><p className="studio-kicker">Follow the studio</p><SocialLinks profilesOnly/></div>
      </Reveal>
      <Reveal className="studio-contact-image" delay={0.1}>
        <img src={studioImage('editorial/natural-bedroom')} srcSet="/assets/editorial/natural-bedroom-768.webp 768w, /assets/editorial/natural-bedroom.webp 1536w" sizes="(max-width:800px) 100vw, 45vw" alt="Photorealistic bedroom concept with natural linen, a walnut bed and soft daylight" width="1536" height="1024" loading="lazy"/>
        <div><span className="studio-kicker">A little more you.</span><p>Good spaces begin<br />with a conversation.</p><small>AI-generated interior inspiration</small></div>
      </Reveal>
    </div>
  </section>;
}
