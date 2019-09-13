import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // public BaseURL = "http://"+ this.getCurrentIP() + ":4200/";
  // public BaseURL: any = "http://172.16.16.161:4200/";
  // public BaseURL2: any = "http://172.16.16.111:4200/";
  public BaseURL: any = "http://61.12.64.92:4200/";


  mobileView: any = 0;

  WCSummary: any = [
    {
      "oee_color": "#e07b79",
      "availability_color": "#0ebc85",
      "performance_color": "#e07b79",
      "quality_color": "#0ebc85",
      "cur_date": "2019-04-01",
      "plant_code": "6192",
      "mach_code": "4000",
      "shift_code": "S002",
      "machine_status": "0",
      "oee_perc": 28,
      "availability_perc": 100,
      "performance_perc": 32,
      "quality_perc": 87,
      "mach_desc": "BP-1",
      "palnt_desc": null,
      "order_number": "ORDER NOT ASSIGNED",
      "material_descp": "ORDER NOT ASSIGNED",
      "colorRange": [
        {
          "kpi_name": "oee",
          "mach_code": "4000",
          "from_range": "30",
          "to_range": "70"
        }
      ]
    },
    {
      "oee_color": "#e07b79",
      "availability_color": "#e07b79",
      "performance_color": "#e07b79",
      "quality_color": "#e07b79",
      "cur_date": "2019-04-01",
      "plant_code": "6192",
      "mach_code": "4001",
      "shift_code": "S002",
      "machine_status": "2",
      "oee_perc": 0,
      "availability_perc": 0,
      "performance_perc": 0,
      "quality_perc": 0,
      "mach_desc": "BP-2",
      "palnt_desc": null,
      "order_number": "1000389409",
      "material_descp": "OK Pop Milkits *10 (8 g * 52 Pcs)",
      "colorRange": [
        {
          "kpi_name": "oee",
          "mach_code": "4001",
          "from_range": "30",
          "to_range": "75"
        }
      ]
    },
    {
      "oee_color": "#0ebc85",
      "availability_color": "#0ebc85",
      "performance_color": "#0ebc85",
      "quality_color": "#0ebc85",
      "cur_date": "2019-04-01",
      "plant_code": "6192",
      "mach_code": "4002",
      "shift_code": "S002",
      "machine_status": "2",
      "oee_perc": 94,
      "availability_perc": 100,
      "performance_perc": 96,
      "quality_perc": 98,
      "mach_desc": "BP-3",
      "palnt_desc": null,
      "order_number": "1000385835",
      "material_descp": "OK Pop Milkrich  Lollipop 10 X 52",
      "colorRange": [
        {
          "kpi_name": "oee",
          "mach_code": "4002",
          "from_range": "30",
          "to_range": "70"
        }
      ]
    },
    {
      "oee_color": "#0ebc85",
      "availability_color": "#0ebc85",
      "performance_color": "#0ebc85",
      "quality_color": "#0ebc85",
      "cur_date": "2019-04-01",
      "plant_code": "6192",
      "mach_code": "4003",
      "shift_code": "S002",
      "machine_status": "1",
      "oee_perc": 74,
      "availability_perc": 100,
      "performance_perc": 75,
      "quality_perc": 98,
      "mach_desc": "WINKLER",
      "palnt_desc": null,
      "order_number": "ORDER NOT ASSIGNED",
      "material_descp": "ORDER NOT ASSIGNED",
      "colorRange": [
        {
          "kpi_name": "oee",
          "mach_code": "4003",
          "from_range": "30",
          "to_range": "70"
        }
      ]
    },
    {
      "oee_color": "#e07b79",
      "availability_color": "#e07b79",
      "performance_color": "#e07b79",
      "quality_color": "#e07b79",
      "cur_date": "2019-04-01",
      "plant_code": "6192",
      "mach_code": "4004",
      "shift_code": "S002",
      "machine_status": "0",
      "oee_perc": 0,
      "availability_perc": 0,
      "performance_perc": 0,
      "quality_perc": 0,
      "mach_desc": "AQUARIUS",
      "palnt_desc": null,
      "order_number": "1000385354",
      "material_descp": "OK Pop FreshYo Str Yoghurt 12 x 25",
      "colorRange": [
        {
          "kpi_name": "oee",
          "mach_code": "4004",
          "from_range": "30",
          "to_range": "70"
        }
      ]
    },
    {
      "oee_color": "#ffd252",
      "availability_color": "#0ebc85",
      "performance_color": "#0ebc85",
      "quality_color": "#0ebc85",
      "cur_date": "2019-04-01",
      "plant_code": "6192",
      "mach_code": "4005",
      "shift_code": "S002",
      "machine_status": "1",
      "oee_perc": 69,
      "availability_perc": 85,
      "performance_perc": 81,
      "quality_perc": 100,
      "mach_desc": "EUROMEC1-A3",
      "palnt_desc": null,
      "order_number": "1000387829",
      "material_descp": "Maxifruity Watermelon Candy 40 x 50",
      "colorRange": [
        {
          "kpi_name": "oee",
          "mach_code": "4005",
          "from_range": "30",
          "to_range": "70"
        }
      ]
    },
    {
      "oee_color": "#e07b79",
      "availability_color": "#e07b79",
      "performance_color": "#e07b79",
      "quality_color": "#e07b79",
      "cur_date": "2019-04-01",
      "plant_code": "6192",
      "mach_code": "4006",
      "shift_code": "S002",
      "machine_status": "1",
      "oee_perc": 0,
      "availability_perc": 0,
      "performance_perc": 0,
      "quality_perc": 0,
      "mach_desc": "EUROMEC2-B3",
      "palnt_desc": null,
      "order_number": "ORDER NOT ASSIGNED",
      "material_descp": "ORDER NOT ASSIGNED",
      "colorRange": [
        {
          "kpi_name": "oee",
          "mach_code": "4006",
          "from_range": "30",
          "to_range": "70"
        }
      ]
    }
  ];

  wc_plant_summary: any = [
    {
      "oee_color": "#f7b036",
      "availability_color": "#0ebc85",
      "performance_color": "#f7b036",
      "quality_color": "#0ebc85",
      "cur_date": "2019-04-01",
      "plant_code": "6192",
      "mach_code": "4000",
      "shift_code": null,
      "machine_status": "0",
      "oee_perc": 51,
      "availability_perc": 96,
      "performance_perc": 56,
      "quality_perc": 95,
      "plant_desc": "OK SWEETS",
      "colorRange": [
        {
          "kpi_name": "oee",
          "from_range": "30",
          "to_range": "70"
        },
        {
          "kpi_name": "availability",
          "from_range": "30",
          "to_range": "70"
        },
        {
          "kpi_name": "performance",
          "from_range": "30",
          "to_range": "70"
        },
        {
          "kpi_name": "quality",
          "from_range": "30",
          "to_range": "70"
        }
      ]
    }
  ];

  constructor() { }

  public getCurrentIP() {
    let fullURL = window.location.href;
    let URL = fullURL.split('/')
    let IP = URL[2];
    let BaseURL = IP.split(':');
    return BaseURL[0];
  }


}
