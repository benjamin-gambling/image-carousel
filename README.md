# Image Carousel

# ![Image Carousel](readme_img/screenshot.png)

## Table of contents

1. [Demo](#demo)
2. [Technologies](#technologies)
3. [Features](#features)
4. [Development](#development)
5. [License](#license)
6. [Installation](#installation)

## Demo

Here is the working live demo:
[https://benjamin-gambling.github.io/image-carousel/](https://benjamin-gambling.github.io/image-carousel/).

## Technologies

- Javascript Modules, ES6
- [Webpack](https://webpack.js.org/)
- [NPM](https://www.npmjs.com/)

  <img width="64" height="64" src="readme_img/webpack.png">
  <img width="164" height="64" src="readme_img/npm.png">

## Features

- Add as many pictures as you want through the html file
- Next & Previous Controls
- Idicators made through CSS to see position and also to navigate further along or back
- Slide Show that fades pictures in every 5s

### Devlopment

- Random picture selection

## License

> You can check out the full license [here](LICENSE)

This project is licensed under the terms of the **MIT** license.

## Installation

1. In you project directory copy and paste:-
   `npm i @benjamin-gambling/image-carousel --save`

2. Then in you Javascript file use: -
   `import imageCarousel from "@benjamin-gambling/image-carousel";`

3. Edit Html to add/remove slides (Idicators create themsleves so that doesnt need to be touched)

HTML: -

```
<div class="carousel">
      <div class="carousel-item fade show">
        <img class="carousel-img" src="images/slide1.jpg" alt="Slide 1" />
      </div>

      <!--Second slide-->
      <div class="carousel-item fade">
        <img class="carousel-img" src="images/slide2.jpg" alt="Slide 2" />
      </div>

      <!--Third slide-->
      <div class="carousel-item fade">
        <img class="carousel-img" src="images/slide3.jpg" alt="Slide 3" />
      </div>

      <!--rinse and repeat for more images-->
      <div class="carousel-item fade">
        <img class="carousel-img" src="images/slide4.jpg" alt="Slide 4" />
      </div>

      <div class="carousel-item fade">
        <img class="carousel-img" src="images/slide5.jpg" alt="Slide 5" />
      </div>

      <div class="carousel-item fade">
        <img class="carousel-img" src="images/slide6.jpg" alt="Slide 6" />
      </div>
    </div>

    <a
      class="carousel-control-prev"
      href="#indicator"
      role="button"
      data-slide="prev"
    >
      <i class="fa fa-chevron-left"></i>
    </a>
    <a
      class="carousel-control-next"
      href="#indicator"
      role="button"
      data-slide="next"
    >
      <i class="fa fa-chevron-right"></i>
    </a>

    <!--Controls-->

    <!--INDICATORS: Leave as they are JS will append these depending on how many images-->
    <div class="carousel-indicators"></div>

  CSS: -
    * {
      box-sizing: border-box;
    }

    html,
    body {
      overflow-x: hidden;
      overflow-y: auto;
      display: flex;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.7);
    }

    body {
      background-color: transparent;
    }

    .carousel {
      display: flex;
      margin-top: 100px;
      width: 1300px;
      height: 705px;
      justify-content: center;
    }

    .carousel-item {
      display: none;
      opacity: 0.85;
      width: 100%;
      height: 100%;
    }

    .carousel-img {
      min-width: 100%;
      min-height: 100%;
      width: 1300px;
    }

    .show {
      display: block;
    }

    .carousel-control-next,
    .carousel-control-prev {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      margin-top: -50px;
      padding: 15px;
      color: rgba(255, 255, 255, 0.75) !important;
      font-size: 35px;
      transition: 0.6s ease;
    }

    .carousel-control-next {
      right: 0;
    }

    .carousel-control-prev {
      left: 0;
    }

    .carousel-control-next:hover,
    .carousel-control-prev:hover {
      background-color: rgba(0, 0, 0, 0.1);
      color: rgba(255, 255, 255, 1) !important;
      font-size: 45px;
    }
    .carousel-indicators {
      position: absolute;
      top: 90%;
      width: 100%;
      text-align: center;
      margin: 0px auto;
    }

    .indicator {
      display: inline-flex;
      padding: 6px;
      cursor: pointer;
      height: 15px;
      width: 15px;
      margin: -50px 5px 0px 5px;
      background-color: rgba(255, 255, 255, 0.25);
      border-radius: 50%;
      transition: background-color 0.6s ease;
    }

    .indicator:hover,
    .active {
      background-color: rgba(255, 255, 255, 1);
    }

    /* Fading animation */
    .fade {
      -webkit-animation-name: fade;
      -webkit-animation-duration: 3s;
      animation-name: fade;
      animation-duration: 3s;
    }

    @-webkit-keyframes fade {
      from {
        opacity: 0.1;
      }
      to {
        opacity: 0.85;
      }
    }

    @keyframes fade {
      from {
        opacity: 0.1;
      }
      to {
        opacity: 0.85;
      }
    }
```
