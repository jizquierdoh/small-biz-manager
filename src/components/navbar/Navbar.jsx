const Navbar = ({ children }) => {
	return (
		<>
			<input id="drawerApp" type="checkbox" className="drawer-toggle" />
			<div className="flex flex-col drawer-content">
				<nav className="w-full bg-base-300 navbar">
					<div className="flex-none">
						<label htmlFor="drawerApp" className="btn btn-square btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-6 h-6 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</label>
					</div>
					<div className="flex-1 px-2 mx-2">SMALLBIZ APP</div>
					<div className="flex-none lg:block">
						<ul className="menu menu-horizontal">
							<li tabIndex="0">
								<a>
									Jan von Steinberg
									<svg
										className="fill-current"
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
									>
										<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
									</svg>
								</a>
								<ul className="z-50 p-2 border-2 border-primary border-opacity-40 bg-base-100">
									<li>
										<a>Negocios</a>
									</li>
									<li>
										<a>Salir</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</nav>
				{children}
			</div>
		</>
	);
};

export default Navbar;
