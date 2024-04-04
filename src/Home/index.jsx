import BlogList from "../BlogList";
import useFetch from "../usefetch";

export default function Home() {
 const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setData(newBlogs);
  // };



  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs"  />
      )}
    </div>
  );
}
