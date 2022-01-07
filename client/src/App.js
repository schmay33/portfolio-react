import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ContactForm from "./components/contact";
import {
	Routes,
	Route
} from 'react-router-dom';
import Home from './components/home';
import NotFound from './components/errors/NotFound';
import Forbidden from './components/errors/Forbidden';
import UnhandledError from './components/errors/UnhandledError';

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/contact" element={<ContactForm />} />
					<Route path="/notfound" element={<NotFound />} />
					<Route path="/forbidden" element={<Forbidden />} />
					<Route path="/error" element={<UnhandledError />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
