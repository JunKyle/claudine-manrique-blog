import parse from 'html-react-parser';
import { promises as fs } from 'fs';
import Link from "next/link";

async function getData() {
  const path = process.cwd() + "/src/app/data/blog.json"
  const file = await fs.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
}

export default async function Blog () {
    const data = await getData();    

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