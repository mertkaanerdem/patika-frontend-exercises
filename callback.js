//TODO: settimeout örn
/*
setTimeout(() => {
    console.log("3 saniye sonra çalışır")
}, 3000);
*/
// Her saniye çalıştırır aşağıdaki fonksiyon //TODO:setinterval ör
/*
setInterval(() => {
  console.log("Her saniye çalışacak bu");
}, 1000);
*/

//Basit bir callback fonksiyonu //TODO: basit bir callback fn
/*
const sayHi = (callback) => {
  callback();
};

sayHi(() => {
  console.log("callback'e basit bir örnek gibisinden be");
});

setTimeout(() => {
  sayHi(() => {
    console.log("callback'e basit ikinci örnek gibilerinden be");
  });
}, 3000);
 */

// native fetch işlemi //TODO: native fetch işlemi
import fetch from "node-fetch";
// var fetch = require("node-fetch");
/*
fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((users) => {
    console.log("Users yükledin", users);
    //callback fn kısmı burası mesela, örnek olarak

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((data) => data.json())
      .then((post_1) => {
        console.log("Users yüklendikten sonra post-1 yüklendi", post_1);

        fetch("https://jsonplaceholder.typicode.com/posts/2")
          .then((data) => data.json())
          .then((post_2) =>
            console.log("post-1'den sonra post-2 yüklendi", post_2)
          );
      });
  });
*/
//yukarıdaki bu sırayla fetch işlemi büyüdükçe karışıklık yaratabileceği için async-await işlemi gelmiş //TODO: async-await tanımı
//üsteki işlem gibi iç içe olmadığı için anlaşılması daha kolay bir yapı bu async-await
/*
async function getData() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (data) => data.json()
  );

  const post_1 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();

  const post_2 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/2")
  ).json();

  console.log("Önce kullanıcılar listelendi", users);
  console.log("İkinci sırada ilk post görüntülendi", post_1);
  console.log("En son sırada ikinci post görüntülendi", post_2);
}

getData();
*/
// üst tarafta fn oluşturuldu ve ardından aşağıda çağırıldı fakat anonim fn oluşturulup, hiç çağırmadan da çalışmasını sağlamak mümkün
// anonim fn çalışma mantığı (() => clg("selam"))() mesela.

// üsttekine uyarlarsak //TODO: async-await anonim fn ile kullanımı

(async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (data) => data.json()
  );

  const post_1 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();

  const post_2 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/2")
  ).json();

  console.log("Önce kullanıcılar listelendi", users);
  console.log("İkinci sırada ilk post görüntülendi", post_1);
  console.log("En son sırada ikinci post görüntülendi", post_2);
})();
