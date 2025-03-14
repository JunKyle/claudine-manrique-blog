import Image from "next/image";
import "../page.scss";
import Link from 'next/link';
import data from "../data/blog.json";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Claudine Manrique | Informatique',
  description: 'Portefolio web de Claudine Manrique',
}

export default function Informatique() {
  return (
    <>
      <main className="Informatique">
        <h2>Projets développement web</h2>
        <section className="Informatique__grid">
            {data.informatique?.map((post, i) =>{
              return (
                <div key={i} className="Informatique__item">
                  <img className="Informatique__picture" src={post.picture} alt={post.title} />
                  <div className="Informatique__content">
                    <span className="Informatique__title">{post.title}</span>
                    <p className="Informatique__description">{post.description}</p>
                    {post.github ?
                      (<Link className="Informatique__link" target='_blank' href={post.github}><Image alt="github icone" src="/images/github.png" width="15" height="15"/><span>GitHub</span></Link>) : ""
                    }
                    {post.url ?
                      (<Link className="Informatique__link" target='_blank' href={post.url}><Image alt="link icone" src="/images/link.png" width="15" height="15"/><span>site en ligne</span></Link>) : ""
                    }
                  </div>
                </div>
              );
            })}
        </section>
      </main>
    </>
  );
}
