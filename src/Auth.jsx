import React, {useState, useEffect} from 'react';
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default (props) => {
	const [email, setEmail ] = useState('');
	const [password, setPassword ] = useState('');
	const firebase = useFirebaseApp();
	
	
	const auth=getAuth();
	const login = async ()=> {
		await signInWithEmailAndPassword(auth,email,password)
		.then((userCredential) => {
    		// Signed in
    		const user = userCredential.user;
    		
			console.log("Adentro");
    		
			
  			})
  		.catch((error) => {
    			const mostrarError = "Credenciales no válidas";
    			
    			console.log(email,password);
    			console.log(mostrarError);
    		// ..
  	});
   		
	}
	return(
		<div>
			
			<div>
				<label htmlFor="email">E-mail &nbsp;    </label>
				<input type="email" id="email" onChange={(ev)=> setEmail(ev.target.value)} /> <br /> <br />
				<label htmlFor="password">Clave  &nbsp;  </label>
				<input type="password" id="password" onChange={(ev)=> setPassword(ev.target.value)} /> <br /> <br />
				&nbsp;  &nbsp;  <button onClick={login}>Iniciar Sesión</button>
			</div><br />
			<div className="text-danger">&nbsp;  &nbsp; {props.mostrarError}</div>
		</div>
	)

}