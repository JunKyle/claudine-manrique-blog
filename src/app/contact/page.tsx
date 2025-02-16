import dynamic from 'next/dynamic';
const NetworksComponent = dynamic(() => import('../networks'));

export default function Contact() {
  return (
  	<section className="Contact">
  		<div className="Contact__networks">
    		<NetworksComponent />
    	</div>
    </section>
  );
}
