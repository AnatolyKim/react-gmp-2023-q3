import Dialog from '../components/dialog';

export default {
  title: 'App/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
};

export const Default = {
  args: {
    title: 'My Dialog',
    children: <div style={{color: 'white'}}>Some meaningful content</div>,
    onClose: () => console.log('Closed'),
  },
};
