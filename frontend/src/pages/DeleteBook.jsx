import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  axios.delete(`http://localhost:55555/books/${id}`)
  .then(() => {
    enqueueSnackbar("Book deleted succesfully", { variant: "success" })
    navigate("/")
  }).catch((error) => {
    enqueueSnackbar("Error when deleting book", { variant: "error" })
    console.log(error)
  })
}

export default DeleteBook

