// Styles
import './App.css';

// Components
import Drawer from './components/drawer/Drawer';
import Navbar from './components/navbar/Navbar';

const App = () => {
	return (
		<>
			<div className="h-screen mx-auto drawer lg:w-2/3 sm:w-full">
				<Navbar />
				<Drawer />
			</div>
		</>
	);
};

export default App;
