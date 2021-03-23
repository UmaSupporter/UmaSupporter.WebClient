import { AccordionDetails, Card, CardContent, Typography } from "@material-ui/core"
type EventChoice = {
  title: string
  effect: string
}

type Props = {
  title: string | null | undefined
  choice: EventChoice[] | undefined | null
}

const EventDetail: React.FC<Props> = (props: Props) => {

  if (props.title == null) return <></>
  if (props.choice == null) return <></>

  return <AccordionDetails>
    {
      props.choice.map((x, i) => {
        return <Card>
          <CardContent>
          <Typography variant="h5" component="h2">
            {x.title}
          </Typography>
          <Typography variant="body2" component="p">
            {x.effect}
          </Typography>
          </CardContent>
        </Card>
      })
    }
  </AccordionDetails>
}

export default EventDetail
