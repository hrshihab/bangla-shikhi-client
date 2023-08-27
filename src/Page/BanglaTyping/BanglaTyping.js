import { Button } from "flowbite-react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import typing from './../../assets/typinggggggggggggggggggg.webp'
import {} from './typeStyle.css'

class App extends Component {
  state = {
    text: "",
    inputValue: "",
    lastLetter: "",
    words: [],
    completedWords: [],
    completed: false,
    startTime: undefined,
    timeElapsed: 0,
    wpm: 0,
    started: false,
    progress: 0
  };

  setText = () => {
    const texts = [
      `বাংলা ভাষা আমার পছন্দের ভাষা।`
    ];
    const text = texts[Math.floor(Math.random() * texts.length)];
    const words = text.split(" ");

    this.setState({
      text: text,
      words: words,
      completedWords: []
    });
  };

  startGame = () => {
    this.setText();

    this.setState({
      started: true,
      startTime: Date.now(),
      completed: false,
      progress: 0
    });
  };
  handlePaste = (event) => {
    event.preventDefault(); // Prevent the default paste behavior
  };

  handleDrop = (event) => {
    event.preventDefault(); // Prevent the default drop behavior
  };

  handleChange = e => {
    const { words, completedWords } = this.state;
    const inputValue = e.target.value;
    const lastLetter = inputValue[inputValue.length - 1];

    const currentWord = words[0];
    //console.log(currentWord, "currentWord");

    // if space or '.', check the word
    if (lastLetter === " " || lastLetter === ".") {
      // check to see if it matches to the currentWord
      // trim because it has the space
      if (inputValue.trim() === currentWord) {
        // remove the word from the wordsArray
        // cleanUp the input
        const newWords = [...words.slice(1)];
        //console.log(newWords, "newWords");
        //console.log(newWords.length, "newWords.length");
        const newCompletedWords = [...completedWords, currentWord];
        //console.log(newCompletedWords, "newCompletedWords");
        //console.log("----------------");

        // Get the total progress by checking how much words are left
        const progress =
          (newCompletedWords.length /
            (newWords.length + newCompletedWords.length)) *
          100;
        this.setState({
          words: newWords,
          completedWords: newCompletedWords,
          inputValue: "",
          completed: newWords.length === 0,
          progress: progress
        });
      }
    } else {
      this.setState({
        inputValue: inputValue,
        lastLetter: lastLetter
      });
      //console.log(this.state.inputValue, "this.state.inputValue");
      //console.log(this.state.lastLetter, "this.state.lastLetter");
      //console.log("================================");
    }

    this.calculateWPM();
  };

  calculateWPM = () => {
    const { startTime, completedWords } = this.state;
    const now = Date.now();
    const diff = (now - startTime) / 1000 / 60; // 1000 ms / 60 s
    //console.log(now, "now");
    //console.log(startTime, "startTime");
    //console.log(diff, "diff");
    //console.log("**************");

    // every word is considered to have 5 letters
    // so here we are getting all the letters in the words and divide them by 5
    // "my" shouldn't be counted as same as "deinstitutionalization"
    const wordsTyped = Math.ceil(
      completedWords.reduce((acc, word) => (acc += word.length), 0) / 5
    );
    //console.log(completedWords, "completedWords");
    //console.log(wordsTyped, "wordsTyped");
    //console.log("+=+=+=+=+=+=");

    // calculating the wpm
    const wpm = Math.ceil(wordsTyped / diff);

    this.setState({
      wpm: wpm,
      timeElapsed: diff
    });
  };

