import { renderAlert } from './alert';
import { alertArgs, alertArgTypes, alertProps } from './alert-arg-types';

const render = (args) => renderAlert({ alert: alertProps(args) });

const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'alert',
  title: 'DSFR/Component/Alert',
  render: render,
  argTypes: alertArgTypes,
  args: alertArgs
};

export const AlertStory = {
  args: {}
};

export const SizeSmStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      size: 'sm',
      type: 'success',
      title: undefined,
      text: 'Succès : Description détaillée du message...'
    },
    {
      size: 'sm',
      type: 'error',
      title: undefined,
      text: 'Erreur : Description détaillée du message...'
    },
    {
      size: 'sm',
      type: 'info',
      title: undefined,
      text: 'Information : Description détaillée du message...'
    },
    {
      size: 'sm',
      type: 'warning',
      title: undefined,
      text: 'Attention : Description détaillée du message...'
    }
  ])
};

export const MdStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      type: 'success',
      title: 'Succès : Lorem ipsum dolor sit amet'
    },
    {
      type: 'error',
      title: 'Erreur : Lorem ipsum dolor sit amet'
    },
    {
      type: 'info',
      title: 'Information : Lorem ipsum dolor sit amet'
    },
    {
      type: 'warning',
      title: 'Attention : Lorem ipsum dolor sit amet'
    }
  ])
};

export const DismissibleStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      type: 'info',
      title: 'Information : titre du message',
      text: 'Cliquer sur la croix pour fermer l\'alerte',
      dismissible: true
    }
  ])
};

export const DismissibleNoJsStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      type: 'info',
      title: 'Information : titre du message',
      text: 'Cliquer sur la croix pour fermer l\'alerte',
      dismissible: true,
      buttonCloseOnClick: null
    }
  ])
};

export const IconCustomStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      type: 'default',
      icon: 'lock-fill'
    }
  ])
};
