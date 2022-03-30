// Styles
import './App.css';

// Imports
import { Route, Switch } from 'wouter';

// Components
import Drawer from './components/drawer/Drawer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Admin from './pages/admin/Admin';

const App = () => {
	return (
		<>
			<div className="h-screen mx-auto drawer lg:w-2/3 sm:w-full">
				<Navbar>
					<Switch>
						<Route path="/">
							<Home />
						</Route>
						<Route path="/admin">
							<Admin />
						</Route>
					</Switch>
				</Navbar>
				<Drawer />
			</div>
		</>
	);
};

export default App;
