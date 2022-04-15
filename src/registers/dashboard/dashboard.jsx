// Hooks
import { useStoreForApp } from '../../store';

// Components
import CreateRegister from '../create-register/create-register';
import RegistersTable from '../registers-table/registers-table';

const Dashboard = ({}) => {
	const currentUser = useStoreForApp((store) => store.currentUser);

	return (
		<>
			{currentUser ? (
				<main className="w-full p-2">
					<CreateRegister />
					<RegistersTable />
				</main>
			) : (
				<main className="w-full p-2">
					<p>Por favor inicie sesión para usar la App.</p>
				</main>
			)}
		</>
	);
};

export default Dashboard;
