// Hooks
import { useStoreForApp } from '../../store';

// Components
import MainForm from '../main-form/MainForm';
import RegistersTable from '../registers-table/RegistersTable';

const Main = ({}) => {
	const currentUser = useStoreForApp((store) => store.currentUser);

	return (
		<>
			{currentUser ? (
				<main className="w-full p-2">
					<MainForm />
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

export default Main;
