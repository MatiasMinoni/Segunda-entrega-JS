
class campeon {
    constructor(nombre, vida, daño){
        this.nombre = nombre;
        this.vida = parseInt(vida);
        this.daño = parseInt(daño);
    }
}

const campeones= [];
campeones.push(new campeon("ekko", 100, 10));
campeones.push(new campeon("illaoi", 100, 10));
// campeones.push(new campeon("jinx", 100, 10));
// campeones.push(new campeon("lulu", 100, 10));
// campeones.push(new campeon("olaf", 100, 10));
// campeones.push(new campeon("poppy", 100, 10));
// campeones.push(new campeon("sejuani", 100, 10));

var parry=parseInt(0);
// Ekko vs illaoi
var ataque=document.getElementById("attack_ekko");
ataque.addEventListener("click", function(){
    ataque=(campeones[1].vida - campeones[0].daño);

    attack_ekko.disabled=true;
    parry_ekko.disabled=true;
    heal_ekko.disabled=true;
    attack_illaoi.disabled=false;
    parry_illaoi.disabled=false;
    heal_illaoi.disabled=false;
parry=20;
    while(campeones[1].vida>0){
        campeones[1].vida=ataque;
        if (ataque<=0){
            campeones[1].vida===0;
            swal.fire("Ganaste");
            swal.fire(campeones[1].vida);
      
            break;
        }
      break

      }
        if(campeones[1].vida<=0){
            swal.fire("Ganaste");
         
        }
    swal.fire("La vida de " + campeones[1].nombre + " es " + campeones[1].vida);
    attack_ekko.disabled=true;
    attack_illaoi.disabled=false

});



        var curar=document.getElementById("heal_ekko");
        curar.addEventListener("click", function(){
            curar=(campeones[0].vida + 10);

            attack_ekko.disabled=true;
            parry_ekko.disabled=true;
            heal_ekko.disabled=true;
            attack_illaoi.disabled=false;
            parry_illaoi.disabled=false;
            heal_illaoi.disabled=false;
            parry=0;
            while(campeones[0].vida!=100){
                campeones[0].vida=curar;
                
                swal.fire("Pocion: Tu vida es " + campeones[0].vida);
                
                if (curar>=100){
                    campeones[0].vida=90;
                    swal.fire("Tu vida esta completa");
                 
                    break;
                }
        break;
        if  (curar<=10){
            swal.fire("Pocion: Tu vida es " + campeones[0].vida);
            
            break;

        }
                }});
            
                var contraatacar=document.getElementById("parry_ekko");
                contraatacar.addEventListener("click", function(){
                    var contraatacar=(campeones[1].vida - parry)
                    attack_ekko.disabled=true;
                    parry_ekko.disabled=true;
                    heal_ekko.disabled=true;
                    attack_illaoi.disabled=false;
                    parry_illaoi.disabled=false;
                    heal_illaoi.disabled=false;
                   
                    while(campeones[1].vida>0){
                       campeones[1].vida=contraatacar;
                          if (parry=0){
                              swal.fire("no puedes atacar")
                            break;
                          }
                          else(parry=20)
                              swal.fire("atacaste");
                          break;
                        
    }});
                    
    
        


// --------------------------------------------------------------------------------------------------------------


// Illaoi vs Ekko
var ataque=document.getElementById("attack_illaoi");
ataque.addEventListener("click", function(){
    ataque=(campeones[0].vida - campeones[1].daño);

    attack_illaoi.disabled=true;
    parry_illaoi.disabled=true;
    heal_illaoi.disabled=true;
    attack_ekko.disabled=false;
    parry_ekko.disabled=false;
    heal_ekko.disabled=false;
    parry=20;
    while(campeones[0].vida>0){
        campeones[0].vida=ataque;
        if (ataque<=0){
            campeones[0].vida=0;
            swal.fire("Ganaste");
        
            break;
        }
      break
      }
        if(campeones[0].vida<=0){
            swal.fire("Ganaste");
           
        }
    swal.fire("La vida de " + campeones[0].nombre + " es "+ campeones[0].vida);
    attack_illaoi.disabled=true;
    attack_ekko.disabled=false;
});



var curar=document.getElementById("heal_illaoi");
curar.addEventListener("click", function(){
    curar=(campeones[1].vida + 10);
    parry=0;
    attack_illaoi.disabled=true;
    parry_illaoi.disabled=true;
    heal_illaoi.disabled=true;
    attack_ekko.disabled=false;
    parry_ekko.disabled=false;
    heal_ekko.disabled=false;

    while(campeones[1].vida!=100){
        campeones[1].vida=curar;
        swal.fire("Pocion: Tu vida es " + campeones[1].vida);
        if (curar!=100){
            campeones[1].vida=90;
            swal.fire("Tu vida esta completa");
         
            break;
        }
       
break;
if  (curar<=10){
    swal.fire("Pocion: Tu vida es " + campeones[1].vida);
    break;
if  (curar===100){
    swal.fire("Tu vida esta completa");
    break;
}}}});

        

        var contraatacar=document.getElementById("parry_illaoi");
        contraatacar.addEventListener("click", function(){
            var contraatacar=(campeones[0].vida - parry)
          
while(campeones[0].vida>0){

    campeones[0].vida=contraatacar;
    parry=0;
        attack_illaoi.disabled=true;
    parry_illaoi.disabled=true;
    heal_illaoi.disabled=true;
    attack_ekko.disabled=false;
    parry_ekko.disabled=false;
    heal_ekko.disabled=false;
    swal.fire("La vida de " + campeones[0].nombre +" es "+campeones[0].vida);
    
    if (parry!=20){
        swal.fire("No puedes contraatacar");
        break;
}
       
        }});


localStorage.setItem("campeones", [
[id=0,"ekko", 100, 10],
[id=1,"illaoi", 100, 10],
 [id=2,"jinx", 100, 10],
  [id=3,"lulu", 100, 10],
   [id=4,"olaf", 100, 10],
    [id=5,"poppy", 100, 10],
     [id=6,"sejuani", 100, 10]]);
     localStorage.getItem("campeones");

     console.log(localStorage.getItem("campeones"));

    