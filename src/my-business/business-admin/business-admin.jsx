// Hooks
import { useEffect, useState } from 'react';
import { useStoreForApp } from '../../store';
import { useForm } from 'react-hook-form';

// Services
import * as DataService from '../../services';

const BusinessAdmin = ({}) => {
	const businessesList = useStoreForApp((store) => store.businesses);
	const setBusinessesList = useStoreForApp((store) => store.setBusinessesList);
	const [isAddingNew, setIsAddingNew] = useState(false);

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();

	useEffect(() => {
		DataService.streamBusinesses(
			(querySnapshot) => {
				const businesses = querySnapshot.docs.map((business) => {
					return { ...business.data(), id: business.id };
				});

				setBusinessesList(businesses);
			},
			(error) => console.error(error)
		);
	}, []);

	const onSubmit = async (data) => {
		await DataService.addBusiness(data);
		setIsAddingNew(false);
		reset();
	};

	return (
		<>
			<div className="w-full p-4">
				<h1 className="text-2xl">Negocios</h1>
				{isAddingNew ? (
					<div className="w-full my-2">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="mx-auto mt-2 bg-white card bg-opacity-20 drop-shadow-xl">
								<div className="justify-end card-actions">
									<button
										onClick={() => setIsAddingNew(false)}
										className="btn btn-square btn-sm"
									>
										X
									</button>
								</div>
								<div className="card-body">
									<div className="form-control">
										<label className="label">
											<span className="label-text">Nombre Negocio:</span>
										</label>
										<input
											type="text"
											placeholder="Nombre..."
											className={`input input-bordered ${
												errors.name && 'border-error'
											}`}
											{...register('name', { required: true })}
										/>
										<span className="text-xs text-error">
											{errors.name?.type === 'required' && 'Requerido'}
										</span>
									</div>
									<button className="border border-black shadow btn btn-primary">
										Guardar
									</button>
								</div>
							</div>
						</form>
					</div>
				) : (
					<></>
				)}
				<div className="w-full my-2">
					{!isAddingNew ? (
						<button
							onClick={() => setIsAddingNew(!isAddingNew)}
							className="my-2 btn btn-primary modal-button"
						>
							Agregar Negocio
						</button>
					) : (
						<></>
					)}
					<div className="border-2 rounded-lg border-base-300">
						<table className="table w-full">
							<thead>
								<tr>
									<th>Negocio</th>
									<th>Acción</th>
								</tr>
							</thead>
							<tbody>
								{businessesList.map((business) => {
									return (
										<tr key={business.id}>
											<td>{business.name}</td>
											<td>
												<button className="btn btn-primary btn-sm">🔍</button>
												&nbsp;
												<button className="btn btn-primary btn-sm">✔</button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default BusinessAdmin;
