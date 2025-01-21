import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesName: string[] = ['Spiderman', 'Ironman', 'Batman'];
  public deleteHero?: string = ''

  removeLastHero(): void {
    this.deleteHero = this.heroesName.pop()
  }
}
