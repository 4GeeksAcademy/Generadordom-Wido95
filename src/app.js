let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let exten = [".es", ".com"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let h = 0; h < noun.length; h++) {
      for (let k = 0; k < exten.length; k++) {
        let div = document.createElement("div");
        div.innerText = `
      ${pronoun[i]}${adj[j]}${noun[h]}${exten[k]}
      `;
        document.body.appendChild(div);
      }
    }
  }
}
