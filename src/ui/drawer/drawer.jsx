// Imports
import { Link, useLocation } from 'wouter';

const Drawer = ({}) => {
	const [location] = useLocation();

	return (
		<aside className="drawer-side">
			<label htmlFor="drawerApp" className="drawer-overlay"></label>
			<ul className="p-4 overflow-y-auto menu w-80 bg-base-100">
				<li className={location === '/' ? 'bordered' : ''}>
					<Link href="/">
						<a>Inicio</a>
					</Link>
				</li>
				<li className={location === '/admin' ? 'bordered' : ''}>
					<Link href="/admin">
						<a>Negocios</a>
					</Link>
				</li>
				<li className={location === '/reports' ? 'bordered' : ''}>
					<Link href="/reports">
						<a>Reportes</a>
					</Link>
				</li>
			</ul>
		</aside>
	);
};

export default Drawer;
