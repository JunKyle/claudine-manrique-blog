import { promises as fs } from 'fs';
import parse from 'html-react-parser';
import Link from "next/link";

async function getData() {
  const path = process.cwd() + "/src/app/data/blog.json"
  const file = await fs.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
}

export default async function Blog ({params}) {
    const data = await getData();  
    const slug = await params.slug;

  return (
            <section className="Home__item">
              <h3>{data.posts[slug].title}</h3>
              <p>
                  {parse(data.posts[slug].content)}
              </p>
              <p>
                  {parse(data.social_networks)}
              </p>
            </section>
  );
}