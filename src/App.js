import PropTypes from 'prop-types';


function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://w.namu.la/s/a85e178b2233fa1e3461ae51dba6757e8cc87b215ea326660c85904f61daf0dcd84f8b8733cee71ca34fa743822d5aa1650766f6b2a90118edc5e76974e83052778c785d1cb07e42eb3eb2679eb20ef14cb24aaee4cdbb4638ab45c2556eb1a8be4a8a4802663ff3784f2d5e67f10df8',
    rating: 5
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'http://www.mindgil.com/news/photo/202103/70839_7148_1250.jpg',
    rating: 4.4
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.bonif.co.kr%2Fcmdt%2FBF102_pic_qq9QTYBZ.jpg&f=1&nofb=1',
    rating: 4.8
  },
  {
    id: 4,
    name: 'Bibimbap2',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.bonif.co.kr%2Fcmdt%2FBF102_pic_qq9QTYBZ.jpg&f=1&nofb=1',
    rating: 4.5
  }
];

function App() {
  return (
  <div>
    {foodILike.map(dish => 
      (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;
