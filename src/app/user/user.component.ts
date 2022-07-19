import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: { rank: number, name: string, imageUrl: string, band: string }[] = [
    {rank: 1, name: 'JIMMY PAGE', imageUrl:'assets/images/jimmy_page.jpeg', band: 'Led Zeppelin'},
    {rank: 2, name: 'JIMI HENDRIX', imageUrl:'assets/images/jimy_hendrix.jpeg', band: 'JIMI HENDRIX'},
    {rank: 3, name: 'DAVID GILMOUR', imageUrl:'assets/images/david_gilmour.jpeg', band: 'Pink Floyd'},
    {rank: 4, name: 'ERIC CLAPTON', imageUrl:'assets/images/eric_clapton.jpeg', band: 'Cream'},
    {rank: 5, name: 'CHUCK BERRY', imageUrl:'assets/images/chuck_berry.jpeg', band: 'CHUCK BERRY'},
  ];

  @Input() optionTemplate: TemplateRef<any> | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
