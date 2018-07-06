import { h } from '@bolt/core';
import React, { Component } from 'react';
import { render } from 'react-dom';
// import 'core-js/modules/es6.string.starts-with';
import SchemaForm from './schema-form';

document.querySelectorAll('.schema-form-root').forEach(root => {
  const dataString = root.previousElementSibling.innerHTML;
  const data = JSON.parse(dataString);
  if (data.schema) {
    console.log(data);
    render(<SchemaForm {...data} />, root);
  }
});
