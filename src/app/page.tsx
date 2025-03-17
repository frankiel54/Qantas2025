import Image from "next/image";
import { data } from "@/mocks/data";
import HotelCard from "@/components/hotel-card";

export default async function Home() {
  // const response = await fetch("http://example.com/user");
  // const data = await response.json();
  // console.log(data);
  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="pb-2">
        <Image
          className="dark:invert"
          src="/qantas-logo.png"
          alt="Next.js logo"
          width={180}
          height={38}
        />
      </div>
      <div>
        {data.results.map((result) => (
          <HotelCard result={result} key={result.id} />
        ))}
      </div>
    </div>
  );
}
