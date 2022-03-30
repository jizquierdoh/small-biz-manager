// Imports
import { Link } from 'wouter';

const Drawer = ({}) => {
	return (
		<aside className="drawer-side">
			<label htmlFor="drawerApp" className="drawer-overlay"></label>
			<ul className="p-4 overflow-y-auto menu w-80 bg-base-100">
				<li>
					<Link href="/">
						<a>Inicio</a>
					</Link>
				</li>
				<li>
					<Link href="/reports">
						<a>Datos del Negocio</a>
					</Link>
				</li>
				<li>
					<Link href="/reports">
						<a>Reportes</a>
					</Link>
				</li>
			</ul>
		</aside>
	);
};

export default Drawer;
