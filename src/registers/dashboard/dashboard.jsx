// Hooks
import { useStoreForApp } from '../../store';

// Components
import CreateRegister from '../create-register/create-register';
import RegistersTable from '../registers-table/registers-table';
import SelectBusiness from '../select-business/select-business';

const Dashboard = ({}) => {
	const [currentUser, selectedBusinessId] = useStoreForApp((store) => [
		store.currentUser,
		store.selectedBusinessId,
	]);

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
					<p>Por favor inicie sesión para usar la App.</p>
				</main>
			)}
		</>
	);
};

export default Dashboard;
