import Image from "next/image";
import { data } from "@/mocks/data";
import HotelsPanel from "@/components/hotels-panel";

const city = "Sydney";

export default async function Home() {
  // Commenting out usage of MSW to serve mocks rather than importing the data directly. 
  // MSW currently doesn't work well with NextJS and I ran out of time trying to fix it. 
  // next run dev works, but not next build.
  
  // const response = await fetch("http://www.example.com/hotels");
  // const data = await response.json();

  return (
    <div className="max-w-5xl mx-auto p-5">
      <div className="mb-10">
        <Image
          className="dark:invert"
          src="/qantas-logo.png"
          alt="Next.js logo"
          width={180}
          height={38}
        />
      </div>
      <HotelsPanel city={city} results={data.results} />
    </div>
  );
}
