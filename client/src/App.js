import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Login from './components/Auth/Auth';
import { useAuthContext } from './Hooks/useAuthContext';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import WatchLists from './components/WatchLists/WatchLists';
import Posts from './components/Posts/Posts';
import Alerts from './components/Alerts/Alerts';

function App() {
	const { user } = useAuthContext();
	return (
		<div className='App container'>
			<BrowserRouter>
				<NavBar />
				<div className='pages'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route
							path='/profile'
							element={user ? <Profile /> : <Navigate to='/login' />}
						/>
						<Route
							path='/watchlist'
							element={user ? <WatchLists /> : <Navigate to='/login' />}
						/>
						<Route
							path='/hub'
							element={user ? <Posts /> : <Navigate to='/login' />}
						/>
						<Route
							path='/alerts'
							element={user ? <Alerts /> : <Navigate to='/login' />}
						/>
						<Route
							path='/login'
							element={!user ? <Login /> : <Navigate to='/' />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
