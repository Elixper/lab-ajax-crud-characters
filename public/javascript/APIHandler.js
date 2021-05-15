class APIHandler {
  constructor(baseURL) {
    this.waiter = axios.create({baseURL});
  }

  // getFullList() {
  //   console.log("hello");
  //   this.api
  //   .get("/characters")
  //   .then((characters) => {
  //     console.log(characters);
  //     callback(characters);
  //   });
  // }
  // version longue si besoin de plusieurs lignes ou commandes utiliser les brackets
  //getFullList=()=> {return this.waiter.get("/characters");}
  //pour mémoire : aussi possible fat arrow oneline
  getFullList=()=> this.waiter.get("/characters/");

  getOneRegister (id) {return this.waiter.get("/characters/"+id)};

  createOneRegister = (newCharac) => this.api.post("/characters/",newCharac)

  updateOneRegister = () => this.api.post("/characters/")

  deleteOneRegister (id) {return this.waiter.delete("/characters/"+id)};

}