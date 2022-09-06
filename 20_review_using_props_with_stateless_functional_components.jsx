class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name={"Overriden Camper"}/>
      </div>
    );
  }
};
// Change code below this line

class Camper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <p><strong>{this.props.name}</strong></p>
      </>
    )
  }
}

Camper.propTypes = {
  name: PropTypes.string.isRequired
};

Camper.defaultProps = {
  name: 'CamperBot'
}