// import { BasicFunctions } from "./typescript/BasicFunctions";
// import { ObjectLiterals } from "./typescript/ObjectLiterals";
// import { BasicTypes } from "./typescript/BasicTypes";
//import { Counter } from "./Components/Counter";
// import { LoginPage } from "./Components/LoginPage";

// import { UsersPage } from "./Components/UsersPage";
import { FormsPage } from "./Components/FormsPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-4xl mb-5">React + TS</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectLiterals /> */}
        {/* <BasicFunctions /> */}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        {/* <UsersPage /> */}
        <FormsPage />
      </div>
    </AuthProvider>
  );
}

export default App;
