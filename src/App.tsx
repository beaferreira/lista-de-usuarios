import { useState, useEffect } from "react";
import { Paper } from '@mui/material';
import { createTheme } from '@mui/material/styles';



const App = (props: any) => {
	const [users, setUsers] = useState([
		{ id: 1, name: "Minora" },
		{ id: 2, name: "Ataide" },
	]);
  const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then((response) => response.json())
			.then((json) => {setUsers(json); setLoading(false)});
	});
	return (
		
		

			<Paper sx={{
				width: '200px',
				backgroundColor: '#fce4ec',
				marginTop: '2rem',
				padding: '1rem',
			}}>
		<div className="App">
			<h1>Lista de usuários</h1>
			<div className="card">
        {loading ? <h2>Carregando...</h2> : null}
				<ul>
					{users.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			</div>
		</div>
			</Paper>
	
	);
};

export default App;