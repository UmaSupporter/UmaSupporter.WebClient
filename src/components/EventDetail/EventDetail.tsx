import { AccordionDetails, Card, CardContent, Typography } from "@material-ui/core"
import { CardEventChoice } from "../../types"
import "./EventDetail.scss";

type Props = {
  title: string
  choice: CardEventChoice[]
}

const EventDetail: React.FC<Props> = (props: Props) => {

  if (props.title == null) return <></>
  if (props.choice == null) return <></>

  return <AccordionDetails>
    {
      props.choice.map((x, i) => {
        return <Card key={i}>
          <CardContent>
          <Typography variant="h5" component="h2">
            {x.title}
          </Typography>
          <Typography variant="body2" component="p">
            <p style={{
              whiteSpace:'pre-line'}}>
              {x.effect}
            </p>
          </Typography>
          </CardContent>
        </Card>
      })
    }
  </AccordionDetails>
}

export default EventDetail
