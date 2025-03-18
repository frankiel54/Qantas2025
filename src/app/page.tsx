import Image from "next/image";
import { data } from "@/mocks/data";
import HotelsPanel from "@/components/hotels-panel";

const city = "Sydney";

export default function Home() {
  // const response = await fetch("http://example.com/user");
  // const data = await response.json();
  // console.log(data);

  return (
    <div className="max-w-4xl mx-auto p-5">
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
