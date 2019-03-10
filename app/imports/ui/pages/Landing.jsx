import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='middle background'>
          <Grid container centered stackable columns="3">

            <Grid.Column textAlign='center'>
              <Icon name='users' inverted size="huge"></Icon>
              <Header as='h1' inverted>Multiple Users</Header>
              <Header as='h3' inverted>This address book enables any number of users to register and save their business
                contacts. You can only see the contacts that you have created.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon name='file alternate' inverted size="huge"></Icon>
              <Header as='h1' inverted>Contact Details</Header>
              <Header as='h3' inverted>For each contact, you can save their name, address, and phone number.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon name='calendar check outline' inverted size="huge"></Icon>
              <Header as='h1' inverted>Time-stamped Notes</Header>
              <Header as='h3' inverted>Each time you make contact with a contact, you can write a note that summarizes the
                conversation. This note is saved along with a timestamp with the contact.</Header>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default Landing;
