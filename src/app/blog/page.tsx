import { promises as fs } from 'fs';

async function getData() {
  const path = process.cwd() + "/src/app/data/blog.json"
  const file = await fs.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
}

export default async function Blog () {
    const data = await getData();    

	return (
    <div>
        {data.title}
    </div>
  );
}