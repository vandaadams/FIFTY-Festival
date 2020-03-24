function makeMarquee () {
  const title = 'FIFTY Music Festival — November 10–12, Desert Valley'
  // creating an array with 50 empty elements and filling them with title
  const marqueeText = new Array(50).fill(title);
  // grabs marquee span from html
  const marquee = document.querySelector('.marquee span')
  // sets repeating title as the content
  marquee.innerHTML = marqueeText.join(' — ')
  //console.log(marquee)
}

makeMarquee()

// creates random number
const random = (min, max) => {
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

// selects all circle elements
const circles = document.querySelectorAll('.circle')

// iterates through array
circles.forEach((circle, index) => {
  // access to each circle element
  circle.animate([{transform: 'scale(1)'}, {transform: 'scale(1.2)'}, {transform: 'scale(1)'}], {
    // sets animation delay
    delay: 300 * index,
    duration: 3000,
    iterations: Infinity
  })
})

const squiggles = document.querySelectorAll('.squiggle')

squiggles.forEach((squiggle, index) => {
  // creates random number between 0 and 45
  const randomNumber = random(0, 45)
  squiggle.animate([
    { transform: 'rotate(0deg)' },
 		// adds random number to rotate
    { transform: 'rotate(' + randomNumber + 'deg)' },
    { transform: 'rotate(0deg)' }
  ], {
    // animation delay
    delay: 300 * index,
    duration: 5000,
    iterations: Infinity
  });
})
