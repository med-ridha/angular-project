import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  @Input() cars: any[] = [
    {
      id: 1,
      name: 'Ford',
      model: 'Focus',
      year: 2015,
      color: 'blue',
      price: 10000,
      engine: '2.0L 4-cylinder',
      transmission: 'Automatic',
      description: 'This is a great car',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fst.motortrendenespanol.com%2Fuploads%2Fsites%2F45%2F2014%2F02%2F2015-Ford-Focus-hatchback-front-view.jpg&f=1&nofb=1&ipt=96a1513018ed4b941614c260f2e46f758eaf4f995858ae9c685effe1fcae801d&ipo=images'
    },
    {
      id: 2,
      name: 'Ford',
      model: 'Mustang',
      year: 2017,
      engine: '5.0L V8',
      transmission: '6-speed manual',
      color: 'red',
      price: 20000,
      description: 'This is a great car',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2CPXsGuJFe3dn2oj-Z8e1AHaE8%26pid%3DApi&f=1&ipt=131c19fc98186e06fc9fd08ae6a3c880c280c8d4aeea2b315cd333738106285f&ipo=images'
    },
    {
      id: 3,
      name: 'Ford',
      model: 'F150',
      year: 2018,
      engine: '5.0L V8',
      transmission: 'Automatic',
      color: 'blue',
      price: 30000,
      description: 'This is a great car',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TN1xIHUeJDiDBEgaEg7pYwHaFj%26pid%3DApi&f=1&ipt=c0c4d44b7276c9cf40ab5691d1689d3199d4764431b4145089db9955f1269cc9&ipo=images'

    },
    {
      id: 4,
      name: 'Ford',
      model: 'Fusion',
      year: 2019,
      engine: '2.0L 4-cylinder',
      transmission: 'Automatic',
      color: 'white',
      price: 40000,
      description: 'This is a great car',
      img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffordauthority.com%2Fwp-content%2Fuploads%2F2019%2F04%2F2019-Ford-Fusion-Agate-Black-UM-002.jpg&f=1&nofb=1&ipt=8ef38ed8a81138676db8b493e44e6e5119814117402ff642cfccf3b02da9c1b9&ipo=images'
    },
    {
      id: 5,
      name: 'BMW',
      model: 'M3',
      year: 2019,
      transmission: '6-speed manual',
      engine: '2.0L 4-cylinder',
      color: 'white',
      price: 40000,
      description: 'This is a great car',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.bmwblog.com%2Fwp-content%2Fuploads%2F2017%2F06%2FMineral-White-BMW-M3-ZCP-Image-5.jpg&f=1&nofb=1&ipt=dd674888d6aa139a3a8263bf14bb37b7e5c95ebf4430ab8a8dfd6d2d95fba2ce&ipo=images'
    },
    {
      id: 6,
      name: 'Mercedes',
      model: 'C300',
      year: 2019,
      transmission: 'Automatic',
      engine: '2.0L 4-cylinder',
      color: 'white',
      price: 42000,
      description: 'This is a great car',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.e1FvdTlJH1HtgNTrKlSaCwHaE8%26pid%3DApi&f=1&ipt=d9669a8f2a89e7545bfc8acdd23f419e906da0e9d8d7961846b225ef852f6735&ipo=images'
    },
    {
      id: 7,
      name: 'Meclaren',
      model: '720s',
      year: 2019,
      transmission: 'Automatic',
      engine: '4.0L V8',
      color: 'orange',
      price: 42000,
      description: 'This is a great car',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mclarenlife.com%2Fcdn-cgi%2Fimage%2Fformat%3Dauto%2Conerror%3Dredirect%2Cwidth%3D1920%2Cheight%3D1920%2Cfit%3Dscale-down%2Fhttps%3A%2F%2Fwww.mclarenlife.com%2Fattachments%2F20190720_162524-jpg.196023%2F&f=1&nofb=1&ipt=2e3f210b2530f38f8aa8c06d8573dd04c36e6ae84dcf44d6e58ed1b6e5810328&ipo=images',
    }
  ]
  search: string = '';
  constructor(private router: Router) {
    localStorage.setItem('cars', JSON.stringify(this.cars));
  }

  show(id: Number) {
    localStorage.setItem('id', id.toString());
    // navigate to show car component
    this.router.navigate(['/cars', id])
  }
  searchCars() {
    this.cars = JSON.parse(localStorage.getItem('cars') || '{}')
      .filter((car: any) => {
        return car.name.toLowerCase()
          .includes(this.search.toLowerCase())
      });
  }
}
