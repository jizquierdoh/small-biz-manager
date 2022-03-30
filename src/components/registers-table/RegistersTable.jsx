// Hooks
import { useEffect } from 'react';
import { useStoreForApp } from '../../store';

// Services
import * as DataService from '../../services';

const lastRegisters = 5;

const RegistersTable = ({}) => {
	const list = useStoreForApp((store) => store.lastRegisters);
	const setRegistersList = useStoreForApp((store) => store.setRegistersList);

	useEffect(async () => {
		const unsubscribe = DataService.observeRegisters(
			lastRegisters,
			(querySnapshot) => {
				const registers = querySnapshot.docs.map((reg) => {
					return { ...reg.data(), id: reg.id };
				});

				setRegistersList(registers);
			},
			(error) => console.error(error)
		);

		return unsubscribe;
	}, []);

	return (
		<>
			<div className="w-full my-4 border-2 rounded-lg border-base-300">
				<table className="table w-full table-zebra">
					<thead>
						<tr>
							<th>Fecha</th>
							<th>Concepto</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{list.map((register) => {
							return (
								<tr
									key={register.id}
									className={`${
										register.type == 1 ? 'text-success' : 'text-error'
									}`}
								>
									<td>{register.date}</td>
									<td>{register.concept}</td>
									<td>{register.total}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default RegistersTable;
