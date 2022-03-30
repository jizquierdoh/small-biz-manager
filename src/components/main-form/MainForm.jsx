// Imports
import { useStoreForApp } from '../../store';
import { v4 as uuidv4 } from 'uuid';
import { addRegister } from '../../services';

// Hooks
import { useForm } from 'react-hook-form';

// Components
import CurrencyInput from 'react-currency-input-field';

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
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
		setValue,
	} = useForm();

	const onSubmit = (formData) => {
		const newRegister = { ...formData, id: uuidv4() };
		// addRegister(newRegister);
		addRegister(newRegister);
		reset();
	};

	// const addRegister = useStoreForApp((store) => store.addRegister);

	return (
		<>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="w-9/12 mx-auto mt-2 bg-white card bg-opacity-20 drop-shadow-xl">
						<div className="card-body">
							{/* date field*/}
							<div className="form-control">
								<label className="label">
									<span className="label-text">Fecha:</span>
								</label>
								<input
									type="date"
									placeholder="Fecha del registro"
									className={`input input-bordered ${
										errors.date && 'border-error'
									}`}
									{...register('date', { required: true })}
								/>
								<span className="text-xs text-error">
									{errors.date?.type === 'required' && 'Requerido'}
								</span>
							</div>
							{/* concept field*/}
							<div className="form-control">
								<label className="label">
									<span className="label-text">Concepto:</span>
								</label>
								<textarea
									{...register('concept', { required: true })}
									className={`h-24 textarea textarea-bordered ${
										errors.concept && 'border-error'
									}`}
									placeholder="Concepto del registro"
								></textarea>
								<span className="text-xs text-error">
									{errors.concept?.type === 'required' && 'Requerido'}
								</span>
							</div>
							{/* type field*/}
							<div className="form-control">
								<label className="label">
									<span className="label-text">Tipo de Registro:</span>
								</label>
								<select
									defaultValue="Seleccionar"
									className={`select select-bordered ${
										errors.type && 'border-error'
									}`}
									{...register('type', { required: true })}
								>
									<option value="">Seleccionar</option>
									{registerTypes.map((registerType) => {
										return (
											<option key={registerType.id} value={registerType.id}>
												{registerType.name}
											</option>
										);
									})}
								</select>
								<span className="text-xs text-error">
									{errors.type?.type === 'required' && 'Requerido'}
								</span>
							</div>
							{/* total field*/}
							<div className="form-control">
								<label className="label">
									<span className="label-text">Valor Total:</span>
								</label>
								<label
									className={`input-group ${
										errors.total && 'border rounded-lg border-error'
									}`}
								>
									<span>
										{currency.code}&nbsp;{currency.symbol}
									</span>
									<CurrencyInput
										className="w-full input input-bordered"
										placeholder="Valor del registro"
										allowDecimals={false}
										decimalSeparator=","
										groupSeparator="."
										{...register('total', { required: true })}
										onValueChange={(value) => setValue('total', value)}
									/>
								</label>

								<span className="text-xs text-error">
									{errors.total?.type === 'required' && 'Requerido'}
								</span>
							</div>
							<button className="btn btn-primary btn-block">Registrar</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default MainForm;
