// Components

const registerTypes = [
	{
		id: 1,
		name: 'Venta',
	},
	{
		id: 2,
		name: 'Gasto',
	},
];

const currency = {
	symbol: '$',
	code: 'COP',
};

const MainForm = () => {
	return (
		<>
			<div>
				<form>
					<div class="card w-9/12 mx-auto mt-2 bg-white bg-opacity-20 drop-shadow-xl">
						<div class="card-body">
							<div class="form-control ">
								<label class="label">
									<span class="label-text">Fecha:</span>
								</label>
								<input
									type="date"
									placeholder="Fecha del registro"
									class="input input-bordered "
								/>
								<label class="label">
									<span class="label-text">Tipo de Registro:</span>
								</label>
								<select class="select select-bordered">
									<option disabled selected>
										Seleccionar
									</option>
									{registerTypes.map((registerType) => {
										return (
											<option value={registerType.id}>
												{registerType.name}
											</option>
										);
									})}
								</select>
								<label class="label">
									<span class="label-text">Valor Total:</span>
								</label>
								<label class="input-group">
									<span>
										{currency.code}&nbsp;{currency.symbol}
									</span>
									<input
										type="number"
										step="0.10"
										placeholder="0,00.00"
										class="input input-bordered w-full"
									/>
								</label>
							</div>
							<button class="btn btn-primary btn-block">Registrar</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default MainForm;