  render() {
 
    const {
      text,
      inputValue,
      completedWords,
      wpm,
      timeElapsed,
      started,
      completed,
      progress
    } = this.state;

    if (!started)
      return (
    <section>

   
        <section class=" border-b-2 rounded-b-[50px] md:rounded-b-[100px] xl:rounded-b-full shadow-md md:shadow-xl">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-8 lg:pb-12">
        <h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white  md:text-3xl lg:text-4xl">Welcome to the <span class="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-pink-500">Bangla Typing Game</span> </h1>
        <p class="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48">Let's starting bangla typing to more fluency. </p>

        <div class="flex flex-col  space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link  onClick={this.startGame} class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Start Typing
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            <Link to="/" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-gray-800 dark:text-white  font-medium text-center bg-gray-200 rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </Link>  
        </div>
    </div> 

        
        </section>

        <div class="grid max-w-screen-lg px-4 py-8 mx-auto lg:gap-4 xl:gap-0 lg:py-16 xl:py-24 sm:grid-cols-12 ">
        <div class="mr-auto place-self-center sm:col-span-7 ">
            <h1 class="max-w-2xl mb-4 text-3xl text-gray-900 dark:text-white  font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl ">Rules of the Typing </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Type in the input field the highlighted word.</p>
            
                    <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                      
                        <li class="flex items-center">
                            <svg class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            The correct words will turn <span className=" text-green-600 font-bold ml-2"> green</span> .
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Incorrect letters will turn <span className=" text-red-600 font-bold ml-2"> red</span> .
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Enter  <kbd class="px-2 mx-2  py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Spacebar</kbd>
                    to type next word .
                        </li>
                    
                    </ul>
        </div>
        <div class="hidden sm:mt-0 sm:col-span-5 sm:flex">
            <img src={typing} alt="mockup"/>
        </div>                
    </div>        </section>
      );

    if (!text) return <p>Loading...</p>;

    if (completed) {
      return (
        
        <section className="bg-white my-6 max-w-xl mx-auto border-x border-b border-gray-200 rounded-2xl shadow-xl" >
        <div class="px-4 mx-auto  text-center py-8 lg:pb-12">
        <h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white  md:text-3xl lg:text-4xl">Congratulations !! <br /> <span class="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-pink-500"> Complete Bangla Typing</span> </h1>
        <p class="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48">Your Score is :  </p>

        <div className="stats shadow bg-white">
        
        <div className="stat text-violet-600">
          <div className="stat-figure text-primary">
          <svg className="inline-block w-8 h-8 stroke-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"/>
  </svg>          </div>
          <div className="stat-title text-gray-400">WPM</div>
          <div className="stat-value  text-violet-600">{wpm}</div>
          <div className="stat-desc text-violet-600">Words Per Minutes</div>
        </div>
        
        <div className="stat text-pink-00">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div className="stat-title text-gray-400">Time</div>
          <div className="stat-value text-secondary">{Math.floor(timeElapsed * 60)} s</div>
          <div className="stat-desc text-pink-400">Time in second</div>
        </div>
        

  
</div>
        <div class="flex flex-col my-8  space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link  onClick={this.startGame} class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Play Again!
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            <Link to="/" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-gray-900 dark:text-white  font-medium text-center bg-gray-200 rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </Link>  
        </div>
    </div> 

 
      
        
        </section>

     

        
      );
    }

    return (
     
         
    <div className="w-full mx-auto  my-12  max-w-5xl p-4 text-center bg-white border-x border-b border-gray-200 rounded-2xl shadow-xl sm:p-8 dark:bg-gray-800 dark:border-gray-700">

        
<div class="">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Type the <span class="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-pink-500"> text below</span> </h5>
    <progress className="progress progress-info sm:w-72 lg:w-96" value={progress} max="100"></progress>

    <p  className=" my-5 text-gray-600 font-medium leading-relaxed  tracking-wider sm:text-lg dark:text-gray-400">
            {text.split(" ").map((word, w_idx) => {
              let highlight = false;
              let currentWord = false;

              // this means that the word is completed, so turn it green
              if (completedWords.length > w_idx) {
                highlight = true;
              }

              if (completedWords.length === w_idx) {
                currentWord = true;
              }

              return (
                <span
                  className={`word 
                                ${highlight && "green"} 
                                ${currentWord && "underline"}`}
                  key={w_idx}
                >
                  {word.split("").map((letter, l_idx) => {
                    const isCurrentWord = w_idx === completedWords.length;
                    const isWronglyTyped = letter !== inputValue[l_idx];
                    const shouldBeHighlighted = l_idx < inputValue.length;

                    return (
                      <span
                        className={`letter ${
                          isCurrentWord && shouldBeHighlighted
                            ? isWronglyTyped
                              ? "red"
                              : "green"
                            : ""
                        }`}
                        key={l_idx}
                      >
                        {letter}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </p>  

          <input
            type="text"
            onPaste={this.handlePaste}
            onDrop={this.handleDrop}
            onChange={this.handleChange}
            className="bg-gray-50 mb-6 shadow-xl border border-gray-300 text-gray-900 max-w-md mx-auto text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={inputValue}
            // autoFocus={started ? 'true' : 'false'}
            autoFocus={true}
          />
          
          <div className="stats shadow bg-white">
  
  <div className="stat text-violet-600">
    <div className="stat-figure text-primary">
    <svg className="inline-block w-8 h-8 stroke-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"/>
  </svg>      </div>
    <div className="stat-title text-gray-400">WPM</div>
    <div className="stat-value  text-violet-600">{wpm}</div>
    <div className="stat-desc text-violet-600">Words Per Minutes</div>
  </div>
  
  <div className="stat text-pink-400">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title text-gray-400">Time</div>
    <div className="stat-value text-secondary">{Math.floor(timeElapsed * 60)} s</div>
    <div className="stat-desc text-pink-400">Time in second</div>
  </div>
  

  
</div>
          
        
   
</div>

     
      </div>
     
  
    );
  }
}

export default App;
