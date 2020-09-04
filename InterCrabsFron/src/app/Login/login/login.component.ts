import { Component, OnInit } from '@angular/core';
//import { LoginService } from './Service/login.service' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pseudo = "";
  mdp = "";
  confirmMdp = "";

  constructor() { }

  ngOnInit(): void {
  }

  inscription() 
  {
    // Quand le visiteur clique sur le boutton, on doit verifier que le mdp ne contient que des nombres
    // et le pseudo pas de caratere speciaux
    if (this.pseudo.length == 0 || this.mdp.length == 0 || !this.confirmMdp.match(this.mdp)) {
      //do nothing
    }
    else {
    // il doit ensuite creer un nouvel utilisateur qui n'est pas activer SI l'utilisateur n'est pas deja inscrit en BDD 
    console.log("pseudo : " + this.pseudo + " mdp : " + this.mdp)
    }
  }

  connexion()
  {
    if (this.pseudo.length == 0 || this.mdp.length == 0) {
      //do nothing
    }
    else {
    //Quand l'utilisateur clique sur le bouton connexion, on doit regarder si il est bien en BDD et si il est bien activer 
    console.log("pseudo : " + this.pseudo + " mdp : " + this.mdp)
    }
  }

  validForm(pseudo : String, mdp : String)
  {
    
  }

}
