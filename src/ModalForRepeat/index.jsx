import React from 'react';

export const ModalForRepeat = ({ changeValueRepeat }) => {
	return (
		<>
			<div className="modal-repeat">
				<h2>Ya tiene un ToDo con ese título</h2>
				<p>por favor cambie el título</p>
				<button onClick={changeValueRepeat}>Okey</button>
			</div>
		</>
	);
};
