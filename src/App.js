import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './component/navigation/Navigation';
import About from './routes/About';
import Home from './routes/Home';
import Shop from './routes/Shop';
import SignIn from './routes/sign-in/SignIn';

function App() {
	// sum of number
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="shop" element={<Shop />} />
					<Route path="about" element={<About />} />
					<Route path="sign-in" element={<SignIn />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
