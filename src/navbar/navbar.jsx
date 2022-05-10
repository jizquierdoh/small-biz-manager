// Imports
import { useEffect } from 'react';
import {
	getAuth,
	signInWithPopup,
	signOut,
	GoogleAuthProvider,
} from 'firebase/auth';
import { useStoreForApp } from '../store';

// Icons
import briefcaseIcon from '../assets/briefcase-icon.svg';

const Navbar = ({ children }) => {
	const [currentUser, setCurrentUser, clearStore] = useStoreForApp((store) => [
		store.currentUser,
		store.setCurrentUser,
		store.clearStore,
	]);

	const auth = getAuth();
	auth.languageCode = 'es';
	const provider = new GoogleAuthProvider();

	const signIn = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				setCurrentUser({
					email: user.email,
					id: user.uid,
					name: user.displayName,
				});
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const signOutUser = () => {
		signOut(auth)
			.then(() => {
				clearStore();
			})
			.catch((error) => {
				console.error(error);
			});
	};

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setCurrentUser({
					email: user.email,
					id: user.uid,
					name: user.displayName,
				});
			} else {
				setCurrentUser(null);
			}
		});
	}, []);

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
					<div className="flex-1">
						<img src={briefcaseIcon} alt="App Logo" width="38px" />
						&nbsp; SMALLBIZ APP
					</div>
					<div className="flex-none lg:block">
						<ul className="menu menu-horizontal">
							{currentUser ? (
								<li tabIndex="0">
									<a>
										{currentUser.name}
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
											<a onClick={signOutUser}>Salir</a>
										</li>
									</ul>
								</li>
							) : (
								<button onClick={signIn} className="btn">
									Login
								</button>
							)}
						</ul>
					</div>
				</nav>
				{children}
			</div>
		</>
	);
};

export default Navbar;
