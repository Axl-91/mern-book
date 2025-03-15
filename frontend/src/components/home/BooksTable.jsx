import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineDelete } from "react-icons/md"
import { useState } from "react"; 
import BookDeleteModal from "./BookDeleteModal"

const BooksTable = ({ books }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <table className="w-full">
      <thead className="bg-gray-200">
        <tr>
          <th className="border border-slate-600">No</th>
          <th className="border border-slate-600">Title</th>
          <th className="border border-slate-600 max-md:hidden">Author</th>
          <th className="border border-slate-600 max-md:hidden">Publish Year</th>
          <th className="border border-slate-600">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => {
          return(
           <tr key={book._id} className="h-8">
             <td className="border border-slate-700 text-center">
               {index + 1}
             </td>
             <td className="border border-slate-700 text-center">
               {book.title}
             </td>
             <td className="border border-slate-700 text-center max-md:hidden">
               {book.author}
             </td>
             <td className="border border-slate-700 text-center max-md:hidden">
               {book.publishYear}
             </td>
             <td className="border border-slate-700 text-center">
               <div className="flex justify-center gap-x-4">
                 <Link to={`/books/details/${book._id}`}>
                   <BsInfoCircle className="text-2xl text-green-800 hover:text-black"/>
                 </Link>
                 <Link to={`/books/edit/${book._id}`}>
                   <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black"/>
                 </Link>
                   <MdOutlineDelete className="text-2xl text-red-600 cursor-pointer hover:text-black" onClick={() => setShowModal(true)}/>
               </div>
               {
                 showModal && ( <BookDeleteModal book={book} onClose={() => setShowModal(false)} />)
               }
             </td>
           </tr>
        )})}
      </tbody>
    </table>
  )
}

export default BooksTable

