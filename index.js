const express = require("express");
const app = express();
const port = 3000;

// books/sort-by-title
let books = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
  { title: "Harry Potter", author: "J.K. Rowling" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Vinci Code", author: "Dan Brown" },
  { title: "Hunger Games", author: "Suzanne Collins" },
  { title: "1984", author: "C.S" },
];

function sortBooksByTitle(title1, title2) {
  return title1.title.localeCompare(title2.title);
}

app.get("/books/sort-by-title", (req, res) => {
  let sortedBooks = books.slice();
  sortedBooks.sort(sortBooksByTitle);
  res.json(sortedBooks);
});

// employees/sort-by-salary
let employees = [
  { name: "John", salary: 90000 },
  { name: "David", salary: 75000 },
  { name: "Ana", salary: 80000 },
  { name: "Albert", salary: 50000 },
  { name: "Ida", salary: 45000 },
];
function sortEmployeesBySalary(employee1, employee2) {
  return employee2.salary - employee1.salary;
}
app.get("/employees/sort-by-salary", (req, res) => {
  let sortedEmployees = employees.slice();
  sortedEmployees.sort(sortEmployeesBySalary);
  res.json(sortedEmployees);
});

// products/sort-by-price
let products = [
  { name: "Product A", price: 10 },
  { name: "Product B", price: 20 },
  { name: "Product C", price: 15 },
  { name: "Product D", price: 30 },
  { name: "Product E", price: 25 },
];
function sortProductsByPrice(product1, product2) {
  return product1.price - product2.price;
}

app.get("/products/sort-by-price", (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortProductsByPrice);
  res.json(sortedProducts);
});

// events/sort-by-date
let dates = [
  { name: "Event A", date: "2023-05-01" },
  { name: "Event B", date: "2023-04-30" },
  { name: "Event C", date: "2023-03-05" },
  { name: "Event D", date: "2023-01-28" },
  { name: "Event E", date: "2023-02-03" },
];

function sortEventsByDate(event1, event2) {
  return event1.date - event2.date;
}

app.get("/events/sort-by-date", (req, res) => {
  let sortedDates = dates.slice();
  sortedDates.sort(sortEventsByDate);
  res.json(sortedDates);
});

// movies/sort-by-rating
let movies = [
  { title: "Movie A", rating: 4.5 },
  { title: "Movie B", rating: 3.8 },
  { title: "Movie C", rating: 4.2 },
  { title: "Movie D", rating: 3.9 },
  { title: "Movie E", rating: 4.0 },
];

function sortMoviesByRating(movie1, movie2) {
  return movie2.rating - movie1.rating;
}
app.get("/movies/sort-by-rating", (req, res) => {
  let sortedMovies = movies.slice();
  sortedMovies.sort(sortMoviesByRating);
  res.json(sortMoviesByRating);
});


// customers/sort-by-last-purchase
let customers = [
  {name : "Customer A", lastPurchase : "2024-06-15"},
  {name : "Customer B", lastPurchase : "2023-07-10"},
  {name : "Customer C", lastPurchase : "2023-08-05"},
  {name : "Customer D", lastPurchase : "2023-09-20"},
  {name : "Customer E", lastPurchase : "2023-10-15"},
];

function sortCustomersByLastPurchase(cust1, cust2){
  return cust2.lastPurchase - cust1.lastPurchase;
}

app.get('/customers/sort-by-last-purchase',(req,res)=>{
  let sortedCustomers = customers.slice();
  sortCustomers.sort(sortCustomersByLastPurchase)
  res.json(sortedCustomers)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
