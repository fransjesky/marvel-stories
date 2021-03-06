import Card from '../components/Card';

export default {
  title: 'Card',
  component: Card,
};

export const Default = () => (
  <Card
    image='/images/sample.jpeg'
    title='Avengers: Infinity Saga'
    copyright='© 2022 MARVEL'
  />
);
