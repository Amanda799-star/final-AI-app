function solve(response){
  
  new Typewriter("#answer", {
    strings: `${response.data.answer}`,
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  let text1 = document.querySelector("#answer");
  text1.innerHTML=`${response.data.answer}`

  console.log(response.data.answer);
}
function writePad(event) {
    event.preventDefault();
    let userInstructionsInput = document.querySelector("#question");
    let context="you are a mathematics proffesor who is very good at mathematics. Your mission is to help the leaners with their mathematics homework .Do not give explainations in the answer just be specific and simple.Please include  the addition symbol in your answers.Please do not make huge drawings for you do not have enough space and do not make long statements.";
    let prompt=`user instructions:Generate mathematics answers about${userInstructionsInput.value}`;
    let aiApiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=3adfat7038a3b8f55f4do5846b4c6a7d`;
    axios.get(aiApiUrl).then(solve);
    
}
let form = document.querySelector("#searchForm");
form.addEventListener("submit",writePad);


