/* eslant-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let domainNames = [];

  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        let domain = pronoun[a] + adj[b] + noun[c] + ".com";
        domainNames.push("[" + domain + "]");
      }
    }
  }
  let h1Element = document.getElementById("domain_name");
  h1Element.innerHTML = domainNames.join("<br>");
};
