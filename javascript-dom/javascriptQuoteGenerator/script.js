const quotes = [
    {
      person: "Steve Jobs",
      quote: "The only way to do great work is to love what you do."
    },
    {
      person: "Martin Luther King Jr.",
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends."
    },
    {
      person: "Winston Churchill",
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts."
    },
    {
      person: "Franklin D. Roosevelt",
      quote: "The only thing we have to fear is fear itself."
    },
    {
      person: "Nelson Mandela",
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."
    },
    {
      person: "Ralph Waldo Emerson",
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
    },
    {
      person: "Eleanor Roosevelt",
      quote: "The future belongs to those who believe in the beauty of their dreams."
    },
    {
      person: "Peter Drucker",
      quote: "The best way to predict the future is to create it."
    },
    {
      person: "Wayne Gretzky",
      quote: "You miss 100% of the shots you don't take."
    },
    {
      person: "Franklin D. Roosevelt",
      quote: "The only limit to our realization of tomorrow will be our doubts of today."
    }
];
  
const btn = document.querySelector("#new-quote")
const quote = document.querySelector(".quote")
const person = document.querySelector("#person")

btn.addEventListener("click", () => {
    const index = Math.floor(Math.random() * 10)
    quote.innerText = quotes[index].quote;
    person.innerText = quotes[index].person;
})