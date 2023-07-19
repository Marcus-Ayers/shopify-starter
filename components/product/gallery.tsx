'use client';

import { useState } from 'react';

import clsx from 'clsx';
import { GridTileImage } from 'components/grid/tile';
import ArrowLeftIcon from 'components/icons/arrow-left';

export function Gallery({
  title,
  amount,
  currencyCode,
  // prodId,
  images
}: {
  title: string;
  // prodId: Array;
  amount: string;
  currencyCode: string;
  images: { src: string; altText: string }[];
}) {
  const [currentImage, setCurrentImage] = useState(0);

  function handleNavigate(direction: 'next' | 'previous') {
    if (direction === 'next') {
      setCurrentImage(currentImage + 1 < images.length ? currentImage + 1 : 0);
    } else {
      setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
    }
  }

  const buttonClassName =
    'px-6 cursor-pointer ease-in-and-out duration-200 transition-bg bg-red-500 hover:bg-red-700';

  return (
    <div className="h-full">
      <div className="relative h-full max-h-[600px] ">
        {images[currentImage] && (
          <GridTileImage
            src={images[currentImage]?.src as string}
            alt={images[currentImage]?.altText as string}
            width={900}
            height={900}
            isInteractive={false}
            priority={true}
            // background="purple"
            // labels={{
            //   title,
            //   amount,
            //   currencyCode,
            //   prodId
            // }}
          />
        )}

        {images.length > 1 ? (
          <div className="absolute bottom-10 right-10 flex h-12 flex-row border border-white text-white shadow-xl dark:border-black dark:text-black">
            <button
              aria-label="Previous product image"
              className={clsx(buttonClassName, 'border-r border-white dark:border-black')}
              onClick={() => handleNavigate('previous')}
            >
              <ArrowLeftIcon className="h-6" />
            </button>
            <button
              aria-label="Next product image"
              className={clsx(buttonClassName)}
              onClick={() => handleNavigate('next')}
            >
              <ArrowLeftIcon className="h-6 rotate-180" />
            </button>
          </div>
        ) : null}
      </div>

      {images.length > 1 ? (
        // might need to change this
        <div className="mb-20 flex">
          {images.map((image, index) => {
            const isActive = index === currentImage;
            return (
              <button
                aria-label="Enlarge product image"
                key={image.src}
                className="h-full w-1/4"
                onClick={() => setCurrentImage(index)}
              >
                <GridTileImage
                  alt={image?.altText}
                  src={image.src}
                  width={600}
                  height={600}
                  background="purple-dark"
                  active={isActive}
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
