// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 70,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 70,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 60,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);

// angular progress circular bar 
let angularProgress = document.querySelector(".angular"),
  angularValue = document.querySelector(".angular-progress");

let angularStartValue = 0,
  angularEndValue = 40,
  ngsspeed = 30;

let progressangular = setInterval(() => {
  angularStartValue++;

  angularValue.textContent = `${angularStartValue}%`;
  angularProgress.style.background = `conic-gradient(#3f396d ${
    angularStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (angularStartValue == angularEndValue) {
    clearInterval(progressangular);
  }
}, ngsspeed);

// MySqli progress circular bar 
let mysqliProgress = document.querySelector(".mysqli"),
  mysqliValue = document.querySelector(".mysqli-progress");

let mysqlitartValue = 0,
mysqliEndValue = 50,
mysqlispeed = 30;

let progressmysqli = setInterval(() => {
  mysqlitartValue++;

  mysqliValue.textContent = `${mysqlitartValue}%`;
  mysqliProgress.style.background = `conic-gradient(#fca61f ${
    mysqlitartValue * 3.6
  }deg, #ededed 0deg)`;

  if (mysqlitartValue == mysqliEndValue) {
    clearInterval(progressmysqli);
  }
}, mysqlispeed);
// javasript progress circular bar 
let sqlserverProgress = document.querySelector(".sql-server"),
  sqlserverValue = document.querySelector(".sqlserver-progress");

let sqlserverStartValue = 0,
sqlserverEndValue = 50,
sqlserverspeed = 30;

let progresssqlserver = setInterval(() => {
  sqlserverStartValue++;

  sqlserverValue.textContent = `${sqlserverStartValue}%`;
  sqlserverProgress.style.background = `conic-gradient(#7d2ae8 ${
    sqlserverStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (sqlserverStartValue == sqlserverEndValue) {
    clearInterval(progresssqlserver);
  }
}, sqlserverspeed);

// php progress circular bar 
let githubProgress = document.querySelector(".github"),
    githubValue = document.querySelector(".github-progress");

let githubStartValue = 0,
githubEndValue = 50,
githubspeed = 30;

let progressgithub = setInterval(() => {
  githubStartValue++;

  githubValue.textContent = `${githubStartValue}%`;
  githubProgress.style.background = `conic-gradient(#20c997 ${
    githubStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (githubStartValue == githubEndValue) {
    clearInterval(progressgithub);
  }
}, githubspeed);

// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});