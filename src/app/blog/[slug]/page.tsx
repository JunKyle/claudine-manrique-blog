import data from "../../data/blog.json";
import parse from 'html-react-parser';
import Link from "next/link";
 
export const metadata: Metadata = {
  title: 'Claudine Manrique | Blog',
  description: 'Article de Claudine Manrique',
}

export default function Blog ({params}) {
    const slug = params.slug;

  return (
            <section className="BlogItem">
              <img src={data.posts[slug].picture} className="BlogItem__picture" />
              <h3>{data.posts[slug].title}</h3>
              <p className="BlogItem__content">
                  {parse(data.posts[slug].content)}
              </p>
              <p className="Networks">
                  {parse(data.social_networks)}
              </p>
            </section>
  );
}