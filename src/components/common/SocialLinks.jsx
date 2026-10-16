import { Phone, Mail, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { studio } from '../../data/studio';

export default function SocialLinks() {
  const links = [
    { label: 'WhatsApp', detail: 'Chat about your project', href: studio.whatsapp, Icon: WhatsAppIcon, external: true },
    { label: 'Call the studio', detail: studio.phone, href: studio.telephone, Icon: Phone },
    { label: 'Email us', detail: 'Send your ideas', href: `mailto:${studio.email}`, Icon: Mail },
    { label: 'Get directions', detail: 'Visit us in Hyderabad', href: studio.map, Icon: MapPin, external: true },
  ];
  return <div className="studio-socials" aria-label="Contact the studio">{links.map(link => <a key={link.label} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined} aria-label={`${link.label}: ${link.detail}`} title={link.label}><link.Icon size={28} strokeWidth={1.5} aria-hidden="true"/></a>)}</div>;
}
