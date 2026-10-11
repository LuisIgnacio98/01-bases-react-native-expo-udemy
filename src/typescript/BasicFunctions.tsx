const addTwonumbers = (a: number, b: number): string => {
  return (a + b).toString();
};

export const BasicFunctions = () => {
  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado de la suma es: {addTwonumbers(2, 3)}</span>
    </>
  );
};
