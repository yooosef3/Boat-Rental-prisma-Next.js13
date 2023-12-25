"use client";

import "keen-slider/keen-slider.min.css";

import React, { useState } from "react";

import Slide from "./Slide";
import person1 from "../../../public/images/home/woman.jpeg";
import person2 from "../../../public/images/home/woman2-e1652265973886.jpeg";
import person3 from "../../../public/images/home/man4-e1652266244731.jpeg";
import { useKeenSlider } from "keen-slider/react";

const reviews = [
  {
    id: 1,
    title: "یک قایق بادبانی کامل!",
    desc: "قایق بادبانی واقعاً چشمگیر است. من عاشق آن هستم، قایق فوق العاده، کارکنان و امکانات فوق العاده است.",
    name: "Anna Simmons",
    country: "از پرتغال",
    image: person1,
  },
  {
    id: 2,
    title: "تعطیلات بدون دردسر!",
    desc: "تجربه عالی از محبت کاپیتان قدردانی کردیم. مطمئناً خیلی زود دوباره این کار را انجام خواهیم داد!",
    name: "Donna Gilmore",
    country: "از اسپانیا",
    image: person2,
  },
  {
    id: 3,
    title: "پشتیبانی دوست داشتنی!",
    desc: "این قایق را کاملاً دوست داشتم، مکان های فوق العاده بازدید شده، سواحل فوق العاده. مکان واقعاً چشمگیر است.",
    name: "Jack Spirituale",
    country: "از ایتالیا",
    image: person3,
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="mx-auto xl:w-[70%]">
      <div className="navigation-wrapper">
        <div
          ref={sliderRef}
          className="keen-slider h-[60vh] shadow-lg rounded-xl w-full"
        >
          {reviews.map((review) => (
            <Slide key={review.id} {...review} />
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            //@ts-ignore
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
};

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default Slider;
