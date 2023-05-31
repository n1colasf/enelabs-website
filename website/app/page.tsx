import Image from "next/image";
import img from "../assets/img/logo.png";

export default function Home() {
  return (
    <div className="">
    <main className="h-auto w-full text-center">
      <div className="mt-20">
        <Image
          src={img}
          alt="ENE Labs"
          width={500}
          height={500}
          className="z-10 animate-pulse mx-auto w-auto"
        />

        <div className="mt-10">
          <p>
            <code> coming soon...stay tuned!</code>
          </p>
        </div>
      </div>
    </main>
    </div>
  );
}
