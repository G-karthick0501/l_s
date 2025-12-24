import{useEffect,useState} from "react";
import {getBooks} from "../api/books.api";

type Book={
    id:number,
    title:string,
    author:string,
    totalCopies:number,
    isbn:string,
    createdAt:string,
    updatedAt:string,
    availableCopies:number;
};

const BooksPage=()=>{
    const [books,setBooks]=useState<Book[]>([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState<string | null>(null);

    useEffect(()=>{
        getBooks().then((res)=>setBooks(res.data)).catch(()=>setError("Failed to load books")).finally(()=>setLoading(false));
    },[]);

    if(loading) return <p>Loading books...</p>;
    if(error) return <p>{error}</p>;

    return(
        <div>
            <h2>Books</h2>
            {books.length===0 ? (<p> No books found</p>):(
                <table border={1} cellPadding={8}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>ISBN</th>
                            <th>Total Copies</th>
                            <th>Available Copies</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book)=>(
                            <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.isbn}</td>
                                <td>{book.totalCopies}</td>
                                <td>{book.availableCopies}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default BooksPage;