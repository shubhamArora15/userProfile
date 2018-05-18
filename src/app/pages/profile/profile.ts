import { Component, OnInit, ElementRef } from '@angular/core';

// import * as frLocale from 'date-fns/locale/fr';
import { Router, ActivatedRoute, Params } from '@angular/router';
  
import {Users} from '../../providers/user';

declare const google:any;

@Component({
    selector: 'profile',
    templateUrl: './profile.html',
    styleUrls: ['./profile.css']
})
export class ProfilePage {
    public id = "";
    public sub:any;
    public profile:any;

    constructor(private user: Users, private route: ActivatedRoute){
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; // (+) converts string 'id' to a number
            this.user.getUser(this.id)
            .then((res) => {
                console.log(res);
                this.profile = res['data'];
                console.log(this.profile);
                this.loadMap()
            }) 
        });
        
    }

    ngOnChanges() {

    }
    generateObject(obj){
        console.log(obj);
        return Object.keys(obj).map((key)=>{ return (key!='_id' && key!='location' && key!='__v')?key:''});
    }
    loadMap() {
        console.log(this.profile)
        const myLatlng = this.profile.location?new google.maps.LatLng(this.profile.location.lat, this.profile.location.lng):
        new google.maps.LatLng(40.748817, -73.985428);
        const mapOptions = {
            zoom    : 13,
            center     : myLatlng,
            scrollwheel: false // we disable de scroll over the map, it is a really annoing when you scroll through page
        };
        const map = new google.maps.Map(document.getElementById('map'), mapOptions);
        const Marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Hello World!'
        });
        
        // To add the marker to the map, call setMap();
        Marker.setMap(map);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    
}
