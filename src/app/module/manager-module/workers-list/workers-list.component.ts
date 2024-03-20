import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkersServiceService } from 'src/app/services/workers-service.service';
import worker from 'src/app/worker';

@Component({
  selector: 'workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent {

  constructor(private workersService: WorkersServiceService, private router: Router) {

    this.workersService.getAllWorkersFromServer().subscribe((workersList) => {
      this.workers = workersList;
    })
  }
  workers: worker[] =[];

  showWorker(w:worker): void {
    switch (w.role) {
      case "manager":
        this.router.navigate(['/manager']);
        break;
      case "doctor":
        this.router.navigate(['/doctor',w.id]);
        break;
      case "secretary":
        this.router.navigate(['/secretary']);
        break;
      default:
        this.router.navigate(['']);
    }
  }
  addWorker(): void {
    this.router.navigate(["/manager/addWorker"])
  }
  deleteWorker(id: number): void {
    this.workersService.deleteWorkerFromServer(id).subscribe((p)=>this.workers=this.workers.filter(pa=>pa.id!=id));
  }
}
