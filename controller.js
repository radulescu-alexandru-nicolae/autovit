import Masina from "./masina.js"



export default class Controller{

 
     constructor(){

        this.list=[];


      //   this.setHome();

        this.main=document.querySelector('main');
        this.home=document.querySelector('.home');
        this.cauta=document.querySelector('.button button');
        this.meniu=document.querySelector('.meniu');
        this.main=document.querySelector('main');

        this.load();
      this.cauta.addEventListener('click',this.handleFilter());
      

 
     }
   

     load=()=>{

        let contor=1;
        while(localStorage.getItem(contor)){

            let obj=JSON.parse(localStorage.getItem(contor));

            this.list.push(new Masina(obj.id,obj.firma,obj.an,obj.km,obj.culoare));

            contor++;
        }

     }

      toCards(){
    

         let text=``;
         for(let i=0;i<this.list.length;i++){
            text+=this.list[i].tocard();
         }
         return text;
      }
      error(){
         let text =`
         <article>
         <h2>Ne cerem scuze dar nu am putut sa gasim o masina cu specificatiile alese</h2>
         </article>
         
         `
      }

      toCardsEx(lista){
    

         let text=``;
         for(let i=0;i<lista.length;i++){
            text+=lista[i].tocard();
         }
         return text;
      }

  
     setHome=()=>{
        this.home.innerHTML+=this.toCards();
   }


     print=()=>{

         // this.list.forEach(e=>e.afisare());


     }


     filtrareFirma=(lista,denumire)=>{
      let masini =[];  
         lista.forEach(e=>{
            if(e.firma===denumire){
               masini.push(e);
            }
         })   
      return masini;
     }
     filtrareAn=(lista,min_an,max_an)=>{
        let masini=[];
        lista.forEach(e=>{
           if(e.an>=min_an&&e.an<=max_an){
              masini.push(e);
           }
        })
        return masini;
     }
     filtrareCuloare=(lista,culoare)=>{
        let masini=[];
       lista.forEach(e=>{
           if(e.culoare===culoare){
              masini.push(e);
           }
        })
        return masini;
     }

     filtrareKm=(lista,km_min,km_max)=>{
        let masini=[];
        lista.forEach(e=>{
           if(e.km>=km_min&&e.km<=km_max){
              masini.push(e);
           }
        })
        return masini;
     }
     

     handleFilter=(e)=>{
      return e=>{
         let marca=this.meniu.querySelector('.Marca').value.toLowerCase();
         let culoare=this.meniu.querySelector('.Culoare').value.toLowerCase();
         let min_an=this.meniu.querySelector('.first-an-fabricatie').value.toLowerCase();
         let max_an=this.meniu.querySelector('.second-an-fabricatie').value.toLowerCase();
         let km_min=this.meniu.querySelector('.min-kilometraj').value.toLowerCase();
         let km_max=this.meniu.querySelector('.max-kilometraj').value.toLowerCase();
     
;         let masini=[];
         if(marca!=='marca'){

            if(masini.length===0){
               this.filtrareFirma(this.list,marca).forEach(e=>masini.push(e));
            }else{
               masini.forEach(element=>{
                  if(element.firma!==marca){
                     console.log('e');
                     masini.pop(element);
                     if(masini.length===0){
                        this.home.innerHTML=this.error();
                     }
                  }
                });
               this.filtrareFirma(masini,marca).forEach(e=>{
                  if(this.checkElement(masini,e)===false){
                     masini.push(e);
                  }
               })
            }
        
          } if(culoare!=='color'){
         
            if(masini.length===0){
               this.filtrareCuloare(this.list,culoare).forEach(e=>masini.push(e));
            }else{
               masini.forEach(element=>{
                  if(element.culoare!==culoare){
                     masini.pop(element);  
                      if(masini.length===0){
                        this.home.innerHTML=this.error();
                     }
                   
                  }
                });
               this.filtrareCuloare(masini,culoare).forEach(e=>
                  {

                  if(this.checkElement(masini,e)===false){
                     masini.push(e);
                  }


               })
            }
         
        

         } if(min_an!=='de la'&&max_an!=='pana la'){

            if(masini.length===0){
               this.filtrareAn(this.list,min_an,max_an).forEach(e=>masini.push(e));
            }else{


               masini.forEach(element=>{
                  if(element.an<min_an||element.an>max_an){
                     masini.pop(element);

                     if(masini.length===0){
                        this.home.innerHTML=this.error();
                     }
                  }
                });
               this.filtrareAn(masini,min_an,max_an).forEach(e=>{
                  if(this.checkElement(masini,e)===false){
                     masini.push(e);
                  }
               })
            }
         } 
         if(km_min!=='de la'&&km_max!=='pana la'){
            if(masini.length===0){
               this.filtrareKm(this.list,km_min,km_max).forEach(e=>masini.push(e));

            }else{
               masini.forEach(element=>{
                  if(element.km<km_min||element.km>km_max){
                     masini.pop(element);


                     if(masini.length===0){
                        this.home.innerHTML=this.error();
                     }
                  }
                });
               this.filtrareKm(masini,km_min,km_max).forEach(e=>{
                  if(this.checkElement(masini,e)===false){
                     masini.push(e);
                  }
               })
            }
       }

       this.home.innerHTML=this.toCardsEx(masini);
      }

   }

   checkElement(vector,element){
      for(let i=0;i<vector.length;i++){
         if(vector[i]===element){
            return true;
         }
      }
      return false;
   }
 }