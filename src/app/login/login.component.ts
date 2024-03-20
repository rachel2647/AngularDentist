import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkersServiceService } from '../services/workers-service.service';
import worker from '../worker';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private workersService: WorkersServiceService, private router: Router) {
    this.workersService.getAllWorkersFromServer().subscribe(
      workersList => this.workers = workersList);
  }

  ngOnInit(): void {
  }
  name: string | undefined;
  password: string | undefined;
  workers: worker[] | undefined;
  currentWorker: worker | undefined;
  errorLogin: boolean = false;
  checkPermission() {
    this.currentWorker = this.workers?.find(e => e.name === this.name && e.password === this.password);
    switch (this.currentWorker?.role) {
      case "manager":
        this.router.navigate(['/manager']);
        break;
      case "doctor":
        this.router.navigate(['/doctor',this.currentWorker.id]);
        break;
      case "secretary":
        this.router.navigate(['/secretary']);
        break;
      default:
        this.errorLogin = true
        this.router.navigate(['']);
    }
  }
}