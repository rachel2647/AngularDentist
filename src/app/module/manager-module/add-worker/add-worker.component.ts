import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkersServiceService } from 'src/app/services/workers-service.service';
import worker from 'src/app/worker';

@Component({
  selector: 'add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent {
  constructor(private workerService: WorkersServiceService, private router: Router) { }
  id: number = 4;
  newWorker: worker = { id: this.id, name: "", password: "", role: "" };
  
  saveNewWorker() {
    this.workerService.addNewWorkerToServer(this.newWorker).subscribe();
    this.id++;
    this.router.navigate(['manager']);
  }
}
