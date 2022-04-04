// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);

const p = document.createElement('p')
p.textContent = "Hey I'm red!"
p.style.cssText = 'color: red'
container.appendChild(p)

const h3 = document.createElement('h3')
h3.textContent = "I'm a blue h3!"
h3.style.cssText = 'color: blue'
container.appendChild(h3)

const div = document.querySelector('#thediv')
div.setAttribute('style', 'background: pink; border: thin solid black')
div.textContent = 'Test'
const h1 = document.createElement('h1')
h1.textContent = "I'm in a div"
const pp = document.createElement('p')
pp.textContent = "ME TOO!"
thediv.appendChild(h1)
thediv.appendChild(pp)
container.appendChild(div)

