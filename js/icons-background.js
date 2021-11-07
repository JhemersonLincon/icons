import icons from "./icons.js";
const container = document.querySelector(".container")

/*ADD CLASS ICONS  */
function addClass(tag){
  icons().forEach(element => {
    let classtype = element.classtype;
    let classI = element.class;
    let i = document.createElement("i");
    i.classList.add(classtype)
    i.classList.add(classI);
    tag.appendChild(i)
  })
  ;
}

/*BOX CREATOR */
function boxContainer(){
  const numberBoxIcons = 20;
  const  ContainerName = "row"
  for(let i=0;i < numberBoxIcons; i++){
    let div = document.createElement("div");
    div.classList.add(ContainerName)
    for(let c=0; c < 2;c++){
      let divChild = document.createElement("div")
      addClass(divChild)
      div.appendChild(divChild)
      }
    container.appendChild(div)
  }
}

boxContainer()
