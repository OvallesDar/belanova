"use client";
import useIntersectionObserver from "@/hooks/useIntersectionObserver"
import CountUp from "react-countup";

interface CountUpComponentProps {
  history: {
    end : number
    description: string
  }

}

export default function CountUpComponent({history}: CountUpComponentProps) {
  const {elementRef, inView} = useIntersectionObserver()
  const { end, description } = history

  return (
    <div id="primerCount" ref={elementRef} className="text-center">
      {inView && 
      <>
        <h4 className="text-6xl text-primary"><CountUp end={end} duration={1.5} delay={0}/>+</h4>
        <p>{description}</p>
      </>
        }
    </div>
  );
}
