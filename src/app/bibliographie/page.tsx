import parse from 'html-react-parser';
import "../page.scss";
import Link from 'next/link';
import data from "../data/blog.json";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Claudine Manrique | Bibliographie',
  description: 'Bibliographie de Claudine Manrique',
}

export default function Bibliographie() {
  return (
    <>
      <main className="Bibliographie">
        <h2>Bibliographie</h2>
        <section className="Bibliographie__grid">
            {data.bibliographie?.map((post, i) =>{
              return (
                <div key={i} className="Bibliographie__item">
                  <img className="Bibliographie__picture" src={post.picture} alt={post.title} width="200" height="200" />
                  <div className="Bibliographie__content">
                    <span className="Bibliographie__title">{post.title}</span>
                    <p className="Bibliographie__description">{post.description}</p>
                    <p className="Bibliographie__description">{post.resume ? parse(post.resume) : ""}</p>
                    {post.babelio ?
                      (<Link className="Bibliographie__link" target='_blank' href={post.babelio}><img alt="babelio icone" src="/images/babelio.jpg" width="15" height="15"/><span>Babelio</span></Link>) : ""
                    }
                    {post.goodreads ?
                      (<Link className="Bibliographie__link" target='_blank' href={post.goodreads}><img alt="goodreads icone" src="/images/goodreads.jpg" width="15" height="15"/><span>Goodreads</span></Link>) : ""
                    }
                    {post.booknode ?
                      (<Link className="Bibliographie__link" target='_blank' href={post.booknode}><img alt="booknode icone" src="/images/booknode.webp" width="15" height="15"/><span>Booknode</span></Link>) : ""
                    }
                    {post.url ?
                      (<Link className="Bibliographie__link" target='_blank' href={post.url}><img alt="link icone" src="/images/link.png" width="15" height="15"/><span>où acheter</span></Link>) : ""
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
