
import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Modal, Form, Input, Select } from 'antd';
import './StrategyForm.css';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

const GET_EVENTS = gql`
 query events{
  events {
    name
  }
}
`;

const StrategyForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new startegy"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="Strategy Name">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'name is required!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="Description">
              {getFieldDecorator('description', {
                rules: [{ required: true, message: 'description is required!' }],
              })(<Input type="textarea" />)}
            </FormItem>
            <FormItem label="Code">
              {getFieldDecorator('code', {
                rules: [{ required: true, message: 'code is required!' }],
              })(
                <TextArea rows={4} />
              )}
            </FormItem>
            <Query query={GET_EVENTS}>
              {({ loading, error, data, refetch }) => {
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;
                return (



                  <FormItem label="Events" className="collection-create-form_last-form-item">
                    {getFieldDecorator('events', {
                      rules: [{ required: true, message: 'events is required!' }],
                    })(

                      <Select
                        mode="multiple"
                        placeholder="Please select events"
                        tokenSeparators={[',']}
                      >
                        {data.events.map(x => <Option key={x.name} value={x.name}>{x.name}</Option>)}
                      </Select>
                    )}

                  </FormItem>
                )
              }}
            </Query >
          </Form>
        </Modal>
      );
    }
  }
);

export default (StrategyForm);