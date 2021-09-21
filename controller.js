
import Masina from "./masina.js"



export default class Controller{

 
     constructor(){

        this.list=[];


      //   this.setHome();

        this.main=document.querySelector('main');
        this.home=document.querySelector('.home');
        this.cauta=document.querySelector('.button button');
        this.meniu=document.querySelector('.meniu');

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


     filtrareFirma=(denumire)=>{
      let masini =[];  
         this.list.forEach(e=>{
            if(e.firma===denumire){
               masini.push(e);
            }
         })   
      return masini;
     }
     filtrareAn=(min_an,max_an)=>{
        let masini=[];
        this.list.forEach(e=>{
           if(e.an>=min_an&&e.an<=max_an){
              masini.push(e);
           }
        })
        return masini;
     }
     filtrareCuloare=(culoare)=>{
        let masini=[];
        this.list.forEach(e=>{
           if(e.culoare===culoare){
              masini.push(e);
           }
        })
        return masini;
     }

     filtrareKm=(km_min,km_max)=>{
        let masini=[];
        this.list.forEach(e=>{
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
           let masini=[];
           if(marca!=='marca'){
             this.filtrareFirma(marca).forEach(e=>e.afisare());
             this.filtrareFirma(marca).forEach(e=>masini.push(e));
            
            
            } if(culoare!=='color'){
               console.log('e');
              this.filtrareCuloare(culoare).forEach(e=>e.afisare());
              this.filtrareCuloare(culoare).forEach(e=>masini.push(e));
          

           } if(min_an!=='de la'&&max_an!=='pana la'){
            console.log('a');
              this.filtrareAn(min_an,max_an).forEach(e=>e.afisare());
              this.filtrareAn(min_an,max_an).forEach(e=>masini.push(e));
              
           } 
           if(km_min!=='de la'&&km_max!=='pana la'){
            console.log('eb');
            this.filtrareKm(km_min,km_max).forEach(e=>e.afisare());
            this.filtrareKm(km_min,km_max).forEach(e=>masini.push(e));
         }
         console.log(masini);
        }

     }

}


