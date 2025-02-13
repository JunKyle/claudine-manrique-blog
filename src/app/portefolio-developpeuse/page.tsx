import Image from "next/image";
import "../page.scss";
import Link from 'next/link';
import data from "../data/blog.json";

export default function PortefolioDeveloppeuse() {
  return (
    <>
      <main className="PortefolioDeveloppeuse">
        <h2>Projets développement web</h2>
        <section className="PortefolioDeveloppeuse__grid">
            {data.portefolioDev?.map((post, i) =>{
              return (
                <div key={i} className="PortefolioDeveloppeuse__item">
                  <Image className="PortefolioDeveloppeuse__picture Bibliographie__picture--width" src={post.picture} width="200" height="200" alt={post.title} />
                  <div className="PortefolioDeveloppeuse__content">
                    <span className="PortefolioDeveloppeuse__title">{post.title}</span>
                    <p className="PortefolioDeveloppeuse__description">{post.description}</p>
                    {post.github ?
                      (<Link className="PortefolioDeveloppeuse__link" href={post.github}><Image alt="github icone" src="/images/github.png" width="15" height="15"/><span>GitHub</span></Link>) : ""
                    }
                    {post.url ?
                      (<Link className="PortefolioDeveloppeuse__link" href={post.url}><Image alt="link icone" src="/images/link.png" width="15" height="15"/><span>site en ligne</span></Link>) : ""
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
