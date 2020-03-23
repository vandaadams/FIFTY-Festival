const title = 'FIFTY Music Festival — November 10–12, Desert Valley'
// creating an array with 50 empty elements and filling them with title
const marqueeText = new Array(50).fill(title);
// grabs marquee span from html
const marquee = document.querySelector('.marquee span')
// sets repeating title as the content
marquee.innerHTML = marqueeText.join(' — ')

//console.log(marquee)
