TweenMax.staggerFrom("nav > div", 1, {
  y: 10,
  opacity: 0,
  delay: 0.1,
  ease: Expo.easeInOut
}, 0.1);


TweenMax.staggerFrom(".header-heading-container > *", 2.4, {
  x: 200,
  opacity: 0,
  delay: 0.4,
  ease: Expo.easeInOut
}, 0.1);

TweenMax.from("img", 2, {
  x: -200,
  opacity: 0,
  delay: 0.5,
  ease: Expo.easeInOut
}, 0.1);
