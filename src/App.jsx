// Styles
import './App.css';

// Imports
import { Route, Switch } from 'wouter';

// Hooks
import { useStoreForApp } from './store';

// Components
import Drawer from './drawer/drawer';
import Navbar from './navbar/navbar';
import Home from './registers/home/home';
import Admin from './my-business/business-admin/business-admin';
import Reports from './pages/reports/Reports';

const App = () => {
	const [currentUser] = useStoreForApp((store) => [store.currentUser]);

	return (
		<>
			<div className="w-full h-screen mx-auto drawer">
				<Navbar>
					<Switch>
						<Route path="/">
							<Home />
						</Route>
						<Route path="/admin">
							{currentUser ? () => <Admin /> : () => <Home />}
						</Route>
						<Route path="/reports">
							{currentUser ? () => <Reports /> : () => <Home />}
						</Route>
					</Switch>
				</Navbar>
				<Drawer />
			</div>
		</>
	);
};

export default App;
