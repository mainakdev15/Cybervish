import React from 'react'
import {AiFillHome, AiOutlineForm, AiFillEdit, AiOutlineAlignLeft, AiFillTool} from 'react-icons/ai'


export const EditorData = () => (
  <div>
    <h3>
     This is a standard editor for editing your texts and styling them.
     <br/>
     Start writing and enjoy!
    </h3>
  </div>
);

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];


export const links = [
    {
      title: 'HOME',
      links: [
        {
          name: 'Dashboard',
          icon: <AiFillHome />,
        },
      ],
    },
  
    {
      title: 'PRODUCTS',
      links: [
        {
          name: 'Editor',
          icon: <AiOutlineForm />,
        },
        {
          name: 'Article',
          icon: <AiFillEdit />,
        },
        {
          name: 'Paragraph Generator',
          icon: <AiOutlineAlignLeft />,
        },
        {
            name: 'Custom Tool',
            icon: <AiFillTool />,
          },
          {
            name: 'ChatBox',
            icon: <AiFillTool />,
          },
      ],
    },
  ];