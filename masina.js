class Masina{

    constructor(id,firma,an,km,culoare,status){
        this.firma=firma;
        this.an=an;
        this.km=km;
        this.culoare=culoare;
        this.id=id;
        this.status=status;
    }

    afisare=()=>{
        console.log(this.firma+","+this.an+","+this.km+","+this.culoare);
    }
    
    tocard=()=>{
       
        let text=`
        <article>
        <img src="poze/cde94c26fbe0880c4b308733b85b501d.jpg" alt="">
        <article>
            <p>
                <span>Denumire:</span>${this.firma}
            </p>
            <p>
                <span>Culoare:</span>
                ${this.culoare};
            </p>
            <p>
                <span>An fabricatie:</span>
               ${this.an};
            </p>
            <p>
                <span>KM:</span>
                ${this.km};
            </p>
        </article>
    </article>
        
        `

        return text;
    }


}


export default Masina;