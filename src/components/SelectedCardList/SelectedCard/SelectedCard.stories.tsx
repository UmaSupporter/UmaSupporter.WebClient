import { Story, Meta } from '@storybook/react';
import { baseUri, UriContext } from '../../../common';

import SelectedCard, { Props } from './SelectedCard';

export default {
  title: 'Components/SelectedCard',
  component: SelectedCard,
} as Meta;

const Template: Story<Props> = (args) => (
  <UriContext.Provider value={baseUri}>
    <SelectedCard {...args} />
  </UriContext.Provider>
);

export const Default = Template.bind({});
Default.args = {
  uuid: 1,
  cardName: 'ビワハヤヒデ',
  secondName: '検証、開始',
  cardType: '根性',
  cardImage: 'd227894c4edc11c664d25dcbfbebbb6b.jpg',
  rareDegree: 'SR',
};
