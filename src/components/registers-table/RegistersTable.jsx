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
	return (
		<>
			<div class="my-4 w-full border-2 border-base-300 rounded-lg">
				<table class="table table-zebra w-full">
					<thead>
						<tr>
							<th>Fecha</th>
							<th>Concepto</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{registers.map((register) => {
							return (
								<tr
									key={register.id}
									className={`${
										register.tipo === 'Venta' ? 'text-success' : 'text-error'
									}`}
								>
									<td>{register.fecha}</td>
									<td>{register.concepto}</td>
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
