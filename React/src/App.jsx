import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import './libs/style/App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/Errors/NotFound';

export const Layout = () => (
	<>
		<Header />
		<Outlet />
		<Footer />
	</>
);

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/contact' element={<Contact />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
