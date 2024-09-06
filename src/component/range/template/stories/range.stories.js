import { rangeArgs, rangeArgTypes, rangeProps } from './range-arg-types';
import { renderRange } from './range';

const render = (args) => renderRange({ range: rangeProps(args) });

export default {
  id: 'range',
  title: 'DSFR/Component/Range',
  render: render,
  argTypes: rangeArgTypes,
  args: rangeArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};
