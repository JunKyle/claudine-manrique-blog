import data from "../../data/blog.json";
import parse from 'html-react-parser';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Claudine Manrique | Blog',
  description: 'Article de Claudine Manrique',
}

export async function generateStaticParams() {

  const slugs = data.posts.map((post) => (
     {
    slug: post.id
  }));
return slugs;
}

export default function Blog ({params}) {
    const slug = params.slug;

  return (
            data.posts[slug]?.published && (
              <section className="BlogItem">
                <h3 className="BlogItem__title">{data.posts[slug].title}</h3>
                <img src={data.posts[slug].picture} className="BlogItem__picture" />
                <p className="BlogItem__content">
                    {parse(data.posts[slug].content)}
                </p>
                <p className="Networks">
                    {parse(data.social_networks)}
                </p>
              </section>)
  );
}