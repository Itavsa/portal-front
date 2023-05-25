import { Component, OnInit } from "@angular/core";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { KeycloakService } from "keycloak-angular";
import { KeycloakProfile } from 'keycloak-js';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [],
})
export class HeaderComponent implements OnInit {

  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;
  public keycloakProfileUrl = environment.keycloakUrl + '/realms/' + environment.keycloakRealm + "/account/#/personal-info";
  public faSignOut = faSignOut;

  constructor(private readonly keycloak: KeycloakService) {}

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
    }
  }

  public login() {
    this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout();
  }
}