export const BasicTypes = () => {
  const name: string = "Luis";
  const age: number = 27;
  const isActive: boolean = false;

  const powers: string[] = ["react", "angular", "vue", "svelte"];

  return (
    <>
      <h3>Tipos basicos</h3>
      {name} - {age} - {isActive ? "Activo" : "Inactivo"}
      <p>{powers.join(", ")}</p>
    </>
  );
};
