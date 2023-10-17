import User from "./User"

const UserList = ({users, deleteUser, handleClickUpdate, classState}) => {
  return (
    <section className="grid gird-col-[repeat(auto-fit,_270px)]n justify-center max-w-[1000px] mx-auto gap-5">
      {
        users.map((user) => (<User 
                              key={user.id} 
                              userInfo={user} 
                              deleteUser={deleteUser} 
                              handleClickUpdate={handleClickUpdate}
                              classState={classState}
                              />))
      }
    </section>
  )
}

export default UserList
