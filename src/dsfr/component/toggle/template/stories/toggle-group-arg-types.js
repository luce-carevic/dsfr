import { toggleArgTypes, toggleArgs } from './toggle-arg-types';
import { formArgTypes, formArgs } from '../../../form/template/stories/form-arg-types';
import { uniqueId } from '../../../../core/template/stories/unique-id';

const toggleGroupArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut id du fieldset',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'attributes' }
  },
  legend: {
    ...formArgTypes.legend,
    description: 'Légende de l’ensemble des interrupteurs'
  },
  left: {
    ...toggleArgTypes.left
  },
  border: {
    ...toggleArgTypes.border
  },
  state: {
    ...toggleArgTypes.state
  },
  status: {
    ...toggleArgTypes.status
  },
  errorMessage: {
    ...toggleArgTypes.errorMessage
  },
  validMessage: {
    ...toggleArgTypes.validMessage
  }
};

const toggleGroupArgs = {
  legend: 'Légende pour l\'ensemble des éléments',
  left: false,
  border: false,
  state: false,
  status: 'default',
  errorMessage: 'Texte d’erreur',
  validMessage: 'Texte de succès',
  elements: [
    {
      id: uniqueId('storybook-toggle-group-input'),
      label: `${toggleArgs.label} 1`,
      checked: true,
      disabled: false,
      hint: undefined
    },
    {
      id: uniqueId('storybook-toggle-group-input'),
      label: `${toggleArgs.label} 2`,
      checked: false,
      disabled: false,
      hint: undefined
    },
    {
      id: uniqueId('storybook-toggle-group-input'),
      label: `${toggleArgs.label} 3`,
      checked: false,
      disabled: false,
      hint: undefined
    }
  ],
  id: 'toggle-group-id'
};

const toggleGroupProps = (args) => {
  const toggles = [{
    type: 'toggle',
    data: {
      toggles: args.elements || toggleGroupArgs.elements
    }
  }];

  const toggleGroup = {
    id: args.id || undefined,
    legend: args.legend || toggleGroupArgs.legend,
    status: args.status || toggleGroupArgs.status,
    error: args.status === 'error' ? args.errorMessage || formArgs.errorMessage : undefined,
    valid: args.status === 'valid' ? args.validMessage || formArgs.validMessage : undefined,
    elements: toggles
  };

  if (toggles[0].data.length) {
    toggles[0].data.forEach(toggle => {
      toggle.left = args.left;
      toggle.border = args.border;
      toggle.state = args.state;
    });
  }

  return toggleGroup;
};

export { toggleGroupArgTypes, toggleGroupArgs, toggleGroupProps };
