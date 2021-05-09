import {
  AccordionSummary,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Accordion,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import React from 'react';
import { UmaEventWithChoice } from '../../types';
import { Hero } from '../common/Hero';
import { EventDetail } from '../EventDetail';

type Props = {
  uuid: number;
  umaName: string;
  secondName: string;
  umaImage: string;
  rareDegree: string;
  event: UmaEventWithChoice[];
  toggleUmaPage: () => void;
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

const UmaDetailComponent: React.FC<Props> = (props: Props) => {
  const {
    uuid,
    event,
    umaImage,
    umaName,
    secondName,
    rareDegree,
    toggleUmaPage,
  } = props;
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={'UmaDetail'}>
      <Hero
        heroType={'uma'}
        uuid={uuid}
        name={umaName}
        secondName={secondName}
        image={umaImage}
        rareDegree={rareDegree}
        action={toggleUmaPage}
      />
      <div className={'EventListWrapper'}>
        <div className={'EventList'}>
          {event.map((x, i) => {
            const { title, titleKr, choices } = x;
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
                    {title === titleKr ? title : `${title}(${titleKr})`}
                  </Typography>
                </AccordionSummary>
                <EventDetail title={title} choice={choices} />
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UmaDetailComponent;
