# **Dproxy - проект мобильных прокси с красивым дизайном и множеством интерактивных элементов**

[Посмотреть проект LIVE](https://alexsvistunov.github.io/dproxy/):

## Технологии:
HTML, CSS, JS, BEM, Swiper


## Реализованные фичи:

+ Gradient border

+ Переключатель языка

+ Декоративные элементы

+ Превращение блоков в слайдер на планшете и мобильных устройствах(3 секции)

+ Переиспользуемые компоненты

+ Аккордеон 

+ Бургер-меню


## Проблемы, с которыми столкнулся:

В CSS нет реализации стилизации градиентных границ

В библиотеке Swiper нет реализации превращения блоков в slider на определенных устройствах(ширине экрана)


## Решение проблем:
Проблему градиентных границ решил при помощи абсолютного позиционирования псевдоэлементов и z-index
```html
<!-- На примере кнопки написать разработчику -->

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
```
Проблему превращения блоков с slider на мобилках решил при помощи написания функции resizableSwiper, которая по сути инизализирует swiper только на мобилках и уничтожением слайдера через destroy

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
    // someFunc
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


### Автор: Alex Svistunov


