import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai"


const BookDeleteModal = ({book, onClose}) => {
  return (
    <div
      className="fixed bg-black/20 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}>
        <div
          onClick={(event) => {event.stopPropagation()}}
          className="w-[600px] max-w-full h-[250px] bg-white rounded-xl p-4 flex flex-col relative">

          <AiOutlineClose className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer" onClick={onClose} />

          <div className="flex flex-col items-center py-12 ">
            <h3 className="text-2xl">Are you sure you want to delete this book?</h3>

             <Link to={`/books/delete/${book._id}`}>
                <button className="p-4 bg-red-600 text-white m-8 rounded-lg w-[200px] cursor-pointer hover:bg-red-700">Yes, delete</button>
             </Link>
          </div>
        </div>
    </div>
  )
}

export default BookDeleteModal;
