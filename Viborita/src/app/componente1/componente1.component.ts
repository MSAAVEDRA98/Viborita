import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss']
})
export class Componente1Component implements OnInit {

  constructor(private elementRef: ElementRef) { }

  @HostListener('window:keydown', ["$event"])

  moverElemento(evento: KeyboardEvent){
    const elemento = this.elementRef.nativeElement.querySelector("#objeto")

    if(elemento){
    let posicion = parseInt(elemento.style.left || '0', 10)

    if(evento.key === "ArrowLeft"){
      posicion -= 10;
    }
    if(evento.key === "ArrowRight"){
      posicion += 10;
    }

    elemento.style.left = `${posicion}px`;
  }


  }

  ngOnInit(): void {
  }

}
