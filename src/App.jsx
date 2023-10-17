
import axios from 'axios'
import './App.css'
import { BASE_URL, emptyFormValues } from './constants/users'
import Modal from './components/Modal'
import UserList from './components/UserList'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'


function App() {

  const [users, setUsers] = useState([])
  const [isShowModal, setIsShowModal] = useState(false)
  const [idUserToEdit, setIdUserToEdit] = useState(null)
  const [classState, setClassState] = useState('');

  const {handleSubmit, register, reset, formState: { errors }} = useForm()

  const submit = (data) => {
    idUserToEdit ?
    updateUser(data)
    :
    createUser(data)
  }

  const handleOpenModal = () => {
    setIsShowModal(true)
  }

  const handleClosedModal = () => {
    setIsShowModal(false)
    reset(emptyFormValues)
    setIdUserToEdit(null)
  }

  const createUser = (data) => {
    axios
    .post(BASE_URL + "/users/", data)
    .then(() => {
      handleClosedModal()
      getAllUsers()
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const updateUser = (data) => {
    axios
    .put(BASE_URL + `/users/${idUserToEdit}`, data)
    .then(() => getAllUsers() )
    .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    setClassState('animate-deleteAnim')
    axios.delete(BASE_URL + `/users/${id}/`)
    .then(() => getAllUsers())
    .catch((err) => console.log(err))
  }

 const getAllUsers = () => {
    axios
    .get(BASE_URL + "/users/")
    .then(({data}) => setUsers(data))
    .catch((err) => console.log(err))
  }
  
  const handleClickUpdate = (userToUpdate) => {
    handleOpenModal()
    reset(userToUpdate)
    setIdUserToEdit(userToUpdate.id)
  }



  return (
    <main className='min-h-screen'>

      <Header handleOpenModal={handleOpenModal}/>
      <Modal 
        isShowModal={isShowModal} 
        handleClosedModal={handleClosedModal}
        handleSubmit = {handleSubmit}
        register = {register}
        submit = {submit}
        setIdUserToEdit={setIdUserToEdit}
        errors={errors}
        />
        <UserList 
          users={users} 
          deleteUser={deleteUser} 
          handleClickUpdate={handleClickUpdate}
          classState={classState}
        />
    </main>
  )
}

export default App
