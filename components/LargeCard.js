import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          className="rounded-2xl"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="absolute top-32 left-10 space-y-4">
        <h1 className="text-4xl font-bold w-64 mb-3">{title}</h1>
        <p>{description}</p>
        <button className="text-white bg-black py-2 px-10 rounded-lg active:scale-105 transition duration-200 ease-out">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
