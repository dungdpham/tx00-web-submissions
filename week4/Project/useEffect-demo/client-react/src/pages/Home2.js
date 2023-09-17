import { useEffect, useState } from "react"
import BlogList from "./BlogList";

import { REACT_APP_API_URL } from '../utils/apiConfig';
const apiUrl = `${REACT_APP_API_URL}/api/blogs`;

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch(apiUrl)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       setIsPending(false);
  //       setBlogs(data);
  //     })
  //   }, 2000);
  // }, [])

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch(apiUrl)
      const data = await res.json()

      setIsPending(false)
      setBlogs(data)
    }, 2000);
  }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(apiUrl);
  //     const data = await response.json();
  //     setIsPending(false);
  //     setBlogs(data);
  //   }
  //   fetchData()
  // }, [])

  return (
    <div className="home">
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;