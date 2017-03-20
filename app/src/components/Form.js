import FormInput from './FormInput';
import Rating from './Rating';
import React, {Component} from 'react';

import type {FormInputField, FormInputFieldValue} from './FormInput';

import styles from './Form.css';

class Form extends Component {
  
  getData() {
    let data = {};
    this.props.fields.forEach((field: FormInputField) => 
      data[field.id] = this.refs[field.id].getValue()
    );
    return data;
  }
  
  render() {
    return (
      <form className={styles.Form}>{this.props.fields.map((field) => {
        const prefilled = (this.props.initialData && this.props.initialData[field.id]) || '';
        if (!this.props.readonly) {
          return (
            <div className={styles.FormRow} key={field.id}>
              <label className={styles.FormLabel} htmlFor={field.id}>{field.label}:</label>
              <FormInput {...field} ref={field.id} defaultValue={prefilled} />
            </div>
          );
        }
        if (!prefilled) {
          return null;
        }
        return (
          <div className={styles.FormRow} key={field.id}>
            <span className={styles.FormLabel}>{field.label}:</span>
            {
              field.type === 'rating'
                ? <Rating readonly={true} defaultValue={parseInt(prefilled, 10)} />
                : <div>{prefilled}</div>
            }
          </div>
        );
      }, this)}</form>
    );
  }
}

export default Form
