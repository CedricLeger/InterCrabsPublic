import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pseudo : String;
  mdp : String;

  constructor() { }

  ngOnInit(): void {
  }

  inscription() 
  {
    //Quand le visiteur clique sur le boutton, on doit verifier que le mdp ne contient que des nombres
    // et le pseudo pas de caratere speciaux
    // il doit ensuite creer un nouvel utilisateur qui n'est pas activer
    console.log("pseudo : " + this.pseudo + " mdp : " + this.mdp)
  }

  connexion()
  {
    //Quand l'utilisateur clique sur le bouton connexion, on doit regarder si il est bien en BDD et si il est bien activer 
    console.log("pseudo : " + this.pseudo + " mdp : " + this.mdp)
    
  }

}
