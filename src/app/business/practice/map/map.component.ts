import { UserService } from './../../../user.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var AMap: any;
let map: any = 'undefined';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  constructor(private http: HttpClient, private userService: UserService) {
  }

  ngOnInit(): void {
    this.getMap();
    this.getLocation();
  }

  private getMap(): void{
    map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 11,
      center: [123.44711, 41.723242]
    });
  }

  private getLocation(): void{
    map.on('click', (e: any): void => {
      const position = e.lnglat.getLng() + ',' + e.lnglat.getLat();
      const a = this.http.get(`https://restapi.amap.com/v3/geocode/regeo?output=json&location=${position}&key=5168b40899056c08de49fb781105d5df&radius=0&extensions=all`).subscribe((data: any) => {
        const poi = data.regeocode.pois[0];
        const info = [];
        if (poi.id === 'B00180K77K') {
          const user = this.userService.getUser();
          info.push('<p class="input-item">姓名 :' + user.name + '</p></div></div>');
          info.push('<p class="input-item">年龄 :' + user.age + '</p></div></div>');
          info.push('<p class="input-item">电话 :' + user.tel + '</p></div></div>');
        }else{
          info.push('<div class="input-card content-window-card"><div><img style=\"float:left;\" src=\" https://webapi.amap.com/images/autonavi.png \"/></div>');
          info.push('<br><p class="input-item">地点 : ' + poi.name + '</p>');
          info.push('<p class="input-item">地址 : ' + poi.address + '</p>');
          info.push('<p class="input-item">电话 :' + poi.tel + '</p></div></div>');
        }
        const infoWindow = new AMap.InfoWindow({
        content: info.join(''),
        offset: new AMap.Pixel(10, -20)
        });
        infoWindow.open(map, [e.lnglat.getLng(), e.lnglat.getLat()]);
      });
    });
  }
}
