import React from 'react';
import { Card, CardHeader, CardContent, Image, CardMeta, CardDescription } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

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
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Contact);
