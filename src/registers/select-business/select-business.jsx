// Hooks
import { useEffect, useState } from 'react';
import { useStoreForApp } from '../../store';
import { useForm } from 'react-hook-form';

// Services
import * as DataService from '../../services';

const SelectBusiness = ({ userId }) => {
	const [businessesList, setBusinessesList, setSelectedBusinessId] =
		useStoreForApp((store) => [
			store.businesses,
			store.setBusinessesList,
			store.setSelectedBusinessId,
		]);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = (formData) => {
		setSelectedBusinessId(formData.businessId);
	};

	useEffect(() => {
		DataService.streamBusinesses(
			userId,
			(querySnapshot) => {
				const businesses = querySnapshot.docs.map((business) => {
					return { ...business.data(), id: business.id };
				});

				setBusinessesList(businesses);
			},
			(error) => console.error(error)
		);
	}, [userId]);

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="w-9/12 mx-auto mt-2 bg-white card bg-opacity-20 drop-shadow-xl">
					<div className="card-body">
						{/* businessId field*/}
						<div className="form-control">
							<label className="label">
								<span className="label-text">Tipo de Registro:</span>
							</label>
							<select
								defaultValue="Seleccionar"
								className={`select select-bordered  ${
									errors.businessId && 'border-error'
								}`}
								{...register('businessId', { required: true })}
							>
								<option value="">Seleccionar</option>
								{businessesList.map((business) => {
									return (
										<option key={business.id} value={business.id}>
											{business.name}
										</option>
									);
								})}
							</select>
							<span className="text-xs text-error">
								{errors.businessId?.type === 'required' && 'Requerido'}
							</span>
						</div>
						<button className="border border-black shadow btn btn-primary btn-block">
							Registrar
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default SelectBusiness;
