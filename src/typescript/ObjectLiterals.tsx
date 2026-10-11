interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Address;
}

interface Address {
  country: string;
  houseNumber: string;
  street?: string;
}
export const ObjectLiterals = () => {
  const person: Person = {
    age: 38,
    firstName: "Luis",
    lastName: "Ignacio",
    address: {
      country: "Republica Dominicana",
      houseNumber: "16",
    },
  };

  return (
    <>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      {/*       <h3>Object Literals</h3>
      <p>{person.firstName} {person.lastName}</p>
      <p>{person.address.country}</p>
      <p>{person.address.houseNumber}</p> */}
    </>
  );
};
