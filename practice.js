// const container = document.querySelector('#container');

// const content = document.createElement('div1');
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

const div1 = document.querySelector('#thediv1')
div1.setAttribute('style', 'background: pink')
div1.textContent = 'Test'
container.appendChild(div1)

