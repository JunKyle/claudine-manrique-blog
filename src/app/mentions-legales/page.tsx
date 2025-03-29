import dynamic from 'next/dynamic';
import { Metadata } from 'next';
const NetworksComponent = dynamic(() => import('../networks'));
 
export const metadata: Metadata = {
  title: 'Claudine Manrique | Mentions Légales',
  description: 'Mentions légales',
}

export default function MentionsLegales() {
  return (
  	<section className="Contact">
      <p className="Contact__paragraph">
        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, 
        il est précisé aux utilisateurs du site claudine-manrique l'identité des différents intervenants dans le cadre de 
        sa réalisation et de son suivi.
        <br/>
        Le présent site, accessible à l’URL www.claudine-manrique.fr (le « Site »), est édité par : Claudine Manrique.
        <br/>
        Le Site est hébergé par la société YuLPa, situé 16 Rue de Bucarest, 75008 Paris.
        <br/>
        Le Directeur de la publication du Site est Claudine Manrique.
        Nous contacter par email : claudine.manrique@gmail.com
        <br/>
        Génération des mentions légales par Legalstart.
      </p>
  		<div className="Contact__networks">
    		<NetworksComponent />
    	</div>
    </section>
  );
}
