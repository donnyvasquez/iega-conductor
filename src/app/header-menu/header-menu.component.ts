import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {
  isMenuOpen = false;
 /* TODO document why this constructor is empty */
  constructor(private router: Router) {}
    // TODO document why this method 'ngOnInit' is empty
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  cerrarSesion() {
    localStorage.setItem('usuarioLogeado', 'false');
    this.router.navigate(['/inicio']);
  }
}
