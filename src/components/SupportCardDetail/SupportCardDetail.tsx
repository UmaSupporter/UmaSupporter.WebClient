import { Accordion, AccordionSummary, createStyles, makeStyles, Theme, Typography } from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"
import React from "react"
import { CardEventWithChoice } from "../../types"
import Hero from "../common/Hero"
import EventDetail from "../EventDetail"
import "./SupportCardDetail.scss"


type Props = {
  supportCardName: string,
  supportCardSecondName : string,
  rareDegree: string,
  cardImage: string,
  event: CardEventWithChoice[]
  toggleCardPage:()=>void
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
  const { supportCardName, supportCardSecondName,event, cardImage, rareDegree } = props;

  return <div className={"SupportCardDetail"}>
    <Hero 
    name={supportCardName}
    secondName={supportCardSecondName}
    image={cardImage}
    rareDegree={rareDegree}
    action={props.toggleCardPage}/>
    {/* <Avatar alt={supportCardName} src={`${uri}/images/${cardImage}`} /> */}
    <div className={"EventListWrapper"}>
      <div className={"EventList"}>
        
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
    </div>
  </div>
}

export default SupportCardDetail
