import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/services/admin.service';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  title = 'admin-agua-florida';
  displayedColumns: string[] = [
    'fullName',
    'artisticName',
    'location',
    'role',
    'email',
    'projects',
    'socialNetworks',
    'action',
  ];
  dataSource: any;
  users: Array<any> = [];
  bands: Array<any> = [];
  usersTotal: number = 0;
  bandsTotal: number = 0
  constructor(
    private adminService: AdminService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.listApplicationUsers();
  }
  listApplicationUsers() {
    this.getTotal();
    this.getUsers();
  }

  getTotal() {
    this.adminService.getUsers().subscribe(({ data }) => {
      console.log(data.length);
      this.users.push(data);
      this.usersTotal = data.length
    });
    this.adminService.getBands().subscribe(({ data }) => {
      console.log(data.length);
      this.bands.push(data);
      this.bandsTotal = data.length
    });
  }

  getUsers() {
    this.adminService.getUsers().subscribe((users) => {
      this.dataSource = users.data;
    });
  }
  getBands() {
    this.adminService.getBands().subscribe((bands) => {
      this.dataSource = bands.data;
      console.log(this.dataSource);
    });
  }
  delete(id: string) {
    console.log(id);
    this.adminService.delete(id).subscribe((res) => {
      try {
        alert('Usuario eliminado');
        this.getUsers();
      } catch (err) {
        console.log(err);
      }
    });
  }
  logout() {
    this.authService.SignOut();
  }
}
