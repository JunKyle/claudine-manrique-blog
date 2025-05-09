import parse from 'html-react-parser';
import data from "../data/blog.json";
import Link from "next/link";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Claudine Manrique | Blog',
  description: 'Blog de Claudine Manrique',
}

export default function Blog () {

	return (
        <>
            {data.posts?.reverse().map((post, i) =>{
              return post.published ?  (<section key={i} className="Blog">
                              <Link href={`${post.url}`}>
                                  <img src={post.picture} className="Blog__picture" />
                                  <div className="Blog__dateTitle">
                                    <h3>{post.title}</h3>
                                    <p className="Blog__date">
                                        {parse(post.published_date)}
                                    </p>
                                  </div>
                                  <p className="Blog__content">
                                      {parse(post.content)}
                                  </p>
                              </Link>
                              <p className="Networks">
                                  {parse(data.social_networks ? data.social_networks : "")}
                              </p>
                            </section>) : "";
            })}
        </>
  );
}