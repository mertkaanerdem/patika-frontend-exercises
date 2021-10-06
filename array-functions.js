const places = ["Lüleburgaz", "Samsun", "Akdoğan", "Ankara", "İstanbul"];
const newPlaces = ["Londra", "Amsterdam", "Dublin", ...places];
const cities = ["Adana", "Adıyaman", "Afyon"];
const names = [
  {
    name: "Mehmet",
    age: 29,
  },
  {
    name: "Ayşe",
    age: 40,
  },
  {
    name: "Mehmet",
    age: 10,
  },
  {
    name: "Mehmet",
    age: 50,
  },
  {
    name: "Kehribar",
    age: 70,
  },
  {
    name: "Zeynep",
    age: 30,
  },
];

/* TODO:Bazı çok kullanılan array fn'ler 
    push --> array'in sonuna yeni bir eleman ekler, parametre alır
    map
    find
    filter
    some
    every
    includes
*/

//TODO: push örneği

cities.push("Ağrı");
//console.log(cities); //Ağrı gelir
cities.push("Amasya");
//console.log(cities); //Ağrı da Amasya da gelir

//TODO: map örneği
//array elemanlarını tek tek döner
/*
cities.map((e, i) => {
  console.log(i + 1, e);
});
*/

//TODO: find örneği
//verilen koşullarla array içinde arama işlemi yapar
// koşula uyan ilk elemanı döner -- hepsinin dönmesini istenirse filter metodu kullanılmalı

const findCity = cities.find((item) => item === "Afyon");
//console.log(findCity);

const findName = names.find((item) => item.name === "Mehmet");
//console.log(findName);

//TODO: filter örneği

const findNames = names.filter((user) => user.name === "Mehmet");
//console.log(findNames);
//console.log(findNames.length);

//TODO: some örneği
//verilen koşullara array içindeki en az bir eleman uyuyorsa true döner uymuyorsa false döner
const some = names.some((user) => user.name === "Mehmet");
//console.log(some); //true döner

//TODO: every örneği
//verilen koşullara array içindeki TÜM ELEMANLAR uyuyorsa true döner uymuyorsa false döner
const every = names.every((user) => user.name === "Mehmet");
//console.log(every);
