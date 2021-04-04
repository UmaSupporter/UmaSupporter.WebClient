import { Accordion, AccordionSummary, Avatar, createStyles, makeStyles, Theme, Typography } from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"
import React, { useContext } from "react"
import { UriContext } from "../../common"
import { CardEventWithChoice } from "../../types"
import EventDetail from "../EventDetail"
import "./SupportCardDetail.scss"


type Props = {
  supportCardTitle: string,
  cardImage: string,
  event: CardEventWithChoice[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);

const SupportCardDetail: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const { supportCardTitle, event, cardImage } = props;
  const uri = useContext(UriContext);

  return <div className={"SupportCardDetail"}>
    <Avatar alt={supportCardTitle} src={`${uri}/images/${cardImage}`} />
    {
      event.map((x, i) => {
        return <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{x.title}</Typography>
          </AccordionSummary>
          <EventDetail
            title={x.title}
            choice={x.choices} />
        </Accordion>
      })
    }
  </div>
}

export default SupportCardDetail
