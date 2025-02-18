import dynamic from 'next/dynamic';
const NetworksComponent = dynamic(() => import('../networks'));

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
