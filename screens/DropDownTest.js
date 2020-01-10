import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';

class DropDownTest extends Component {
    render() {
        let data = [{
            value: 'Live Photos',
        }, {
            value: 'Promo Shoot',
        }, {
            value: 'Production',
        }];

        return {
            < Dropdown
        label = 'Service Type'
        data = { data }
            />
        };
    }
}

export default DropDownTest;