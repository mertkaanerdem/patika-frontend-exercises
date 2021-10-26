//TODO:Axios işlemi
import axios from "axios";
import { useEffect, useState } from "react";

function UsersAxios() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data)) //TODO:burada json() yapmadan direkt gelen cevap içinden datayı çekiyoruz
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
      <h1>Users Axios</h1>
      {isLoading && <div className="loading">Users are loading</div>}
      {users.map((user) => (
        <>
          <p key={user.id}>{user.name}</p>
        </>
      ))}
    </div>
  );
}

export default UsersAxios;
