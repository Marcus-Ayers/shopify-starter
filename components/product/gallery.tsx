'use client';

import { useState } from 'react';

import clsx from 'clsx';
import { GridTileImage, GridTileImage2 } from 'components/grid/tile';
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
    <div className="mx-2 flex flex-col md:ml-20 md:flex-row">
      {images.length > 1 ? (
        // might need to change this
        <div className="order-last mt-5 flex h-full justify-center bg-none md:order-first md:mb-20 md:mr-7 md:mt-0 md:w-1/6 md:flex-col">
          {images.map((image, index) => {
            const isActive = index === currentImage;
            return (
              <button
                aria-label="Enlarge product image"
                key={image.src}
                className="mx-1 rounded-lg md:mx-0"
                onClick={() => setCurrentImage(index)}
              >
                <GridTileImage2
                  alt={image?.altText}
                  src={image.src}
                  width={600}
                  height={600}
                  background="purple-dark"
                  active={isActive}
                  className="mb-2 rounded-lg"
                />
              </button>
            );
          })}
        </div>
      ) : null}
      <div className="relative">
        {images.length > 1 ? (
          <div className="absolute bottom-10 right-10 z-10 flex h-12 flex-row border border-white text-white shadow-xl dark:border-black dark:text-black">
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

        {images[currentImage] && (
          <GridTileImage
            src={images[currentImage]?.src as string}
            alt={images[currentImage]?.altText as string}
            width={600}
            height={600}
            isInteractive={false}
            priority={true}
            className="rounded-md"
            // background="purple"
            // labels={{
            //   title,
            //   amount,
            //   currencyCode,
            //   prodId
            // }}
          />
        )}
      </div>
    </div>
  );
}
