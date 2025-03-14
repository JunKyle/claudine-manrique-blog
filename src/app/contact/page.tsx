import dynamic from 'next/dynamic';
import { Metadata } from 'next';
const NetworksComponent = dynamic(() => import('../networks'));
 
export const metadata: Metadata = {
  title: 'Claudine Manrique | Contact',
  description: 'Contact de Claudine Manrique',
}

export default function Contact() {
  return (
  	<section className="Contact">
      <p className="Contact__paragraph">Ecrivez-moi sur junkyleuniverse[a].gmail.com ou
       retrouvez-moi sur les réseaux sociaux où je poste régulièrement</p>
  		<div className="Contact__networks">
    		<NetworksComponent />
    	</div>
    </section>
  );
}
