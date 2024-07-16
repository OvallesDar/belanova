import Image from "next/image";
import CardHorizontalLogoTitle from "./CardHorizontalLogoTitle";

interface ImageWithCardHorizontalProps {
    sections: {
        image: string
        titles: {
            title: string
            span: string
        },
        reasons: {
            icon: React.JSX.Element
            title: string
            descriptions: string[]
        }[]
    },
    direction: boolean
}

export default function ImageWithCardHorizontal({sections, direction}: ImageWithCardHorizontalProps) {
    const {image,reasons,titles} = sections
  return (
    <section className={`container flex flex-col-reverse ${direction ? "lg:flex-row" : "lg:flex-row-reverse"} `}>
      <Image
        className="w-full lg:w-1/2 object-cover h-[300px] lg:h-auto"
        src={image}
        alt="Salón de casa"
        width={600}
        height={600}
      ></Image>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center py-3 lg:py-10">
        <h2 className="text-2xl text-center">
          {titles.title} <br />
          <span className="text-primary text-3xl">{titles.span}</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-1 overflow-hidden">
          {reasons.map((reason) => (
            <div key={reason.title} className="w-full lg:w-[45%]">
              <CardHorizontalLogoTitle key={reason.title} reason={reason} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
