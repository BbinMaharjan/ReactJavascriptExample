import React from "react";
import axios from "axios";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  Button,
} from "reactstrap";

import "./posts.css";
import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [counter, setCounter] = useState(0);
  //const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    console.log("i Am render");
  }, [counter]);

  const getPosts = async () => {
    const res = await axios.get(`${BASE_URL}/posts`);
    setPosts(res.data);
  };

  console.log(counter);
  return (
    <div className="container">
      <Button onClick={() => setCounter(counter + 1)}>Click</Button>
      {posts.map((post) => {
        return (
          <Card key={post.id} className="mt-3">
            <CardBody>
              <CardTitle tag="h5"> {post.title} </CardTitle>
              <CardText> {post.body} </CardText>
            </CardBody>
            <CardFooter>
              <CardSubtitle> Created By : {post.userId} </CardSubtitle>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default Posts;
// class Posts extends React.Component {
//   state = {
//     posts: [],
//     isLoading: false,
//   };

//   componentDidMount = () => {
//     this.setState({
//       ...this.state,
//       isLoading: true,
//     });

//     axios
//       .get(`${BASE_URL}/posts`)
//       .then((res) => {
//         this.setState({
//           posts: res.data,
//           isLoading: false,
//         });
//       })
//       .catch((error) => {
//         this.setState({
//           ...this.state,
//           isLoading: false,
//         });
//       });
//   };

//   render() {
//     if (this.state.isLoading)
//       return (
//         <div className="spinner">
//           <Spinner
//             type="grow"
//             color="danger"
//             style={{ width: "5rem", height: "5rem" }}
//           />
//         </div>
//       );
//     return (
//       <div className="container">
//         {this.state.posts.map((post) => {
//           return (
//             <Card key={post.id} className="mt-3">
//               <CardBody>
//                 <CardTitle tag="h5"> {post.title} </CardTitle>
//                 <CardText> {post.body} </CardText>
//               </CardBody>
//               <CardFooter>
//                 <CardSubtitle> Created By : {post.userId} </CardSubtitle>
//               </CardFooter>
//             </Card>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default Posts;
