import PropTypes from 'prop-types';

const PartTree = ({ text }) => <div>part-tree {text}</div>;

PartTree.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PartTree;
