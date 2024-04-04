import { useState } from "react";
import { useHistory } from "react-router-dom";
export default function Create() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuther] = useState('Mario');
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()


  const handleSubmit = (e)=>{
    e.preventDefault()
    const blog = {title, body, author}
    fetch('http://localhost:8000/blogs',{
        method: 'POST',
        header: {'Content-Type': 'application/jason'},
        body: JSON.stringify(blog),
    })
    .then(()=>{
        setTimeout(() => {
            console.log('blog added')
        setIsPending(false)
        history.push('/')
        }, 1000);
        
    })
    setIsPending(true)

  }
 

  return (
    <div className="create">
      <h2>Add a blog</h2>
      <form onSubmit={handleSubmit} >  
        <label>Title</label>
        <input 
        type="text"
        required
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        
        />
        <label >Blog</label>
        <textarea
        value={body}
        required
        onChange={(e)=> setBody(e.target.value)}
        ></textarea>
        <label >Author</label>
        <select value={author}
        required
        onChange={(e)=> setAuther(e.target.value)}
        >
            <option value="Mario">Mario</option>
            <option value="Yoshi">Yoshi</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding blog</button>}

        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
 
    </div>
  );
}
