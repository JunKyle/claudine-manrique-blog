import Link from "next/link";

export default async function Blog ({data}) {

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