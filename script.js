document.addEventListener('DOMContentLoaded', () => {
  /**
   * Clears all content from the meme, joke, quote, and riddle containers
   */
  function clearAll() {
    const memeContainer = document.querySelector('.meme-content');
    const jokeContainer = document.querySelector('.joke-content');
    const quoteContainer = document.querySelector('.quote-content');
    const riddleContainer = document.querySelector('.riddle-content');

    memeContainer.innerHTML = "";
    jokeContainer.innerHTML = "";
    quoteContainer.innerHTML = "";
    riddleContainer.innerHTML = "";
  }

  /**
   * Shows a random Meme
   */
  function showMeme() {
    const randomMemeUrl = getRandomData('memes');
    const container = document.querySelector('.meme-content');
    const newImg = document.createElement('img');
    newImg.setAttribute('src', randomMemeUrl);

    clearAll();
    container.appendChild(newImg);
  }

  /**
   * Shows a random joke
   */
  function showJoke() {
    const randomJokeText = getRandomData('jokes');
    const newP = document.createElement('p');
    newP.textContent = randomJokeText;

    clearAll();
    document.querySelector('.joke-content').appendChild(newP);
  }

  /**
   * Shows a random quote
   */
  function showQuote() {
    const randomQuote = getRandomData('quotes');
    const quote = document.createElement('p');
    const author = document.createElement('p');
    quote.textContent = randomQuote.quote;
    author.textContent = "- " + randomQuote.author;

    clearAll();

    const container = document.querySelector('.quote-content');
    container.appendChild(quote);
    container.appendChild(author);
  }

  /**
   * Shows a random riddle and hides the answer initially
   */
  function showRiddle() {
    const randomRiddle = getRandomData('riddles');
    const { question, answer } = randomRiddle;

    const questionElem = document.createElement('p');
    questionElem.textContent = question;
    const answerElem = document.createElement('p');
    answerElem.textContent = answer;
    answerElem.setAttribute('id', 'riddle-answer');
    answerElem.hidden = true;

    clearAll();

    const container = document.querySelector('.riddle-content');
    container.appendChild(questionElem);
    container.appendChild(answerElem);
  }

  /**
   * Reveals the answer to the riddle if hidden
   */
  function revealAnswers() {
    const riddleContainer = document.querySelector('.riddle-content');
    const riddle = riddleContainer.querySelector('p');
    const answer = document.querySelector('#riddle-answer');

    if (riddle && answer.hidden) {
      answer.hidden = false;
    } else if (riddle) {
      alert("The answer is already revealed");
    } else {
      alert("There is no riddle");
    }
  }

 
  function getRandomData(type) {
    if (!data[type]) {
      console.error(`Invalid data type requested: ${type}`);
      return null;
    }
    return data[type][rn(data[type].length)];
  }

 
  function rn(len) {
    return Math.floor(Math.random() * len);
  }

  const data = { memes, jokes, quotes, riddles };

  // Event listeners to call respective functions on button clicks
  document.querySelector('button[onclick="showMeme()"]').addEventListener('click', showMeme);
  document.querySelector('button[onclick="showJoke()"]').addEventListener('click', showJoke);
  document.querySelector('button[onclick="showQuote()"]').addEventListener('click', showQuote);
  document.querySelector('button[onclick="showRiddle()"]').addEventListener('click', showRiddle);
  document.querySelector('button[onclick="revealAnswers()"]').addEventListener('click', revealAnswers);
});
