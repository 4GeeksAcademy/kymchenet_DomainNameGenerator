/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function dmGenerator() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];

    let namesDomain = [];

    for (let one = 0; one < pronoun.length; one++) {
      for (let two = 0; two < adj.length; two++) {
        for (let three = 0; three < noun.length; three++) {
          namesDomain.push(pronoun[one] + adj[two] + noun[three] + ".com");
        }
      }
    }
  }
  document.getElementById("#domainGenerator").innerHTML = dmGenerator();
};
