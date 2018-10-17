import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import StrategyForm from "./StrategyForm";
import withActions from "../../shared/hoc/WithActions";
import withUser from "../../shared/hoc/WithUser";

const ADD_STRATEGY = gql`
  mutation addStrategy($params: StrategyInput) {
    strategies: addStrategy(params: $params) {
      _id
      name
      description
      postedBy
      createdTime
      code
      events
    }
  }
`;

class AddStrategy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCreate = addStrategy => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      values = { ...values, postedBy: this.props.user.userId };
      addStrategy({ variables: { params: values } });
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  componentWillUnmount() {
    let { setActions } = this.props;
    setActions([]);
  }
  componentDidMount() {
    let { setActions } = this.props;
    setActions([{ name: "new strategy", onClick: this.showModal }]);
  }

  render() {
    return (
      <Mutation mutation={ADD_STRATEGY}>
        {(addStrategy, { loading, error, data }) => (
          <div>
            <StrategyForm
              wrappedComponentRef={ref => (this.formRef = ref)}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onCreate={e => this.handleCreate(addStrategy)}
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error : Please try again</p>}
          </div>
        )}
      </Mutation>
    );
  }
}

export default withUser(withActions(AddStrategy));
