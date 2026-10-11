import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { isChecking, isAuthenticated, loginWithEmailAndPassword, user, logout } =
    useAuthContext();

  if (isChecking) {
    return <h1>Verificando sesion...</h1>;
  }
  return (
    <>
      {isAuthenticated ? (
        <>
          <h3>Bienvenido</h3>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <button
            className="bg-blue-500 p-2 text-white rounded-xl mt-2"
            onClick={() => logout()}
          >
            Salir
          </button>
        </>
      ) : (
        <>
          <h3>Ingresar a la aplicacion</h3>
          <button
            className="bg-blue-500 p-2 text-white rounded-xl mt-2"
            onClick={() =>
              loginWithEmailAndPassword("john@example.com", "password")
            }
          >
            Ingresar
          </button>
        </>
      )}
    </>
  );
};
