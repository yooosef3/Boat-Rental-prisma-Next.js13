"use client";

import "keen-slider/keen-slider.min.css";

import * as React from "react";

import HeartButton from "./HeartButton";
import { SafeUser } from "@/app/types";
import Slide from "./Slide";
import imageSrc1 from "@/public/images/boat/yacht_interior_3-1.jpeg";
import imageSrc2 from "@/public/images/boat/yacht_interior_4-1.jpeg";
import { useKeenSlider } from "keen-slider/react";

interface SliderProps {
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
  price: number;
  boats?: boolean;
}
export default function Slider({
  imageSrc,
  price,
  boats,
  id,
  currentUser,
}: SliderProps) {
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      rtl: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          // timeout = setTimeout(() => {
          //   slider.next();
          // }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div
      ref={ref}
      className="keen-slider relative group-hover:opacity-90 duration-300 cursor-pointer"
    >
      <div className="absolute inset-4 z-20">
        <div className="flex items-center justify-between">
          {boats && (
            <div className="text-white text-2xl z-0">
              <HeartButton boatId={id} currentUser={currentUser} />
            </div>
          )}
          <div className="flex items-center bg-[#b18f6b] px-2 pt-1 rounded-md text-white">
            <div>شب/</div>
            <div className="text-lg medium">
              {price.toLocaleString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
            </div>
            <h4>دلار</h4>
          </div>
        </div>
      </div>
      <Slide imageSource={imageSrc} />
      <Slide imageSource={imageSrc1} />
      <Slide imageSource={imageSrc2} />
    </div>
  );
}
