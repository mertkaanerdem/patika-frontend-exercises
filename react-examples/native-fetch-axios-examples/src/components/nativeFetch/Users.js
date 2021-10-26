import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data)) //TODO:burada users state içine datayı setliyoruz
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);

  /* setIsLoading yukarıdaki şekilde de yapılabilir veya;

.then(data => setUsers(data)) bloğunun içinde 

.then(data => {
    setUsers(data)
    setIsLoading(false)
}

şeklinde de yapılabilir. ama bunda catch'e düşerse loading dönüp durur
*/

  return (
    <div>
      <h1>Users</h1>
      {isLoading && <div className="loading">Users are loading</div>}
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;
