import { IconEditCircle, IconTrash } from "@tabler/icons-react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const User = ({ userInfo, deleteUser, handleClickUpdate, classState }) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDeleteUser = () => {
    setDeleteModalOpen(true);
  };

  return (
    <article className={`${classState} border-2 p-4 rounded-lg w-[260px] bg-gradient-to-r from-emerald-100 via-slate-100 to-blue-300 grid gap-2`}>
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
        <li>
          <span className="font-semibold">URL imagen:</span> <span className="text-xs">{userInfo.image_url}</span>
        </li>
      </ul>
      <div className="mx-36 flex gap-2">
        <button
          onClick={() => handleClickUpdate(userInfo)}
          className="bg-yellow-500 hover:bg-orange-600 transition-colors rounded-full text-white p-1"
        >
          <IconEditCircle size={20} />
        </button>
        <button
          onClick={handleDeleteUser}
          className="bg-red-500 hover:bg-red-900 transition-colors rounded-full text-white p-1"
        >
          <IconTrash size={20} />
        </button>

        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onConfirmDelete={() => deleteUser(userInfo.id)}
        />
      </div>
    </article>
  );
};

export default User;
