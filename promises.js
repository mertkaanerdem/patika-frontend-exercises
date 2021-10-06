import axios from "axios";

// axios ile birlikte json() ile parse'lamaya gerek yok fakat axios bir 'data' döndüğü için onunla çağırmalıyız. 3 tane 'data' objesini aynı isimle çağıramayacağımız için
// ecmascript'in bir özelliği olarak yeniden isimlendirmeyi kullanırız. böylelikle aynı anda kullanabiliriz.

/* axios örneği //TODO: axios örneği
(async () => {
  const { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users"
  );

  const { data: post_1 } = await axios(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  const { data: post_2 } = await axios(
    "https://jsonplaceholder.typicode.com/posts/2"
  );

  console.log("Önce kullanıcılar listelendi", users);
  console.log("İkinci sırada ilk post görüntülendi", post_1);
  console.log("En son sırada ikinci post görüntülendi", post_2);
})();
*/

/*promise örneği //TODO: promise örneği

const getPromise = (name, surname, age, sex) => {
  return new Promise((resolve, reject) => {
    if (name && surname && age && sex) {
      //then'e (yani resolve) düşmesi için bütün özelliklerin girilmesi lazım. biri eksik girilirse reject'e yani catch e düşer
      resolve({
        name: name,
        surname: surname,
        age: age,
        sex: sex,
      });
    } else {
      reject("Eksik birşeyler var");
    }
  });
};

//üst tarafta kendi promise yapımızı oluşturduk. eğer true ise then'e false ise catch' e düşecek.
getPromise("Mertkaan", "Erdem", 29, "Anywhere, anytime")
  .then((data) => console.log(data))
  .catch((e) => console.log("Bir hata var, catch'ten reject'e düştü ->", e));

*/

//promise yapısı kullarak user'ları çekme //TODO: axios ve promise ile users

const getUsers = (user_id = "") => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/users/${user_id}`
    );

    resolve(data);
  });
};

/*
getUsers()
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
*/

//promise ve axios kullanarak dinamik olarak postları alma //TODO: axios ve promise kullanarak dinamik postları alma

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/posts/${post_id}`
    );

    resolve(data);
  });
};

/*
getPost(3).then((data) =>
  console.log(`${data.id} numaralı post sergilenmektedir`, data)
);

getPost(2).then((data) =>
  console.log(`${data.id} numaralı post sergilenmektedir`, data)
);

getPost(1).then((data) =>
  console.log(`${data.id} numaralı post sergilenmektedir`, data)
);
*/

// Yukarıdaki üç postun sırası belli değil. her defasında başka sırada gelebilir. o yüzden üçünü de kendi aralarında async-await yapmak gerekir
//TODO: dinamik postları kendi aralarında async-await yapma
/*
(async () => {
  await getPost(3).then((data) =>
    console.log(`${data.id} numaralı post sergilenmektedir`, data)
  );

  await getPost(2).then((data) =>
    console.log(`${data.id} numaralı post sergilenmektedir`, data)
  );

  await getPost(1).then((data) =>
    console.log(`${data.id} numaralı post sergilenmektedir`, data)
  );
})();
*/
//yukarıdakinin daha sade hali aşağıda
/*
(async () => {
  try {
    const post_3 = await getPost(3);
    const post_2 = await getPost(2);
    const post_1 = await getPost(1);

    console.log(post_3);
    console.log(post_2);
    console.log(post_1);
  } catch (error) {
    console.log(error);
  }
})();
*/
//Veya daha da kısa sıralı promise'ların hepsini döndürme //TODO: promise.all oluşturulan promise yapılarının tek çatıda toplanması

Promise.all([getPost(6), getPost(5), getPost(4), getUsers(2)])
  .then(console.log)
  .catch(console.log);
