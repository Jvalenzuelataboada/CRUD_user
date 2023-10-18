import { IconEditCircle, IconTrash } from "@tabler/icons-react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { useState } from "react";
import { Link } from "react";

const User = ({ userInfo, deleteUser, handleClickUpdate, classState }) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDeleteUser = () => {
    setDeleteModalOpen(true);
  };

  return (
    <article className={`${classState} grid p-[1px] grid-cols-1 items-center justify-center rounded-lg w-[302px] bg-gradient-to-r from-red-600 via-yellow-600 to-emerald-500 `}>
      <div className="w-[300px] h-[99.5%] p-4 rounded-lg bg-gradient-to-r from-pink-50 via-white to-slate-50 grid gap-2">
      <h5 className="flex gap-2 items-center text-lg font-bold">
        {userInfo.first_name} {userInfo.last_name}
      </h5>
      <ul className="grid gap-1 text-gray-800 font-semibold">
        <li>
          <span className="font-semibold">Email:</span> <span className="text-xs">{userInfo.email}</span>
        </li>
        <li>
          <span className="font-semibold">Fecha Nacimiento:</span> <span className="text-xs">{userInfo.birthday}</span>
        </li>
        <li className="grid grid-cols-1 items-start">
          <span className="font-semibold">URL imagen:</span> 
          <a className="text-[3px]" href={`${userInfo.image_url}`}>{userInfo.image_url}</a>
        </li>
        
      </ul>
      <div className="mt-4 mx-44 flex gap-2">
        <button
          onClick={() => handleClickUpdate(userInfo)}
          className="bg-gradient-to-t from-orange-400 via-slate-100 to-emerald-400 
          hover:bg-gradient-to-t hover:from-orange-900 hover:via-slate-300 hover:to-emerald-900
          transition-colors rounded-full text-black p-1 border"
        >
          <IconEditCircle size={20} />
        </button>
        <button
          onClick={handleDeleteUser}
          className="bg-gradient-to-t from-emerald-500 via-slate-100 to-red-600 
          hover:bg-gradient-to-t hover:from-emerald-900 hover:via-slate-300 hover:to-red-900  
          transition-colors rounded-full text-black p-1 border"
        >
          <IconTrash size={20} />
        </button>

        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onConfirmDelete={() => deleteUser(userInfo.id)}
        />
      </div>
      </div>
    </article>
  );
};

export default User;
