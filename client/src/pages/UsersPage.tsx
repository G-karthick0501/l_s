import { useEffect,useState } from "react"; 
import { getUsers} from "../api/users.api";

type User={
    id:number,
    name:string,
    email:string;   
    createdAt:string;
};

const UsersPage=()=>{
    const[users,setUsers]=useState<User[]>([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState<string | null>(null);

    useEffect(()=>{
        getUsers().then((res)=>setUsers(res.data)).catch(()=>setError("failed to load users")).finally(()=>setLoading(false));
    },[]);

    if(loading) return<p>Loading users...</p>;
    if(error) return<p>{error}</p>;

    return(
        <div>
            <h2>Users</h2>
            {users.length===0 ? (
                <p>No users found.</p>
            ):(
                <table border={1} cellPadding={8}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{new Date (user.createdAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UsersPage;