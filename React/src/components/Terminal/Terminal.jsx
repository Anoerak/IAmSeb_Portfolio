import React, { useEffect } from 'react';

import './Terminal.css';

function Terminal(prop) {
	useEffect(() => {
		class Terminal {
			/**
			 * Construct the widget's settings.
			 * @param {(string|Node)=} container - Query selector or container element.
			 * @param {Object=} options - Custom settings.
			 * @param {string} options.prefix - Prefix to use for data attributes.
			 * @param {number} options.startDelay - Delay before animation, in ms.
			 * @param {number} options.typeDelay - Delay between each typed character, in ms.
			 * @param {number} options.lineDelay - Delay between each line, in ms.
			 * @param {number} options.progressLength - Number of characters displayed as progress bar.
			 * @param {string} options.progressChar – Character to use for progress bar, defaults to █.
			 * @param {number} options.progressPercent - Max percent of progress.
			 * @param {string} options.cursor – Character to use for cursor, defaults to ▋.
			 * @param {Object[]} lineData - Dynamically loaded line data objects.
			 * @param {boolean} options.noInit - Don't initialise the animation.
			 */
			constructor(container = '#terminal', options = {}) {
				this.container = typeof container === 'string' ? document.querySelector(container) : container;
				this.pfx = `data-${options.prefix || 'ty'}`;
				this.startDelay = options.startDelay || parseFloat(this.container.getAttribute(`${this.pfx}-startDelay`)) || 600;
				this.typeDelay = options.typeDelay || parseFloat(this.container.getAttribute(`${this.pfx}-typeDelay`)) || 90;
				this.lineDelay = options.lineDelay || parseFloat(this.container.getAttribute(`${this.pfx}-lineDelay`)) || 1500;
				this.progressLength = options.progressLength || parseFloat(this.container.getAttribute(`${this.pfx}-progressLength`)) || 40;
				this.progressChar = options.progressChar || this.container.getAttribute(`${this.pfx}-progressChar`) || '█';
				this.progressPercent =
					options.progressPercent || parseFloat(this.container.getAttribute(`${this.pfx}-progressPercent`)) || 100;
				this.cursor = options.cursor || this.container.getAttribute(`${this.pfx}-cursor`) || '▋';
				this.lineData = this.lineDataToElements(options.lineData || []);
				if (!options.noInit) this.init();
			}

			/**
			 * Initialise the widget, get lines, clear container and start animation.
			 */
			init() {
				// Appends dynamically loaded lines to existing line elements.
				this.lines = [...this.container.querySelectorAll(`[${this.pfx}]`)].concat(this.lineData);

				/**
				 * Calculates width and height of terminal container.
				 * If container is empty and lines are dynamically loaded, defaults to browser `auto` or CSS.
				 */
				const containerStyle = getComputedStyle(this.container);
				this.container.style.width = containerStyle.width !== '0px' ? containerStyle.width : undefined;
				// this.container.style.minHeight = containerStyle.height !== '0px' ? containerStyle.height : undefined;
				this.container.style.height = '500px';
				this.container.style.overflow = 'auto';
				this.container.style.scrollBehavior = 'smooth';

				this.container.setAttribute('data-terminal', '');
				this.container.innerHTML = '';
				this.start();
			}

			/**
			 * Start the animation and render the lines depending on their data attributes.
			 */
			async start() {
				await this._wait(this.startDelay);

				for (let line of this.lines) {
					const type = line.getAttribute(this.pfx);
					const delay = line.getAttribute(`${this.pfx}-delay`) || this.lineDelay;

					if (type === 'input') {
						line.setAttribute(`${this.pfx}-cursor`, this.cursor);
						await this.type(line);
						await this._wait(delay);
					} else if (type === 'progress') {
						await this.progress(line);
						await this._wait(delay);
					} else {
						this.container.appendChild(line);
						await this._wait(delay);
					}

					line.removeAttribute(`${this.pfx}-cursor`);
				}
			}

			/**
			 * Animate a typed line.
			 * @param {Node} line - The line element to render.
			 */
			async type(line) {
				const chars = [...line.textContent];
				const delay = line.getAttribute(`${this.pfx}-typeDelay`) || this.typeDelay;
				line.textContent = '';
				this.container.appendChild(line);

				for (let char of chars) {
					await this._wait(delay);
					line.textContent += char;
				}
			}

			/**
			 * Animate a progress bar.
			 * @param {Node} line - The line element to render.
			 */
			async progress(line) {
				const progressLength = line.getAttribute(`${this.pfx}-progressLength`) || this.progressLength;
				const progressChar = line.getAttribute(`${this.pfx}-progressChar`) || this.progressChar;
				const chars = progressChar.repeat(progressLength);
				const progressPercent = line.getAttribute(`${this.pfx}-progressPercent`) || this.progressPercent;
				line.textContent = '';
				this.container.appendChild(line);

				for (let i = 1; i < chars.length + 1; i++) {
					await this._wait(this.typeDelay);
					const percent = Math.round((i / chars.length) * 100);
					line.textContent = `${chars.slice(0, i)} ${percent}%`;
					if (percent > progressPercent) {
						break;
					}
				}
			}

			/**
			 * Helper function for animation delays, called with `await`.
			 * @param {number} time - Timeout, in ms.
			 */
			_wait(time) {
				return new Promise((resolve) => setTimeout(resolve, time));
			}

			/**
			 * Converts line data objects into line elements.
			 *
			 * @param {Object[]} lineData - Dynamically loaded lines.
			 * @param {Object} line - Line data object.
			 * @returns {Element[]} - Array of line elements.
			 */
			lineDataToElements(lineData) {
				return lineData.map((line) => {
					let div = document.createElement('div');
					div.innerHTML = `<span ${this._attributes(line)}>${line.value || ''}</span>`;

					return div.firstElementChild;
				});
			}

			/**
			 * Helper function for generating attributes string.
			 *
			 * @param {Object} line - Line data object.
			 * @returns {string} - String of attributes.
			 */
			_attributes(line) {
				let attrs = '';
				for (let prop in line) {
					attrs += this.pfx;

					if (prop === 'type') {
						attrs += `="${line[prop]}" `;
					} else if (prop !== 'value') {
						attrs += `-${prop}="${line[prop]}" `;
					}
				}

				return attrs;
			}
		}

		// We initialise the terminal by looking for the ID terminal-back and then running the Terminal class on it.
		new Terminal('#terminal-back');
	}, []);

	return (
		<>
			<div className='flip__terminal'>
				<div className='flip__terminal__inner'>
					<div className='flip__terminal__front'>{prop.children}</div>
					<div className='flip__terminal__back'>
						<div id='terminal-back' data-terminal data-ty-startdelay='7000' data-ty-typedelay='10' data-ty-linedelay='50'>
							<div data-ty>
								<i className='fa-brands fa-html5'></i>
								<i className='fa-brands fa-css3-alt'></i>
								<i className='fa-brands fa-square-js'></i>
							</div>
							<div data-ty='input' data-ty-prompt='👨‍💻'>
								Here's the HTML behind this terminal...
							</div>
							<div data-ty='input' data-ty-prompt='1'>
								<span className='code'>&lt;div className="card"&gt;</span>
							</div>
							<div data-ty='input' data-ty-prompt='2'>
								<span className='code'>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="card__header"&gt;</span>
							</div>
							<div data-ty='input' data-ty-prompt='3'>
								<span className='code'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;</span>Random Card
								<span className='code'>&lt;/h2&gt;</span>
							</div>
							<div data-ty='input' data-ty-prompt='4'>
								<span className='code'>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</span>
							</div>
							<div data-ty='input' data-ty-prompt='5'>
								<span className='code'>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="card__image"&gt;</span>
							</div>
							<div data-ty='input' data-ty-prompt='6'>
								<span className='code'>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="https://picsum.photos/300/200?random=1"
									alt="Random Image"&gt;
								</span>
							</div>
							<div data-ty='input' data-ty-prompt='7'>
								<span className='code'>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</span>
							</div>
							<div data-ty='input' data-ty-prompt='8'>
								<span className='code'>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="card__footer"&gt;</span>
							</div>
							<div data-ty='input' data-ty-prompt='9'>
								<span className='code'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;</span>Random Footer
								<span className='code'>&lt;/p&gt;</span>
							</div>
							<div data-ty='input' data-ty-prompt='10'>
								<span className='code'>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</span>
							</div>
							<div data-ty='input' data-ty-prompt='11'>
								<span className='code'>&lt;/div&gt;</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Terminal;
