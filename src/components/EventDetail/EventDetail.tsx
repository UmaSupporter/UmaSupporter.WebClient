import { AccordionDetails, Card, CardContent, Typography } from "@material-ui/core"
import { CardEventChoice, UmaEventChoice } from "../../types"
import "./EventDetail.scss";

type Props = {
  title: string
  choice: CardEventChoice[] | UmaEventChoice[]
}

const EventDetail: React.FC<Props> = (props: Props) => {

  if (props.title == null) return <></>
  if (props.choice == null) return <></>

  return <AccordionDetails>
    {
      props.choice.map((x, i) => {
        return <Card key={i}>
          <CardContent>
          <Typography variant="h5" component="h5">
            {x.title}
          </Typography>
            <p style={{
              whiteSpace:'pre-line'}}>
              {x.effect}
            </p>
          </CardContent>
        </Card>
      })
    }
  </AccordionDetails>
}

export default EventDetail
