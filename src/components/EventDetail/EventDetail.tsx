import {
  AccordionDetails,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import { CardEventChoice, UmaEventChoice } from '../../types';
import './EventDetail.scss';
import Effect from './Effect/Effect';

type Props = {
  title: string;
  choice: CardEventChoice[] | UmaEventChoice[];
};

const EventDetail: React.FC<Props> = (props: Props) => {
  if (props.title == null) return <></>;
  if (props.choice == null) return <></>;

  return (
    <AccordionDetails>
      {props.choice.map((x, i) => {
        return (
          <Card key={i}>
            <CardContent>
              <Typography variant="h5" component="h6" className={'EventTitle'}>
                {x.title}
              </Typography>
              <div
                className={'EventEffect'}
                style={{
                  whiteSpace: 'pre-line',
                }}
              >
                <Effect effect={x.effect} />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </AccordionDetails>
  );
};

export default EventDetail;
