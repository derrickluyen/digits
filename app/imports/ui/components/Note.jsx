import React from 'react';
import { FeedEvent, FeedContent, FeedDate, FeedSummary } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Note extends React.Component {
  render() {
    return (
        <FeedEvent>
          <FeedContent>
            <FeedDate content={this.props.note.createdAt.toLocaleDateString('en-US')} />
            <FeedSummary>
              {this.props.note.note}
            </FeedSummary>
          </FeedContent>
        </FeedEvent>
    );
  }
}

/** Require a document to be passed to this component. */
Note.propTypes = {
  note: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Note);
