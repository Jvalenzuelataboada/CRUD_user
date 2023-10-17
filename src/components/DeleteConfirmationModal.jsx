const DeleteConfirmationModal = ({ isOpen, onClose, onConfirmDelete }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <p>¿Estás seguro de que deseas eliminar este usuario?</p>
        <div className="flex justify-end mt-4">
          <button
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded mr-4"
            onClick={() => {
              onClose();
            }}
          >
            Cancelar
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
            onClick={() => {
              onConfirmDelete();
              onClose();
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
