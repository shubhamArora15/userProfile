import { Component, OnInit, ElementRef } from '@angular/core';

// import * as frLocale from 'date-fns/locale/fr';
import { Router, ActivatedRoute, Params } from '@angular/router';
 
import {Users} from '../../providers/user';

declare var $: any;
declare var jQuery: any;
declare var google: any;
@Component({
    selector: 'user-list',
    templateUrl: './user.html',
    styleUrls: ['./user.css']
})
export class UserPage {
    public rows = [];
    public userObj = {users:{}};

    public columns = ["_id","name", "mobile", "address", "age"]
    constructor(private user: Users, private router: Router){
        this.getUsers();
    }
    getUsers() {
        this.user.getUsers()
        .then((res) =>{
            console.log(res, "response");
            this.rows = res['data'];
            console.log(this.rows)
        })
    }
    setUser(id) {
        let user = this.rows.find(o => o._id == id);
        
        this.userObj.users['id']   = user._id;
        this.userObj.users['name'] = user.name;
        this.userObj.users['mobile'] = user.mobile
        this.userObj.users['age'] = user.age;
        this.userObj.users['address'] = user.address;
        
        $("#userModal").modal('show');   
    }
    createAndUpdateUser() {
        var geocoder = new google.maps.Geocoder();
            geocoder.geocode( { 'address': this.userObj.users['address']}, (results, status) =>{
                console.log(status)
                if (status == google.maps.GeocoderStatus.OK) {
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();
                    this.userObj.users['location'] =  {lat:latitude,lng:longitude}
                }
            
                this.user.createAndUpdateUser(this.userObj)
                .then((res) =>{
                    $("#userModal").modal('hide')
                    this.userObj = {users:{}};
                    this.getUsers();
                })
            });
    }
    profile(id) {
        console.log(id);
        console.log("12");
        this.router.navigate(['users/id/' + id]);
    }
    deleteUser(id) {
        this.user.deleteUser(id)
        .then((res) =>{
            this.userObj = {users:{}};
            this.getUsers();
        })
    }
    ngOnChanges() {

    }

    
}

