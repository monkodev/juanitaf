import React, {useState} from 'react';
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default (props) => {
	const [email, setEmail ] = useState('');
	const [password, setPassword ] = useState('');
	const firebase = useFirebaseApp();
	
	const auth=getAuth();
	const submit = async ()=>{ 
		await createUserWithEmailAndPassword(auth,email,password);
	

	}
	return(
		<div>
			
			<div>
				<label htmlFor="email">E-mail &nbsp;    </label>
				<input type="email" id="email" onChange={(ev)=> setEmail(ev.target.value)} /> <br /> <br />
				<label htmlFor="password">Clave  &nbsp;  </label>
				<input type="password" id="password" onChange={(ev)=> setPassword(ev.target.value)} /> <br /> <br />
				<button onClick={submit}> Iniciar Sesión </button>
			</div>
		</div>
	)

}