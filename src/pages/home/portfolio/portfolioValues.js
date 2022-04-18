import geoaplication from './assets/geoaplication.png';
import changoonga from './assets/changoonga.png';
import formLogin from './assets/formLogin.png';
import indicio from './assets/indicio.png';
import pokeApi from './assets/pokeApi.png';
import predict from './assets/predict.png';
import matrona from './assets/matrona.jpg';
import dbs from './assets/dbs.png';


const portfolioValues = [
    [
      
      {
        src: matrona,
        link: ''
      },
      {
        src: changoonga,
        link: 'https://play.google.com/store/apps/details?id=com.changoonga.changoonga'
},
{
  src: predict
},
      {
        src:
         geoaplication
      },
      
      {
        src:
          indicio,
          link: 'https://play.google.com/store/apps/details?id=com.gruporvi2.indiciomich'
      },
      {
        src: pokeApi
      },
      {
        src: dbs,
        link: 'https://digitalboostsolutions.com/'
      },
        {
        src:
         formLogin
      }
    ],
    [
      {
        src: "https://via.placeholder.com/720x500"
      },
      {
        src: "https://via.placeholder.com/720x500"
      },
      {
        src: "https://via.placeholder.com/720x500"
      }
    ],
    [
      ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => ({
        src: "https://via.placeholder.com/720x500"
      }))
    ],
    [
      ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => ({
        src: "https://via.placeholder.com/1280x720"
      }))
    ],
    [
      ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => ({
        src: "https://via.placeholder.com/320x820"
      }))
    ],
    [
      ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => ({
        src: "https://via.placeholder.com/820x320"
      }))
    ]
  ];
  
  export default portfolioValues;