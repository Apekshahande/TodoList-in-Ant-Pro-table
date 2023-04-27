import { Select } from 'antd';


const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log('search:', value);
};

const Status = () => (
  <Select
    showSearch
    style={{ width: 160 }}
    defaultValue={{value:'open', label:"Open"}}
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'open',
        label: 'Open',
      },
      {
        value: 'working',
        label: 'Working',
      },
      {
        value: 'done',
        label: 'Done',
      },
      {
        value: 'overdue',
        label: 'Overdue',
      },
    ]}
  />
);

export default Status;