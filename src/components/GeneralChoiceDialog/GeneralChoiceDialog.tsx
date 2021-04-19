import {
  Accordion,
  AccordionSummary,
  createStyles,
  Dialog,
  DialogTitle,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import React from 'react';
import EventDetail from '../EventDetail';
import generalEvent from '../../common/general.json';
import "./GeneralChoiceDialog.scss"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialog: {

      // backgroundColor: 'transparent',
    },
    // paperProps: {
    //   backgroundColor: 'white',
    // },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
);

type Props = {
  open: boolean;
  onClose: () => void;
};

const GeneralChoiceDialog: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    // className={classes.dialog}
    // PaperProps={{
    //   style: {
    //     backgroundColor: 'white'
    //   }
    // }}
    >
      <DialogTitle id="simple-dialog-title">공용 이벤트 리스트</DialogTitle>
      {generalEvent.map((x, i) => {
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
              <Typography className={classes.heading}>{x.title}</Typography>
            </AccordionSummary>
            <EventDetail title={x.title} choice={x.choices} />
          </Accordion>
        );
      })}
    </Dialog>
  );
};

export default GeneralChoiceDialog;
