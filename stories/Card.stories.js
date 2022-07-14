import Card from '../components/Card';

export default {
  title: 'Card',
  component: Card,
};

export const Default = () => (
  <Card
    image='/assets/sample.jpg'
    title='Card Default'
    desc='This is an example for default variant of card component'
  />
);
