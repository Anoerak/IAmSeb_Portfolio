import React, { useEffect } from 'react';
import Terminal from '../../components/Terminal/Terminal';
import Card from '../../components/Card/Card';
import IAmSeb from '../../components/IAmSeb/IAmSeb';

import './Home.css';

function Home() {
	useEffect(() => {
		// We set up the page title
		document.title = 'I Am Seb w/ React';
	}, []);

	return (
		<section>
			<h2>Coming Soon!!</h2>

			<IAmSeb />

			<p>
				Exciting news! My website is currently under construction and will be launching soon with a fresh new look and cutting-edge
				technology. Get ready for an awesome user experience with intuitive navigation and stunning visuals. Stay tuned for updates
				and be the first to experience my new online presence. I can’t wait to share it with you! 😊
			</p>

			<div className='empty__space'>
				<Terminal>
					<Card />
				</Terminal>
			</div>
		</section>
	);
}

export default Home;
