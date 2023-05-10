import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss']
})
export class Componente1Component implements OnInit {

  private intervalId: any;
  private direccionX = -1;
  private direccionY = 0;

  constructor(private elementRef: ElementRef) { }

  @HostListener('window: keydown', ['$event'])

  onKeyPress(event: KeyboardEvent){
    if(event.key === 'ArrowUp'){
      this.direccionY = -1
    }
    if(event.key === 'ArrowDown'){
      this.direccionY = 1
    }
    if(event.key === 'ArrowLeft'){
      this.direccionX = -1
    }
    if(event.key === 'ArrowRight'){
      this.direccionX = 1
    }
  }

  ngOnInit(): void {
    const elemento = this. elementRef.nativeElement.querySelector('#objeto');

    this.intervalId = setInterval(() => {
      let posicionX = parseInt(elemento.style.left || '0', 10);
      let posicionY = parseInt(elemento.style.top || '0', 10);

      if (posicionX >= window.innerWidth - elemento.offsetWidth || posicionX <= 0) {
        this.direccionX *= -1;
      }
      if (posicionY >= window.innerHeight - elemento.offsetHeight || posicionY <= 0) {
        this.direccionY *= -1;
      }

      posicionX += this.direccionX * 10;
      posicionY += this.direccionY * 10;

      elemento.style.left = `${posicionX}px`;
      elemento.style.top = `${posicionY}px`;

    },500)
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
