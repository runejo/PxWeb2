interface Resources {
  "translation": {
    "app_title": "Welcome to PxWeb",
    "main": {
      "header": "Welcome to the app!",
      "welcome_trans_test": "Welcome to the <1>app</1> for PxWeb 2.0!"
    },
    "date": {
      "simple_date": "{{value, datetime}}",
      "simple_date_with_time": "{{value, datetime(year: 'numeric'; month: 'numeric'; day: 'numeric'; hour: 'numeric'; minute: 'numeric')}}"
    },
    "number": {
      "simple_number": "{{value, pxNumber}}",
      "simple_number_with_zero_decimal": "{{value, pxNumber(minimumFractionDigits: 0; maximumFractionDigits: 0;)}}",
      "simple_number_with_one_decimal": "{{value, pxNumber(minimumFractionDigits: 1; maximumFractionDigits: 1;)}}",
      "simple_number_with_two_decimals": "{{value, pxNumber(minimumFractionDigits: 2; maximumFractionDigits: 2;)}}",
      "simple_number_with_three_decimals": "{{value, pxNumber(minimumFractionDigits: 3; maximumFractionDigits: 3;)}}",
      "simple_number_with_four_decimals": "{{value, pxNumber(minimumFractionDigits: 4; maximumFractionDigits: 4;)}}",
      "simple_number_with_five_decimals": "{{value, pxNumber(minimumFractionDigits: 5; maximumFractionDigits: 5;)}}",
      "simple_number_with_default_formatter": "{{value, number(minimumFractionDigits: 5; maximumFractionDigits: 5; roundingMode: 'halfExpand')}}"
    }
  }
}

export default Resources;
