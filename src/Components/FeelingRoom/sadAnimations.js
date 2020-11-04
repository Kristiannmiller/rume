import gsap from 'gsap'
import {DropIcon} from './FeelingRoom-SC'

export const sadBGAnimation = () => {
  const sadBGTL = gsap.timeline({repeat: 2, yoyo:true})
  sadBGTL.to(".sadRoom", {
    duration: 2,
    background: 'linear-gradient(45deg, hsl(200, 29%, 80%) 0%, hsl(200, 30%, 63%) 100%)',
  })
  sadBGTL.to(".sadRoom", {
    duration: 2,
    background: 'linear-gradient(45deg, hsl(200, 30%, 63%) 0%,  hsl(202, 19%, 49%) 100%)',
  })
  sadBGTL.to(".sadRoom", {
    duration: 2,
    background: 'linear-gradient(45deg,  hsl(202, 19%, 49%) 0%, hsl(210, 21%, 34%) 100%)',
  })
  sadBGTL.to(".sadRoom", {
    duration: 2,
    background: 'linear-gradient(45deg, hsl(210, 21%, 34%) 0%, hsl(224, 26%, 20%) 100%)',
  })
  sadBGTL.to(".sadRoom", {
    duration: 2,
    background: 'linear-gradient(45deg, hsl(224, 26%, 20%) 0%, hsl(237, 33%, 12%) 100%)',
  })
  sadBGTL.to(".sadRoom", {
    duration: 2,
    background: 'linear-gradient(45deg, hsl(237, 33%, 12%) 0%, hsl(246, 48%, 8%) 100%)',
  })
  sadBGTL.to(".sadRoom", {
    duration: 2,
    background: 'linear-gradient(45deg, hsl(246, 48%, 8%) 0%, hsl(246, 45%, 4%) 100%)',
  })
}
export const sadDropAnimation = () => {
  let sadDropTl = gsap.timeline()
  sadDropTl.to('.drop', {
    delay: 'random(2, 60)',
    duration: 8,
    y: '90vh',
    ease: 'slow',
    boxShadow: '0 0 0',
    backgroundColor: 'hsla(0 0% 0% 0)'
  })
  .to('.drop2', {
    delay: 'random(.001, 600)',
    duration: 8,
    y: '90vh',
    ease: 'slow',
    boxShadow: '0 0 0',
    backgroundColor: 'hsla(0 0% 0% 0)'
  })
}
