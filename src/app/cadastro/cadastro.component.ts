import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PoloService } from '../polo.service';
import { CreatePoloDto } from '../types';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  createPoloForm = this.formBuilder.group({
    name: '',
    address: '',
    // TODO: use dropdown to get the state and city
    city: '',
    // TODO: use dropdown to get the state and city
    state: ''
  });
  processingForm = false;
  showSuccessModal = false;

  constructor(
    private formBuilder: FormBuilder,
    private poloService: PoloService
  ) { }

  onSubmit() {
    this.processingForm = true;
    // simulate request
    setTimeout(() => {
      this.processNewPolo();

    }, 1000);
  }


  onCloseSuccessModal() {
    this.showSuccessModal = false;
  }

  private processNewPolo() {
    this.processingForm = false;
    console.warn(this.createPoloForm.value);

    const newPolo: CreatePoloDto = {
      name: this.createPoloForm.value.name || '',
      address: this.createPoloForm.value.address || '',
      city: this.createPoloForm.value.city || '',
      state: this.createPoloForm.value.state || '',
    }

    this.poloService.createNewPolo(newPolo);
    this.createPoloForm.reset();
    this.showSuccessModal = true;
  }
}
