import React from 'react';
import { Card, CardHeader, CardContent, Image, CardMeta, CardDescription, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Note from '/imports/ui/components/Note';
import AddNote from '/imports/ui/components/AddNote';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Contact extends React.Component {
  render() {
    return (
        <Card centered>
          <CardContent>
            <Image floated='right' size='mini' src={this.props.contact.image}></Image>
            <CardHeader>{this.props.contact.firstName} {this.props.contact.lastName}</CardHeader>
            <CardMeta>{this.props.contact.address}</CardMeta>
            <CardDescription>{this.props.contact.description}</CardDescription>
          </CardContent>
          <CardContent extra>
            <Link to={`/edit/${this.props.contact._id}`}>Edit</Link>
          </CardContent>
          <CardContent extra>
            <Feed>
              {this.props.notes.map((note, index) => <Note key={index} note={note}/>)}
            </Feed>
          </CardContent>
          <CardContent extra>
            <AddNote owner={this.props.contact.owner} contactId={this.props.contact._id}/>
          </CardContent>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Contact);
