//key concepts
//document.querySelector()
//addEventListener()
//MathObject()
//innerText

//variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".Quote");
let author = document.querySelector(".author");

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  },

  ////////////////////////////////
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller"
    },
    {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
    },
    {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison"
    },
    {
    quote: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau"
    },
    {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale"
    },
    {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
    },
    {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
    },
    {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
    },
    {
    quote: "The greatest wealth is to live content with little.",
    author: "Plato"
    },
    {
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
    },
    {
    quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
    },
    {
    quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    author: "Joshua J. Marine"
    },
    {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
    },
    {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
    },
    {
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington"
    },
    {
    quote: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer"
    },
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington"
  }
  
];

btn.addEventListener("click", function(){

  let random = Math.floor(Math.random() * quotes.length);
  
  quote.innerText = quotes[random].quote;
  author.innerText = quotes[random].author;
});

//1:30:08