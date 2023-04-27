// import 'antd/dist/antd.css';

import { Table,Input, Button,Modal, Form, message,Tag} from 'antd';
import { useEffect, useState } from 'react';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import Tags from './components/Tags';
import Status from './components/Status';
function App() {
  const onChange = (e) => {
    console.log('Change:', e.target.value);
  };
  const [searchedText, setSearchedText] = useState("")
  
  const [dataSource, setDataSource] = useState([
    // {
    //   id:1,
    //   timestamp:'Name 1',
    //   title:10,
    //   description:"address1",
    //   duedate:"kjeij",
    //   tag:"bcd",
    //   status:"yello",  
    //   key:'1',
     
    // },
    // {
    //   id:2,
    //   timestamp:'Name 2',
    //   title:20,
    //   description:"address2",
    //   duedate:"kjeij",
    //   tag:"Adb",
    //   status:"yello22",  
    //   key:'2',
    // },
    // {
    //   id:3,
    //   timestamp:'Name 3',
    //   title:30,
    //   description:"addresjjkakjkjkajkjakjkjkeojokjs3 loremlkjkajkjejejajkdjkjakjkdjkajkjodk kjojieojoejio iejioj eeoi ijoe e joeoe oejop oeop eoejoejoe opjeorjoejoepjoe eojoeojeojeoowjoepjoejoewjpwoeojeowo oweopwjoejowe owejowj ejwoe owejojwe ojeojwo eojlakkdjlka;kjjie jkldjeo",
    //   duedate:"kjeij",
    //   tag:"abr",
    //   status:"yello33", 
    //   key:'3',
    // },
    // {
    //   id:4,
    //   timestamp:'Name 1',
    //   title:10,
    //   description:"address1",
    //   duedate:"kjeij",
    //   tag:"bcd",
    //   status:"yello",
    //   key:'4',  
    // },
    // {
    //   id:5,
    //   timestamp:'Name 2',
    //   title:20,
    //   description:"address2",
    //   duedate:"kjeij",
    //   tag:"Adb",
    //   status:"yello22",
    //   key:'5',
    // },
    
    
  ])

  const [editingRow, setEditingRow] = useState(null)
  
  const [form] =Form.useForm();
  useEffect(()=>{
    const data = []
    for(let index = 0; index < 7 ; index++){
      const randomNumber = parseInt(Math.random()*100);
      data.push({
        
        id:`${index}`,
        // put the condition for editing specific id data.
        timestamp:`bjjhjhj`,
        title:`${index*10}`,
        description:`hghg`,
        duedate:`DueDAte ${index}`,
        tag:
        <Tags />
      //   <space direction="horizontal">
      //   {existingTag.map((tag)=>{
      //     return <Tag closable>{tag}</Tag>
      //   })}
      // </space>
      ,
        status:<Status  />,  
        key:`${index}`,
      })
    }
    setDataSource(data)
  }, [


  ])
  
  const columns = [
    {
      title:"ID",
      dataIndex:'id',
      key:"keys",
      
      
    },
    {
      title:"Timestamp",
      dataIndex:'timestamp',
      key:"1",
      // render:(text,record)=>{
      //   if(editingRow === record.id){
      //     return( 
      //       // <Form.Item
      //       // name="timestamp"
      //       // >
            
      //       // </Form.Item>
      //     )

      //   }else{
      //     return<p>{text}</p>
      //   }
      // },
      filteredValue:[searchedText],
      onFilter:(value, record)=>{
        return String(record.timestamp)
        .toLowerCase()
        .includes(value.toLowerCase()) ||
        String(record.title)
        .toLowerCase()
        .includes(value.toLowerCase()) ||
        String(record.description)
        .toLowerCase()
        .includes(value.toLowerCase()) ||
        String(record.duedate)
        .toLowerCase()
        .includes(value.toLowerCase()) ||
        String(record.tag)
        .toLowerCase()
        .includes(value.toLowerCase()) ||
        String(record.status)
        .toLowerCase()
        .includes(value.toLowerCase())
        

      }
    },
    {
      title:"Title",
      dataIndex:'title',
      key:"2",
     
      render:(text,record)=>{
        if(editingRow === record.id){
          return( 
            <Form.Item
            name="title"
            rules={[{
              required:true,
              message: 'please enter your title.'
            }]}
            >
              <Input  showCount maxLength={100}  />
            </Form.Item>
          )

        }else{
          return<p>{text}</p>
        }
      }
      
      
    },
    {
      title:"Description",
      dataIndex:'description',
      key:"3",
      render:(text,record)=>{
        if(editingRow === record.id){
          return( 
            <Form.Item
            name="description"
            rules={[{
              required:true,
              message: 'please enter your description.'
            }]}
            >
              <Input showCount maxLength={1000} />
            </Form.Item>
          )

        }else{
          return<p>{text}</p>
        }
      }
    },
    {
      title:"DueDate",
      dataIndex:"duedate",
      key:"4",
      render:(text,record)=>{
        if(editingRow === record.id){
          return( 
            <Form.Item
            name="duedate"
            >
              <Input />
            </Form.Item>
          )

        }else{
          return<p>{text}</p>
        }
      }
      
      
    },
    {
      title:"Tag",
      dataIndex:"tag",
      key:"5",
      render:(text,record)=>{
        if(editingRow === record.id){
          return( 
            <Form.Item
            name="tag"
            >
              <Tags />
            </Form.Item>
          )

        }else{
          return <Tags />
        }
      },
      filterDropdown:({setSelectedKeys, selectedKeys, confirm}) =>{
        return (
        <Input 
        autoFocus
        placeholder='Type text here.'
        value={selectedKeys[0]}
        onChange={(e)=>{
            setSelectedKeys(e.target.value?[e.target.value]:[])
        }}
        onPressEnter={()=>{
          confirm()
        }}
        onBlur={()=>{
          confirm()
        }}
        ></Input>
        )
      },
      onFilter:(value, record)=>{
        return record.tag.toLowerCase().includes(value.toLowerCase())
      }
    },{
      title:"Status",
      dataIndex:"status",
      key:"key",
      render:(text,record)=>{
        if(editingRow === record.id){
          return( 
            <Form.Item
            name="status"
            >
              <Status />
            </Form.Item>
          )

        }else{
          return <Status />
        }
      },
      filterDropdown:({setSelectedKeys, selectedKeys, confirm}) =>{
        return (
        <Input 
        autoFocus
        placeholder='Type text here.'
        value={selectedKeys[0]}
        onChange={(e)=>{
            setSelectedKeys(e.target.value?[e.target.value]:[])
        }}
        onPressEnter={()=>{
          confirm()
        }}
        onBlur={()=>{
          confirm()
        }}
        ></Input>
        )
      },
      onFilter:(value, record)=>{
        return record.status.toLowerCase().includes(value.toLowerCase())
      }
    },
   
    {
      title:"Actions",
      dataIndex:'actions',
      key:"6",
      render:(_ , record)=>{
        return <>
          <EditOutlined  onClick={()=>{
            setEditingRow(record.id)
            form.setFieldValue({
              id:record.id,
              title:record.title,
              description:record.description,
              

            })
          }}/>
          <Button type='link' htmlType='submit'>Save</Button>
          <DeleteOutlined />
        </>
      }
      

      
    },


  ]

  const onAddTodoItem =()=>{
    const randomNumber = parseInt(Math.random()*100);
    const newTodo = {
        id : randomNumber,
        timestamp:"kekenien",
        title:10,
        description:"address1",
        duedate:"kjeij",
        tag:"bcd",
        status:"yello",
        // key:'1'
    }; 
    setDataSource((pre)=>{
      return [...pre, newTodo];
    });
  };

  const onFinish =(val)=>{
    const updatedDataSource = [...dataSource]
    updatedDataSource.splice(editingRow , 1 ,{...val, keys:editingRow})
    setDataSource(updatedDataSource)
    setEditingRow(null)
  }

  const existingTag = ["HTML","CSS", "React Js","Python","SQL","MySQL","C++","C"]
  
  return (
    <div className="App">
      <header className="App-header">
      <div>
          <Input.Search placeholder = "Search here" 
          style={{marginBottom:25}}
          onSearch={(value)=>{
            setSearchedText(value)
          }}
          onChange={(e)=>
          {
            setSearchedText(e.target.value)
          }}

          />
        
        <div>
          {/* <Input />
          <Input />
          <Input />
          <Input /> */}
          <Button onClick={()=>{
            onAddTodoItem()
          }}>Add a new Todo Item.</Button>
        </div>
      </div>
        <Form form={form} onFinish={onFinish}>
          <Table 
          // dataSource={data}
          dataSource={dataSource}
        
          columns={columns}>

          </Table>
        </Form>
        
        {/* <Modal
        
        >
        <Input />
        <Input 
          
        />
        <Input 
        />
        <Input />
        <Input />

        </Modal> */}
      </header>
    </div>
  );
}

export default App;
