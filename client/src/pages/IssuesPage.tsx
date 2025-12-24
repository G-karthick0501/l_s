import {useState, useEffect} from "react";
import {getActiveIssues} from "../api/issues.api";

type User={
    id:number,
    name:string,
    email:string;   
}
type Book={
    id:number,
    title:string,
    author:string;
};

type Issue={
    id:number;
    user:User;
    book:Book;
    issuedAt:string;
    returnedAt:string | null;
}

const IssuesPage=()=>{
    const[issues,setIssues]=useState<Issue[]>([]);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        getActiveIssues().then((res)=>setIssues(res.data)).catch(console.error).finally(()=>setLoading(false));
    },[]);

    if(loading) return<p>Loading issued Books...</p>;

    return(
        <div>
            <h2>Currently Issued Books</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Book</th>
                        <th>Issued At</th>
                    </tr>
                </thead>
                <tbody>
                    {issues.map((issue)=>(
                        <tr key={issue.id}>
                            <td>{issue.user.name}</td>
                            <td>{issue.book.title}</td>
                            <td>{new Date(issue.issuedAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
        </div>
    );
};
export default IssuesPage;