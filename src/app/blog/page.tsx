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
              return (<section key={i} className="Home__item">
                <Link href={`${post.url}`}>
                <h3>{post.title}</h3>
                <p>
                    {parse(post.content)}
                </p>
                </Link>
                <p>
                    {parse(data.social_networks ? data.social_networks : "")}
                </p>
              </section>);
            })}
        </>
  );
}