import { Phone, Mail, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { InstagramIcon, YouTubeIcon } from './SocialBrandIcons';
import { studio } from '../../data/studio';

export default function SocialLinks({ profilesOnly = false }) {
  const links = [
    { label: 'WhatsApp', detail: 'Chat about your project', href: studio.whatsapp, Icon: WhatsAppIcon, external: true },
    { label: 'Instagram', detail: '@dreamspaceinteriors22', href: studio.instagram, Icon: InstagramIcon, external: true, profile: true },
    { label: 'YouTube', detail: '@dsinteriors_hyd', href: studio.youtube, Icon: YouTubeIcon, external: true, profile: true },
    { label: 'Call the studio', detail: studio.phone, href: studio.telephone, Icon: Phone },
    { label: 'Email us', detail: 'Send your ideas', href: `mailto:${studio.email}`, Icon: Mail },
    { label: 'Get directions', detail: 'Visit us in Hyderabad', href: studio.map, Icon: MapPin, external: true },
  ].filter(link => link.href && (!profilesOnly || link.profile));
  return <div className="studio-socials" role="group" aria-label={profilesOnly ? 'Follow the studio' : 'Contact the studio'}>{links.map(link => <a key={link.label} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined} aria-label={`${link.label}: ${link.detail}`} title={link.label}><link.Icon size={28} strokeWidth={1.5} aria-hidden="true"/></a>)}</div>;
}
