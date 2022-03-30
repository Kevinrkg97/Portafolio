import geoaplication from './assets/geoaplication.png';
import changoonga from './assets/changoonga.png';
import formLogin from './assets/formLogin.png';
import indicio from './assets/indicio.png';
import pokeApi from './assets/pokeApi.png';


const portfolioValues = [
    [
      {
        src: changoonga
      },
      {
        src:
         geoaplication
      },
      {
        src:
          indicio
      },
      {
        src: pokeApi
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