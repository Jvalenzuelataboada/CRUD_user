const Header = ({handleOpenModal}) => {
  return (
    <header className='flex justify-between p-2 mb-3
     bg-gradient-to-r from-emerald-400 via-white to-blue-950'>
      <h1 className="font-bold text-blue-950 text-2xl">CRUD Usuarios</h1>
      <button 
      onClick={handleOpenModal}
      className=" bg-emerald-400 font-semibold text-blue-950 px-2 py-1 rounded-md hover:bg-orange-600 transition-colors">
        Agregar Usuario
      </button>
    </header>
  )
}

export default Header
