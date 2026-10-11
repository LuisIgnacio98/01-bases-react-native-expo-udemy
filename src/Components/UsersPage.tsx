import { useUsers } from "../hooks/useUsers";
import { UserRow } from "./UserRow";

//  "https://reqres.in/api/users?page=2"

export const UsersPage = () => {
  const { users, nextPage, prevPage } = useUsers();

  return (
    <>
      <table className="w-125 bg-black rounded-xl text-white">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <div className="flex justify-between w-125 mt-2">
        <button
          onClick={prevPage}
          className="bg-blue-500 p-2 text-white rounded-[5px]"
        >
          Anterior
        </button>
        <button
          onClick={nextPage}
          className="bg-blue-500 p-2 text-white rounded-[5px]"
        >
          Siguiente
        </button>
      </div>
    </>
  );
};
