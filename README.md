# **Dproxy - mobile proxy website**

[View the project live](https://alexsvistunov.github.io/dproxy/):

## Tech stack:
HTML, CSS, JS, BEM, Swiper

## Implemented features:

+ Gradient border

+ Language switcher

+ Decorative elements

+ Turning grid blocks into slider blocks on tablet and mobile devices(3 sections)

+ Reusable components

+ Accordion 

+ Burger menu

## Problems faced:
There is no implementation of gradient border styling in CSS
Multiple swiper sliders
There is no implementation in the Swiper library to turn blocks into slider on certain devices(screen width)

## Problem solving
The problem of gradient borders was solved by absolute positioning of pseudo elements and z-index, It's not just the typical border in CSS
```html
<!-- Using the example of the button (write to the creator) -->

.link-writetocreator {
    position: relative;
    font-size: 16px;
    padding: 15px 20px;
    transition: all .35s;
    min-height: 52px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 15px;
    background-color: var(--background);
}

.link-writetocreator::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(47deg, #0A6FCC -44.41%, rgba(59, 237, 77, 0.75) 124.33%);
    border-radius: 15px;
    z-index: -1;
}

The problem with turning blocks into slider on certain devices(screen width) was solved with the resizableSwiper function

```JS
  window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    '(max-width: 873px)',
    '.proxy-types__slider',
    {
      spaceBetween: 32,
      slidesPerView: '1',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
  );

  resizableSwiper(
    '(max-width: 769px)',
    '.help__slider',
    {
      spaceBetween: 10,
      slidesPerView: 1.2,
    }
  );

  resizableSwiper(
    '(max-width: 769px)',
    '.areas__slider',
    {
      spaceBetween: 10,
      slidesPerView: 1.2,
    }
  );
});

```


### Author: Alex Svistunov


