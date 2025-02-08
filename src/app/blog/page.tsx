import parse from 'html-react-parser';
import data from "../data/blog.json";
import Link from "next/link";

export default function Blog () {

	return (
        <>
            {data.posts?.reverse().map((post, i) =>{
              return (<section key={i} className="Blog">
                <Link href={`${post.url}`}>
                    <img src={post.picture} className="Blog__picture" />
                    <h3>{post.title}</h3>
                    <p className="Blog__content">
                        {parse(post.content)}
                    </p>
                </Link>
                <p className="Networks">
                    {parse(data.social_networks ? data.social_networks : "")}
                </p>
              </section>);
            })}
        </>
  );
}