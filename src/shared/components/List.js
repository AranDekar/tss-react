import PropTypes from 'prop-types';

const List = ({ url }) => {

}
List.prototype.fetch = async () => {
    await fetch(this.props.url);
}

List.PropTypes = {
    url: PropTypes.string.isRequired,
}