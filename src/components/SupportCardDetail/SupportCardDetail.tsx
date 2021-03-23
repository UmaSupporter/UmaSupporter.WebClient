import { Accordion, AccordionSummary, Avatar, createStyles, makeStyles, Theme, Typography } from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"
import React from "react"
import { GetSupportCardOnIdWithEventQuery } from "../../generated/graphql"
import EventDetail from "../EventDetail"

type Props = {
  cards: GetSupportCardOnIdWithEventQuery
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
  if (props.cards.supportCardId == null) return <></>
  const supportCard = props.cards.supportCardId
  const cardEvents = supportCard.cardEvent?.edges.map(x => x?.node)

  return <div>
    <Avatar alt={props.cards.supportCardId.cardName!} src={`http://localhost:5000/images/${props.cards.supportCardId.cardImage}`} />
    {
      cardEvents?.map((x, i) => {
        return <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{x?.title}</Typography>
          </AccordionSummary>
          <EventDetail
            title={x?.title}
            choice={
              x?.cardEventChoice?.edges
                .filter(x => x?.node != null)
                .map(x => { return { title: x!.node!.title!, effect: x!.node!.effect! } })
            } />

        </Accordion>
      })
    }
  </div>
}

export default SupportCardDetail
