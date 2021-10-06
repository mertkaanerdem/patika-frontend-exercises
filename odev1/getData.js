import axios from "axios";

export default async (name) => {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${name}`
  );

  const { data: post } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${name}`
  );

  let datas = [user, post[name - 1]];

  console.log(datas);
};

/*
export default async function getData(number) {
  const { data: post1 } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + number
  );

  const { data: post2 } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + number
  );

  let lastDATA = [post1, post2[number - 1]];

  console.log(lastDATA);
}
*/
