// Hooks
import { useStoreForApp } from '../../store';

// Components

const registers = [
	{
		id: 1,
		fecha: '20-Mayo-2021',
		concepto: 'Ventas día',
		total: 'COP $ 1.200.000',
		tipo: 'Venta',
	},
	{
		id: 2,
		fecha: '20-Mayo-2021',
		concepto: 'Factura pagada',
		total: 'COP $ -520.000',
		tipo: 'Gasto',
	},
	{
		id: 3,
		fecha: '20-Mayo-2021',
		concepto: 'Pago arriendo',
		total: 'COP $ -2.310.000',
		tipo: 'Gasto',
	},
];

const RegistersTable = ({}) => {
	const list = useStoreForApp((store) => store.lastRegisters);

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
