import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  axios.delete(`http://localhost:55555/books/${id}`)
  .then(() => {
    navigate("/")
  }).catch((error) => {
    console.log(error)
  })
}

export default DeleteBook

