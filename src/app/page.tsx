
import Image from "next/image";
import "./page.scss";
import Link from 'next/link';
import data from "./data/blog.json";
import dynamic from 'next/dynamic';
const BlogComponent = dynamic(() => import('./blog/[slug]/page'));

export default function Home() {
  return (
    <>
      <main className="Home">
        <section className="Home__section">
          <div className="Home__paragraph">
            <div className="Home__avatar">
              <img src="/images/avatar.jpg" />
            </div>
            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare ipsum eu ante venenatis, in molestie magna ullamcorper. Nam fermentum varius condimentum. Vivamus dapibus, magna non porta eleifend, ante erat luctus orci, id vulputate nunc sapien quis risus. Praesent commodo felis massa, id eleifend est congue at. Nullam maximus, massa nec tristique porta, lorem ligula egestas leo, sed semper ipsum ex id leo. Sed sit amet tortor turpis. Nulla vestibulum, nisl sed tempus blandit, urna nulla sollicitudin tellus, sollicitudin porttitor erat ipsum quis velit. Donec vestibulum pellentesque consectetur. Praesent in pharetra eros, non viverra felis. Curabitur felis velit, lacinia at sagittis et, mattis et risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent rhoncus interdum libero at maximus. Mauris non metus lorem. Morbi lorem ante, dignissim vitae libero vitae, mattis placerat nunc.<br/>Maecenas a hendrerit nunc. Mauris eleifend ac diam non aliquet. Nulla vel nisi egestas, laoreet massa vitae, posuere est. Vivamus luctus mattis sagittis. Aenean ligula ante, facilisis in nunc in, aliquam pellentesque massa. Ut dui lectus, sodales ut tristique nec, malesuada nec justo. Nulla sit amet euismod ipsum. Sed enim mauris, faucibus porta mollis eget, venenatis et nisi. Morbi leo lacus, scelerisque vitae massa ut, mollis elementum sem. Morbi sed pretium mauris. Suspendisse ultrices, eros consectetur viverra blandit, augue purus fringilla ante, eget suscipit diam nisi sed neque.<br/>Sed quis libero elit. In hendrerit sem urna, ac rhoncus tortor dignissim a. Suspendisse potenti. Mauris viverra leo ac justo fringilla, nec sodales nulla aliquet. Suspendisse ac congue enim. Morbi tellus quam, pellentesque vel dignissim ac, condimentum sit amet arcu. Etiam blandit dolor magna, sed commodo arcu pulvinar quis. Sed tellus tellus, luctus ac sem at, malesuada laoreet lacus. Proin eu placerat tellus, ac iaculis justo. Duis ut congue justo.</p>
          </div>
        </section>
        <span className="separator"></span>
        <section className="Home__section">
          <div className="Home__paragraph Home__paragraph--center">
            <p className="paragraph Networks Networks--home">
              <a target='_blank' className='Networks__link' href='https://www.instagram.com/junkyclo/#'><
                img className='Networks__picto' src='/images/instagram.webp' />
              </a>
              <a target='_blank' className='Networks__link' href='https://www.threads.net/@junkyclo'>
                <img className='Networks__picto' src='/images/threads.png' />
              </a>
              <a target='_blank' className='Networks__link' href='https://www.facebook.com/profile.php?id=100012685540669'>
                <img className='Networks__picto' src='/images/facebook.png' />
              </a>
              <a target='_blank' className='Networks__link' href=''>
                <img className='Networks__picto' src='/images/bluesky.svg' />
              </a>
            </p>
          </div>
        </section>
        <span className="separator"></span>
        <section className="Home__section">
          <div className="Home__paragraph">
            <Link className="Home__blog" href={`${data.posts[data.posts.length - 1].url}`}>
              <BlogComponent params={{slug: data.posts.length - 1}} />
            </Link>
            <h2 className="Home__title">Dernier article de blog</h2>
          </div>
        </section>
      </main>
    </>
  );
}
