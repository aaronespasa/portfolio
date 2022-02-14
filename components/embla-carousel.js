import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./embla-carousel-buttons";
import useEmblaCarousel from "embla-carousel-react";
import { Global } from '@emotion/react'
import FilePreview from './file-preview'

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps"
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map(slide => (
            <div className="embla__slide" key={slide["key"]}>
              <div className="embla__slide__inner">
                <FilePreview
                    title={slide["title"]}
                    folderName={slide["folderName"]}
                    fileName={slide["fileName"]}
                    pdfUrl={slide["pdfUrl"]}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;

export const EmblaCarouselStyle = () => (
    <Global styles={`
        .embla {
            position: relative;
            padding: 20px;
            max-width: 670px;
            margin-left: auto;
            margin-right: auto;
        }

        .embla__viewport {
            overflow: hidden;
            width: 100%;
        }

        .embla__viewport.is-draggable {
            cursor: move;
            cursor: grab;
        }

        .embla__viewport.is-dragging {
            cursor: grabbing;
        }

        .embla__container {
            display: flex;
            user-select: none;
            -webkit-touch-callout: none;
            -khtml-user-select: none;
            -webkit-tap-highlight-color: transparent;
            margin-left: -10px;
        }

        .embla__slide {
            position: relative;
            min-width: 50%;
            padding-left: 10px;
        }

        @media only screen and (max-width: 600px) {
          .embla__slide {
            min-width: 60%;
          }
        }

        @media only screen and (max-width: 500px) {
          .embla__slide {
            min-width: 70%;
          }
        }  

        @media only screen and (max-width: 400px) {
          .embla__slide {
            min-width: 90%;
          }
        }

        .embla__slide__inner {
            position: relative;
            overflow: hidden;
            height: 190px;
        }

        .embla__slide__img {
            position: absolute;
            display: block;
            top: 50%;
            left: 50%;
            width: auto;
            min-height: 100%;
            min-width: 100%;
            max-width: none;
            transform: translate(-50%, -50%);
        }

        .embla__button {
            outline: 0;
            cursor: pointer;
            background-color: transparent;
            touch-action: manipulation;
            position: absolute;
            z-index: 1;
            top: 50%;
            transform: translateY(-50%);
            border: 0;
            width: 30px;
            height: 30px;
            justify-content: center;
            align-items: center;
            fill: #1bcacd;
            padding: 0;
        }

        .embla__button:disabled {
            cursor: default;
            opacity: 0.3;
        }

        .embla__button__svg {
            width: 100%;
            height: 100%;
        }

        .embla__button--prev {
            left: 27px;
        }

        .embla__button--next {
            right: 27px;
        }
    `}
    />
)