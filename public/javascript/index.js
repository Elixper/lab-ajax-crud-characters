// version of the lab I tried on my own

const charactersAPI = new APIHandler("http://localhost:8000");
console.log("startcoding");
console.log(charactersAPI);

function displayCharacters(characters){
  console.log("genial",characters);
}
const targetCharacters=document.querySelector(".characters-container")
window.addEventListener("load", () => {
  document
  .getElementById("fetch-all")
  .addEventListener("click",(event) => {
        // const apiResult = await charactersAPI.getFullList();
        // console.log("clicked",apiResult.data);
        // displayCharacters(apiResult.data);
    charactersAPI
    .getFullList()
    .then((apiResult)=>displayCharacters(apiResult));
      });


  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const input=document.querySelector('[name=character-id-delete]');
      const foo = charactersAPI
      .deleteOneRegister(input.value)
      .then ((characterResult)=>console.log(characterResult.data))
      .catch(apiError=>console.warn(apiError));
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", f
    unction (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault()
      const name= document.querySelector('#new-character-form[name="name"]');
      const occupation= document.querySelector('#new-character-form[name="occupation"]');
      const weapon= document.querySelector('#new-character-form[name="weapon"]');
      const cartoon= document.querySelector('#new-character-form[name="cartoon"]');
      const newCharac={name,occupation,weapon,cartoon}
      charactersAPI.createOneRegister(newCharac)
      .then ((characterResult)=>{name.value="";name.value="";name.value="";name.value=""})
      .catch(apiError=>console.warn(apiError));
  });
});
