// Styles
import './App.css';

// Imports
import { Route, Switch } from 'wouter';

// Components
import Drawer from './ui/drawer/Drawer';
import Navbar from './ui/navbar/Navbar';
import Home from './registers/home/Home';
import Admin from './my-business/business-admin/business-admin';
import Reports from './pages/reports/Reports';

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
						<Route path="/reports">
							<Reports />
						</Route>
					</Switch>
				</Navbar>
				<Drawer />
			</div>
		</>
	);
};

export default App;
