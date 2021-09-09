import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Porps {
	activity: Activity;
	cancelSelectedActivity: () => void;
	openForm: (id: string) => void;
}

export default function ActivityDetails({activity, cancelSelectedActivity, openForm}: Porps) {
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>
				{activity.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group>
			  <Button onClick={() => openForm(activity.id)} basic color='blue' content='Edit' />
			  <Button basic color='grey' content='Cancel' onClick={cancelSelectedActivity}/>
		  </Button.Group>
      </Card.Content>
    </Card>
  );
}
