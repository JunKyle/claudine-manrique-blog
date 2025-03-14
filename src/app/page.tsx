import "./page.scss";
import Link from 'next/link';
import data from "./data/blog.json";
import dynamic from 'next/dynamic';
const BlogComponent = dynamic(() => import('./blog/[slug]/page'));
const NetworksComponent = dynamic(() => import('./networks'));

export default function Home() {
  return (
    <>
      <main className="Home">
        <section className="Home__section">
          <div className="Home__paragraph">
            <div className="Home__avatar">
              <img src="/images/avatar.jpg" />
            </div>
            <p className="paragraph">Je suis Claudine Manrique aka JunKyle sur les Internets.<br/><br/>
            Je suis auteurice, développeur·se et artiste à plein temps. Bienvenue sur mon site qui résume mes créations aussi bien
             dans l&apos;informatique, que dans l&apos;écriture. <br/><br/>J&apos;écris aussi des articles de blog pour un public qui serait intéressé·e 
             par savoir comment ça se passe dans ma tête.
            </p>
          </div>  
        </section>
        <span className="separator"></span>
        <section className="Home__section">
          <div className="Home__paragraph Home__paragraph--center">
            <NetworksComponent />
          </div>
        </section>
        <span className="separator"></span>
        <section className="Home__section">
          <div className="Home__paragraph Home__paragraph--column">
            <h2 className="Home__title">Dernier article de blog</h2>
            <div className="Home__blog">
              <Link className="Home__blogLink" href={`${data.posts.findLast((post) =>post.published).url}`}></Link>
              <BlogComponent params={{slug: data.posts.findLast((post) =>post.published).id}} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
