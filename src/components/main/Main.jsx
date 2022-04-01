// Components
import MainForm from '../main-form/MainForm';
import RegistersTable from '../registers-table/RegistersTable';

const Main = ({}) => {
	return (
		<>
			<main className="w-full p-2">
				<MainForm />
				<RegistersTable />
			</main>
		</>
	);
};

export default Main;
