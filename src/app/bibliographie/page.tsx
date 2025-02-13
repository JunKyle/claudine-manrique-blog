import Image from "next/image";
import "../page.scss";
import Link from 'next/link';
import data from "../data/blog.json";

export default function Bibliographie() {
  return (
    <>
      <main className="Bibliographie">
        <h2>Bibliographie</h2>
        <section className="Bibliographie__grid">
            {data.bibliographie?.map((post, i) =>{
              return (
                <div key={i} className="Bibliographie__item Bibliographie__item--line">
                  <Image className="Bibliographie__picture" src={post.picture} width="200" height="200" alt={post.title} />
                  <div className="Bibliographie__content">
                    <span className="Bibliographie__title">{post.title}</span>
                    <p className="Bibliographie__description">{post.description}</p>
                    {post.babelio ?
                      (<Link className="Bibliographie__link" href={post.babelio}><Image alt="babelio icone" src="/images/babelio.jpg" width="15" height="15"/><span>Babelio</span></Link>) : ""
                    }
                    {post.goodreads ?
                      (<Link className="Bibliographie__link" href={post.goodreads}><Image alt="goodreads icone" src="/images/goodreads.jpg" width="15" height="15"/><span>Goodreads</span></Link>) : ""
                    }
                    {post.booknode ?
                      (<Link className="Bibliographie__link" href={post.booknode}><Image alt="booknode icone" src="/images/booknode.webp" width="15" height="15"/><span>Booknode</span></Link>) : ""
                    }
                    {post.url ?
                      (<Link className="Bibliographie__link" href={post.url}><Image alt="link icone" src="/images/link.png" width="15" height="15"/><span>site en ligne</span></Link>) : ""
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
