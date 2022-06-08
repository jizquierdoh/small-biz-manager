// Imports
import { useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Hooks
import { useStoreForApp } from '../../store';

// Components
import CreateRegister from '../create-register/create-register';
import RegistersTable from '../registers-table/registers-table';
import SelectBusiness from '../select-business/select-business';

const Dashboard = ({}) => {
	const [currentUser, selectedBusinessId, setCurrentUser] = useStoreForApp(
		(store) => [
			store.currentUser,
			store.selectedBusinessId,
			store.setCurrentUser,
		]
	);

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
			{currentUser ? (
				<main className="w-full p-2">
					{selectedBusinessId ? (
						<>
							<CreateRegister />
							<RegistersTable />
						</>
					) : (
						<SelectBusiness userId={currentUser?.id} />
					)}
				</main>
			) : (
				<main className="w-full p-2">
					<div className="hero bg-base-200">
						<div className="text-center hero-content">
							<div className="max-w-md">
								<h1 className="text-5xl font-bold">SmallBiz App</h1>
								<p className="py-6">
									Gestione las ventas y gastos diarios de sus pequeños negocios
									y obtenga reportes sencillos para poner en perspectiva todos
									los datos registrados.
								</p>
								<button onClick={signIn} className="btn btn-primary">
									Iniciar Sesión
								</button>
							</div>
						</div>
					</div>
				</main>
			)}
		</>
	);
};

export default Dashboard;
