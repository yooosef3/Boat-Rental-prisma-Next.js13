"use client";

import "keen-slider/keen-slider.min.css";

import * as React from "react";

import { AiTwotoneHeart } from "react-icons/ai";
import Slide from "./Slide";
import image1 from "../../public/images/home/yacht1-400x314.jpeg";
import image2 from "../../public/images/home/yacht8-400x314.jpeg";
import image3 from "../../public/images/home/yacht_interior_3-1-400x314.jpeg";
import { useKeenSlider } from "keen-slider/react";

export default function Slider() {
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      rtl:true
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  return (
    <div
      ref={ref}
      className="keen-slider relative group-hover:opacity-90 duration-300 cursor-pointer"
    >
      <div className="absolute inset-4 z-40">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl">
            <AiTwotoneHeart />
          </div>
          <div className="flex items-center bg-[#b18f6b] px-2 pt-1 rounded-md text-white">
            <div>شب/</div>
            <div className="text-lg medium">3,000</div>
            <h4>$</h4>
          </div>
        </div>
      </div>
      <Slide imageSource={image1} />
      <Slide imageSource={image2} />
      <Slide imageSource={image3} />
    </div>
  );
}
