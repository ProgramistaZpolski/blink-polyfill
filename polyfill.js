// Create a class for the element
class Blink extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('span');
        
        const info = document.createElement('span');
        info.setAttribute('class', 'blinker');

        const text = this.getAttribute('data-text');
        info.textContent = text;

        const style = document.createElement('style');

        style.textContent = `.blinker {
            animation: 2s blinky linear infinite forwards;
        }

        @keyframes blinky {
            0% {
                opacity: 0;
            }
            49% {
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            99% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }`;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(info);
    };
};

customElements.define('polyfill-blink', Blink);