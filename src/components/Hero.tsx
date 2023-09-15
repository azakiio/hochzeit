import Image, { StaticImageData } from "next/image";


export default function Hero({ title, content, image }: Props) {
  
  return (
    <div className="gap-4 border">
      <h1 className="fw-bold text-4xl text-center mb-12">{title}</h1>

      <div className="flex gap-4">
        <div>{content}</div>
        <Image src={image} alt="" className="rounded-t-full" />
        <img src="https://picsum.photos/200/300" />
      </div>
    </div>
  );
}

type Props = {
  title: string;
  content: string;
  image: StaticImageData;
};
