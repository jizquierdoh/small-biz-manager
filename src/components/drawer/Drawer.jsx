const Drawer = ({}) => {
	return (
		<aside className="drawer-side">
			<label htmlFor="drawerApp" className="drawer-overlay"></label>
			<ul className="p-4 overflow-y-auto menu w-80 bg-base-100">
				<li>
					<a>Información Negocio</a>
				</li>
				<li>
					<a>Reportes</a>
				</li>
			</ul>
		</aside>
	);
};

export default Drawer;
