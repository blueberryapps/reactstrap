/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import CollapseExample from '../examples/Collapse';
import UncontrolledCollapseExample from '../examples/CollapseUncontrolled';

import CollapseEventsExample from '../examples/CollapseEvents';

const CollapseExampleSource = require('!!raw!../examples/Collapse');
const CollapseEventsExampleSource = require('!!raw!../examples/CollapseEvents');

const UncontrolledCollapseExampleSource = require('!!raw!../examples/CollapseUncontrolled');

export default class CollapsePage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Collapse" />
        <div className="docs-example">
          <CollapseExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">{CollapseExampleSource}</PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
            {`Collapse.propTypes = {
  ...Transition.propTypes,
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.node,
  navbar: PropTypes.bool,
  cssModule: PropTypes.object,
};`}
          </PrismCode>
        </pre>

        <SectionTitle>Events</SectionTitle>
        <p>
          Use the <code>onEnter</code>, onEntering, onEntered, onExiting and onExited props for
          callbacks when the Collapse has finished opening (entering) or closing (exiting).
        </p>
        <div className="docs-example">
          <CollapseEventsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">{CollapseEventsExampleSource}</PrismCode>
        </pre>
        <SectionTitle>Uncontrolled Collapse</SectionTitle>
        <p>
          For the most basic use-case, an uncontrolled component can provide the functionality
          wanted without the need to manage/control the state of the component.{' '}
          <code>UncontrolledCollapse</code> does not require an <code>isOpen</code> prop. Instead
          pass a <code>toggler</code> prop. The <code>toggler</code> prop is a string which will run
          querySelectorAll to find dom elements which will trigger toggle.
        </p>
        <div className="docs-example">
          <UncontrolledCollapseExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">{UncontrolledCollapseExampleSource}</PrismCode>
        </pre>
      </div>
    );
  }
}
