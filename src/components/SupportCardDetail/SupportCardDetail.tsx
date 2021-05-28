import {
  Accordion,
  AccordionSummary,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import React, { useReducer } from 'react';
import { CardEventWithChoice } from '../../types';
import { Hero } from '../common/Hero';
import { EventDetail } from '../EventDetail';
import './SupportCardDetail.scss';

type Props = {
  uuid: number;
  supportCardName: string;
  supportCardSecondName: string;
  rareDegree: string;
  cardImage: string;
  event: CardEventWithChoice[];
  toggleCardPage: () => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
);

type SupportCardDetailViewAction = {
  payload: SupportCardDetailView;
};

enum SupportCardDetailView {
  EVENT,
  SKILL,
}

type SupportCardDetailState = {
  currentView: SupportCardDetailView;
};

const supportCardDetailReducer = (
  state: SupportCardDetailState,
  action: SupportCardDetailViewAction
): SupportCardDetailState => {
  return {
    currentView: action.payload,
  };
};

const resetSupportCardDetailState = (): SupportCardDetailState => {
  return {
    currentView: SupportCardDetailView.EVENT,
  };
};

const SupportCardDetail: React.FC<Props> = (props: Props) => {
  const [state, dispatch] = useReducer(
    supportCardDetailReducer,
    {},
    resetSupportCardDetailState
  );
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const {
    uuid,
    supportCardName,
    supportCardSecondName,
    event,
    cardImage,
    rareDegree,
  } = props;

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={'SupportCardDetail'}>
      <Hero
        heroType={'card'}
        uuid={uuid}
        name={supportCardName}
        secondName={supportCardSecondName}
        image={cardImage}
        rareDegree={rareDegree}
        action={props.toggleCardPage}
      />
      <div className={'EventListWrapper'}>
        <div className={'EventList'}>
          {event.map((x, i) => {
            return (
              <Accordion
                key={i}
                expanded={expanded === `panel${i}`}
                onChange={handleChange(`panel${i}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    {x.title === x.titleKr
                      ? x.title
                      : `${x.title}(${x.titleKr})`}
                  </Typography>
                </AccordionSummary>
                <EventDetail title={x.title} choice={x.choices} />
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SupportCardDetail;
