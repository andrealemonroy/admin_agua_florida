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
  constructor(private adminService: AdminService, private authService: AuthService) {}
  ngOnInit(): void {
    this.listApplicationUsers();
  }
  listApplicationUsers() {
    this.getUsers()
  }

  getUsers() {
    this.adminService.getUsers().subscribe((users) => {
      this.dataSource = users.data;
      console.log(this.dataSource);
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
        this.getUsers()
      } catch (err) {
        console.log(err);
      }
    });
  }
  logout(){
    this.authService.SignOut()
  }
}
